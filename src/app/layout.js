import './globals.scss';
import { brand, geist, inter, lato } from './fonts';
import SmoothScroll from '@/components/SmoothScroll';
import Cursor from '@/components/ui/Cursor';
import ScrollProgress from '@/components/ui/ScrollProgress';
import Loader from '@/components/ui/Loader';
import { SITE, SITE_URL } from '@/lib/site';
import { LINKS } from '@/lib/links';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE.title,
    template: '%s — Kindness Ukandu',
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.author, url: LINKS.behance }],
  creator: SITE.author,
  publisher: SITE.author,
  keywords: SITE.keywords,
  category: 'Design',
  formatDetection: { telephone: false },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    locale: SITE.locale,
    images: [
      {
        url: '/og/default.png',
        width: 1200,
        height: 630,
        alt: 'Kindness Ukandu — Product Designer & UI/UX Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
    creator: SITE.twitter,
    images: ['/og/default.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export const viewport = {
  themeColor: '#f8fbff',
  width: 'device-width',
  initialScale: 1,
};

const personLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE.author,
  url: SITE_URL,
  image: `${SITE_URL}/icon-512.png`,
  jobTitle: SITE.jobTitle,
  description: SITE.description,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lagos',
    addressCountry: 'NG',
  },
  email: LINKS.email.replace('mailto:', ''),
  sameAs: SITE.social,
  knowsAbout: [
    'UI/UX Design',
    'Product Design',
    'Mobile App Design',
    'Web Design',
    'Design Systems',
    'User Research',
    'Figma',
    'Framer',
  ],
};

const siteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.title,
  url: SITE_URL,
  inLanguage: 'en',
  author: { '@type': 'Person', name: SITE.author },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${brand.variable} ${geist.variable} ${inter.variable} ${lato.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteLd) }}
        />
        <Loader />
        <ScrollProgress />
        <Cursor />
        <SmoothScroll>
          <div className="appScale">{children}</div>
        </SmoothScroll>
      </body>
    </html>
  );
}
