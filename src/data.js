export const DATA = {
  hero: {
    groom: {
      name: 'JQ (YoungGyu) Lee',
      short: 'JQ',
      relation: 'Eldest son',
      parents: ['Namoh Lee', 'Changi Park'],
    },
    bride: {
      name: 'Erin Lee',
      short: 'Erin',
      relation: 'Eldest daughter',
      parents: ['Julian Lee', 'Hyunjung Kim'],
    },
    date: '2026-10-09T11:30:00',
    venue: 'The War Memorial of Korea',
    venueDetail: 'Yongsan-gu, Seoul',
  },
  intro: {
    title: 'We’re getting married.',
    body: `We promise to hold each other’s
laughter, mischief, and quiet mornings —
to keep them safe, side by side,
for all the joyful years ahead.

Whether you’re crossing the city or the ocean,
please come celebrate the beginning
of our story with us.`,
  },
  location: {
    name: 'The War Memorial of Korea',
    hall: 'Park Hall (1st floor)',
    address: '29 Itaewon-ro, Yongsan-gu, Seoul',
    transport: {
      subway: [
        { line: 'Line 6', text: 'Samgakji Station, Exit 12 — 3 min walk' },
        { line: 'Line 4', text: 'Samgakji Station, Exit 1 — 5 min walk' },
        { line: 'Line 1', text: 'Namyeong Station, Exit 1 — 7 min walk' },
      ],
      bus: [
        { label: 'Village 03', text: 'Yongsan-03 (War Memorial stop)' },
        { label: 'Trunk (War Memorial stop)', text: '110A, 110B, 421, 740, N72, N75' },
        {
          label: 'Samgakji stop',
          text: '421, N75, 100, 150, 151, 152, 500, 501, 502, 504, 506, 507, 605, 742, 750A, 750B, 752, N15',
        },
      ],
      car: 'From Hangang Bridge: head toward Seoul Station, pass Samgakji intersection, turn right at the North Gate. From Seoul Station: head toward Hangang Bridge, turn left at Samgakji intersection, then left into the West Gate after 70m. From Itaewon: head toward Samgakji, turn right into the East Gate. From Mapo (Gongdeok): cross Samgakji overpass, continue through the intersection, turn left into the West Gate after 70m.',
      parking:
        'Above-ground and underground parking available on the War Memorial grounds — capacity up to 1,000 vehicles.',
    },
    lat: 37.5379,
    lng: 126.9774,
  },
};
