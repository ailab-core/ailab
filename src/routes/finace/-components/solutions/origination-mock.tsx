import { m } from '#/paraglide/messages'

const STAGES = [
  m.finace_mock_stage_applied,
  m.finace_mock_stage_scored,
  m.finace_mock_stage_approved,
  m.finace_mock_stage_disbursed,
]

export function OriginationMock() {
  return (
    <div className="grid grid-cols-[1fr_auto] items-center gap-8">
      <div>
        <p className="eyebrow">{m.finace_mock_application({ id: '#4821' })}</p>
        <p className="heading mt-2 text-figure tabular-nums">{'₮2,500,000'}</p>
        <ol className="mt-6 flex flex-col gap-1.5">
          {STAGES.map((stage, index) => (
            <li
              key={index}
              className="w-fit px-2.5 py-1 text-2xs font-medium tracking-wide uppercase"
              style={{
                animation: `stage 6s ${index * 1.1}s ease-in-out infinite both`,
              }}
            >
              {`0${index + 1} ${stage()}`}
            </li>
          ))}
        </ol>
      </div>
      <div className="relative size-36">
        <svg viewBox="0 0 100 100" className="size-full -rotate-90">
          <circle
            cx="50"
            cy="50"
            r="42"
            className="fill-none stroke-border"
            strokeWidth="6"
          />
          <circle
            cx="50"
            cy="50"
            r="42"
            pathLength={1.25}
            strokeDasharray="1 2"
            className="fill-none stroke-secondary"
            strokeWidth="6"
            strokeLinecap="round"
            style={{ animation: 'draw 6s ease-in-out infinite both' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="heading text-figure tabular-nums">{'742'}</span>
          <span className="eyebrow mt-1">{m.finace_mock_score()}</span>
        </div>
      </div>
    </div>
  )
}
