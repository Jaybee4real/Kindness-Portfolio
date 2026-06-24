'use client';

import { useEffect, useRef, useState } from 'react';

// The app renders inside a CSS `zoom` wrapper, which breaks IntersectionObserver
// (and Motion's whileInView). getBoundingClientRect respects zoom, so reveal is
// driven by a rAF rect-check + plain CSS transitions — no Motion, never stuck hidden.
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  scaleFrom = 1,
  duration = 0.7,
  className,
  as: Tag = 'div',
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let frame;
    const check = () => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
        setShown(true);
        return;
      }
      frame = requestAnimationFrame(check);
    };
    check();
    return () => cancelAnimationFrame(frame);
  }, []);

  const hidden = `translateY(${y}px) scale(${scaleFrom})`;

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'none' : hidden,
        transition: `opacity ${duration}s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform ${duration}s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </Tag>
  );
}
