'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.scss';
import {
  ArrowUpRight,
  MailIcon,
  LinkedInIcon,
  BehanceIcon,
  XIcon,
} from './icons/SocialIcons';
import { LINKS } from '@/lib/links';

const NAV_LINKS = [
  { label: 'Homepage', href: '/' },
  { label: 'Case Studies', href: '/work' },
  { label: 'About Me', href: '/#about' },
];

const SOCIALS = [
  { label: 'LinkedIn', href: LINKS.linkedin, Icon: LinkedInIcon },
  { label: 'Behance', href: LINKS.behance, Icon: BehanceIcon },
  { label: 'X', href: LINKS.x, Icon: XIcon },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <div
        className={`${styles.backdrop} ${open ? styles.backdropOpen : ''}`}
        onClick={close}
        aria-hidden
      />
      <header className={`${styles.navbar} ${open ? styles.navOpen : ''}`}>
        <div className={styles.inner}>
          <Link href="/" className={styles.brand} onClick={close}>
            <Image
              className={styles.logo}
              src="/images/shared/logo.png"
              alt="Kindness Ukandu"
              width={56}
              height={56}
            />
            <span className={styles.brandName}>Kindness Ukandu</span>
          </Link>

          <nav className={styles.links}>
            {NAV_LINKS.map((item) => (
              <Link key={item.label} href={item.href} className={styles.link}>
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div
          className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ''}`}
        >
          <nav className={styles.mobileNav}>
            {NAV_LINKS.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className={styles.mobileLink}
                onClick={close}
                style={{
                  transitionDelay: open ? `${0.08 + index * 0.06}s` : '0s',
                }}
              >
                <span>{item.label}</span>
                <ArrowUpRight size={20} color="#0b4ac2" />
              </Link>
            ))}
          </nav>

          <a href={LINKS.email} className={styles.mobileCta} onClick={close}>
            <MailIcon size={20} color="#ffffff" />
            Contact Me
          </a>

          <div className={styles.mobileSocials}>
            {SOCIALS.map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer">
                <Icon size={18} color="#0b4ac2" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
