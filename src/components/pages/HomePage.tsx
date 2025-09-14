import { useRef } from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import HeroSection from '../../sections/HeroSection';
import AboutSection from '../../sections/AboutSection';
import NewsSection from '../../sections/NewsSection';
import BusinessSection from '../../sections/BusinessSection';
import RecruitSection from '../../sections/RecruitSection';

export default function HomePage() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const newsRef = useRef<HTMLDivElement>(null);
  const businessRef = useRef<HTMLDivElement>(null);
  const recruitRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    let targetRef;
    switch (section) {
      case 'about':
        targetRef = aboutRef;
        break;
      case 'news':
        targetRef = newsRef;
        break;
      case 'business':
        targetRef = businessRef;
        break;
      case 'recruit':
        targetRef = recruitRef;
        break;
      default:
        return;
    }

    if (targetRef.current) {
      const headerHeight = 64; // 固定ヘッダーの高さ
      const elementTop = targetRef.current.offsetTop - headerHeight;
      window.scrollTo({
        top: elementTop,
        behavior: 'smooth',
      });
    }
  };

  const handleLearnMore = () => {
    scrollToSection('about');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onSectionClick={scrollToSection} />

      <main>
        <HeroSection onLearnMore={handleLearnMore} />

        <div ref={aboutRef}>
          <AboutSection />
        </div>

        <div ref={newsRef}>
          <NewsSection />
        </div>

        <div ref={businessRef}>
          <BusinessSection />
        </div>

        <div ref={recruitRef}>
          <RecruitSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
