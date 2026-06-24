import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UpdateCaseStudy from '@/components/casestudy/UpdateCaseStudy';
import OrangeHrmCaseStudy from '@/components/casestudy/OrangeHrmCaseStudy';
import ESplitCaseStudy from '@/components/casestudy/ESplitCaseStudy';
import KeyFundCaseStudy from '@/components/casestudy/KeyFundCaseStudy';
import styles from './caseStudy.module.scss';

const CASES = {
  update: { title: 'Update App' },
  'orange-hrm': { title: 'Orange HRM' },
  'e-split': { title: 'E-Split App' },
  keyfund: { title: 'KeyFund Real-Estate App' },
};

const CUSTOM = {
  update: UpdateCaseStudy,
  'orange-hrm': OrangeHrmCaseStudy,
  'e-split': ESplitCaseStudy,
  keyfund: KeyFundCaseStudy,
};

export function generateStaticParams() {
  return Object.keys(CASES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const caseStudy = CASES[slug];
  return {
    title: caseStudy
      ? `${caseStudy.title} — Kindness Ukandu`
      : 'Case Study — Kindness Ukandu',
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const caseStudy = CASES[slug];
  if (!caseStudy) notFound();

  const Custom = CUSTOM[slug];

  return (
    <>
      <Navbar />
      <main className={styles.customBody}>
        <Custom />
      </main>
      <Footer />
    </>
  );
}
