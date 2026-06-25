import Image from 'next/image';
import styles from './CaseStudy.module.scss';
import Reveal from '../ui/Reveal';
import {
  CaseHero,
  Phase,
  Split,
  ProcessGrid,
  ProblemSolution,
  Persona,
  ProtoButton,
  KeyTakeaways,
  DesignedFor,
  TakeawaysPanel,
  Icons,
} from './CaseStudyParts';

const SLUG = 'keyfund';

const MIDFI_HEIGHTS = {
  1: 962,
  2: 1202,
  3: 994,
  4: 1826,
  5: 1004,
  6: 996,
  7: 994,
};

export default function KeyFundCaseStudy() {
  return (
    <div className={styles.container}>
      <CaseHero
        slug={SLUG}
        kicker="KeyFund Real-Estate App"
        subtitle="Real Estate Mobile App Design • 2025"
        headline="An app that opens global real estate investing to everyone, no matter where they start."
        meta={[
          { label: 'Role', value: 'Sole UI/UX Designer' },
          { label: 'Timeframe', value: '6 weeks' },
          { label: 'Category', value: 'Real Estate App' },
          {
            label: 'Team',
            value: 'UI/UX Designer, Product Manager, Tech Lead',
          },
        ]}
        body={`As KeyFund is an AI-powered investment app that lets people in Africa, and anyone around the world with limited capital, invest in global real estate transparently and securely. By breaking down high-value properties into affordable, fractional shares, KeyFund turns an opportunity once reserved for the wealthy into something an everyday investor can access from their phone.\n\nThe goal was to design an experience that removes the three biggest barriers to real estate investing, cost, trust, and knowledge, and replaces them with a simple, guided, and verifiable path to building wealth.`}
      />

      <ProblemSolution
        problem={{
          body: `Accessing high-value real estate investments remains difficult for some Africans due to high entry costs, leaving wealth-building opportunities out of reach for everyday investors. As a result, many people are unable to participate in assets that have traditionally helped generate long-term financial growth and stability.\n\nTrust concerns, investment risks, and limited financial knowledge often discourage participation. Without transparency, guidance, or confidence in opportunities, many potential investors remain on the sidelines.`,
          chips: [
            'Trust Concerns',
            'High Costs',
            'Limited Financial Knowledge',
          ],
        }}
        solution={{
          body: `KeyFund makes real estate investing more accessible by allowing users to start with as little as $50 through fractional ownership. Instead of needing large amounts of capital to purchase entire properties, investors can own a share of high-value real estate and earn returns based on their investment.\n\nAI verifies every property through legal, financial, and market checks before listing, while built-in guidance helps investors evaluate opportunities, understand risks, and make informed decisions with confidence.`,
          chips: [
            'Affordable Entry Cost',
            'AI Verified Checks',
            'Transparency and Trustworthiness',
          ],
        }}
      />

      <ProcessGrid />

      <Phase>Empathize</Phase>

      <div className={styles.section}>
        <Split label="USER INTERVIEWS">
          <p className={styles.body}>
            My design research centered on understanding how everyday people
            perceive real estate investing — and why so many capable savers
            never start.
          </p>
        </Split>
        <DesignedFor
          title="Who I was designing for"
          panel="panelWhite"
          cards={[
            {
              icon: Icons.briefcase,
              title: 'Young Professionals',
              body: 'Salaried earners in their 20s and 30s with some disposable income, eager to grow their money but priced out of property and unsure where to begin.',
            },
            {
              icon: Icons.compass,
              title: 'First-Time Investors',
              body: 'People who have never invested before and are wary of anything that sounds complex, risky, or "too good to be true."',
            },
            {
              icon: Icons.globe,
              title: 'Diaspora Investors',
              body: 'Members of the African diaspora who want to invest back home or globally but distrust the verification and fund-management process from a distance.',
            },
          ]}
        />
        <TakeawaysPanel
          items={[
            'Almost everyone interviewed assumed real estate was for rich people. The high minimum buy-in stopped them before they ever explored it.',
            'Past exposure to scams and opaque schemes made participants deeply cautious. They wanted proof like documents, verification, and visibility, not marketing.',
            'Users didn’t just want access; they wanted to understand what they were buying. Jargon and unexplained risk pushed them away, while plain-language guidance pulled them in.',
          ]}
        />
      </div>

      <Phase>Define</Phase>

      <Split label="USER PERSONA">
        <p className={styles.body}>
          By creating a user persona, I gained insight into the actual
          users&rsquo; needs, goals, and frustrations. Through empathy, I can
          provide a more meaningful user experience. The objective is to
          identify effective strategies to address the users&rsquo; needs and
          pain points, based on the user persona that has been created.
        </p>
      </Split>
      <Persona
        name="Chinedu"
        role="The Cautious First-Timer"
        photo={`/images/work/${SLUG}/persona.webp`}
        age="34"
        occupation="Business Owner"
        location="Port Harcourt"
        feelings={['Hesitant', 'Distrustful', 'Hopeful']}
        background="Chinedu owns a business and saves consistently, but his money mostly sits in a regular account losing value to inflation. He's heard real estate is one of the best ways to build wealth, but every option he's found needs capital he doesn't have, or feels like a risk he can't verify. He's smart and ambitious, but cautious with his money."
        painPoints={[
          'High minimum investments lock him out.',
          'No idea how to evaluate a property or its risk.',
          'Fear of scams and hidden fees in cross-border deals.',
          'Existing platforms feel intimidating and jargon-heavy.',
        ]}
        needs={[
          'See clear proof that properties and platforms are legitimate.',
          'Understand opportunities without needing a finance degree.',
          'Start investing with a small, manageable amount.',
          'Grow his savings into an asset that outpaces inflation.',
          'Track his money and returns in real time while building a portfolio gradually.',
        ]}
        motivation={[
          '"I want to grow my money into something real — but I need to trust where it’s going and actually understand what I’m doing."',
        ]}
      />

      <Phase>Ideate</Phase>

      <div className={styles.section}>
        <Split label="MID-FIDELITY WIREFRAMES">
          <p className={styles.body}>
            With mid-fidelity wireframes, I can concentrate on the layout and
            hierarchy without being distracted by aesthetic details. This stage
            is crucial for obtaining feedback and making modifications before
            moving forward.
          </p>
        </Split>
        <Reveal className={styles.galleryFlex} as="div">
          {[1, 2, 3, 4, 5, 6, 7].map((n) => (
            <Image
              key={n}
              src={`/images/work/${SLUG}/midfi-${n}.webp`}
              alt=""
              width={532}
              height={MIDFI_HEIGHTS[n]}
              style={{ height: 340, width: 'auto' }}
            />
          ))}
        </Reveal>
      </div>

      <div className={styles.section}>
        <Split label="HIGH-FIDELITY WIREFRAMES">
          <p className={styles.body}>
            With the high-fidelity designs, I translated the structure into a
            clean, trustworthy interface. Because trust was the central
            challenge, the visual system leans on clarity: generous spacing,
            confident typography, verification badges, and real-time data shown
            openly. Every screen is designed to make a cautious user feel
            informed and in control.
          </p>
        </Split>
        <Reveal className={styles.annRow} as="div">
          <div className={styles.annPhones}>
            <Image
              src={`/images/work/${SLUG}/hifi-1.webp`}
              alt=""
              width={688}
              height={1392}
            />
            <Image
              src={`/images/work/${SLUG}/hifi-2.webp`}
              alt=""
              width={688}
              height={1392}
            />
          </div>
          <div className={styles.annText}>
            <div className={styles.annTitle}>Onboarding Screens</div>
            <p className={styles.annDesc}>
              A short, friendly onboarding that explains fractional ownership in
              seconds and gets users to their first opportunity quickly, without
              overwhelming them.
            </p>
          </div>
        </Reveal>
        <Reveal className={`${styles.annRow} ${styles.annReverse}`} as="div">
          <div className={styles.annPhones}>
            <Image
              src={`/images/work/${SLUG}/hifi-3.webp`}
              alt=""
              width={688}
              height={1392}
            />
          </div>
          <div className={styles.annText}>
            <div className={styles.annTitle}>Homepage / Dashboard</div>
            <p className={styles.annDesc}>
              The home screen surfaces portfolio value, returns at a glance, and
              curated, verified opportunities, so users see both their progress
              and their next move.
            </p>
          </div>
        </Reveal>
        <Reveal className={styles.annRow} as="div">
          <div className={styles.annPhones}>
            <Image
              src={`/images/work/${SLUG}/hifi-4.webp`}
              alt=""
              width={484}
              height={978}
            />
            <Image
              src={`/images/work/${SLUG}/hifi-5.webp`}
              alt=""
              width={484}
              height={978}
            />
            <Image
              src={`/images/work/${SLUG}/hifi-6.webp`}
              alt=""
              width={484}
              height={978}
            />
          </div>
          <div className={styles.annText}>
            <div className={styles.annTitle}>Property Detail Screen</div>
            <p className={styles.annDesc}>
              Each listing shows verification status, AI-generated risk and
              opportunity summaries, projected returns, and a transparent fee
              breakdown, all in plain language.
            </p>
          </div>
        </Reveal>
      </div>

      <div className={styles.section}>
        <h2 className={styles.centerTitle}>MAIN SCREENS</h2>
        <Reveal className={styles.galleryFlex} as="div" delay={0.05}>
          {Array.from({ length: 10 }).map((_, index) => (
            <Image
              key={index}
              src={`/images/work/${SLUG}/main-${index + 1}.webp`}
              alt=""
              width={388}
              height={786}
              style={{ height: 360, width: 'auto' }}
            />
          ))}
        </Reveal>
        <Reveal as="div">
          <ProtoButton />
        </Reveal>
      </div>

      <Phase>Conclusion</Phase>
      <KeyTakeaways
        items={[
          {
            term: 'Designing for trust is a feature',
            text: 'The biggest lesson from KeyFund was that trust is built by making verification, and fund movement visible at every decision point. Transparency had to be designed into the flow, not added on top.',
          },
          {
            term: 'Meeting users where their confidence is',
            text: 'Cautious, first-time investors need fewer unknowns. Plain-language guidance and AI explanations did more for adoption than any single screen, because they removed the fear that kept people from starting.',
          },
          {
            term: 'Accessibility means more than affordability',
            text: 'Lowering the entry point to $50 opened the door, but real accessibility meant pairing low cost with clarity and education so users could afford to invest and actually understand and trust what they were doing.',
          },
        ]}
      />
    </div>
  );
}
