import { CodeXmlIcon } from '@hugeicons/core-free-icons'
import { Card } from './card'
import { m } from '#/paraglide/messages'

const TONE = {
  k: 'text-highlight',
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
    ['p', ''],
    ['k', '@PostMapping'],
    ['p', '("/loans")'],
  ],
  [
    ['p', ''],
    ['t', 'Loan'],
    ['p', ' apply('],
    ['t', 'Application'],
    ['p', ' a) {'],
  ],
  [['p', ' var score = scoring.assess(a);']],
  [
    ['p', ''],
    ['k', 'return'],
    ['p', ' loans.originate(a, score);'],
  ],
  [['p', ' }']],
  [['p', '}']],
]

const LOG = [
  () => '$ ./mvnw deploy',
  m.home_wwd_dev_log_tests,
  m.home_wwd_dev_log_scan,
  m.home_wwd_dev_log_live,
]

const POINTS = [
  m.home_wwd_dev_point_1,
  m.home_wwd_dev_point_2,
  m.home_wwd_dev_point_3,
]

export function Development() {
  return (
    <Card
      icon={CodeXmlIcon}
      title={m.home_wwd_development()}
      lead={m.home_wwd_dev_lead()}
      rest={m.home_wwd_dev_rest()}
      tags={POINTS}
    >
      <div className="absolute inset-0">
        <div className="rounded-md absolute top-2 right-[-2rem] left-5 overflow-hidden border border-border bg-background font-mono text-xs leading-relaxed md:left-8">
          <div className="flex gap-1.5 border-b border-border px-3 py-2.5">
            <span className="size-2 bg-secondary" />
            <span className="size-2 bg-border" />
            <span className="size-2 bg-border" />
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
                  <span className="ml-px inline-block h-4 w-[2px] animate-[blink_1.1s_steps(1)_infinite] bg-primary" />
                )}
              </div>
            ))}
          </pre>
        </div>
        <div className="rounded-md absolute right-5 bottom-10 w-60 md:right-8 border border-border bg-card/95 p-4 font-mono text-xs leading-relaxed shadow-2xl shadow-background/40 backdrop-blur">
          {LOG.map((line, index) => (
            <p
              key={index}
              className={index === 0 ? 'text-foreground' : 'text-highlight/90'}
              style={{
                animation: `appear 6s ${index * 0.7}s ease-out infinite both`,
              }}
            >
              {line()}
            </p>
          ))}
        </div>
      </div>
    </Card>
  )
}
