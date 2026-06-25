'use client';

import { useEffect, useState } from 'react';
import styles from './Loader.module.scss';

const RADIUS = 54;
const CIRC = 2 * Math.PI * RADIUS;
const lerp = (a, b, t) => Math.round(a + (b - a) * t);
const mix = (from, to, t) =>
  `rgb(${lerp(from[0], to[0], t)},${lerp(from[1], to[1], t)},${lerp(from[2], to[2], t)})`;

export default function Loader() {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const DURATION = 1900;
    let frame;
    let startTime;
    let loaded = document.readyState === 'complete';
    const onLoad = () => {
      loaded = true;
    };
    window.addEventListener('load', onLoad);
    document.body.style.overflow = 'hidden';

    const step = (now) => {
      if (startTime == null) startTime = now;
      const elapsed = (now - startTime) / DURATION;
      const eased = 1 - Math.pow(1 - Math.min(elapsed, 1), 3);
      let value = eased * 100;
      if (!loaded) value = Math.min(value, 92);
      setPct(Math.round(value));
      if (value >= 100) {
        setDone(true);
        document.body.style.overflow = '';
        window.setTimeout(() => setGone(true), 800);
        return;
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('load', onLoad);
      document.body.style.overflow = '';
    };
  }, []);

  if (gone) return null;

  const gradientOpacity = Math.min(1, pct / 30);
  const siteOpacity = Math.max(0, (pct - 70) / 30);
  const darken = Math.min(1, Math.max(0, (pct - 20) / 28));
  const textColor = mix([255, 255, 255], [18, 20, 26], darken);
  const subColor = mix([206, 216, 232], [78, 92, 123], darken);
  const offset = CIRC * (1 - pct / 100);

  return (
    <div className={`${styles.loader} ${done ? styles.done : ''}`} aria-hidden={done}>
      <div className={styles.bgBlack} />
      <div className={styles.bgGradient} style={{ opacity: gradientOpacity }} />
      <div className={styles.bgSite} style={{ opacity: siteOpacity }} />

      <div className={styles.inner}>
        <div className={styles.ring}>
          <svg className={styles.ringSvg} viewBox="0 0 120 120">
            <defs>
              <linearGradient id="loaderRing" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#7cc0ff" />
                <stop offset="50%" stopColor="#ff9cc0" />
                <stop offset="100%" stopColor="#b89cf0" />
              </linearGradient>
            </defs>
            <circle className={styles.ringTrack} cx="60" cy="60" r={RADIUS} />
            <circle
              className={styles.ringFill}
              cx="60"
              cy="60"
              r={RADIUS}
              style={{ strokeDasharray: CIRC, strokeDashoffset: offset }}
            />
          </svg>
          <img className={styles.avatar} src="/images/shared/logo.png" alt="Kindness Ukandu" />
        </div>

        <div className={styles.name} style={{ color: textColor }}>
          Kindness Ukandu
        </div>
        <div className={styles.role} style={{ color: subColor }}>
          Product Designer — crafting with care
        </div>
        <div className={styles.pct} style={{ color: subColor }}>
          {pct}%
        </div>
      </div>
    </div>
  );
}
