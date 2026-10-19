import type { CSSProperties } from 'react'
import { m } from '#/paraglide/messages'

const ASKS = [
  { price: '1,262', quantity: '1,400', depth: 0.35 },
  { price: '1,258', quantity: '2,100', depth: 0.55 },
  { price: '1,255', quantity: '3,800', depth: 0.85 },
]

const BIDS = [
  { price: '1,250', quantity: '3,200', depth: 0.75 },
  { price: '1,246', quantity: '2,600', depth: 0.6 },
  { price: '1,241', quantity: '900', depth: 0.25 },
]

export function OrderBookMock() {
  return (
    <div className="grid grid-cols-[auto_1fr] items-center gap-8">
      <div>
        <p className="eyebrow">{m.atlas_mock_last({ symbol: 'APU' })}</p>
        <p className="heading mt-2 text-figure-lg tabular-nums">{'1,252'}</p>
        <p className="mt-2 font-mono text-xs text-highlight">{'+1.8%'}</p>
      </div>
      <div className="font-mono text-xs tabular-nums">
        {[
          {
            rows: ASKS,
            tone: 'bg-secondary/20',
            text: 'text-highlight-secondary',
          },
          { rows: BIDS, tone: 'bg-foreground/10', text: 'text-foreground' },
        ].map((side, sideIndex) => (
          <div
            key={sideIndex}
            className={sideIndex ? 'mt-1.5 border-t border-border pt-1.5' : ''}
          >
            {side.rows.map((row, index) => (
              <div
                key={row.price}
                className="relative flex justify-between px-2 py-1.5"
              >
                <span
                  className={`absolute inset-y-0.5 right-0 w-full origin-right ${side.tone}`}
                  style={
                    {
                      '--to': row.depth,
                      animation: `fill 6s ${(sideIndex * 3 + index) * 0.2}s ease-in-out infinite both`,
                    } as CSSProperties
                  }
                />
                <span className={`relative ${side.text}`}>{row.price}</span>
                <span className="relative text-muted-foreground">
                  {row.quantity}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
