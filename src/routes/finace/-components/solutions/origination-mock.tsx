import type { CSSProperties } from 'react'

const STAGES = ['Applied', 'Scored', 'Approved', 'Disbursed']

export function OriginationMock() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">{'Application #4821'}</span>
        <span className="text-graphite tabular-nums">{'₮2,500,000'}</span>
      </div>
      <ol className="flex flex-wrap gap-2">
        {STAGES.map((stage, index) => (
          <li
            key={stage}
            className="rounded-full border border-border px-3 py-1.5 text-xs"
            style={{
              animation: `stage 6s ${index * 1.1}s ease-in-out infinite both`,
            }}
          >
            {stage}
          </li>
        ))}
      </ol>
      <div className="flex items-center gap-3 text-xs text-graphite">
        {'Credit score'}
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-mist">
          <div
            className="h-full origin-left rounded-full bg-brand"
            style={
              {
                '--to': 0.8,
                animation: 'fill 6s ease-in-out infinite both',
              } as CSSProperties
            }
          />
        </div>
        <span className="font-medium text-ink tabular-nums">{'742'}</span>
      </div>
    </div>
  )
}
