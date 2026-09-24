import {
  CircleCheckIcon,
  RocketIcon,
  UserCheckIcon,
  WalletIcon,
} from 'lucide-react'

const NOTIFICATIONS = [
  { icon: CircleCheckIcon, text: 'Buy order filled – 120 shares' },
  { icon: RocketIcon, text: 'IPO subscription confirmed' },
  { icon: UserCheckIcon, text: 'Investor KYC verified' },
  { icon: WalletIcon, text: 'Withdrawal request approved' },
]

const CANDLES = Array.from({ length: 28 }, (_, index) => {
  const base = 18 + index * 2.1 + Math.sin(index * 1.3) * 10
  const open = base + Math.sin(index * 2.1) * 7
  const close = base + Math.cos(index * 1.7) * 8
  return {
    open,
    close,
    high: Math.max(open, close) + 3 + (index % 3) * 2,
    low: Math.min(open, close) - 3 - (index % 2) * 2,
  }
})

const LAST = CANDLES[CANDLES.length - 1]

export function TradingTerminal() {
  return (
    <div className="dark relative grid gap-6 bg-background p-5 text-foreground md:grid-cols-12 md:p-8">
      <ul className="flex flex-col gap-2.5 md:col-span-4" aria-hidden="true">
        {NOTIFICATIONS.map((notification, index) => (
          <li
            key={notification.text}
            className="flex w-fit items-center gap-2.5 rounded-xl border border-border bg-card px-3.5 py-2.5 text-sm"
            style={{
              animation: `appear 8s ${index * 0.9}s ease-out infinite both`,
            }}
          >
            <notification.icon className="size-4 text-brand-soft" />
            {notification.text}
          </li>
        ))}
      </ul>
      <div
        className="hidden flex-col rounded-2xl border border-border bg-card p-6 md:col-span-8 md:flex"
        aria-hidden="true"
      >
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{'Portfolio value'}</p>
            <p className="mt-1 text-3xl tracking-tight tabular-nums">
              {'₮48,250,000'}
            </p>
          </div>
          <p className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-300">
            {'+2.4% today'}
          </p>
        </div>
        <svg
          viewBox="0 0 280 100"
          className="mt-6 h-56 w-full"
          preserveAspectRatio="none"
        >
          <line
            x1={0}
            x2={280}
            y1={100 - LAST.close}
            y2={100 - LAST.close}
            strokeDasharray="4 4"
            vectorEffect="non-scaling-stroke"
            className="stroke-brand-soft/50"
          />
          {CANDLES.map((candle, index) => {
            const x = index * 10 + 5
            const up = candle.close >= candle.open
            return (
              <g
                key={index}
                className={
                  up
                    ? 'fill-brand-soft stroke-brand-soft'
                    : 'fill-white/25 stroke-white/25'
                }
                style={
                  index === CANDLES.length - 1
                    ? { animation: 'blink 1.6s ease-in-out infinite' }
                    : undefined
                }
              >
                <line
                  x1={x}
                  x2={x}
                  y1={100 - candle.high}
                  y2={100 - candle.low}
                  vectorEffect="non-scaling-stroke"
                />
                <rect
                  x={x - 3}
                  y={100 - Math.max(candle.open, candle.close)}
                  width={6}
                  height={Math.max(Math.abs(candle.close - candle.open), 1)}
                  rx={1}
                  className="stroke-none"
                />
              </g>
            )
          })}
        </svg>
      </div>
    </div>
  )
}
