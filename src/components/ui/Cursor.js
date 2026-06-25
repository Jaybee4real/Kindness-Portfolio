'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import styles from './Cursor.module.scss';

const INTERACTIVE = 'a, button, input, textarea, [data-cursor]';

function subscribeFinePointer(callback) {
  const query = window.matchMedia('(pointer: coarse)');
  query.addEventListener('change', callback);
  return () => query.removeEventListener('change', callback);
}

function useFinePointer() {
  return useSyncExternalStore(
    subscribeFinePointer,
    () => !window.matchMedia('(pointer: coarse)').matches,
    () => false,
  );
}

export default function Cursor() {
  const enabled = useFinePointer();
  const [hovering, setHovering] = useState(false);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { stiffness: 320, damping: 28, mass: 0.5 });
  const ringY = useSpring(dotY, { stiffness: 320, damping: 28, mass: 0.5 });

  useEffect(() => {
    if (!enabled) return undefined;
    document.body.style.cursor = 'none';

    const move = (event) => {
      dotX.set(event.clientX);
      dotY.set(event.clientY);
    };
    const over = (event) => {
      setHovering(Boolean(event.target.closest?.(INTERACTIVE)));
    };

    window.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseover', over, { passive: true });
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      document.body.style.cursor = '';
    };
  }, [enabled, dotX, dotY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className={styles.dot}
        style={{ x: dotX, y: dotY }}
        animate={{ scale: hovering ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className={styles.ring}
        style={{ x: ringX, y: ringY }}
        animate={{ scale: hovering ? 1.8 : 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
    </>
  );
}
