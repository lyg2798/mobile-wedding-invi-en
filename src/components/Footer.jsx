import { Ic } from '../icons.jsx';

export default function Footer() {
  return (
    <section
      style={{
        padding: '56px 28px 48px',
        background: 'var(--ink)',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: -1,
          left: 0,
          right: 0,
          height: 24,
          background: 'linear-gradient(180deg, var(--cream), transparent)',
        }}
      />
      <Ic.heart s={18} c="var(--accent)" />
      <p style={{ fontFamily: 'var(--script)', fontSize: 34, color: 'var(--accent)', margin: '10px 0 4px' }}>
        Thank you
      </p>
      <p
        style={{
          fontFamily: 'var(--sans)',
          fontSize: 11,
          letterSpacing: '0.3em',
          color: 'rgba(255,255,255,0.7)',
          margin: 0,
          textTransform: 'uppercase',
        }}
      >
        For being part of our story
      </p>

      <div style={{ margin: '20px auto 0', height: 1, width: 60, background: 'rgba(255,255,255,0.15)' }} />
      <p
        style={{
          fontFamily: 'var(--serif)',
          fontStyle: 'italic',
          fontSize: 13,
          color: 'rgba(255,255,255,0.7)',
          margin: '18px 0 2px',
        }}
      >
        JQ &amp; Erin
      </p>
      <p
        style={{
          fontFamily: 'var(--sans)',
          fontSize: 10,
          color: 'rgba(255,255,255,0.45)',
          margin: 0,
          letterSpacing: '0.18em',
        }}
      >
        OCTOBER 9 &middot; 2026
      </p>
    </section>
  );
}
