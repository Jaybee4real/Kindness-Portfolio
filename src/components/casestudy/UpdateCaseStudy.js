import Image from 'next/image';
import styles from './CaseStudy.module.scss';
import Reveal from '../ui/Reveal';
import { TakeawaysPanel } from './CaseStudyParts';
import { PROTOTYPES } from '@/lib/links';

const META = [
  { label: 'Role', value: 'Product Designer' },
  { label: 'Timeframe', value: '2 months' },
  { label: 'Category', value: 'Social Networking App' },
  { label: 'Team', value: 'Product Designer, Product Manager, Tech Lead' },
];

const PROCESS = [
  { title: 'Analysis', items: ['User Personas', 'Functional Analysis'] },
  {
    title: 'Research',
    items: [
      'User Flow',
      'Information Architecture',
      'User Interviews',
      'Competitor Analysis',
    ],
  },
  {
    title: 'Prototyping',
    items: [
      'Service Structure',
      'Wireframes (Low-fidelity)',
      'Functional Prototype',
      'Technical Specialization',
    ],
  },
  {
    title: 'Design',
    items: ['Visual Concept', 'Design System', 'App Icon', 'High-Fidelity UI'],
  },
  {
    title: 'Test',
    items: [
      'Interactive Prototype',
      'Animation',
      'Main flow Testing',
      'Specification for a Developer',
    ],
  },
];

function Phase({ children }) {
  return (
    <Reveal className={styles.phase} as="div">
      <span />
      <h2>{children}</h2>
      <span />
    </Reveal>
  );
}

export default function UpdateCaseStudy() {
  return (
    <div className={styles.container}>
      {/* HERO */}
      <Reveal className={styles.heroPhones} as="div" y={20}>
        {[1, 2, 3, 4, 5].map((n) => (
          <Image
            key={n}
            src={`/images/work/update/hero-${n}.webp`}
            alt=""
            width={470}
            height={952}
          />
        ))}
      </Reveal>

      <div className={styles.heroText}>
        <Reveal className={styles.heroMain} as="div">
          <span className={styles.kicker}>Update App</span>
          <p className={styles.heroSub}>
            Social Networking Mobile App Design • 2026
          </p>
          <h1 className={styles.heroHeadline}>
            One App, Several Experiences:
            <br />
            Discover Updates And Connect With People From All Over The World.
          </h1>
          <p className={`${styles.body} ${styles.heroOverview}`}>
            {`As part of a client project, I created Update Social Networking app, an application designed to enable users discover updates from all around the world through location-based rooms, while being able to connect with individuals from all around the world.\n\nI ran a focused UX audit and delivered a rapid design, streamlined navigation, tightened visual hierarchy, while prioritizing high-impact features that aligned with the client's vision and goal.`}
          </p>
        </Reveal>
        <Reveal
          className={`${styles.heroMeta} ${styles.heroMetaCard}`}
          as="div"
          delay={0.1}
        >
          {META.map((item) => (
            <div key={item.label}>
              <div className={styles.metaLabel}>{item.label}</div>
              <div className={styles.metaValue}>{item.value}</div>
            </div>
          ))}
        </Reveal>
      </div>

      {/* PROBLEM / SOLUTION */}
      <Reveal className={`${styles.section} ${styles.cols2}`} as="div">
        <div className={styles.col}>
          <h2 className={styles.label}>PROBLEM</h2>
          <p className={`${styles.body} ${styles.colBody}`}>
            {`Despite the rise of social media, many users and creators struggle to connect with the right people. Research also shows that users often experience fatigue and frustration, as a result of social media information overload\n\nThat means small brands and creators struggle to be seen because their content aren't reaching the right audience at the right time. A 2026 creator survey found that 51.7% of creators identified the algorithm's unpredictability as their biggest challenge, which makes it difficult for them to reach their audience.`}
          </p>
          <div className={styles.chips}>
            <span className={styles.chip}>Limited Brand Visibility</span>
            <span className={styles.chip}>Fragmented Communities</span>
            <span className={`${styles.chip} ${styles.chipBlue}`}>
              Low Content Discoverability
            </span>
          </div>
        </div>
        <div className={styles.col}>
          <h2 className={styles.label}>SOLUTION</h2>
          <p className={`${styles.body} ${styles.colBody}`}>
            {`Update helps users to discover and join communities based on location and shared interests rather than only engagement-driven feeds. It connects people with relevant rooms, discussions, and audiences so users can find conversations that matter to them and creators gain a better access to people who are genuinely interested in their content.\n\nInstead of getting lost in algorithm-driven feeds, users engage in focused communities where visibility is higher, conversations are more meaningful, and growing a personal brand feels natural.`}
          </p>
          <div className={styles.chips}>
            <span className={styles.chip}>Organic Brand Growth</span>
            <span className={styles.chip}>Room-Based Communities</span>
            <span className={`${styles.chip} ${styles.chipBlue}`}>
              Contextual Discovery
            </span>
          </div>
        </div>
      </Reveal>

      {/* PROCESS GRID */}
      <Reveal className={`${styles.section} ${styles.process}`} as="div">
        {PROCESS.map((col, index) => (
          <div key={col.title} className={styles.procCol}>
            <div className={styles.procDot}>
              <span
                className={styles.procPie}
                style={{ '--fill': `${(index + 1) * 20}%` }}
              />
            </div>
            <span className={styles.procLine} />
            <h3 className={styles.procTitle}>{col.title}</h3>
            <ul className={styles.procList}>
              {col.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>

      {/* EMPATHETIZE */}
      <Phase>Empathize</Phase>

      {/* USER INTERVIEWS */}
      <Reveal className={`${styles.section} ${styles.split}`} as="div">
        <div className={styles.splitLabel}>
          <h2 className={styles.label}>USER INTERVIEWS</h2>
        </div>
        <div className={styles.splitBody}>
          <p className={styles.body}>
            I interviewed four participants who who were all creators and small
            business owners but do not have an audience. Hearing things from
            their point of view, helped me gain an in depth understanding of the
            participants&rsquo; backgrounds and struggles so I&rsquo;m able to
            find effective ways to help fill their needs and achieve their goals
          </p>
        </div>
      </Reveal>

      <TakeawaysPanel
        items={[
          'Many participants said they often encounter content that doesn’t match their interests and find it difficult to locate communities that align with their hobbies or goals.',
          'Creators and regular users expressed frustration that posts often fail to reach the right audience, regardless of content quality.',
          'Participants reported feeling that existing social media platforms prioritizes engagement metrics over genuine conversations which felt tiring to them.',
        ]}
      />

      {/* DEFINE */}
      <Phase>Define</Phase>

      {/* PERSONA */}
      <Reveal className={`${styles.section} ${styles.split}`} as="div">
        <div className={styles.splitLabel}>
          <h2 className={styles.label}>USER PERSONA</h2>
        </div>
        <div className={styles.splitBody}>
          <p className={styles.body}>
            By creating a user persona, I gain insights into the actual
            users&rsquo; needs, goals, and frustrations. Through empathy, I can
            provide a more meaningful user experience. The objective is to
            identify effective strategies to address the users&rsquo; needs and
            pain points, based on the user persona that has been created.
          </p>
        </div>
      </Reveal>

      <Reveal className={styles.personaCard} as="div">
        <div className={styles.personaId}>
          <div className={styles.personaName}>Amina</div>
          <div className={styles.personaRole}>The Emerging Creator</div>
          <Image
            className={styles.personaPhoto}
            src="/images/work/update/persona.webp"
            alt="Amina"
            width={518}
            height={518}
          />
          <div className={styles.personaMeta}>
            Age: 23
            <br />
            Occupation: Content Creator
            <br />
            Location: Lagos State
          </div>
          <div className={styles.feelings}>
            {['Hesitant', 'Overwhelmed', 'Curious', 'Hesitant', 'Hopeful'].map(
              (feel, index) => (
                <span key={index} className={styles.feelPill}>
                  {feel}
                </span>
              ),
            )}
          </div>
        </div>

        <div>
          <div className={styles.personaGroup}>
            <div className={styles.personaBlockTitle}>Background</div>
            <p className={styles.body} style={{ fontSize: 20 }}>
              Amina is a lifestyle creator based in Lagos who shares content
              about fashion, entrepreneurship, and personal growth. She spends
              hours creating high-quality content, engaging with her audience,
              and promoting her products. Despite her efforts, Amina often
              struggles to get her content in front of people who are genuinely
              interested in her niche. She feels like she&rsquo;s competing
              against algorithms rather than connecting with real communities.
            </p>
          </div>
          <div className={styles.personaGroup}>
            <div className={styles.personaBlockTitle}>Pain Points</div>
            <ul className={styles.personaList}>
              <li>Content visibility depends heavily on algorithms.</li>
              <li>Post not reaching the right audience.</li>
              <li>Growth feels inconsistent, making business difficult.</li>
              <li>Difficulty discovering niche communities interested.</li>
              <li>Extra time and effort to build loyal audience.</li>
              <li>Superficial interactions focused on likes and engagement</li>
            </ul>
          </div>
        </div>

        <div>
          <div className={styles.personaGroup}>
            <div className={styles.personaBlockTitle}>Need / Goals</div>
            <ul className={styles.personaList}>
              <li>
                Find communities that genuinely care about her content and
                expertise.
              </li>
              <li>
                Build deeper relationships with followers and potential
                customers.
              </li>
              <li>
                Grow her audience organically within relevant communities.
              </li>
              <li>
                Turn her content creation into a sustainable source of income.
              </li>
            </ul>
          </div>
          <div className={styles.personaGroup}>
            <div className={styles.personaBlockTitle}>Motivation</div>
            <ul className={styles.personaList}>
              <li>Establish herself as a trusted voice in her niche.</li>
              <li>
                Gain recognition for the value she provides rather than her
                ability to &ldquo;beat the algorithm.&rdquo;
              </li>
            </ul>
          </div>
        </div>
      </Reveal>

      {/* IDEATE */}
      <Phase>Ideate</Phase>

      {/* MID-FIDELITY */}
      <div className={styles.section}>
        <Reveal className={`${styles.split} ${styles.galleryHeader}`} as="div">
          <div className={styles.splitLabel}>
            <h2 className={styles.label}>MID-FIDELITY WIREFRAMES</h2>
          </div>
          <div className={styles.splitBody}>
            <p className={styles.body}>
              With mid-fidelity wireframes, I can concentrate on the layout and
              hierarchy without being distracted by aesthetic details. This
              stage is crucial for obtaining feedback and making modifications
              before moving forward.
            </p>
          </div>
        </Reveal>
        <Reveal className={styles.grid4} as="div">
          {Array.from({ length: 8 }).map((_, index) => (
            <Image
              key={index}
              src={`/images/work/update/midfi-${index + 1}.webp`}
              alt=""
              width={532}
              height={1152}
            />
          ))}
        </Reveal>
      </div>

      {/* PROTOTYPE */}
      <Phase>Prototype</Phase>

      {/* HIGH-FIDELITY */}
      <div className={styles.section}>
        <Reveal className={`${styles.split} ${styles.galleryHeader}`} as="div">
          <div className={styles.splitLabel}>
            <h2 className={styles.label}>HIGH-FIDELITY WIREFRAMES</h2>
          </div>
          <div className={styles.splitBody}>
            <p className={styles.body}>
              With incorporating the design choices to the mid-fidelity
              wireframes I&rsquo;m able to see a clearer representation of the
              final product. It&rsquo;s important to stay true to the brands
              identity and values by staying consistent with the content and
              style throughout the application. By creating these wireframes,
              I&rsquo;m able to move forward with prototyping and effectively
              bring these designs to life.
            </p>
          </div>
        </Reveal>
        <div className={styles.hifi}>
          <Reveal className={styles.hifiRow} as="div">
            <Image
              src="/images/work/update/hifi-1.webp"
              alt=""
              width={1212}
              height={976}
              style={{ flex: 606 }}
            />
            <Image
              src="/images/work/update/hifi-2.webp"
              alt=""
              width={1210}
              height={976}
              style={{ flex: 605 }}
            />
          </Reveal>
          <Reveal className={styles.hifiRow} as="div">
            <Image
              src="/images/work/update/hifi-3.webp"
              alt=""
              width={1646}
              height={1778}
              style={{ flex: 823 }}
            />
            <Image
              src="/images/work/update/hifi-4.webp"
              alt=""
              width={786}
              height={1782}
              style={{ flex: 393 }}
            />
          </Reveal>
          <Reveal className={styles.hifiRow} as="div">
            <Image
              src="/images/work/update/hifi-5.webp"
              alt=""
              width={786}
              height={1782}
              style={{ flex: 393 }}
            />
            <Image
              src="/images/work/update/hifi-6.webp"
              alt=""
              width={1646}
              height={1778}
              style={{ flex: 823 }}
            />
          </Reveal>
        </div>
      </div>

      {/* PROTOTYPE GRID */}
      <Reveal className={styles.section} as="div">
        <div className={styles.grid6}>
          {Array.from({ length: 12 }).map((_, index) => (
            <Image
              key={index}
              src={`/images/work/update/proto-${index + 1}.webp`}
              alt=""
              width={348}
              height={704}
            />
          ))}
        </div>
        <a
          href={PROTOTYPES.update}
          target="_blank"
          rel="noreferrer"
          className={styles.protoBtn}
        >
          View Prototype →
        </a>
      </Reveal>

      {/* TEST */}
      <div className={styles.section}>
        <Reveal className={styles.split} as="div">
          <div className={styles.splitLabel}>
            <h2 className={styles.label}>Test</h2>
          </div>
          <div className={styles.splitBody}>
            <p className={styles.body}>
              The goal of this test is to understand how users navigate and
              complete the tasks within the app. I want to see if there&rsquo;s
              any confusion with locating resources/topics/strategies and how
              smooth and quickly it is to add it to their schedule. The tasks
              include signing up/picking topics, finding more topics from home
              screen, and lastly adding a strategy to their schedule
            </p>
            <p className={styles.body} style={{ marginTop: 24 }}>
              Participants felt the overall look was visually appealing and
              clean. They liked how simple it was to navigate through and most
              enjoyed the personalization throughout the application. Some
              participants mentioned they would change some details regarding
              the adding strategy screen.
            </p>
          </div>
        </Reveal>
        <Reveal className={styles.beforeAfter} as="div">
          <div className={styles.baCol}>
            <div className={styles.baLabel}>Before Testing</div>
            <Image
              src="/images/work/update/test-before.webp"
              alt="Before testing"
              width={668}
              height={1352}
            />
          </div>
          <div className={styles.baCol}>
            <div className={styles.baLabel}>After Testing</div>
            <Image
              src="/images/work/update/test-after.webp"
              alt="After testing"
              width={668}
              height={1352}
            />
          </div>
        </Reveal>
        <p className={styles.baCaption}>
          People had trouble finding the Discover feature when it was hidden
          inside Explore and they recommended giving it its own navigation tab.
          After making that change, it became much easier to discover. The
          Notifications was also to a more noticeable spot, so now updates,
          messages, and community activity are easier and faster to reach.
        </p>
      </div>

      {/* CONCLUSION */}
      <Phase>Conclusion</Phase>

      <Reveal className={`${styles.section} ${styles.split}`} as="div">
        <div className={styles.splitLabel}>
          <h2 className={styles.label}>KEY TAKEAWAYS</h2>
        </div>
        <div className={styles.splitBody}>
          <p className={styles.body}>
            <span className={styles.keyTerm}>Empathizing With The User :</span>{' '}
            Understanding the users pain points, needs, and goals allows the
            designer to be able to provide a better user experience, reducing
            confusion and frustration
          </p>
          <p className={styles.body} style={{ marginTop: 24 }}>
            <span className={styles.keyTerm}>Testing And Feedback :</span> These
            steps throughout the design process are necessary for designers so
            that they are able to identify any issues and make improvements to
            the design.
          </p>
          <p className={styles.body} style={{ marginTop: 24 }}>
            <span className={styles.keyTerm}>Accessibility :</span> It&rsquo;s
            crucial that the design is inclusive and accessible to everyone,
            including individuals with disabilities.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
