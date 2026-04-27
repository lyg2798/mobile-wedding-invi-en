import { DATA } from '../data.js';
import { Ic } from '../icons.jsx';
import SecHead from './SecHead.jsx';

const MONTHS = [
  'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
  'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER',
];
const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

function addToCalendar() {
  const start = '20261009T113000';
  const end = '20261009T143000';
  const title = 'JQ & Erin — Wedding';
  const location = 'The War Memorial of Korea, 29 Itaewon-ro, Yongsan-gu, Seoul';
  const details = 'We’re so glad you’re joining us!';
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'BEGIN:VEVENT',
    `SUMMARY:${title}`,
    `DTSTART;TZID=Asia/Seoul:${start}`,
    `DTEND;TZID=Asia/Seoul:${end}`,
    `LOCATION:${location}`,
    `DESCRIPTION:${details}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\n');
  const blob = new Blob([ics], { type: 'text/calendar' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'wedding.ics';
  a.click();
  URL.revokeObjectURL(url);
}

export default function CalendarSection() {
  const d = new Date(DATA.hero.date);
  const y = d.getFullYear();
  const m = d.getMonth();
  const target = d.getDate();
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  const firstDOW = new Date(y, m, 1).getDay();
  const cells = [];
  for (let i = 0; i < firstDOW; i++) cells.push(null);
  for (let i = 1; i <= daysInMonth; i++) cells.push(i);
  while (cells.length % 7) cells.push(null);

  return (
    <section style={{ padding: '48px 28px 56px', background: 'var(--cream)' }}>
      <SecHead label="The Day" title={`${MONTHS[m]} ${y}`} />

      <div
        style={{
          background: 'var(--paper)',
          borderRadius: 16,
          padding: '22px 18px',
          border: '1px solid var(--line)',
          boxShadow: '0 2px 10px rgba(130,92,60,0.05)',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', marginBottom: 10 }}>
          {WEEKDAYS.map((w, i) => (
            <div
              key={i}
              style={{
                textAlign: 'center',
                fontFamily: 'var(--sans)',
                fontSize: 10,
                letterSpacing: '0.2em',
                color: i === 0 ? 'var(--accent)' : 'var(--ink-2)',
                padding: '4px 0',
              }}
            >
              {w}
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', rowGap: 6 }}>
          {cells.map((day, i) => {
            const isTarget = day === target;
            const dow = i % 7;
            const color = dow === 0 ? 'var(--accent)' : 'var(--ink)';
            return (
              <div
                key={i}
                style={{
                  height: 34,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--serif)',
                  fontSize: 14,
                  color,
                }}
              >
                {day && (
                  <span
                    style={{
                      width: 30,
                      height: 30,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                      background: isTarget ? 'var(--accent)' : 'transparent',
                      color: isTarget ? '#fff' : color,
                      fontWeight: isTarget ? 500 : 400,
                      position: 'relative',
                    }}
                  >
                    {day}
                    {isTarget && (
                      <svg
                        style={{ position: 'absolute', inset: -4 }}
                        width="38"
                        height="38"
                        viewBox="0 0 38 38"
                        fill="none"
                      >
                        <circle
                          cx="19"
                          cy="19"
                          r="17"
                          stroke="var(--accent)"
                          strokeWidth="1"
                          strokeDasharray="2 3"
                          opacity="0.55"
                        />
                      </svg>
                    )}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <div
          style={{
            marginTop: 20,
            paddingTop: 16,
            borderTop: '1px dashed var(--line)',
            textAlign: 'center',
          }}
        >
          <p style={{ fontFamily: 'var(--serif)', fontSize: 16, color: 'var(--ink)', margin: 0 }}>
            Friday, October 9 &middot; 11:30 AM
          </p>
          <p
            style={{
              fontFamily: 'var(--sans)',
              fontSize: 12,
              color: 'var(--ink-2)',
              margin: '6px 0 0',
              letterSpacing: '0.05em',
            }}
          >
            Ceremony begins at half past eleven
          </p>
        </div>
      </div>

      <button
        onClick={addToCalendar}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          margin: '22px auto 0',
          padding: '12px 22px',
          background: 'var(--paper)',
          color: 'var(--ink)',
          border: '1px solid var(--accent)',
          borderRadius: 100,
          fontFamily: 'var(--sans)',
          fontSize: 12,
          letterSpacing: '0.1em',
          cursor: 'pointer',
          textTransform: 'uppercase',
        }}
      >
        <Ic.cal s={14} c="var(--accent)" /> Add to calendar
      </button>
    </section>
  );
}
