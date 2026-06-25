'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './Lightbox.module.scss';

const isWireframe = (img) => /midfi-/.test(img.getAttribute('src') || '');
const isEligible = (img) => img.tagName === 'IMG' && !isWireframe(img);

export default function Lightbox() {
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(-1);
  const [zoomed, setZoomed] = useState(false);
  const pan = useRef({ x: 0, y: 0 });
  const drag = useRef(null);
  const imgRef = useRef(null);
  const open = index >= 0;

  const applyTransform = useCallback(() => {
    const node = imgRef.current;
    if (node) {
      node.style.transform = `translate(${pan.current.x}px, ${pan.current.y}px) scale(${zoomed ? 2 : 1})`;
    }
  }, [zoomed]);

  const reset = () => {
    pan.current = { x: 0, y: 0 };
    setZoomed(false);
  };

  const close = useCallback(() => {
    setIndex(-1);
    reset();
  }, []);

  const go = useCallback(
    (direction) => {
      reset();
      setIndex((current) => {
        const count = items.length;
        if (!count) return -1;
        return (((current + direction) % count) + count) % count;
      });
    },
    [items.length]
  );

  useEffect(() => {
    const root = document.querySelector('[data-lightbox-root]');
    if (!root) return undefined;
    [...root.querySelectorAll('img')].forEach((img) => {
      if (isEligible(img)) img.style.cursor = 'zoom-in';
    });
    const onClick = (event) => {
      const img = event.target.closest ? event.target.closest('img') : null;
      if (!img || !root.contains(img) || !isEligible(img)) return;
      const all = [...root.querySelectorAll('img')].filter(isEligible);
      setItems(all.map((node) => ({ src: node.currentSrc || node.src, alt: node.alt || '' })));
      setIndex(all.indexOf(img));
      reset();
    };
    root.addEventListener('click', onClick);
    return () => root.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    document.body.style.overflow = 'hidden';
    const onKey = (event) => {
      if (event.key === 'Escape') close();
      else if (event.key === 'ArrowRight') go(1);
      else if (event.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close, go]);

  useEffect(() => {
    applyTransform();
  }, [applyTransform, index]);

  if (!open) return null;
  const item = items[index];

  const toggleZoom = (event) => {
    event.stopPropagation();
    pan.current = { x: 0, y: 0 };
    setZoomed((value) => !value);
  };

  const onPointerDown = (event) => {
    if (!zoomed) return;
    drag.current = {
      x: event.clientX,
      y: event.clientY,
      px: pan.current.x,
      py: pan.current.y,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event) => {
    if (!drag.current) return;
    pan.current = {
      x: drag.current.px + (event.clientX - drag.current.x),
      y: drag.current.py + (event.clientY - drag.current.y),
    };
    applyTransform();
  };

  const onPointerUp = () => {
    drag.current = null;
  };

  return (
    <div className={styles.overlay} onClick={close} role="dialog" aria-modal="true">
      <button className={styles.close} onClick={close} aria-label="Close viewer" type="button">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {items.length > 1 && <div className={styles.counter}>{index + 1} / {items.length}</div>}

      {items.length > 1 && (
        <button
          className={`${styles.nav} ${styles.prev}`}
          onClick={(event) => {
            event.stopPropagation();
            go(-1);
          }}
          aria-label="Previous image"
          type="button"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      <img
        ref={imgRef}
        src={item.src}
        alt={item.alt}
        className={styles.image}
        style={{ cursor: zoomed ? 'grab' : 'zoom-in' }}
        onClick={toggleZoom}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        draggable={false}
      />

      {items.length > 1 && (
        <button
          className={`${styles.nav} ${styles.next}`}
          onClick={(event) => {
            event.stopPropagation();
            go(1);
          }}
          aria-label="Next image"
          type="button"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </div>
  );
}
