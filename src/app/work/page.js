import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CaseStudiesIndex from '@/components/sections/CaseStudiesIndex';

const DESCRIPTION =
  'Selected UI/UX & product design case studies by Kindness Ukandu — the problems, the process, and the outcomes across fintech, social, real-estate, and HR products.';

export const metadata = {
  title: 'Case Studies',
  description: DESCRIPTION,
  alternates: { canonical: '/work' },
  openGraph: {
    title: 'Case Studies — Kindness Ukandu',
    description: DESCRIPTION,
    url: '/work',
    images: ['/og/default.png'],
  },
  twitter: {
    title: 'Case Studies — Kindness Ukandu',
    description: DESCRIPTION,
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main>
        <CaseStudiesIndex />
      </main>
      <Footer />
    </>
  );
}
