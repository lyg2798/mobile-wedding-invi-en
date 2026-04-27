// Decorative botanical sprig — 2 sprigs, soft sage
export default function Sprig({ flip = false, style = {}, opacity = 0.55 }) {
  return (
    <svg
      viewBox="0 0 120 200"
      width="90"
      height="150"
      style={{ transform: flip ? 'scaleX(-1)' : 'none', opacity, ...style }}
      fill="none"
    >
      <path d="M60 195 C58 150, 48 90, 55 25" stroke="var(--sage)" strokeWidth="1.3" strokeLinecap="round" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => {
        const y = 30 + i * 22;
        const dir = i % 2 === 0 ? 1 : -1;
        return (
          <g key={i}>
            <path
              d={`M${55 + (i % 2 === 0 ? 0 : 1)},${y} Q${55 + dir * 28},${y - 14} ${55 + dir * 36},${y - 4}`}
              stroke="var(--sage)"
              strokeWidth="1.1"
              strokeLinecap="round"
            />
            <ellipse
              cx={55 + dir * 30}
              cy={y - 6}
              rx="14"
              ry="7"
              transform={`rotate(${dir * -22} ${55 + dir * 30} ${y - 6})`}
              fill="var(--sage-fill)"
            />
          </g>
        );
      })}
      <circle cx="55" cy="20" r="3.5" fill="var(--accent)" opacity="0.6" />
    </svg>
  );
}
