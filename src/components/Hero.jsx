import { DATA } from '../data.js';
import Sprig from './Sprig.jsx';
import Countdown from './Countdown.jsx';

export default function Hero() {
  const d = new Date(DATA.hero.date);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  return (
    <section style={{ position: 'relative', padding: '40px 28px 48px', background: 'var(--cream)' }}>
      <div style={{ position: 'absolute', top: 30, left: -20 }}>
        <Sprig opacity={0.4} />
      </div>
      <div style={{ position: 'absolute', top: 80, right: -30 }}>
        <Sprig flip opacity={0.4} />
      </div>

      <p
        style={{
          fontFamily: 'var(--script)',
          fontSize: 38,
          color: 'var(--accent)',
          textAlign: 'center',
          margin: '8px 0 4px',
          lineHeight: 1,
        }}
      >
        Save the Date
      </p>
      <p
        style={{
          fontFamily: 'var(--sans)',
          fontSize: 11,
          letterSpacing: '0.3em',
          color: 'var(--ink-2)',
          textAlign: 'center',
          textTransform: 'uppercase',
          margin: 0,
        }}
      >
        We&rsquo;re getting married
      </p>

      {/* Arch portrait — real photo */}
      <div style={{ position: 'relative', margin: '26px auto 22px', width: 240, height: 310 }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderTopLeftRadius: 120,
            borderTopRightRadius: 120,
            background: '#EAD9C1',
            overflow: 'hidden',
            boxShadow:
              'inset 0 0 0 1px rgba(255,255,255,0.5), 0 20px 40px -20px rgba(80,54,36,0.35)',
          }}
        >
          <img
            src={`${import.meta.env.BASE_URL}couple-hero.jpg`}
            alt="JQ and Erin"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 18%',
              display: 'block',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(180deg, rgba(251,246,238,0) 55%, rgba(184,122,75,0.10) 100%)',
              pointerEvents: 'none',
            }}
          />
        </div>
        {/* ampersand floating */}
        <div
          style={{
            position: 'absolute',
            top: -14,
            right: -14,
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: 'var(--cream)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            fontSize: 34,
            color: 'var(--accent)',
            boxShadow: '0 4px 16px rgba(130, 92, 60, 0.18)',
            border: '1px solid rgba(130, 92, 60, 0.15)',
          }}
        >
          &amp;
        </div>
      </div>

      {/* Names */}
      <div style={{ textAlign: 'center' }}>
        <h1
          style={{
            fontFamily: 'var(--serif)',
            fontWeight: 400,
            fontSize: 34,
            color: 'var(--ink)',
            margin: 0,
            lineHeight: 1.15,
            letterSpacing: '0.01em',
          }}
        >
          {DATA.hero.groom.short}
          <span
            style={{
              fontFamily: 'var(--serif)',
              fontStyle: 'italic',
              color: 'var(--accent)',
              margin: '0 10px',
              fontWeight: 300,
            }}
          >
            &amp;
          </span>
          {DATA.hero.bride.short}
        </h1>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            margin: '18px 0 10px',
          }}
        >
          <span style={{ flex: 1, height: 1, background: 'var(--line)' }} />
          <span style={{ fontFamily: 'var(--sans)', fontSize: 11, letterSpacing: '0.32em', color: 'var(--ink-2)' }}>
            FRIDAY
          </span>
          <span style={{ flex: 1, height: 1, background: 'var(--line)' }} />
        </div>

        <p
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 22,
            color: 'var(--ink)',
            margin: '0 0 4px',
            letterSpacing: '0.04em',
          }}
        >
          {months[d.getMonth()]} {d.getDate()}, {d.getFullYear()}
        </p>
        <p
          style={{
            fontFamily: 'var(--sans)',
            fontSize: 13,
            color: 'var(--ink-2)',
            margin: '0 0 16px',
            letterSpacing: '0.05em',
          }}
        >
          11:30 AM &middot; {DATA.hero.venue}
        </p>

        <Countdown target={DATA.hero.date} />
      </div>
    </section>
  );
}
