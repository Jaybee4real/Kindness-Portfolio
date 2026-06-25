import styles from './CaseStudy.module.scss';
import Reveal from '../ui/Reveal';
import {
  CaseHero,
  Phase,
  Split,
  ProblemSolution,
  Persona,
  ProtoButton,
  KeyTakeaways,
  DesignedFor,
  Icons,
} from './CaseStudyParts';

const SLUG = 'e-split';

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const WEEK_ICONS = {
  search: (
    <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  ),
  wireframe: (
    <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  ),
  pen: (
    <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
  ),
  test: (
    <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
      <path d="M9 3h6M10 3v5L5 18a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-10V3" />
      <path d="M8.5 14h7" />
    </svg>
  ),
  file: (
    <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6M8 13h8M8 17h6" />
    </svg>
  ),
};

const WEEKS = [
  { phase: 'The Start', step: 'Research', time: '1 Week', icon: WEEK_ICONS.search },
  { phase: 'Research', step: 'Wireframe', time: '2 Week', icon: WEEK_ICONS.wireframe },
  { phase: 'Work', step: 'Ui Design', time: '3 Week', icon: WEEK_ICONS.pen },
  { phase: 'Redaction', step: 'Testing', time: '4 Week', icon: WEEK_ICONS.test },
  { phase: 'Final', step: 'Case Study', time: '5 Week', icon: WEEK_ICONS.file },
];

export default function ESplitCaseStudy() {
  return (
    <div className={styles.container}>
      <CaseHero
        slug={SLUG}
        kicker="E-Split Mobile App"
        subtitle="Fintech Mobile App Design • 2024"
        headline="An app designed to make sharing expenses among individuals simple, transparent, and stress-free."
        meta={[
          { label: 'Role', value: 'Lead UI/UX Designer' },
          { label: 'Timeframe', value: '5 weeks' },
          { label: 'Category', value: 'Fintech App' },
          { label: 'Team', value: 'Lead UI/UX Designer, Product Manager, Tech Lead' },
        ]}
        body={`This concept explores a digital feature that helps users divide group expenses, track who's paid, and send lighthearted reminders when payments are pending. Whether it's a dinner with friends, a group trip, or shared apartment bills, splitting costs can get messy, especially when it's time to remind someone who hasn't paid.\n\nThe goal was to create a simple, user-friendly experience that fits naturally into the way people already interact within their groups, making financial activities feel as effortless as social ones.`}
      />

      <ProblemSolution
        problem={{
          body: `Splitting expenses among friends should be simple, yet it often becomes difficult to track who has paid, who still owes money, and what the remaining balance is. Users are left juggling chat messages, bank transfers, and manual calculations, creating unnecessary friction in what should be a straightforward process.\n\nMany existing bill-splitting solutions also fail to reflect local payment habits, forcing users to switch between multiple apps just to verify transactions and settle expenses.`,
          chips: ['Uncomfortable Reminders', 'No Payment Support', 'Limited Group Visibility'],
        }}
        solution={{
          body: `E-Split streamlines group expense management by providing a centralized space where users can split bills, track payments, and manage balances in real time.\n\nAutomated reminders reduce the need for awkward follow-ups, while local payment integrations make it easier for users to pay and confirm transactions without leaving the app. The result is a simpler, more transparent experience that helps groups stay organized and settle expenses with less effort.`,
          chips: ['Clear Expense Tracking', 'Automated Payment Reminders', 'Local Payment Integration'],
        }}
      />

      <Reveal className={`${styles.section} ${styles.weeks}`} as="div">
        {WEEKS.map((week, index) => (
          <div key={week.step} className={styles.weekCol}>
            <div className={styles.weekPhase}>{week.phase}</div>
            <div className={styles.weekPill}>
              <span className={styles.weekIcon}>{week.icon}</span>
              <span className={styles.weekLabel}>{week.step}</span>
              <span className={styles.weekNum}>{index + 1}</span>
            </div>
            <div className={styles.weekTime}>{week.time}</div>
          </div>
        ))}
      </Reveal>

      <Phase>Empathize</Phase>

      <div className={styles.section}>
        <Split label="USER INTERVIEWS">
          <p className={styles.body}>
            Interviews focused on understanding how people currently track shared expenses, where
            the process breaks down, and the emotional friction around asking others for money.
          </p>
        </Split>
        <DesignedFor
          title="Who I was designing for"
          panel="panelWhite"
          cards={[
            { icon: Icons.users, title: 'Young Adults', body: 'Young adults and working professionals who frequently share costs within social groups' },
            { icon: Icons.users, title: 'Roommates', body: 'Roommates splitting rent and utilities, friend groups managing trip budgets' },
            { icon: Icons.briefcase, title: 'Colleagues', body: 'Colleagues organizing pooled payments for shared meals and events.' },
          ]}
        />
      </div>

      <Phase>Define</Phase>

      <Split label="USER PERSONA">
        <p className={styles.body}>
          By creating a user persona, I gained insight into the actual users&rsquo; needs, goals,
          and frustrations. Through empathy, I can provide a more meaningful user experience. The
          objective is to identify effective strategies to address the users&rsquo; needs and pain
          points, based on the user persona that has been created.
        </p>
      </Split>
      <Persona
        name="Olamide"
        role="The Everyday Organizer"
        photo={`/images/work/${SLUG}/persona.webp`}
        age="27"
        occupation="Marketing Lead"
        location="Abuja"
        feelings={['Hesitant', 'Stressed', 'Hopeful']}
        background="Olamide is the unofficial treasurer of every group she belongs to, the trip planner, the dinner-bill collector, the one who fronts the cash and chases everyone afterward. She's comfortable with mobile apps but tired of doing the math and the chasing herself."
        painPoints={[
          'Tracking who has paid and who still owes is messy.',
          'Awkward, repeated reminders strain friendships.',
          'Manual calculations are tedious and error-prone.',
          'Switching between chat, bank apps, and notes.',
          'No single shared view of a group’s balance.',
          'Local payment confirmation is hard to verify.',
        ]}
        needs={[
          'Split bills quickly and fairly without manual calculations while being able to pay using local bank.',
          'Keep a clear, shared record of who has paid and who hasn’t.',
          'Send reminders without feeling like the "annoying" friend.',
        ]}
        motivation={[
          'A single, transparent space the whole group can see.',
          'Automated, friendly reminders that remove the social tension.',
          'Local payment integration to settle instantly to feel organized and in control without doing all the work.',
        ]}
      />

      <Phase>Ideate</Phase>

      <div className={styles.section}>
        <Split label="MID-FIDELITY WIREFRAMES">
          <p className={styles.body}>
            With mid-fidelity wireframes, I can concentrate on the layout and hierarchy without
            being distracted by aesthetic details. This stage is crucial for obtaining feedback and
            making modifications before moving forward.
          </p>
        </Split>
        <Reveal className={styles.galleryFlex} as="div">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <img key={n} src={`/images/work/${SLUG}/midfi-${n}.webp`} alt="" style={{ height: 460 }} />
          ))}
        </Reveal>
      </div>

      <div className={styles.section}>
        <Split label="HIGH-FIDELITY WIREFRAMES">
          <p className={styles.body}>
            With incorporating the design choices to the mid-fidelity wireframes, I&rsquo;m able to
            see a clearer representation of the final product. It&rsquo;s important to stay true to
            the brand&rsquo;s identity and values by staying consistent with the content and style
            throughout the application. By creating these wireframes, I&rsquo;m able to move forward
            with prototyping and effectively bring these designs to life.
          </p>
        </Split>
        <Reveal className={styles.galleryFlex} as="div">
          <img src={`/images/work/${SLUG}/hifi-hero-1.webp`} alt="" style={{ height: 460 }} />
          <img src={`/images/work/${SLUG}/hifi-hero-2.webp`} alt="" style={{ height: 460 }} />
        </Reveal>

        <Reveal className={styles.annRow} as="div">
          <div className={styles.annPhones}>
            <img src={`/images/work/${SLUG}/hifi-home.webp`} alt="" />
          </div>
          <div className={styles.annText}>
            <div className={styles.annTitle}>Homepage</div>
            <p className={styles.annDesc}>
              The Homepage serves as a user&rsquo;s starting point. It displays pending payments,
              current group splits, and quick actions like &ldquo;Split New Bill&rdquo; or
              &ldquo;Send Reminder.&rdquo; The layout is designed for clarity. Users can instantly
              see what&rsquo;s due, who they owe, and access their most active groups.
            </p>
          </div>
        </Reveal>
        <Reveal className={`${styles.annRow} ${styles.annReverse}`} as="div">
          <div className={styles.annPhones}>
            <img src={`/images/work/${SLUG}/hifi-split.webp`} alt="" />
          </div>
          <div className={styles.annText}>
            <div className={styles.annTitle}>Split Bill Screen</div>
            <p className={styles.annDesc}>
              This screen allows users to create a new shared expense in seconds. They can enter the
              bill name, total amount, and set a due date. An integrated reminder option lets them
              schedule notifications ensuring payments aren&rsquo;t forgotten.
            </p>
          </div>
        </Reveal>
        <Reveal className={styles.annRow} as="div">
          <div className={styles.annPhones}>
            <img src={`/images/work/${SLUG}/hifi-details.webp`} alt="" />
          </div>
          <div className={styles.annText}>
            <div className={styles.annTitle}>Split Details Screen</div>
            <p className={styles.annDesc}>
              This screen shows how the total expense is divided among group members. Each
              person&rsquo;s share and contact are clearly displayed for transparency. The event
              summary sits at the top, while a bold &ldquo;Go to Payment&rdquo; button guides users
              to confirm or complete their payment.
            </p>
          </div>
        </Reveal>
      </div>

      <div className={styles.section}>
        <h2 className={styles.centerTitle}>MAIN SCREENS</h2>
        <Reveal className={styles.galleryFlex} as="div" delay={0.05}>
          {Array.from({ length: 8 }).map((_, index) => (
            <img key={index} src={`/images/work/${SLUG}/main-${index + 1}.webp`} alt="" style={{ height: 380 }} />
          ))}
        </Reveal>
        <Reveal as="div">
          <ProtoButton />
        </Reveal>
      </div>

      <div className={styles.section}>
        <Split label="Test">
          <p className={styles.body}>
            The testing consisted of four participants, all of whom regularly split costs within
            friend groups or shared apartments. They were asked to create a new split bill from
            scratch, and then open an existing group split to check who had paid and send a reminder
            to anyone who hadn&rsquo;t. The goal was to see how easily users navigated the core flow,
            gather feedback on the look, and functionality, and identify any points of confusion in
            the layout.
          </p>
          <p className={styles.body} style={{ marginTop: 24 }}>
            The main point of confusion appeared on the Split The Bill screen. Because every member
            displayed the same amount with no visual difference between someone who had already paid
            and someone who still owed, participants couldn&rsquo;t tell at a glance where the group
            actually stood.
          </p>
        </Split>
        <Reveal className={styles.beforeAfter} as="div">
          <div className={styles.baCol}>
            <div className={styles.baLabel}>Before Testing</div>
            <img src={`/images/work/${SLUG}/test-before.webp`} alt="Before testing" />
          </div>
          <div className={styles.baCol}>
            <div className={styles.baLabel}>After Testing</div>
            <img src={`/images/work/${SLUG}/test-after.webp`} alt="After testing" />
          </div>
        </Reveal>
        <p className={styles.baCaption}>
          After making that change, each member now carries a clear &ldquo;Paid&rdquo; or
          &ldquo;Pending&rdquo; tag, and a settled-amount tracker, so users can instantly see where
          the group stands and send reminders only to those who still owe.
        </p>
      </div>

      <Phase>Conclusion</Phase>
      <KeyTakeaways
        items={[
          { term: 'Designing For Trust and Transparency', text: 'The biggest lesson from E-Split was that clarity isn’t a visual nicety, it’s the product. Every decision, from showing payment status at a glance to keeping a shared record everyone can see, came back to reducing doubt so groups could settle up without second-guessing one another.' },
          { term: 'Testing Reveals What Assumptions Hide', text: 'The Split The Bill screen looked complete until real users tried it and couldn’t tell who had actually paid. The takeaway is that early, honest testing isn’t a final checkbox, it’s how a design earns its way to done.' },
          { term: 'Meeting Users Where They Already Are', text: 'E-Split fit into how people already handle money and friendships, rather than asking them to change their habits. The best solution removes friction from existing behavior instead of inventing new behavior to learn.' },
        ]}
      />
    </div>
  );
}
