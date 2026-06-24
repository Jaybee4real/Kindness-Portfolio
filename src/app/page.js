import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Services from '@/components/sections/Services';
import Motto from '@/components/sections/Motto';
import DesignProcess from '@/components/sections/DesignProcess';
import HeroMarquee from '@/components/sections/HeroMarquee';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HeroMarquee />
        <div
          className="bandPastel"
          style={{ padding: 'clamp(56px, 9vw, 116px) 0' }}
        >
          <About />
        </div>
        <Projects />
        <div style={{ height: 'clamp(90px, 20vw, 299px)' }} />
        <Services />
        <div style={{ height: 'clamp(64px, 13vw, 200px)' }} />
        <Motto />
        <div
          className="bandPastel"
          style={{
            padding: 'clamp(72px, 12vw, 160px) 0',
            marginTop: 'clamp(40px, 6vw, 80px)',
          }}
        >
          <DesignProcess />
        </div>
        <div style={{ height: 'clamp(64px, 13vw, 200px)' }} />
      </main>
      <Footer />
    </>
  );
}
