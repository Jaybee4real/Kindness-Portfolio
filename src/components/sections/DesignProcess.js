'use client';

import { useEffect, useRef } from 'react';
import styles from './DesignProcess.module.scss';
import Reveal from '../ui/Reveal';

const STEPS = [
  {
    icon: '/images/home/step-1.png',
    color: '#2394ff',
    title: 'Understand And Align',
    body: 'I don’t just ask questions, I ask the right questions. I dig into user psychology, business constraints, team dynamics, and market signals to uncover what’s really going on. I turn scattered insights, fuzzy ideas, and half-baked goals into clear, focused direction. If a brief doesn’t exist, I’ll help build it. If the strategy is murky, I’ll clarify it. That’s where the work really starts.',
  },
  {
    icon: '/images/home/step-2.png',
    color: '#ff5d9e',
    title: 'Design And Collaborate',
    body: 'I move from strategy to systems with speed and intention. Every screen I design is grounded in business goals, user insights, and practical constraints. I annotate clearly and structure files so cross-functional teams can easily follow along. I believe in collaboration that’s honest and proactive, not just checking a box. You’ll always know why I made a design decision, not just what I did.',
  },
  {
    icon: '/images/home/step-3.png',
    color: '#9265ed',
    title: 'Test And Adapt',
    body: 'My work doesn’t have to stop at the handoff. I validate designs through experimentation, testing, and ongoing iteration. Whether it’s an A/B test, a usability study, or post-launch analysis, I believe in learning fast and improving faster. I’m not afraid to change direction when the data demands it. I make sure insights feed directly into the next round of work.',
  },
];

const SEGMENT_COLORS = STEPS.map((step) => step.color);

export default function DesignProcess() {
  const stepsRef = useRef(null);
  const trackRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    const steps = stepsRef.current;
    const track = trackRef.current;
    const fill = fillRef.current;
    if (!steps || !track || !fill) return;
    let frame;
    let lastHeight = -1;

    const loop = () => {
      const icons = steps.querySelectorAll('[data-icon]');
      if (icons.length >= 2) {
        const stepsRect = steps.getBoundingClientRect();
        const firstRect = icons[0].getBoundingClientRect();
        const lastRect = icons[icons.length - 1].getBoundingClientRect();
        const firstCenter = firstRect.top + firstRect.height / 2;
        const top = firstCenter - stepsRect.top;
        const endY = stepsRect.height - top;
        const height = endY;
        track.style.top = `${top}px`;
        track.style.height = `${height}px`;
        fill.style.top = `${top}px`;

        if (height !== lastHeight && height > 0) {
          lastHeight = height;
          const bounds = Array.from(icons).map((icon) => {
            const rect = icon.getBoundingClientRect();
            return rect.top + rect.height / 2 - firstCenter;
          });
          bounds.push(endY);
          const stops = [];
          for (let segment = 0; segment < bounds.length - 1; segment += 1) {
            const color = SEGMENT_COLORS[segment] || SEGMENT_COLORS[SEGMENT_COLORS.length - 1];
            stops.push(`${color} ${bounds[segment].toFixed(1)}px`);
            stops.push(`${color} ${bounds[segment + 1].toFixed(1)}px`);
          }
          fill.style.backgroundImage = `linear-gradient(180deg, ${stops.join(', ')})`;
          fill.style.backgroundSize = `100% ${height}px`;
          fill.style.backgroundRepeat = 'no-repeat';
          fill.style.backgroundPosition = 'top left';
        }

        const progress = Math.min(
          1,
          Math.max(0, (window.innerHeight * 0.55 - stepsRect.top) / stepsRect.height)
        );
        fill.style.height = `${progress * height}px`;
      }
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className={styles.section} id="design-process">
      <Reveal className={styles.header}>
        <span className={styles.tag}>Projects</span>
        <h2 className={styles.heading}>My Design Process</h2>
      </Reveal>

      <div ref={stepsRef} className={styles.steps}>
        <span ref={trackRef} className={styles.track} />
        <span ref={fillRef} className={styles.fill} />
        {STEPS.map((step, index) => (
          <Reveal
            as="div"
            key={step.title}
            className={styles.step}
            y={32}
            delay={index * 0.1}
          >
            <div className={styles.rail}>
              <img data-icon className={styles.icon} src={step.icon} alt="" />
            </div>
            <div className={styles.content}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepBody}>{step.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
