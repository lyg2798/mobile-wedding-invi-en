import { useEffect, useState } from 'react';

export default function Countdown({ target }) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const ms = new Date(target).getTime() - now;
  const past = ms < 0;
  const abs = Math.abs(ms);
  const days = Math.floor(abs / 86400000);
  const hrs = Math.floor((abs % 86400000) / 3600000);
  const mins = Math.floor((abs % 3600000) / 60000);
  const secs = Math.floor((abs % 60000) / 1000);
  const parts = [
    { n: days, l: 'Days' },
    { n: hrs, l: 'Hours' },
    { n: mins, l: 'Min' },
    { n: secs, l: 'Sec' },
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 8,
        margin: '18px auto 0',
        maxWidth: 320,
        background: 'rgba(255,255,255,0.6)',
        border: '1px solid var(--line)',
        borderRadius: 14,
        padding: '12px 10px',
        backdropFilter: 'blur(10px)',
      }}
    >
      {parts.map((p) => (
        <div key={p.l} style={{ textAlign: 'center' }}>
          <div
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 22,
              color: 'var(--ink)',
              lineHeight: 1,
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {String(p.n).padStart(2, '0')}
          </div>
          <div
            style={{
              fontFamily: 'var(--sans)',
              fontSize: 9,
              color: 'var(--ink-2)',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              marginTop: 4,
            }}
          >
            {p.l}
          </div>
        </div>
      ))}
      {past && (
        <div
          style={{
            gridColumn: '1/-1',
            textAlign: 'center',
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            color: 'var(--accent)',
            fontSize: 12,
            marginTop: 4,
          }}
        >
          Thank you for celebrating with us
        </div>
      )}
    </div>
  );
}
