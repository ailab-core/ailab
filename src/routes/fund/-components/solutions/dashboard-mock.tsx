import { m } from '#/paraglide/messages'

const MONTHS = [
  { month: m.fund_mock_month_jan, employee: 0.42, employer: 0.24 },
  { month: m.fund_mock_month_feb, employee: 0.45, employer: 0.26 },
  { month: m.fund_mock_month_mar, employee: 0.48, employer: 0.28 },
  { month: m.fund_mock_month_apr, employee: 0.5, employer: 0.3 },
  { month: m.fund_mock_month_may, employee: 0.55, employer: 0.32 },
  { month: m.fund_mock_month_jun, employee: 0.6, employer: 0.36 },
]

export function DashboardMock() {
  return (
    <>
      <div className="flex items-center justify-between text-sm">
        <span className="eyebrow">{m.fund_mock_monthly_contributions()}</span>
        <span className="flex gap-4 text-2xs font-medium tracking-wide text-muted-foreground uppercase">
          <span className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-foreground/80" />
            {m.fund_mock_employee()}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-primary" />
            {m.fund_mock_employer()}
          </span>
        </span>
      </div>
      <div className="mt-5 grid min-h-0 flex-1 grid-cols-6 items-end gap-4">
        {MONTHS.map((item, index) => (
          <div key={index} className="flex h-full flex-col justify-end gap-2">
            {/* Employer match stacks on the employee deduction, so the column reads as one monthly total. */}
            <div
              className="mx-auto flex w-full max-w-6 origin-bottom flex-col"
              style={{
                height: `${(item.employee + item.employer) * 100}%`,
                animation: `grow 7s ${index * 0.12}s var(--ease-in-out-strong) infinite both`,
              }}
            >
              <span
                className="bg-primary"
                style={{ flexGrow: item.employer }}
              />
              <span
                className="bg-foreground/80"
                style={{ flexGrow: item.employee }}
              />
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
