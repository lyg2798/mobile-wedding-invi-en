import { useState } from 'react';
import { DATA } from '../data.js';
import { Ic } from '../icons.jsx';
import SecHead from './SecHead.jsx';
import MapBtn from './MapBtn.jsx';

const rowStyle = {
  display: 'flex',
  gap: 12,
  padding: '12px 4px',
  borderBottom: '1px dashed var(--line)',
  alignItems: 'center',
};
const rowTitle = { fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--ink)', margin: 0, fontWeight: 600 };
const rowSub = {
  fontFamily: 'var(--sans)',
  fontSize: 12,
  color: 'var(--ink-2)',
  margin: '4px 0 0',
  lineHeight: 1.55,
};
const badgeStyle = {
  flex: '0 0 40px',
  height: 40,
  borderRadius: 10,
  background: 'var(--cream)',
  color: 'var(--accent)',
  border: '1px solid var(--line)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'var(--serif)',
  fontSize: 13,
  fontWeight: 500,
};

const LINE_COLORS = { 6: '#B6592E', 4: '#0052A4', 1: '#0D3692' };

export default function LocationSection() {
  const [tab, setTab] = useState('subway');
  const tabs = [
    { k: 'subway', label: 'Subway', icon: Ic.subway },
    { k: 'bus', label: 'Bus', icon: Ic.bus },
    { k: 'car', label: 'Car', icon: Ic.car },
    { k: 'park', label: 'Parking', icon: Ic.park },
  ];
  const L = DATA.location;

  return (
    <section style={{ padding: '48px 28px 56px', background: 'var(--paper)' }}>
      <SecHead label="Location" title="How to get there" />

      {/* stylized map */}
      <div
        style={{
          position: 'relative',
          height: 190,
          borderRadius: 16,
          overflow: 'hidden',
          border: '1px solid var(--line)',
          background: 'linear-gradient(180deg, #F3EADD 0%, #EADDC8 100%)',
        }}
      >
        <svg
          viewBox="0 0 320 190"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          style={{ position: 'absolute', inset: 0 }}
        >
          <path d="M0 70 C80 60, 160 110, 320 95" stroke="#D8C5A8" strokeWidth="18" fill="none" />
          <path d="M130 0 C140 60, 110 110, 150 190" stroke="#D8C5A8" strokeWidth="14" fill="none" />
          <path
            d="M0 70 C80 60, 160 110, 320 95"
            stroke="#FBF6EE"
            strokeWidth="2"
            fill="none"
            strokeDasharray="6 6"
          />
          <path
            d="M130 0 C140 60, 110 110, 150 190"
            stroke="#FBF6EE"
            strokeWidth="2"
            fill="none"
            strokeDasharray="6 6"
          />
          {[
            [30, 20, 60, 30],
            [220, 20, 70, 40],
            [30, 130, 70, 40],
            [210, 130, 80, 40],
          ].map(([x, y, w, h], i) => (
            <rect key={i} x={x} y={y} width={w} height={h} rx="4" fill="#EFE2CE" stroke="#D8C5A8" strokeWidth="0.8" />
          ))}
          <circle cx="250" cy="70" r="16" fill="#CFD9BF" />
          <circle cx="245" cy="65" r="5" fill="#A7B892" opacity="0.6" />
          <circle cx="256" cy="76" r="4" fill="#A7B892" opacity="0.6" />
        </svg>

        <div
          style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%,-100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
          }}
        >
          <div
            style={{
              background: 'var(--paper)',
              padding: '4px 10px',
              borderRadius: 6,
              fontFamily: 'var(--serif)',
              fontSize: 11,
              color: 'var(--ink)',
              border: '1px solid var(--accent)',
              boxShadow: '0 4px 12px rgba(130,92,60,0.18)',
              whiteSpace: 'nowrap',
            }}
          >
            War Memorial of Korea
          </div>
          <svg width="26" height="34" viewBox="0 0 26 34">
            <path
              d="M13 33 C13 33, 2 22, 2 13 A11 11 0 0124 13 C24 22, 13 33, 13 33 Z"
              fill="var(--accent)"
              stroke="#fff"
              strokeWidth="1.5"
            />
            <circle cx="13" cy="13" r="4" fill="#fff" />
          </svg>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: 18 }}>
        <p style={{ fontFamily: 'var(--serif)', fontSize: 18, color: 'var(--ink)', margin: 0 }}>{L.name}</p>
        <p
          style={{
            fontFamily: 'var(--sans)',
            fontSize: 12,
            color: 'var(--ink-2)',
            margin: '6px 0 14px',
            lineHeight: 1.6,
          }}
        >
          {L.address}
        </p>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
          <MapBtn label="Open in Maps" href="https://maps.google.com/?q=War+Memorial+of+Korea+Seoul" />
          <MapBtn label="Copy address" onClick={() => navigator.clipboard?.writeText(L.address)} />
        </div>
      </div>

      {/* Transport tabs */}
      <div style={{ marginTop: 26 }}>
        <div
          style={{
            display: 'flex',
            gap: 4,
            padding: 4,
            background: 'var(--cream)',
            borderRadius: 100,
            border: '1px solid var(--line)',
          }}
        >
          {tabs.map((t) => {
            const active = tab === t.k;
            const I = t.icon;
            return (
              <button
                key={t.k}
                onClick={() => setTab(t.k)}
                style={{
                  flex: 1,
                  padding: '10px 6px',
                  border: 'none',
                  background: active ? 'var(--paper)' : 'transparent',
                  borderRadius: 100,
                  cursor: 'pointer',
                  boxShadow: active ? '0 2px 6px rgba(130,92,60,0.1)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 4,
                  fontFamily: 'var(--sans)',
                  fontSize: 11,
                  color: active ? 'var(--accent)' : 'var(--ink-2)',
                  letterSpacing: '0.04em',
                }}
              >
                <I s={14} c={active ? 'var(--accent)' : 'var(--ink-2)'} /> {t.label}
              </button>
            );
          })}
        </div>

        <div style={{ marginTop: 18, padding: '4px 4px', minHeight: 130 }}>
          {tab === 'subway' &&
            L.transport.subway.map((s, i) => {
              const num = s.line.replace('Line ', '').trim();
              return (
                <div key={i} style={rowStyle}>
                  <div
                    style={{
                      ...badgeStyle,
                      background: LINE_COLORS[num] || 'var(--cream)',
                      color: '#fff',
                      borderColor: 'transparent',
                      fontWeight: 600,
                    }}
                  >
                    {num}
                  </div>
                  <div>
                    <p style={rowTitle}>{s.line}</p>
                    <p style={rowSub}>{s.text}</p>
                  </div>
                </div>
              );
            })}

          {tab === 'bus' &&
            L.transport.bus.map((b, i) => (
              <div key={i} style={rowStyle}>
                <div
                  style={{
                    ...badgeStyle,
                    background: i === 0 ? '#4A7AA8' : '#6E8F58',
                    color: '#fff',
                    fontSize: 9,
                  }}
                >
                  {b.label.split(' ')[0]}
                </div>
                <div>
                  <p style={rowTitle}>{b.label}</p>
                  <p style={rowSub}>{b.text}</p>
                </div>
              </div>
            ))}

          {tab === 'car' && (
            <div style={{ ...rowStyle, alignItems: 'flex-start' }}>
              <div style={badgeStyle}>Drive</div>
              <p style={{ ...rowSub, margin: 0, paddingTop: 6 }}>{L.transport.car}</p>
            </div>
          )}

          {tab === 'park' && (
            <div style={{ ...rowStyle, alignItems: 'flex-start' }}>
              <div style={badgeStyle}>P</div>
              <p style={{ ...rowSub, margin: 0, paddingTop: 6 }}>{L.transport.parking}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
