import Image from 'next/image';
import Marquee from '../ui/Marquee';
import styles from './HeroMarquee.module.scss';

const SHOTS = [
  { src: '/images/home/marquee/m1-jakstoc.webp', width: 1264, height: 1070 },
  {
    src: '/images/home/marquee/m2-iphone-desk.webp',
    width: 1266,
    height: 1070,
  },
  { src: '/images/home/marquee/m3-hand.webp', width: 1266, height: 1071 },
  { src: '/images/home/marquee/m4-macbook.webp', width: 1607, height: 1072 },
  { src: '/images/home/marquee/m5-slide.webp', width: 1266, height: 1074 },
];

export default function HeroMarquee() {
  return (
    <section className={styles.section}>
      <Marquee duration={45} gap={32}>
        {SHOTS.map((shot) => (
          <div key={shot.src} className={styles.card}>
            <Image
              src={shot.src}
              alt=""
              width={shot.width}
              height={shot.height}
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
