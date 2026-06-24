import styles from './CaseStudy.module.scss';
import Reveal from '../ui/Reveal';

const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' };

export const Icons = {
  bulb: (
    <svg width="34" height="34" viewBox="0 0 24 24" {...stroke}>
      <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.6.6 1 1.4 1 2.5h6c0-1.1.4-1.9 1-2.5A6 6 0 0 0 12 3Z" />
    </svg>
  ),
  briefcase: (
    <svg width="34" height="34" viewBox="0 0 24 24" {...stroke}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
    </svg>
  ),
  compass: (
    <svg width="34" height="34" viewBox="0 0 24 24" {...stroke}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </svg>
  ),
  globe: (
    <svg width="34" height="34" viewBox="0 0 24 24" {...stroke}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
    </svg>
  ),
  users: (
    <svg width="34" height="34" viewBox="0 0 24 24" {...stroke}>
      <circle cx="9" cy="8" r="3" />
      <path d="M2 20a7 7 0 0 1 14 0M16 6a3 3 0 0 1 0 6M22 20a6.5 6.5 0 0 0-4-6" />
    </svg>
  ),
};

export function Phase({ children }) {
  return (
    <Reveal className={styles.phase} as="div">
      <span />
      <h2>{children}</h2>
      <span />
    </Reveal>
  );
}

export function CaseHero({ slug, kicker, subtitle, headline, body, meta, phoneCount = 5 }) {
  return (
    <>
      <Reveal className={styles.heroPhones} as="div" y={20}>
        {Array.from({ length: phoneCount }).map((_, index) => (
          <img key={index} src={`/images/work/${slug}/hero-${index + 1}.webp`} alt="" />
        ))}
      </Reveal>
      <div className={styles.heroText}>
        <Reveal className={styles.heroMain} as="div">
          <span className={styles.kicker}>{kicker}</span>
          <p className={styles.heroSub}>{subtitle}</p>
          <h1 className={styles.heroHeadline}>{headline}</h1>
          <p className={`${styles.body} ${styles.heroOverview}`}>{body}</p>
        </Reveal>
        <Reveal className={`${styles.heroMeta} ${styles.heroMetaCard}`} as="div" delay={0.1}>
          {meta.map((item) => (
            <div key={item.label}>
              <div className={styles.metaLabel}>{item.label}</div>
              <div className={styles.metaValue}>{item.value}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </>
  );
}

export function Split({ label, children }) {
  return (
    <Reveal className={`${styles.section} ${styles.split}`} as="div">
      <div className={styles.splitLabel}>
        <h2 className={styles.label}>{label}</h2>
      </div>
      <div className={styles.splitBody}>{children}</div>
    </Reveal>
  );
}

const PROC = [
  { t: 'Analysis', i: ['User Personas', 'Functional Analysis'] },
  { t: 'Research', i: ['User Flow', 'Information Architecture', 'User Interviews', 'Competitor Analysis'] },
  { t: 'Prototyping', i: ['Service Structure', 'Wireframes (Low-fidelity)', 'Functional Prototype', 'Technical Specialization'] },
  { t: 'Design', i: ['Visual Concept', 'Design System', 'App Icon', 'High-Fidelity UI'] },
  { t: 'Test', i: ['Interactive Prototype', 'Animation', 'Main flow Testing', 'Specification for a Developer'] },
];

export function ProcessGrid() {
  return (
    <Reveal className={`${styles.section} ${styles.process}`} as="div">
      {PROC.map((col, index) => (
        <div key={col.t} className={styles.procCol}>
          <div className={styles.procDot}>
            <span
              className={styles.procPie}
              style={{ '--fill': `${(index + 1) * 20}%` }}
            />
          </div>
          <span className={styles.procLine} />
          <h3 className={styles.procTitle}>{col.t}</h3>
          <ul className={styles.procList}>
            {col.i.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </Reveal>
  );
}

export function ProblemSolution({ problem, solution }) {
  const column = (label, data) => (
    <div className={styles.col}>
      <h2 className={styles.label}>{label}</h2>
      <p className={`${styles.body} ${styles.colBody}`}>{data.body}</p>
      <div className={styles.chips}>
        {data.chips.map((chip, index) => (
          <span
            key={chip}
            className={`${styles.chip} ${index === data.chips.length - 1 ? styles.chipBlue : ''}`}
          >
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
  return (
    <Reveal className={`${styles.section} ${styles.cols2}`} as="div">
      {column('PROBLEM', problem)}
      {column('SOLUTION', solution)}
    </Reveal>
  );
}

export function Persona({ name, role, photo, age, occupation, location, feelings, background, painPoints, needs, motivation }) {
  return (
    <Reveal className={styles.personaCard} as="div">
      <div className={styles.personaId}>
        <div className={styles.personaName}>{name}</div>
        <div className={styles.personaRole}>{role}</div>
        <img className={styles.personaPhoto} src={photo} alt={name} />
        <div className={styles.personaMeta}>
          Age: {age}
          <br />
          Occupation: {occupation}
          <br />
          Location: {location}
        </div>
        <div className={styles.feelings}>
          {feelings.map((feel, index) => (
            <span key={index} className={styles.feelPill}>
              {feel}
            </span>
          ))}
        </div>
      </div>
      <div>
        <div className={styles.personaGroup}>
          <div className={styles.personaBlockTitle}>Background</div>
          <p className={styles.body} style={{ fontSize: 20 }}>
            {background}
          </p>
        </div>
        <div className={styles.personaGroup}>
          <div className={styles.personaBlockTitle}>Pain Points</div>
          <ul className={styles.personaList}>
            {painPoints.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div className={styles.personaGroup}>
          <div className={styles.personaBlockTitle}>Need / Goals</div>
          <ul className={styles.personaList}>
            {needs.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.personaGroup}>
          <div className={styles.personaBlockTitle}>Motivation</div>
          <ul className={styles.personaList}>
            {motivation.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}

export function ProtoButton({ href }) {
  const external = href && href !== '#';
  return (
    <a
      href={href || '#'}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={styles.protoBtn}
    >
      View Prototype →
    </a>
  );
}

export function KeyTakeaways({ items }) {
  return (
    <Reveal className={`${styles.section} ${styles.split}`} as="div">
      <div className={styles.splitLabel}>
        <h2 className={styles.label}>KEY TAKEAWAYS</h2>
      </div>
      <div className={styles.splitBody}>
        {items.map((item, index) => (
          <p key={index} className={styles.body} style={index ? { marginTop: 24 } : undefined}>
            <span className={styles.keyTerm}>{item.term} :</span> {item.text}
          </p>
        ))}
      </div>
    </Reveal>
  );
}

export function DesignedFor({ title, panel = 'panelWhite', cards }) {
  return (
    <Reveal className={`${styles.panel} ${styles[panel]}`} as="div">
      <div className={styles.panelTitle}>{title}</div>
      <div className={styles.cards3}>
        {cards.map((card, index) => (
          <div key={index} className={styles.dfCard}>
            <div className={styles.iconCircle}>{card.icon}</div>
            <div className={styles.cardTitleSm}>{card.title}</div>
            <div className={styles.cardBodySm}>{card.body}</div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

export function TakeawaysPanel({ items }) {
  return (
    <Reveal className={`${styles.panel} ${styles.panelLight}`} as="div">
      <div className={styles.panelTitle}>Key Takeaways</div>
      <div className={styles.cards3}>
        {items.map((text, index) => (
          <div key={index} className={styles.tpItem}>
            <div className={styles.iconCircle}>{Icons.bulb}</div>
            <div className={styles.cardBodySm}>{text}</div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
