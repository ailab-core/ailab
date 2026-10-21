import { m } from '#/paraglide/messages'

const HOLDINGS = [
  { label: m.atlas_mock_holding_equities, share: 62 },
  { label: m.atlas_mock_holding_bonds, share: 28 },
  { label: m.atlas_mock_holding_cash, share: 10 },
]

// The phone is taller than the stage on purpose; the card crops it like a product shot.
export function MobileMock() {
  return (
    <div className="relative h-full">
      <div className="rounded-xl absolute top-0 left-1/2 h-[26rem] w-56 -translate-x-1/2 bg-muted p-1.5 shadow-2xl shadow-black/50">
        <div className="rounded-lg h-full bg-background p-5">
          <div className="-mx-5 -mt-5 flex h-7 items-center justify-between px-4 font-mono text-3xs text-muted-foreground">
            {'9:41'}
            <span className="flex items-end gap-0.5" aria-hidden="true">
              <span className="h-1 w-0.5 bg-current" />
              <span className="h-1.5 w-0.5 bg-current" />
              <span className="h-2 w-0.5 bg-current" />
            </span>
          </div>
          <p className="eyebrow mt-5">{m.atlas_mock_portfolio()}</p>
          <p className="heading mt-2 text-figure tabular-nums">{'₮48.2M'}</p>
          <p className="mt-1 font-mono text-2xs text-highlight">
            {m.atlas_today_change({ change: '+2.4%' })}
          </p>
          <svg
            viewBox="0 0 100 30"
            className="mt-4 h-12 w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 24 L12 20 L22 22 L34 14 L46 16 L58 9 L70 12 L82 6 L100 3"
              pathLength={1}
              strokeDasharray={1}
              vectorEffect="non-scaling-stroke"
              className="fill-none stroke-highlight stroke-2"
              style={{
                animation: 'draw 6s var(--ease-in-out-strong) infinite both',
              }}
            />
          </svg>
          <ul className="mt-4 flex flex-col gap-2.5 text-xs">
            {HOLDINGS.map((holding) => (
              <li key={holding.share}>
                <div className="flex justify-between">
                  {holding.label()}
                  <span className="text-muted-foreground tabular-nums">
                    {`${holding.share}%`}
                  </span>
                </div>
                <div className="rounded-full mt-1.5 h-1 overflow-hidden bg-foreground/10">
                  <div
                    className="h-full bg-foreground/70"
                    style={{ width: `${holding.share}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
