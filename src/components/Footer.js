import Link from 'next/link';
import styles from './Footer.module.scss';
import Reveal from './ui/Reveal';
import { LINKS } from '@/lib/links';
import {
  MailIcon,
  LinkedInIcon,
  BehanceIcon,
  XIcon,
  ArrowUpRight,
} from './icons/SocialIcons';

const NAVIGATION = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Design Process', href: '/#design-process' },
  { label: 'Resume', href: LINKS.linkedin },
];

const CASE_STUDIES = [
  { label: 'Update', href: '/work/update' },
  { label: 'Orange HRM', href: '/work/orange-hrm' },
  { label: 'E-Split', href: '/work/e-split' },
  { label: 'KeyFund', href: '/work/keyfund' },
];

const SOCIALS = [
  { label: 'My LinkedIn', href: LINKS.linkedin, Icon: LinkedInIcon },
  { label: 'My Behance', href: LINKS.behance, Icon: BehanceIcon },
  { label: 'My X', href: LINKS.x, Icon: XIcon },
];

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <Reveal className={styles.card} y={32}>
        <div className={styles.top}>
          <h2 className={styles.heading}>Let&rsquo;s Connect</h2>
          <p className={styles.subheading}>
            Open to new projects, collaborations, and conversations.
          </p>
          <a href={LINKS.email} className={styles.contactBtn}>
            <MailIcon size={26} />
            Contact Me
          </a>
        </div>

        <div className={styles.columns}>
          <div className={`${styles.col} ${styles.colNav}`}>
            <h3 className={styles.colTitle}>Navigation</h3>
            <ul className={styles.colList}>
              {NAVIGATION.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={styles.colItem}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.col} ${styles.colCase}`}>
            <h3 className={styles.colTitle}>Case Studies</h3>
            <ul className={styles.colList}>
              {CASE_STUDIES.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={styles.colItem}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.col} ${styles.colLinks}`}>
            <h3 className={styles.colTitle}>Other Links</h3>
            <div className={styles.social}>
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialCard}
                >
                  <span className={styles.socialIconBox}>
                    <Icon size={26} color="#384054" />
                  </span>
                  <span className={styles.socialLabel}>{label}</span>
                  <span className={styles.socialArrow}>
                    <ArrowUpRight size={24} color="#404a64" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <div className={styles.copyright}>
        <span className={styles.copyText}>© 2026 – Kindness Ukandu Design</span>
        <span className={styles.copyText}>
          Crafting impactful design solutions with empathy and strategy.
        </span>
      </div>
    </footer>
  );
}
