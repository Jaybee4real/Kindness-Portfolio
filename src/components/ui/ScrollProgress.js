'use client';

import { useEffect, useRef } from 'react';
import styles from './ScrollProgress.module.scss';

export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    let frame;
    const loop = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY || doc.scrollTop;
      const progress = max > 0 ? Math.min(1, Math.max(0, scrolled / max)) : 0;
      bar.style.transform = `scaleX(${progress})`;
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className={styles.track}>
      <div ref={barRef} className={styles.bar} />
    </div>
  );
}
