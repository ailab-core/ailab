import { m } from '#/paraglide/messages'

const MONTHS = [
  { month: m.finace_mock_month_jan, income: 0.62, expense: 0.41 },
  { month: m.finace_mock_month_feb, income: 0.7, expense: 0.52 },
  { month: m.finace_mock_month_mar, income: 0.55, expense: 0.47 },
  { month: m.finace_mock_month_apr, income: 0.82, expense: 0.5 },
  { month: m.finace_mock_month_may, income: 0.76, expense: 0.6 },
  { month: m.finace_mock_month_jun, income: 0.9, expense: 0.55 },
]

export function StatementMock() {
  return (
    <>
      <div className="flex items-center justify-between text-sm">
        <span className="eyebrow">{m.finace_mock_income_expenses()}</span>
        <span className="flex gap-4 text-2xs font-medium tracking-wide text-muted-foreground uppercase">
          <span className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-foreground/80" />
            {m.finace_mock_income()}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="rounded-full size-2.5 bg-primary" />
            {m.finace_mock_expenses()}
          </span>
        </span>
      </div>
      <div className="mt-5 grid min-h-0 flex-1 grid-cols-6 items-end gap-4">
        {MONTHS.map((item, index) => (
          <div key={index} className="flex h-full flex-col justify-end gap-2">
            <div className="flex h-full items-end justify-center gap-1">
              {[
                { value: item.income, tone: 'bg-foreground/80' },
                { value: item.expense, tone: 'bg-primary' },
              ].map((bar, barIndex) => (
                <span
                  key={barIndex}
                  className={`w-full max-w-4 origin-bottom ${bar.tone}`}
                  style={{
                    height: `${bar.value * 100}%`,
                    animation: `grow 7s ${index * 0.12 + barIndex * 0.06}s var(--ease-in-out-strong) infinite both`,
                  }}
                />
              ))}
            </div>
            <span className="text-center text-2xs font-medium tracking-wide text-muted-foreground uppercase">
              {item.month()}
            </span>
          </div>
        ))}
      </div>
    </>
  )
}
