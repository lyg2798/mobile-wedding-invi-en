// Tiny icon set — hand-drawn feel, 1.3–1.8 stroke
export const Ic = {
  subway: (p) => (
    <svg viewBox="0 0 24 24" fill="none" width={p.s || 18} height={p.s || 18}>
      <rect x="5" y="3" width="14" height="15" rx="4" stroke={p.c || 'currentColor'} strokeWidth="1.3" />
      <circle cx="9" cy="13" r="1" fill={p.c || 'currentColor'} />
      <circle cx="15" cy="13" r="1" fill={p.c || 'currentColor'} />
      <path d="M9 18l-2 3M15 18l2 3M8 8h8" stroke={p.c || 'currentColor'} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  bus: (p) => (
    <svg viewBox="0 0 24 24" fill="none" width={p.s || 18} height={p.s || 18}>
      <rect x="4" y="4" width="16" height="14" rx="3" stroke={p.c || 'currentColor'} strokeWidth="1.3" />
      <path d="M4 11h16M8 18v2M16 18v2" stroke={p.c || 'currentColor'} strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="8" cy="14.5" r="1" fill={p.c || 'currentColor'} />
      <circle cx="16" cy="14.5" r="1" fill={p.c || 'currentColor'} />
    </svg>
  ),
  car: (p) => (
    <svg viewBox="0 0 24 24" fill="none" width={p.s || 18} height={p.s || 18}>
      <path
        d="M4 14l1.5-5A2 2 0 017.4 7.5h9.2A2 2 0 0118.5 9L20 14M4 14h16v4H4z"
        stroke={p.c || 'currentColor'}
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <circle cx="7.5" cy="16" r="1" fill={p.c || 'currentColor'} />
      <circle cx="16.5" cy="16" r="1" fill={p.c || 'currentColor'} />
    </svg>
  ),
  park: (p) => (
    <svg viewBox="0 0 24 24" fill="none" width={p.s || 18} height={p.s || 18}>
      <rect x="4" y="4" width="16" height="16" rx="3" stroke={p.c || 'currentColor'} strokeWidth="1.3" />
      <path
        d="M10 17V8h3.2a2.8 2.8 0 010 5.6H10"
        stroke={p.c || 'currentColor'}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  check: (p) => (
    <svg viewBox="0 0 24 24" fill="none" width={p.s || 16} height={p.s || 16}>
      <path
        d="M5 12l4.5 4.5L19 7"
        stroke={p.c || 'currentColor'}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  heart: (p) => (
    <svg viewBox="0 0 24 24" fill={p.c || 'currentColor'} width={p.s || 16} height={p.s || 16}>
      <path d="M12 20s-7-4.3-7-10a4 4 0 017-2.7A4 4 0 0119 10c0 5.7-7 10-7 10z" />
    </svg>
  ),
  pin: (p) => (
    <svg viewBox="0 0 24 24" fill="none" width={p.s || 18} height={p.s || 18}>
      <path
        d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"
        stroke={p.c || 'currentColor'}
        strokeWidth="1.3"
      />
      <circle cx="12" cy="10" r="2.5" stroke={p.c || 'currentColor'} strokeWidth="1.3" />
    </svg>
  ),
  cal: (p) => (
    <svg viewBox="0 0 24 24" fill="none" width={p.s || 16} height={p.s || 16}>
      <rect x="4" y="5" width="16" height="16" rx="2" stroke={p.c || 'currentColor'} strokeWidth="1.5" />
      <path d="M4 10h16M9 3v4M15 3v4" stroke={p.c || 'currentColor'} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};
