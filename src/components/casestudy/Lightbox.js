'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './Lightbox.module.scss';

const isWireframe = (img) => /midfi-/.test(img.getAttribute('src') || '');
const isEligible = (img) => img.tagName === 'IMG' && !isWireframe(img);

const PRETTY = {
  'hifi-home': 'Homepage',
  'hifi-split': 'Split Bill Screen',
  'hifi-details': 'Split Details Screen',
  'hifi-hero-1': 'Hi-Fi Overview',
  'hifi-hero-2': 'Hi-Fi Overview',
  'test-before': 'Before Testing',
  'test-after': 'After Testing',
  persona: 'User Persona',
  hero: 'Overview',
  hifi: 'Hi-Fi Screen',
  main: 'Screen',
  proto: 'Prototype',
  sol: 'Solution',
  old: 'Old Screen',
};

function titleFor(src) {
  const file = (src.split('/').pop() || '').replace(/\.\w+$/, '');
  if (PRETTY[file]) return PRETTY[file];
  const match = file.match(/^([a-z-]+?)-(\d+)$/);
  if (match && PRETTY[match[1]]) return `${PRETTY[match[1]]} ${match[2]}`;
  return file.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function Lightbox() {
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(-1);
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const pan = useRef({ x: 0, y: 0 });
  const drag = useRef(null);
  const imgRef = useRef(null);
  const open = index >= 0;

  const applyTransform = useCallback(() => {
    const node = imgRef.current;
    if (node) {
      node.style.transform = `translate(${pan.current.x}px, ${pan.current.y}px) scale(${scale}) rotate(${rotation}deg)`;
    }
  }, [scale, rotation]);

  const resetView = () => {
    pan.current = { x: 0, y: 0 };
    setScale(1);
    setRotation(0);
  };

  const close = useCallback(() => {
    setIndex(-1);
    resetView();
  }, []);

  const go = useCallback(
    (direction) => {
      resetView();
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
      setItems(
        all.map((node) => ({
          src: node.currentSrc || node.src,
          title: titleFor(node.currentSrc || node.src),
        }))
      );
      setIndex(all.indexOf(img));
      resetView();
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

  const zoom = (factor) => {
    setScale((value) => {
      const next = Math.min(5, Math.max(1, value * factor));
      if (next === 1) pan.current = { x: 0, y: 0 };
      return next;
    });
  };

  const stop = (event) => event.stopPropagation();

  const onPointerDown = (event) => {
    if (scale <= 1) return;
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

      <div className={styles.stage} onClick={stop}>
        <div className={styles.imageWrap}>
          <img
            ref={imgRef}
            src={item.src}
            alt={item.title}
            className={styles.image}
            style={{ cursor: scale > 1 ? 'grab' : 'zoom-in' }}
            onClick={() => zoom(scale > 1 ? 0.01 : 1.8)}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            draggable={false}
          />
        </div>

        <div className={styles.hub}>
          <div className={styles.meta}>
            <span className={styles.title}>{item.title}</span>
            {items.length > 1 && (
              <span className={styles.counter}>
                {index + 1} / {items.length}
              </span>
            )}
          </div>

          <div className={styles.tools}>
            {items.length > 1 && (
              <button className={styles.tool} onClick={() => go(-1)} aria-label="Previous" type="button">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            )}

            <button className={styles.tool} onClick={() => zoom(1 / 1.4)} aria-label="Zoom out" type="button">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <path d="m20 20-3.5-3.5M8 11h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <button className={styles.tool} onClick={() => zoom(1.4)} aria-label="Zoom in" type="button">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <path d="m20 20-3.5-3.5M11 8v6M8 11h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <button className={styles.tool} onClick={() => setRotation((deg) => deg - 90)} aria-label="Rotate left" type="button">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M3 8a9 9 0 1 1-1.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 4v4h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className={styles.tool} onClick={() => setRotation((deg) => deg + 90)} aria-label="Rotate right" type="button">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M21 8a9 9 0 1 0 1.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 4v4h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {items.length > 1 && (
              <button className={styles.tool} onClick={() => go(1)} aria-label="Next" type="button">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
