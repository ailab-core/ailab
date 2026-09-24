import { CheckIcon, CodeXmlIcon } from 'lucide-react'
import { Card } from './card'

const TONE = {
  k: 'text-brand-soft',
  t: 'text-foreground',
  p: 'text-muted-foreground',
}

const CODE: Array<Array<[keyof typeof TONE, string]>> = [
  [['k', '@RestController']],
  [
    ['k', 'public class '],
    ['t', 'LoanController'],
    ['p', ' {'],
  ],
  [],
  [
    ['p', '  '],
    ['k', '@PostMapping'],
    ['p', '("/loans")'],
  ],
  [
    ['p', '  '],
    ['t', 'Loan'],
    ['p', ' apply('],
    ['t', 'Application'],
    ['p', ' a) {'],
  ],
  [['p', '    var score = scoring.assess(a);']],
  [
    ['p', '    '],
    ['k', 'return'],
    ['p', ' loans.originate(a, score);'],
  ],
  [['p', '  }']],
  [['p', '}']],
]

const LOG = [
  '$ ./mvnw deploy',
  '✓ 128 tests passed',
  '✓ Security scan clean',
  '✓ Live on production',
]

const POINTS = [
  'Web and mobile apps',
  'Product design and UX',
  'Secure financial APIs',
]

export function Development() {
  return (
    <Card
      icon={CodeXmlIcon}
      title="Development"
      lead="Financial software built around your customers,"
      rest="from the first design review to production."
      className="md:col-span-2"
    >
      <ul className="relative z-10 flex flex-col gap-1.5 p-6 text-sm text-muted-foreground md:absolute md:bottom-0 md:left-0">
        {POINTS.map((point) => (
          <li key={point} className="flex items-center gap-2">
            <CheckIcon className="size-4 text-brand-soft" />
            {point}
          </li>
        ))}
      </ul>
      <div className="relative h-72 md:absolute md:inset-y-0 md:right-0 md:h-auto md:w-[58%]">
        <div className="absolute top-6 right-[-2rem] left-6 overflow-hidden rounded-lg border border-border bg-background font-mono text-[0.72rem] leading-relaxed md:top-4 md:left-0">
          <div className="flex gap-1.5 border-b border-border px-3 py-2.5">
            <span className="size-2 rounded-full bg-border" />
            <span className="size-2 rounded-full bg-border" />
            <span className="size-2 rounded-full bg-border" />
          </div>
          <pre className="p-4">
            {CODE.map((line, row) => (
              <div key={row} className="flex">
                <span className="w-6 shrink-0 text-muted-foreground/40 select-none">
                  {row + 1}
                </span>
                {line.map(([tone, text], index) => (
                  <span key={index} className={TONE[tone]}>
                    {text}
                  </span>
                ))}
                {row === 5 && (
                  <span className="ml-px inline-block h-4 w-[2px] animate-[blink_1.1s_steps(1)_infinite] bg-brand-soft" />
                )}
              </div>
            ))}
          </pre>
        </div>
        <div className="absolute right-4 bottom-6 w-60 rounded-lg border border-border bg-card/95 p-4 font-mono text-[0.72rem] leading-relaxed shadow-2xl shadow-black/40 backdrop-blur">
          {LOG.map((line, index) => (
            <p
              key={line}
              className={
                index === 0 ? 'text-foreground' : 'text-emerald-400/90'
              }
              style={{
                animation: `appear 6s ${index * 0.7}s ease-out infinite both`,
              }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </Card>
  )
}
