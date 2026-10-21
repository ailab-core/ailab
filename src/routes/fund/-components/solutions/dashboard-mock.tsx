import { cn } from 'cn'
import { m } from '#/paraglide/messages'

const LINE =
  'M0 86 C24 82 42 74 66 76 S104 66 128 58 S166 60 186 46 S232 36 252 26 S286 14 300 10'

const SPLIT = [
  { label: m.fund_mock_employee, share: 62, className: 'bg-primary' },
  { label: m.fund_mock_employer, share: 38, className: 'bg-primary/30' },
]

export function DashboardMock() {
  return (
    <div data-loop className="flex h-full flex-col">
      <div className="flex items-end justify-between">
        <div>
          <p className="eyebrow flex items-center gap-2">
            <span className="rounded-full flex items-center gap-1.5 bg-primary px-2 py-0.5 text-2xs text-primary-foreground">
              <span className="rounded-full size-1.5 animate-pulse bg-primary-foreground" />
              {m.fund_mock_live()}
            </span>
            {m.fund_dashboard_total_assets()}
          </p>
          <p className="heading mt-2 text-figure tabular-nums">{'₮18.6B'}</p>
        </div>
        <div className="text-right">
          <p className="eyebrow">{m.fund_dashboard_annual_return()}</p>
          <p className="mt-2 text-lg font-semibold text-highlight tabular-nums">
            {'+14.2%'}
          </p>
        </div>
      </div>
      <div className="relative mt-4 min-h-0 flex-1">
        <svg
          viewBox="0 0 300 100"
          preserveAspectRatio="none"
          className="absolute inset-0 size-full overflow-visible"
        >
          {[30, 60, 90].map((y) => (
            <line
              key={y}
              x1="0"
              x2="300"
              y1={y}
              y2={y}
              vectorEffect="non-scaling-stroke"
              strokeDasharray="2 4"
              className="stroke-foreground/10"
            />
          ))}
          <g
            style={{
              animation: 'reveal 7s var(--ease-in-out-strong) infinite both',
            }}
          >
            <path d={`${LINE} L300 100 L0 100 Z`} className="fill-primary/10" />
            <path
              d={LINE}
              vectorEffect="non-scaling-stroke"
              className="fill-none stroke-highlight"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </g>
        </svg>
        {/* Outside the stretched SVG so the marker stays round; top matches the line's end at y=10. */}
        <span className="absolute top-[10%] right-0 translate-x-1/2 -translate-y-1/2">
          <span
            className="relative flex size-2.5"
            style={{
              animation: 'land 7s var(--ease-out-strong) infinite both',
            }}
          >
            <span className="rounded-full absolute inset-0 animate-ping bg-highlight/50" />
            <span className="rounded-full relative size-full bg-highlight ring-2 ring-background" />
          </span>
        </span>
      </div>
      <div className="mt-4 flex h-2 gap-1">
        {SPLIT.map((part, index) => (
          <span
            key={index}
            className={cn('rounded-full origin-left', part.className)}
            style={{
              flexGrow: part.share,
              animation: `fill 7s ${index * 0.15}s var(--ease-out-strong) infinite both`,
            }}
          />
        ))}
      </div>
      <div className="mt-2 flex justify-between text-2xs font-medium tracking-wide text-muted-foreground uppercase">
        {SPLIT.map((part, index) => (
          <span key={index}>
            {part.label()}{' '}
            <span className="text-foreground tabular-nums">{part.share}%</span>
          </span>
        ))}
      </div>
    </div>
  )
}
