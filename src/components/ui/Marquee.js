import styles from './Marquee.module.scss';

export default function Marquee({
  children,
  duration = 40,
  gap = 32,
  reverse = false,
}) {
  const items = Array.isArray(children) ? children : [children];
  return (
    <div
      className={styles.marquee}
      style={{ '--duration': `${duration}s`, '--gap': `${gap}px` }}
    >
      <div className={`${styles.track} ${reverse ? styles.reverse : ''}`}>
        {items.map((item, index) => (
          <div key={`a-${index}`} className={styles.item}>
            {item}
          </div>
        ))}
        {items.map((item, index) => (
          <div key={`b-${index}`} className={styles.item} aria-hidden>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
