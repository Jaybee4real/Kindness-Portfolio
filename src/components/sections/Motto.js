import styles from './Motto.module.scss';
import Reveal from '../ui/Reveal';

export default function Motto() {
  return (
    <section className={styles.motto}>
      <Reveal as="p" className={styles.label} y={16} duration={0.6}>
        MY MOTTO
      </Reveal>
      <Reveal
        as="h2"
        className={styles.quote}
        y={36}
        scaleFrom={0.94}
        duration={0.9}
        delay={0.1}
      >
        &ldquo;The smallest interactions leave the biggest impressions&rdquo;
      </Reveal>
    </section>
  );
}
