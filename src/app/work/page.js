import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CaseStudiesIndex from '@/components/sections/CaseStudiesIndex';

export const metadata = {
  title: 'Case Studies — Kindness Ukandu',
  description:
    'Selected UI/UX case studies by Kindness Ukandu — the problems, the process, and the outcomes.',
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
