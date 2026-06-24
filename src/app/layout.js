import './globals.scss';
import { brand, geist, inter, lato } from './fonts';
import SmoothScroll from '@/components/SmoothScroll';
import Cursor from '@/components/ui/Cursor';
import ScrollProgress from '@/components/ui/ScrollProgress';
import Loader from '@/components/ui/Loader';

export const metadata = {
  title: 'Kindness Ukandu — Product Designer',
  description:
    'UI/UX designer crafting impactful design solutions with empathy and strategy.',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${brand.variable} ${geist.variable} ${inter.variable} ${lato.variable}`}
    >
      <body>
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
