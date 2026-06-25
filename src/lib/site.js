import { LINKS } from './links';

// Set NEXT_PUBLIC_SITE_URL in the deploy environment to the live domain.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://kindnessukandu.com'
).replace(/\/$/, '');

const DESCRIPTION =
  'Kindness Ukandu is a Lagos-based UI/UX & product designer with 4+ years crafting intuitive, user-centered web and mobile experiences for startups, fintech, and global teams. Explore selected case studies.';

export const SITE = {
  url: SITE_URL,
  name: 'Kindness Ukandu',
  title: 'Kindness Ukandu — Product Designer & UI/UX Portfolio',
  description: DESCRIPTION,
  author: 'Kindness Ukandu',
  jobTitle: 'Product Designer',
  location: 'Lagos, Nigeria',
  locale: 'en_US',
  twitter: '@_AmarisKay',
  keywords: [
    'Kindness Ukandu',
    'UI/UX Designer',
    'Product Designer',
    'Product Design Portfolio',
    'UX Designer Lagos',
    'Mobile App Design',
    'Web Design',
    'Fintech Design',
    'Design Systems',
    'Figma',
    'Framer',
    'Case Studies',
    'Nigeria Designer',
    'UI Designer',
  ],
  social: [LINKS.linkedin, LINKS.behance, LINKS.x],
};
