import type { CSSProperties } from 'react'

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
    <div className="text-xs tabular-nums">
      <div className="flex justify-between pb-2 text-graphite">
        <span>{'Price'}</span>
        <span>{'Quantity'}</span>
      </div>
      {[
        { rows: ASKS, tone: 'bg-rose-500/10', text: 'text-rose-600' },
        { rows: BIDS, tone: 'bg-emerald-500/10', text: 'text-emerald-700' },
      ].map((side, sideIndex) => (
        <div
          key={sideIndex}
          className={sideIndex ? 'mt-2 border-t border-border pt-2' : ''}
        >
          {side.rows.map((row, index) => (
            <div
              key={row.price}
              className="relative flex justify-between py-1.5"
            >
              <span
                className={`absolute inset-y-0.5 right-0 w-full origin-right rounded-sm ${side.tone}`}
                style={
                  {
                    '--to': row.depth,
                    animation: `fill 6s ${(sideIndex * 3 + index) * 0.2}s ease-in-out infinite both`,
                  } as CSSProperties
                }
              />
              <span className={`relative font-medium ${side.text}`}>
                {row.price}
              </span>
              <span className="relative">{row.quantity}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
