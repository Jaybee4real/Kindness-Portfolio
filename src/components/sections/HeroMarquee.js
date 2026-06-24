import Marquee from '../ui/Marquee';
import styles from './HeroMarquee.module.scss';

const SHOTS = [
  '/images/home/marquee/m1-jakstoc.webp',
  '/images/home/marquee/m2-iphone-desk.webp',
  '/images/home/marquee/m3-hand.webp',
  '/images/home/marquee/m4-macbook.webp',
  '/images/home/marquee/m5-slide.webp',
];

export default function HeroMarquee() {
  return (
    <section className={styles.section}>
      <Marquee duration={45} gap={32}>
        {SHOTS.map((src) => (
          <div key={src} className={styles.card}>
            <img src={src} alt="" />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
