import styles from './Hero.module.scss';
import { MailIcon } from '../icons/SocialIcons';
import Reveal from '../ui/Reveal';
import { LINKS } from '@/lib/links';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Reveal as="span" className={styles.pill} y={16} duration={0.6}>
        Available For Work
      </Reveal>

      <div className={styles.copy}>
        <Reveal as="h1" className={styles.headline} y={24} delay={0.08}>
          Hi there, I&rsquo;m Kindness!
        </Reveal>
        <Reveal as="p" className={styles.paragraph} y={20} delay={0.18}>
          I&rsquo;m a UI/UX designer living in Lagos. For the last four years,
          I&rsquo;ve been obsessed with figuring out human behavior and using my
          insights to create meaningful digital experiences. I&rsquo;ve worked on
          all kinds of projects, websites, and mobile apps, and I have a
          meticulous eye for detail.
        </Reveal>
      </div>

      <Reveal className={styles.buttons} y={18} delay={0.28}>
        <a href={LINKS.email} className={`${styles.btn} ${styles.btnPrimary}`}>
          <MailIcon size={26} color="#ffffff" />
          Contact Me
        </a>
        <a
          href={LINKS.behance}
          target="_blank"
          rel="noreferrer"
          className={`${styles.btn} ${styles.btnSecondary}`}
        >
          View Behance
        </a>
      </Reveal>
    </section>
  );
}
