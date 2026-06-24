'use client';

import { useEffect, useState } from 'react';
import styles from './Loader.module.scss';

export default function Loader() {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const DURATION = 1700;
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
      if (!loaded) value = Math.min(value, 94);
      setPct(Math.round(value));
      if (value >= 100) {
        setDone(true);
        document.body.style.overflow = '';
        window.setTimeout(() => setGone(true), 750);
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

  return (
    <div className={`${styles.loader} ${done ? styles.done : ''}`} aria-hidden={done}>
      <div className={styles.glow} />
      <div className={styles.inner}>
        <span className={styles.kicker}>Portfolio</span>
        <div className={styles.name}>Kindness Ukandu</div>
        <div className={styles.role}>UI/UX Designer</div>
        <div className={styles.barWrap}>
          <div className={styles.bar} style={{ width: `${pct}%` }} />
        </div>
        <div className={styles.pct}>{pct}%</div>
      </div>
    </div>
  );
}
