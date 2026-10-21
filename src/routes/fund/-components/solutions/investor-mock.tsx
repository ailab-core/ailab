import { m } from '#/paraglide/messages'

export function InvestorMock() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-end justify-between">
        <div>
          <p className="eyebrow">{m.fund_mock_my_savings()}</p>
          <p className="heading mt-2 text-figure tabular-nums">
            {'₮24,860,000'}
          </p>
        </div>
        <div className="text-right">
          <p className="eyebrow">{m.fund_mock_return()}</p>
          <p className="mt-2 text-lg font-semibold text-highlight tabular-nums">
            {'+12.8%'}
          </p>
        </div>
      </div>
      <svg
        viewBox="0 0 300 100"
        preserveAspectRatio="none"
        className="mt-5 min-h-0 w-full flex-1 overflow-visible"
      >
        <path
          d="M0 88 C30 84 50 80 75 74 S120 70 150 56 S210 44 240 30 S285 14 300 8 L300 100 L0 100 Z"
          className="fill-primary/10"
        />
        <path
          d="M0 88 C30 84 50 80 75 74 S120 70 150 56 S210 44 240 30 S285 14 300 8"
          pathLength={1}
          strokeDasharray="1"
          vectorEffect="non-scaling-stroke"
          className="fill-none stroke-highlight"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{
            animation: 'draw 7s var(--ease-in-out-strong) infinite both',
          }}
        />
      </svg>
    </div>
  )
}
