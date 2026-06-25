'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import styles from './Projects.module.scss';
import Reveal from '../ui/Reveal';
import ProjectCard from './ProjectCard';

function CardDivider() {
  return (
    <div className={styles.divider} aria-hidden>
      <span className={styles.dividerLine} />
      <span className={styles.dividerBadge}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2c.6 5 1.4 5.8 6.4 6.4-5 .6-5.8 1.4-6.4 6.4-.6-5-1.4-5.8-6.4-6.4 5-.6 5.8-1.4 6.4-6.4Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className={styles.dividerLine} />
    </div>
  );
}

const PROJECTS = [
  {
    title: 'Update App',
    desc: 'Update is a geo-social networking platform that enables users to discover updates from individuals around the world while participating in structured, location-based communities.',
    category: 'Social Networking',
    date: 'March, 2026',
    href: '/work/update',
    image: '/images/home/projects/update.png',
  },
  {
    title: 'KeyFund Real-Estate App',
    desc: 'KeyFund aims to make real-estate investment accessible to Africans with small capital.',
    category: 'Real Estate',
    date: '2025',
    href: '/work/keyfund',
    image: '/images/home/projects/keyfund.png',
  },
  {
    title: 'Orange HRM',
    desc: 'Orange HRM is a HR software that simplifies your workflow, empowering your team from hiring to thriving. The existing dashboard experience was cluttered and visually noisy, making it difficult for HR managers and employees to quickly understand what needed their attention.',
    category: 'HRM Platform',
    date: 'November, 2025',
    href: '/work/orange-hrm',
    image: '/images/home/projects/orange-hrm.png',
  },
  {
    title: 'E-Split App',
    desc: 'E-Split App is a mobile app designed to make sharing expenses among individuals simple, transparent, and stress-free.',
    category: 'Finance',
    date: 'October, 2024',
    href: '/work/e-split',
    image: '/images/home/projects/e-split.png',
  },
];

export default function Projects() {
  const [horizontal, setHorizontal] = useState(false);
  const pinRef = useRef(null);
  const stickyRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    if (!horizontal) return undefined;
    const pin = pinRef.current;
    const sticky = stickyRef.current;
    const track = trackRef.current;
    if (!pin || !sticky || !track) return undefined;
    let frame;
    const loop = () => {
      if (window.innerWidth > 820) {
        const rect = pin.getBoundingClientRect();
        const headerH = pin.firstElementChild
          ? pin.firstElementChild.getBoundingClientRect().height
          : 0;
        const stickyH = sticky.getBoundingClientRect().height;
        const navBottom =
          document.querySelector('header')?.getBoundingClientRect().bottom || 0;
        // cards translate only while the sticky is actually pinned below the navbar
        const start = navBottom - headerH;
        const range = rect.height - headerH - stickyH;
        const progress =
          range > 0 ? Math.min(1, Math.max(0, (start - rect.top) / range)) : 0;
        const max = Math.max(0, track.scrollWidth - track.clientWidth);
        track.style.transform = `translateX(${(-progress * max).toFixed(1)}px)`;
      } else {
        track.style.transform = '';
      }
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(frame);
      if (track) track.style.transform = '';
    };
  }, [horizontal]);

  return (
    <section
      ref={pinRef}
      className={`${styles.projects} ${horizontal ? styles.pin : ''}`}
      id="projects"
    >
      <Reveal className={styles.header} as="div">
        <div className={styles.headTop}>
            <h2 className={styles.heading}>
              A curated collection of projects designed with care
            </h2>
            <div className={styles.toggle} role="group" aria-label="Projects layout">
              <button
                type="button"
                className={`${styles.toggleBtn} ${!horizontal ? styles.toggleActive : ''}`}
                onClick={() => setHorizontal(false)}
                aria-pressed={!horizontal}
                aria-label="Stacked layout"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="4" width="16" height="3.4" rx="1.7" fill="currentColor" />
                  <rect x="4" y="10.3" width="16" height="3.4" rx="1.7" fill="currentColor" />
                  <rect x="4" y="16.6" width="16" height="3.4" rx="1.7" fill="currentColor" />
                </svg>
              </button>
              <button
                type="button"
                className={`${styles.toggleBtn} ${horizontal ? styles.toggleActive : ''}`}
                onClick={() => setHorizontal(true)}
                aria-pressed={horizontal}
                aria-label="Horizontal scroll layout"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="4" width="3.4" height="16" rx="1.7" fill="currentColor" />
                  <rect x="10.3" y="4" width="3.4" height="16" rx="1.7" fill="currentColor" />
                  <rect x="16.6" y="4" width="3.4" height="16" rx="1.7" fill="currentColor" />
                </svg>
              </button>
            </div>
          </div>
          <span className={styles.tag}>Projects</span>
        </Reveal>

        <div ref={stickyRef} className={horizontal ? styles.sticky : ''}>
          <div
            ref={trackRef}
            className={`${styles.list} ${horizontal ? styles.listH : ''}`}
          >
            {PROJECTS.map((project, index) => (
              <Fragment key={project.title}>
                <ProjectCard project={project} />
                {horizontal && index < PROJECTS.length - 1 && <CardDivider />}
              </Fragment>
            ))}
          </div>
        </div>
    </section>
  );
}
