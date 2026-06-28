import Image from 'next/image';
import styles from './CaseStudy.module.scss';
import Reveal from '../ui/Reveal';
import ProjectLogo from '../ui/ProjectLogo';
import {
  Phase,
  Split,
  ProcessGrid,
  Persona,
  KeyTakeaways,
} from './CaseStudyParts';

const SLUG = 'orange-hrm';

const HIFI_DIMS = {
  1: { width: 2280, height: 1620 },
  2: { width: 2280, height: 1620 },
  3: { width: 2280, height: 1634 },
  4: { width: 2280, height: 1756 },
};
const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const PROBLEMS = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" {...stroke}>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 9h18M7 14h5" />
      </svg>
    ),
    title: 'Poor Visual Hierachy and Navigation',
    body: 'The dashboard displayed too many elements without hierarchy, making it difficult for users to quickly identify important information. Users were forced to click around and search for basic features.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" {...stroke}>
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7a11 11 0 0 1-5-1.2M4 4l16 16" />
      </svg>
    ),
    title: 'Poor Hierachy',
    body: 'Key HR functions were buried under unclear icons and inconsistent menu structure, forcing users to click around and search for basic features.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" {...stroke}>
        <path d="M4 21V5a2 2 0 0 1 2-2h9l5 5v6a2 2 0 0 1-2 2H6a2 2 0 0 0-2 2Z" />
      </svg>
    ),
    title: 'Low Information Visibility',
    body: 'Essential metrics like attendance, approvals, and employee insights were either hard to spot or poorly presented, slowing down decision-making and everyday HR workflows.',
  },
];

const SOLUTIONS = [
  {
    title: 'Prioritize Visual Hierachy',
    body: "The redesigned dashboard organizes information by importance, using spacing, typography, and card structure to guide the user's eye and make key metrics instantly recognizable.",
  },
  {
    title: 'Intuitive Navigation',
    body: 'The new layout streamlines access to essential HR functions with clearer labels, improved iconography, and a more logical menu structure, reducing unnecessary clicks and confusion.',
  },
  {
    title: 'Unified Platform',
    body: 'Critical data such as attendance, approvals, and employee insights is now displayed in focused, easy-to-read sections, helping HR users make faster decisions with minimal effort.',
  },
];

export default function OrangeHrmCaseStudy() {
  return (
    <div className={styles.container}>
      {/* HERO */}
      <Reveal as="div" y={20}>
        <Image
          className={styles.heroSolo}
          src={`/images/work/${SLUG}/hero.webp`}
          alt="Orange HRM dashboards"
          width={2560}
          height={1344}
        />
      </Reveal>
      <div className={styles.heroText}>
        <Reveal className={styles.heroMain} as="div">
          <div className={styles.kickerRow}>
            <ProjectLogo
              slug={SLUG}
              height={48}
              priority
              className={styles.kickerLogo}
            />
            <span className={styles.kicker}>Orange HRM</span>
          </div>
          <p className={styles.heroSub}>HRM Dashboard Design • 2025</p>
          <h1 className={styles.heroHeadline}>
            Redesigning Orange HRM Dashboard: Driving Growth And Responsiveness.
          </h1>
          <p className={`${styles.body} ${styles.heroOverview}`}>
            {`Orange HRM is a HR software that simplifies your workflow, empowering your team and unlocking the potential of your people, from hiring to thriving. The existing dashboard experience was cluttered, visually noisy, and lacked hierarchy, making it difficult for HR managers and employees to quickly understand what needed their attention.\n\nMy goal was to redesign the dashboard and knowledge hub into a cleaner, more human-centered experience, enabling users to access key information faster and complete tasks without friction.`}
          </p>
        </Reveal>
        <Reveal
          className={`${styles.heroMeta} ${styles.heroMetaCard}`}
          as="div"
          delay={0.1}
        >
          {[
            { label: 'Role', value: 'UI/UX Designer' },
            { label: 'Timeframe', value: '3 Weeks' },
            { label: 'Category', value: 'HRM Dashboard' },
            { label: 'Team', value: 'Product Designer, Product Owner' },
          ].map((item) => (
            <div key={item.label}>
              <div className={styles.metaLabel}>{item.label}</div>
              <div className={styles.metaValue}>{item.value}</div>
            </div>
          ))}
        </Reveal>
      </div>

      {/* PROBLEM */}
      <Split label="THE PROBLEM">
        <p className={styles.body}>
          Based on the 10 user interviews and 18 user surveys, these were the
          problems and issues users encountered while making use of the
          dashboard
        </p>
      </Split>
      <Reveal className={styles.cards3} as="div" style={{ marginTop: 40 }}>
        {PROBLEMS.map((card) => (
          <div key={card.title} className={styles.ohCard}>
            <div className={styles.ohChip}>{card.icon}</div>
            <div className={styles.cardTitleSm}>{card.title}</div>
            <div className={styles.cardBodySm} style={{ fontSize: 16 }}>
              {card.body}
            </div>
          </div>
        ))}
      </Reveal>

      {/* SOLUTION */}
      <Split label="THE SOLUTION">
        <p className={styles.body}>
          Based on the 10 user interviews and 18 user surveys, these were the
          problems and issues users encountered while making use of the
          dashboard
        </p>
      </Split>
      <Reveal className={styles.cards3} as="div" style={{ marginTop: 40 }}>
        {SOLUTIONS.map((card, index) => (
          <div
            key={card.title}
            className={`${styles.ohCard} ${styles.solCard}`}
          >
            <Image
              className={styles.solImg}
              src={`/images/work/${SLUG}/sol-${index + 1}.webp`}
              alt=""
              width={748}
              height={324}
            />
            <div className={styles.cardTitleSm}>{card.title}</div>
            <div className={styles.cardBodySm} style={{ fontSize: 14 }}>
              {card.body}
            </div>
          </div>
        ))}
      </Reveal>

      {/* OLD SCREENS */}
      <div className={styles.section}>
        <Reveal as="div">
          <h2 className={styles.centerTitle}>Orange HRM old screens</h2>
        </Reveal>
        <Reveal className={styles.stacked} as="div">
          <Image
            src={`/images/work/${SLUG}/old-1.webp`}
            alt=""
            width={2040}
            height={884}
          />
          <Image
            src={`/images/work/${SLUG}/old-2.webp`}
            alt=""
            width={2098}
            height={882}
          />
        </Reveal>
      </div>

      {/* DESIGN PROCESS */}
      <Phase>The Design Process</Phase>
      <ProcessGrid />

      {/* USER INTERVIEWS */}
      <div className={styles.section}>
        <Split label="USER INTERVIEWS">
          <p className={styles.body}>
            I interviewed 3 HR who currently use Orange HRM. This helped me gain
            an in depth understanding of the participants&rsquo; behaviors and
            habits when they&rsquo;re shopping either in person or online so
            I&rsquo;m able to find effective ways to help fill their needs and
            achieve their goals.
          </p>
        </Split>
        <Reveal className={`${styles.panel} ${styles.panelLight}`} as="div">
          <div className={styles.panelTitle}>Key Takeaways</div>
          <div className={styles.cards3}>
            {[
              'Many participants said they find Orange HRM very cluttered and hard to navigate.',
              'Content on the current website was displayed randomly with no clear structure making it difficult to understand what type of information is important.',
              'All participants wanted to see imagery since there was no visual content leading to confusion regarding its true purpose.',
            ].map((text, index) => (
              <div key={index} className={styles.cardBodySm}>
                {text}
              </div>
            ))}
          </div>
          <p className={styles.quote}>
            &ldquo;The current website feels overwhelming because they have too
            much information that&rsquo;s not in the right order.&rdquo;
            <span>- Jewel (Participant)</span>
          </p>
        </Reveal>
      </div>

      {/* PERSONA */}
      <Split label="USER PERSONA">
        <p className={styles.body}>
          Based on the user Interviews, I came up with a user persona that
          captures the users frustrations, needs and goals when it comes to
          Orange HRM Dashboard.
        </p>
      </Split>
      <Persona
        name="Sarah"
        role="The HR"
        photo={`/images/work/${SLUG}/persona.webp`}
        age="36"
        occupation="HR Manager"
        location="Kyiv"
        feelings={[
          'Frustrated',
          'Distracted',
          'Overwhelmed',
          'Tired',
          'Inquisitive',
        ]}
        background="Sarah oversees employee records, recruitment, attendance tracking, performance reviews, and HR reporting. She spends several hours each day in the HRMS and needs quick access to critical information and her workflow involves switching between multiple modules throughout the day, often while handling urgent employee requests and management inquiries."
        painPoints={[
          'Dashboard feels cluttered and overwhelming',
          'Navigation hierarchy is unclear',
          'Important actions are difficult to find quickly',
          'Frequently used tools require too many clicks',
          'Hard to identify urgent tasks at a glance',
          'Information density makes scanning difficult',
        ]}
        needs={[
          'Quick access to frequently used HR functions',
          'Reduced time spent searching for features and faster access to employee information',
          'Easy task prioritization',
        ]}
        motivation={[
          'Spend more time supporting employees and less time navigating software',
          'Make faster, data-driven HR decisions',
          'Stay on top of recruitment and performance reviews',
        ]}
      />

      {/* HIGH-FIDELITY */}
      <div className={styles.section}>
        <Split label="HIGH-FIDELITY WIREFRAMES">
          <p className={styles.body}>
            It&rsquo;s important to stay true to the brands identity and values
            by staying consistent with the content and style throughout the
            website.
          </p>
        </Split>
        <Reveal className={styles.stacked} as="div">
          {[1, 2, 3, 4].map((n) => (
            <Image
              key={n}
              src={`/images/work/${SLUG}/hifi-${n}.webp`}
              alt=""
              width={HIFI_DIMS[n].width}
              height={HIFI_DIMS[n].height}
            />
          ))}
        </Reveal>
      </div>

      <Phase>Conclusion</Phase>
      <KeyTakeaways
        items={[
          {
            term: 'Main Insights',
            text: 'Research revealed that users struggled to quickly locate key HR functions due to information overload and unclear content hierarchy. By focusing on usability, task prioritization, and accessibility, the redesigned dashboard creates a more intuitive experience that supports day-to-day HR operations.',
          },
          {
            term: 'Testing And Feedback',
            text: 'This redesign taught me the value of balancing business requirements with user needs. It demonstrated how thoughtful information architecture, clear visual hierarchy, and user-centered design principles can transform a complex system into an efficient and enjoyable experience.',
          },
        ]}
      />
    </div>
  );
}
