import styles from './About.module.scss';
import Reveal from '../ui/Reveal';

const STATS = [
  {
    number: '4+',
    label: 'years',
    desc: 'Experience designing websites for brands across lifestyle, wellness, and professional services',
  },
  {
    number: '30+',
    label: 'Projects',
    desc: 'Successfully launched, from clean one-pagers to complex, custom builds.',
  },
  {
    number: '7+',
    label: 'Industries',
    desc: 'Spanning Fintech, HealthTech, Real Estate, EduTech, B2B, HRM, and SaaS.',
  },
  {
    number: '98%',
    label: 'Satisfaction',
    desc: 'Based on client feedback collected over the last 2 years.',
  },
];

export default function About() {
  return (
    <section className={styles.about} id="about">
      <Reveal className={styles.darkCard} y={32}>
        <div>
          <h2 className={styles.darkTitle}>I&rsquo;m Kindness Ukandu</h2>
          <p className={styles.darkBio}>
            I am a UI/UX Designer with 4 years of experience creating and
            designing products for startups, scale-ups, global teams and
            individuals. I have created Fintech products, Healthcare mobile apps
            as well as real-estate websites and apps. I specialize in
            user-centered design, functional aesthetics, and robust design
            systems that drive clarity, consistency, and impact.
          </p>
        </div>
        <div className={styles.aboutPill}>About Me</div>
      </Reveal>

      <div className={styles.stats}>
        {STATS.map((stat, index) => (
          <Reveal
            key={index}
            className={styles.statCard}
            y={28}
            delay={index * 0.1}
          >
            <div className={styles.statTop}>
              <span className={styles.statNumber}>{stat.number}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
            <div className={styles.statDivider} />
            <p className={styles.statDesc}>{stat.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
