import { m } from '#/paraglide/messages'

const SEGMENTS = [
  { name: m.primebee_mock_mkt_vip, count: '1,240', share: 0.32 },
  { name: m.primebee_mock_mkt_inactive, count: '3,860', share: 1 },
  { name: m.primebee_mock_mkt_new, count: '512', share: 0.13 },
]

export function MarketingMock() {
  return (
    <ul className="flex flex-col gap-5">
      {SEGMENTS.map((segment, index) => (
        <li
          key={segment.count}
          style={{
            animation: `appear 7s ${index * 0.6}s ease-out infinite both`,
          }}
        >
          <div className="flex items-baseline justify-between">
            <span className="eyebrow text-foreground">{segment.name()}</span>
            <span className="heading text-2xl tabular-nums">
              {segment.count}
            </span>
          </div>
          <div className="mt-2 h-1.5 bg-foreground/10">
            <div
              className="h-full bg-secondary"
              style={{ width: `${segment.share * 100}%` }}
            />
          </div>
        </li>
      ))}
    </ul>
  )
}
