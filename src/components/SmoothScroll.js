'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { ReactLenis } from 'lenis/react';

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    window.__lenis = lenisRef.current?.lenis;
  });

  // Reset to the top on every route change (Lenis otherwise keeps the position).
  useEffect(() => {
    lenisRef.current?.lenis?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}
    >
      {children}
    </ReactLenis>
  );
}
