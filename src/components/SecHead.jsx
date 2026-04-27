// Section header — small label + ornament + title
export default function SecHead({ label, title, subtitle }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: 26 }}>
      <p
        style={{
          fontFamily: 'var(--sans)',
          fontSize: 10,
          letterSpacing: '0.32em',
          color: 'var(--accent)',
          textTransform: 'uppercase',
          margin: 0,
        }}
      >
        {label}
      </p>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          margin: '8px 0 6px',
        }}
      >
        <span style={{ width: 18, height: 1, background: 'var(--accent)', opacity: 0.5 }} />
        <svg width="8" height="8" viewBox="0 0 8 8">
          <path d="M4 0L5 3L8 4L5 5L4 8L3 5L0 4L3 3Z" fill="var(--accent)" opacity="0.7" />
        </svg>
        <span style={{ width: 18, height: 1, background: 'var(--accent)', opacity: 0.5 }} />
      </div>
      <h2
        style={{
          fontFamily: 'var(--serif)',
          fontWeight: 400,
          fontSize: 26,
          color: 'var(--ink)',
          margin: 0,
          letterSpacing: '0.01em',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p style={{ fontFamily: 'var(--sans)', fontSize: 12, color: 'var(--ink-2)', marginTop: 8, lineHeight: 1.6 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
