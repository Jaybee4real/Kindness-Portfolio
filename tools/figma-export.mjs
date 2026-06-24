// Self-serve Figma asset exporter.
// Talks directly to the cursor-talk-to-figma WebSocket relay (127.0.0.1:3055),
// joins the active channel, requests node exports, and writes the returned
// base64 bytes straight to disk. No Figma REST token required.
//
// Usage:
//   node tools/figma-export.mjs <channel> <jobsFile.json>
// jobsFile = [{ "id": "3649:112045", "out": "public/images/shared/logo.png",
//               "format": "PNG", "scale": 4 }, ...]

import { writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { randomUUID } from 'node:crypto';

const [, , channel, jobsFile] = process.argv;
if (!channel || !jobsFile) {
  console.error('Usage: node tools/figma-export.mjs <channel> <jobsFile.json>');
  process.exit(1);
}

const PORT = 3055;
const jobs = JSON.parse(await (await import('node:fs/promises')).readFile(jobsFile, 'utf8'));

const ws = new WebSocket(`ws://localhost:${PORT}`);
const pending = new Map();
let joined = false;

function send(obj) {
  ws.send(JSON.stringify(obj));
}

function command(command, params) {
  const id = randomUUID();
  return new Promise((res, rej) => {
    const timeout = setTimeout(() => {
      pending.delete(id);
      rej(new Error(`timeout: ${command} ${params?.nodeId ?? ''}`));
    }, 120000);
    pending.set(id, { res, rej, timeout });
    send({
      id,
      type: command === 'join' ? 'join' : 'message',
      channel: command === 'join' ? params.channel : channel,
      message: { id, command, params: { ...params, commandId: id } },
    });
  });
}

ws.addEventListener('message', (event) => {
  let json;
  try {
    json = JSON.parse(event.data);
  } catch {
    return;
  }
  if (json.type === 'progress_update') return;
  if (json.type === 'system') {
    // join acknowledgement from the relay
    if (!joined) {
      joined = true;
      for (const [id, p] of pending) {
        clearTimeout(p.timeout);
        p.res('joined');
        pending.delete(id);
      }
    }
    return;
  }
  const msg = json.message;
  if (!msg || !msg.id || !pending.has(msg.id)) return;
  // The relay broadcasts our own request back to us (it carries `command`/`params`
  // but no `result`). Ignore those echoes; only settle on a real response.
  if (msg.command || (msg.result === undefined && !msg.error)) return;
  const p = pending.get(msg.id);
  clearTimeout(p.timeout);
  pending.delete(msg.id);
  if (msg.error) p.rej(new Error(msg.error));
  else p.res(msg.result);
});

ws.addEventListener('error', (err) => {
  console.error('WS error', err.message || err);
});

await new Promise((res, rej) => {
  ws.addEventListener('open', res, { once: true });
  ws.addEventListener('error', rej, { once: true });
});

await command('join', { channel });
console.log(`joined channel ${channel}`);

let ok = 0;
let fail = 0;
for (const job of jobs) {
  const { id, out, format = 'PNG', scale = 2 } = job;
  try {
    const result = await command('export_node_as_image', { nodeId: id, format, scale });
    if (process.env.DEBUG) {
      console.log('RESULT TYPE:', typeof result);
      console.log('RESULT KEYS:', result && typeof result === 'object' ? Object.keys(result) : '(n/a)');
      console.log('RESULT PREVIEW:', JSON.stringify(result)?.slice(0, 400));
    }
    if (!result || !result.imageData) throw new Error('no imageData in result');
    const outPath = resolve(process.cwd(), out);
    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, Buffer.from(result.imageData, 'base64'));
    ok++;
    console.log(`✓ ${id} -> ${out} (${Math.round(result.imageData.length / 1365)}KB)`);
  } catch (err) {
    fail++;
    console.error(`✗ ${id} -> ${out}: ${err.message}`);
  }
}

console.log(`\nDone. ${ok} exported, ${fail} failed.`);
ws.close();
process.exit(fail > 0 ? 1 : 0);
