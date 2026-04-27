import { useEffect, useRef, useState } from 'react';
import StickyHeader from './components/StickyHeader.jsx';
import Hero from './components/Hero.jsx';
import Intro from './components/Intro.jsx';
import CalendarSection from './components/CalendarSection.jsx';
import LocationSection from './components/LocationSection.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [progress, setProgress] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const next = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0;
      setProgress(next);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="stage">
      <aside className="sidenote">
        <div className="meta">October &middot; IX &middot; MMXXVI</div>
        <h1>
          JQ <em>&amp;</em> Erin
        </h1>
        <p>With joyful hearts, we invite you to celebrate the beginning of our life together.</p>
        <p
          style={{
            color: 'var(--accent)',
            fontStyle: 'italic',
            fontFamily: 'var(--serif)',
            fontSize: 16,
          }}
        >
          &mdash; Friday, 11:30 AM &middot; Seoul
        </p>
      </aside>

      <main ref={scrollRef} className="invite-shell">
        <div className="invite-body">
          <StickyHeader progress={progress} />
          <Hero />
          <Intro />
          <CalendarSection />
          <LocationSection />
          <Footer />
        </div>
      </main>
    </div>
  );
}
