import { useState } from 'react';
import { Ic } from '../icons.jsx';

export default function MapBtn({ label, href, onClick }) {
  const [copied, setCopied] = useState(false);
  const handle = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    }
  };

  return (
    <a
      href={href || '#'}
      onClick={handle}
      target={href ? '_blank' : undefined}
      rel="noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '8px 14px',
        borderRadius: 100,
        background: 'var(--cream)',
        border: '1px solid var(--line)',
        fontFamily: 'var(--sans)',
        fontSize: 11,
        color: 'var(--ink)',
        textDecoration: 'none',
        letterSpacing: '0.04em',
      }}
    >
      {copied ? (
        <>
          <Ic.check s={12} c="var(--sage-dark)" /> Copied
        </>
      ) : (
        <>
          <Ic.pin s={12} c="var(--accent)" /> {label}
        </>
      )}
    </a>
  );
}
