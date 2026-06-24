'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Services.module.scss';
import { MailIcon } from '../icons/SocialIcons';
import Reveal from '../ui/Reveal';
import { LINKS } from '@/lib/links';

const CARDS = [
  {
    icon: '/images/home/services/icon-1.png',
    title: 'UI/UX Design',
    desc: 'From wireframes to high-fidelity mockups, I design intuitive user interfaces that solve problems and elevate experiences—always guided by real user needs',
    tags: ['Web Design', 'Mobile Design', 'Prototyping', 'Design System'],
  },
  {
    icon: '/images/home/services/icon-2.png',
    title: 'Framer Design',
    desc: 'I build high-performing websites in Framer that are responsive, animated, and easy for clients to edit—no code required. Perfect for portfolios, startups, and product launches',
    tags: ['Landing Page', 'Responsive Website', 'Website Migration', 'More'],
  },
  {
    icon: '/images/home/services/icon-3.png',
    title: 'Product Interface Design',
    desc: 'I build high-performing websites in Framer that are responsive, animated, and easy for clients to edit—no code required. Perfect for portfolios, startups, and product launches',
    tags: ['Landing Page', 'Responsive Website', 'Website Migration', 'More'],
  },
];

export default function Services() {
  const pinRef = useRef(null);
  const trackRef = useRef(null);
  const windowRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const pin = pinRef.current;
    const track = trackRef.current;
    const win = windowRef.current;
    if (!pin || !track || !win) return;
    let frame;
    let lastActive = -1;
    const loop = () => {
      if (window.innerWidth > 820) {
        const rect = pin.getBoundingClientRect();
        const distance = rect.height - window.innerHeight;
        const progress =
          distance > 0 ? Math.min(1, Math.max(0, -rect.top / distance)) : 0;
        const max = Math.max(0, track.scrollHeight - win.clientHeight);
        track.style.transform = `translateY(${(-progress * max).toFixed(1)}px)`;
        const index = Math.min(CARDS.length - 1, Math.floor(progress * CARDS.length));
        if (index !== lastActive) {
          lastActive = index;
          setActive(index);
        }
      }
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section ref={pinRef} className={styles.pin}>
      <div className={styles.sticky}>
        <div className={styles.inner}>
          <div className={styles.intro}>
            <Reveal as="span" className={styles.tag} y={16} duration={0.6}>
              Projects
            </Reveal>
            <Reveal as="h2" className={styles.heading} y={28} delay={0.1} duration={0.8}>
              My Design Solution Are Created To Match Your Vision
            </Reveal>
            <Reveal y={18} delay={0.22}>
              <a href={LINKS.email} className={styles.contactBtn}>
                <MailIcon size={26} color="#000000" />
                Contact Me
              </a>
            </Reveal>
          </div>

          <div ref={windowRef} className={styles.cardsWindow}>
            <div ref={trackRef} className={styles.cardsTrack}>
              {CARDS.map((card) => (
                <article key={card.title} className={styles.card}>
                  <div className={styles.cardTop}>
                    <img className={styles.cardIcon} src={card.icon} alt="" />
                    <span className={styles.plus}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                        <path
                          d="M7 1v12M1 7h12"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDesc}>{card.desc}</p>
                  <div className={styles.cardTags}>
                    {card.tags.map((tag) => (
                      <span key={tag} className={styles.cardTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.progress}>
          {CARDS.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${active === index ? styles.dotActive : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
