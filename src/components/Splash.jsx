import { useState } from 'react';
import SplitText from './SplitText.jsx';

export default function Splash({ onDone }) {
  const [exiting, setExiting] = useState(false);

  const handleAnimationComplete = () => {
    setTimeout(() => setExiting(true), 700);
    setTimeout(() => onDone?.(), 1500);
  };

  return (
    <div
      className="splash"
      style={{
        opacity: exiting ? 0 : 1,
        pointerEvents: exiting ? 'none' : 'auto',
      }}
    >
      <SplitText
        text="You are invited!"
        tag="h1"
        className="splash-text"
        delay={70}
        duration={0.9}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0}
        rootMargin="0px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />
    </div>
  );
}
