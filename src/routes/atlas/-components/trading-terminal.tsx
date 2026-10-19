import {
  CircleCheckIcon,
  RocketIcon,
  UserCheck01Icon,
  Wallet01Icon,
} from '@hugeicons/core-free-icons'
import { cn } from 'cn'
import { Console } from '#/components/product'
import { m } from '#/paraglide/messages'

const TICKERS = [
  { symbol: 'APU', price: '1,250', change: '+1.8%' },
  { symbol: 'TTL', price: '8,420', change: '-0.6%' },
  { symbol: 'GOV', price: '6,900', change: '+0.4%' },
  { symbol: 'MSE', price: '34,180', change: '+0.9%' },
]

const CANDLES = Array.from({ length: 36 }, (_, index) => {
  const base = 18 + index * 1.7 + Math.sin(index * 1.3) * 10
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

const ORDERS = [
  { buy: true, symbol: 'APU', quantity: '120' },
  { buy: false, symbol: 'TTL', quantity: '40' },
  { buy: true, symbol: 'GOV', quantity: '300' },
]

export function TradingTerminal() {
  return (
    <Console
      title={m.atlas_terminal_title()}
      notifications={[
        {
          icon: CircleCheckIcon,
          text: m.atlas_terminal_notification_filled({ quantity: '120' }),
        },
        { icon: RocketIcon, text: m.atlas_terminal_notification_ipo() },
        { icon: UserCheck01Icon, text: m.atlas_terminal_notification_kyc() },
        {
          icon: Wallet01Icon,
          text: m.atlas_terminal_notification_withdrawal(),
        },
      ]}
    >
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {TICKERS.map((ticker) => (
          <li
            key={ticker.symbol}
            className="rounded-md border border-border bg-background px-3 py-2.5"
          >
            <p className="flex items-center justify-between font-mono text-xs">
              {ticker.symbol}
              <span
                className={
                  ticker.change.startsWith('+')
                    ? 'text-highlight'
                    : 'text-highlight-secondary'
                }
              >
                {ticker.change}
              </span>
            </p>
            <p className="mt-1 text-lg tabular-nums">{ticker.price}</p>
          </li>
        ))}
      </ul>
      <div className="mt-3 grid gap-3 md:grid-cols-3">
        <div className="rounded-md border border-border bg-background p-4 md:col-span-2">
          <div className="flex items-end justify-between">
            <div>
              <p className="eyebrow">{m.atlas_terminal_portfolio_value()}</p>
              <p className="heading mt-2 text-figure tabular-nums">
                {'₮48,250,000'}
              </p>
            </div>
            <p className="text-xs text-highlight uppercase">
              {m.atlas_today_change({ change: '+2.4%' })}
            </p>
          </div>
          <svg
            viewBox="0 0 360 100"
            className="mt-4 h-40 w-full md:h-48"
            preserveAspectRatio="none"
          >
            <line
              x1={0}
              x2={360}
              y1={100 - LAST.close}
              y2={100 - LAST.close}
              strokeDasharray="4 4"
              vectorEffect="non-scaling-stroke"
              className="stroke-secondary/60"
            />
            {CANDLES.map((candle, index) => {
              const x = index * 10 + 5
              return (
                <g
                  key={index}
                  className={
                    candle.close >= candle.open
                      ? 'fill-foreground/80 stroke-foreground/80'
                      : 'fill-secondary stroke-secondary'
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
                    className="stroke-none"
                  />
                </g>
              )
            })}
          </svg>
        </div>
        <div className="rounded-md hidden flex-col border border-border bg-background md:flex">
          <p className="eyebrow border-b border-border px-4 py-3 text-foreground">
            {m.atlas_terminal_orders()}
          </p>
          <ul className="flex flex-col text-sm">
            {ORDERS.map((order, index) => (
              <li
                key={index}
                className="flex items-center gap-3 border-b border-border px-4 py-3 last:border-b-0"
                style={{
                  animation: `appear 7s ${index * 0.7}s ease-out infinite both`,
                }}
              >
                <span
                  className={cn(
                    'rounded-sm px-1.5 py-0.5 text-2xs font-medium tracking-wide uppercase',
                    order.buy
                      ? 'bg-primary/15 text-highlight'
                      : 'bg-secondary/15 text-highlight-secondary',
                  )}
                >
                  {order.buy ? m.atlas_terminal_buy() : m.atlas_terminal_sell()}
                </span>
                {order.symbol}
                <span className="ml-auto text-muted-foreground tabular-nums">
                  {order.quantity}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Console>
  )
}
