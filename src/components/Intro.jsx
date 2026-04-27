import { DATA } from '../data.js';
import SecHead from './SecHead.jsx';

export default function Intro() {
  return (
    <section style={{ padding: '48px 28px 56px', background: 'var(--paper)', position: 'relative' }}>
      <SecHead label="Invitation" title="A small note" />

      <p
        style={{
          fontFamily: 'var(--serif)',
          fontSize: 15,
          color: 'var(--ink)',
          lineHeight: 1.95,
          textAlign: 'center',
          whiteSpace: 'pre-line',
          margin: '0 auto 32px',
          maxWidth: 320,
          fontWeight: 400,
        }}
      >
        {DATA.intro.body}
      </p>

      <div style={{ height: 1, background: 'var(--line)', margin: '0 auto 24px', width: 50 }} />

      <div style={{ textAlign: 'center', display: 'grid', gap: 14 }}>
        {[DATA.hero.groom, DATA.hero.bride].map((p) => (
          <div
            key={p.name}
            style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.7 }}
          >
            <span>{p.parents[0]}</span>
            <span style={{ margin: '0 8px', color: 'var(--line-2)' }}>·</span>
            <span>{p.parents[1]}</span>
            <span style={{ margin: '0 8px', color: 'var(--line-2)' }}>&rsquo;s</span>
            <span style={{ fontStyle: 'italic', color: 'var(--ink-2)' }}>{p.relation.toLowerCase()}</span>
            <br />
            <span
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 18,
                color: 'var(--ink)',
                letterSpacing: '0.02em',
              }}
            >
              {p.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
