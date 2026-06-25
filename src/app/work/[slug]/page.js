import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UpdateCaseStudy from '@/components/casestudy/UpdateCaseStudy';
import OrangeHrmCaseStudy from '@/components/casestudy/OrangeHrmCaseStudy';
import ESplitCaseStudy from '@/components/casestudy/ESplitCaseStudy';
import KeyFundCaseStudy from '@/components/casestudy/KeyFundCaseStudy';
import Lightbox from '@/components/casestudy/Lightbox';
import { CASE_STUDIES } from '@/lib/links';
import { SITE, SITE_URL } from '@/lib/site';
import styles from './caseStudy.module.scss';

const CASES = Object.fromEntries(
  CASE_STUDIES.map((study) => [study.slug, study]),
);

const CUSTOM = {
  update: UpdateCaseStudy,
  'orange-hrm': OrangeHrmCaseStudy,
  'e-split': ESplitCaseStudy,
  keyfund: KeyFundCaseStudy,
};

export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const caseStudy = CASES[slug];
  if (!caseStudy) {
    return { title: 'Case Study' };
  }
  const description = caseStudy.desc;
  const url = `/work/${slug}`;
  const og = `/og/${slug}.png`;
  return {
    title: `${caseStudy.title} — ${caseStudy.category} Case Study`,
    description,
    keywords: [caseStudy.title, caseStudy.category, ...SITE.keywords],
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: `${caseStudy.title} — Case Study`,
      description,
      images: [
        {
          url: og,
          width: 1200,
          height: 630,
          alt: `${caseStudy.title} case study`,
        },
      ],
    },
    twitter: {
      title: `${caseStudy.title} — Case Study`,
      description,
      images: [og],
    },
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const caseStudy = CASES[slug];
  if (!caseStudy) notFound();

  const Custom = CUSTOM[slug];

  const caseLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: `${caseStudy.title} — Case Study`,
    headline: caseStudy.title,
    description: caseStudy.desc,
    url: `${SITE_URL}/work/${slug}`,
    image: `${SITE_URL}/og/${slug}.png`,
    genre: caseStudy.category,
    inLanguage: 'en',
    author: { '@type': 'Person', name: SITE.author, url: SITE_URL },
    creator: { '@type': 'Person', name: SITE.author },
    isPartOf: { '@type': 'WebSite', name: SITE.title, url: SITE_URL },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseLd) }}
      />
      <Navbar />
      <main className={styles.customBody} data-lightbox-root>
        <Custom />
      </main>
      <Lightbox />
      <Footer />
    </>
  );
}
