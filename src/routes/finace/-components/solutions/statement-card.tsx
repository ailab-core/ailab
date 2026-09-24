import { SOLUTIONS } from '../../-content'

const MONTHS = [
  { month: 'Jan', income: 0.62, expense: 0.41 },
  { month: 'Feb', income: 0.7, expense: 0.52 },
  { month: 'Mar', income: 0.55, expense: 0.47 },
  { month: 'Apr', income: 0.82, expense: 0.5 },
  { month: 'May', income: 0.76, expense: 0.6 },
  { month: 'Jun', income: 0.9, expense: 0.55 },
]

export function StatementCard() {
  const solution = SOLUTIONS[2]

  return (
    <article
      id={solution.id}
      className="grid scroll-mt-28 gap-10 rounded-3xl bg-mist p-7 md:col-span-2 md:grid-cols-2 md:gap-16 md:p-12"
    >
      <div className="flex flex-col">
        <p className="eyebrow">{'Statement analysis'}</p>
        <h3 className="mt-4 text-[1.75rem] leading-tight tracking-[-0.02em] md:text-[2.5rem]">
          {solution.title}
        </h3>
        <p className="mt-4 max-w-md text-graphite">{solution.description}</p>
        <ul className="mt-8 text-sm md:mt-auto md:pt-10">
          {solution.features.map((feature) => (
            <li key={feature} className="border-t border-hairline py-2.5">
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div
        className="flex flex-col rounded-2xl bg-background p-6"
        aria-hidden="true"
      >
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium">{'Income and expenses'}</span>
          <span className="flex gap-4 text-xs text-graphite">
            <span className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-brand" />
              {'Income'}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-brand/30" />
              {'Expenses'}
            </span>
          </span>
        </div>
        <div className="mt-8 grid h-56 flex-1 grid-cols-6 items-end gap-4">
          {MONTHS.map((item, index) => (
            <div
              key={item.month}
              className="flex h-full flex-col justify-end gap-2"
            >
              <div className="flex h-full items-end justify-center gap-1">
                {[
                  { value: item.income, tone: 'bg-brand' },
                  { value: item.expense, tone: 'bg-brand/30' },
                ].map((bar, barIndex) => (
                  <span
                    key={barIndex}
                    className={`w-full max-w-4 origin-bottom rounded-t-md ${bar.tone}`}
                    style={{
                      height: `${bar.value * 100}%`,
                      animation: `grow 7s ${index * 0.12 + barIndex * 0.06}s ease-in-out infinite both`,
                    }}
                  />
                ))}
              </div>
              <span className="text-center text-xs text-graphite">
                {item.month}
              </span>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
