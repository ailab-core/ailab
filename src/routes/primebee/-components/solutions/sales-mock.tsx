import { cn } from 'cn'
import { m } from '#/paraglide/messages'

const STAGES = [
  m.primebee_mock_stage_new,
  m.primebee_mock_stage_connected,
  m.primebee_mock_stage_proposal,
  m.primebee_mock_stage_won,
]

export function SalesMock() {
  return (
    <div>
      <div className="flex items-end justify-between">
        <div>
          <p className="eyebrow">
            {m.primebee_mock_sales_deal({ id: '2202' })}
          </p>
          <p className="heading mt-2 text-figure tabular-nums">
            {'₮38,500,000'}
          </p>
        </div>
        <p className="text-right">
          <span className="heading block text-figure text-highlight tabular-nums">
            {'75%'}
          </span>
          <span className="eyebrow">{m.primebee_mock_sales_win_chance()}</span>
        </p>
      </div>
      <ol className="mt-8 grid grid-cols-4 gap-1.5">
        {STAGES.map((stage, index) => (
          <li key={index} className="flex flex-col gap-2">
            <span
              className={cn(
                'h-1.5 ',
                index < 3 ? 'bg-secondary' : 'bg-foreground/15',
              )}
              style={
                index === 2
                  ? { animation: 'blink 1.6s ease-in-out infinite' }
                  : undefined
              }
            />
            <span className="text-2xs font-medium tracking-wide text-muted-foreground uppercase">
              {stage()}
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}
