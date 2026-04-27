export default function StickyHeader({ progress }) {
  return (
    <div className="sticky-head">
      <span className="brand">JQ &amp; Erin</span>
      <span className="right">10 / 09 · 2026</span>
      <div className="progress">
        <span style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
