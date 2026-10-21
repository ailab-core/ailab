import { CodeXmlIcon } from '@hugeicons/core-free-icons'
import { Card } from './card'
import { m } from '#/paraglide/messages'

// Types are bold: light mode's blue-800 is too close to the navy foreground to
// carry hierarchy on hue alone.
const TONE = {
  k: 'text-highlight',
  t: 'font-semibold text-foreground',
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
    ['k', '  @PostMapping'],
    ['p', '('],
    ['k', '"/loans"'],
    ['p', ')'],
  ],
  [
    ['k', '  public '],
    ['t', 'Loan'],
    ['p', ' apply('],
    ['t', 'Application'],
    ['p', ' a) {'],
  ],
  [
    ['k', '    var'],
    ['p', ' score = scoring.assess(a);'],
  ],
  [
    ['k', '    return'],
    ['p', ' loans.originate(a, score);'],
  ],
  [['p', '  }']],
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
      {/* One 10s loop: code types in line by line, then the deploy log pops up and ticks through. */}
      <div data-loop className="absolute inset-0">
        <div className="rounded-md absolute inset-x-5 top-2 overflow-hidden bg-muted font-mono text-xs leading-relaxed md:inset-x-8">
          <div className="flex items-center gap-1.5 px-4 pt-3.5">
            <span className="rounded-full size-2.5 bg-primary" />
            <span className="size-2.5 rounded-full bg-muted-foreground/25" />
            <span className="size-2.5 rounded-full bg-muted-foreground/25" />
            <span className="ml-3 text-muted-foreground/70">
              LoanController.java
            </span>
          </div>
          <pre className="p-4 pt-3 whitespace-pre">
            {CODE.map((line, row) => (
              <div key={row} className="flex">
                <span className="w-6 shrink-0 text-muted-foreground/40 select-none">
                  {row + 1}
                </span>
                <span
                  className="min-w-0 overflow-hidden"
                  style={{
                    animation: `type 10s ${row * 0.22}s linear infinite both`,
                  }}
                >
                  {line.map(([tone, text], index) => (
                    <span key={index} className={TONE[tone]}>
                      {text}
                    </span>
                  ))}
                  {row === CODE.length - 1 && (
                    <span className="ml-px inline-block h-4 w-[2px] animate-[blink_1.1s_steps(1)_infinite] bg-primary" />
                  )}
                </span>
              </div>
            ))}
          </pre>
        </div>
        <div
          className="rounded-md absolute right-8 bottom-3 w-52 md:right-12 md:bottom-10 md:w-60 bg-card p-4 font-mono text-xs leading-relaxed shadow-[0_16px_40px_-12px_rgb(0_0_0/0.18)] dark:shadow-[0_16px_40px_-12px_rgb(0_0_0/0.6)]"
          style={{ animation: 'pop 10s var(--ease-out-strong) infinite both' }}
        >
          {LOG.map((line, index) => (
            <p
              key={index}
              className={
                index === 0
                  ? 'text-foreground'
                  : index === LOG.length - 1
                    ? 'text-highlight'
                    : 'text-highlight/90'
              }
              style={{
                animation: `log 10s ${index * 0.5}s var(--ease-out-strong) infinite both`,
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
