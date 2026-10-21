import { GaugeIcon } from '@hugeicons/core-free-icons'
import type { CSSProperties } from 'react'
import { cn } from 'cn'
import { Card } from './card'
import { m } from '#/paraglide/messages'

const APPLICANTS = [
  { id: '#4821', score: 742, approved: true },
  { id: '#4822', score: 588, approved: false },
  { id: '#4823', score: 801, approved: true },
]

export function CreditScoring() {
  return (
    <Card
      icon={GaugeIcon}
      title={m.home_wwd_credit()}
      lead={m.home_wwd_credit_lead()}
      rest={m.home_wwd_credit_rest()}
    >
      <ul className="mx-auto flex max-w-md flex-col gap-3 px-5 pt-2">
        {APPLICANTS.map((applicant, index) => (
          <li key={applicant.id} className="rounded-md bg-muted px-4 py-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-muted-foreground">
                {applicant.id}
              </span>
              <span
                className={cn(
                  'rounded-sm px-2 py-0.5',
                  applicant.approved
                    ? 'bg-primary/10 text-highlight'
                    : 'bg-primary/15 text-highlight',
                )}
              >
                {applicant.approved
                  ? m.home_wwd_credit_approved()
                  : m.home_wwd_credit_review()}
              </span>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <div className="rounded-full h-1 flex-1 overflow-hidden bg-background">
                <div
                  className="h-full origin-left bg-primary"
                  style={
                    {
                      '--to': (applicant.score - 300) / 550,
                      animation: `fill 5s ${index * 0.35}s var(--ease-in-out-strong) infinite both`,
                    } as CSSProperties
                  }
                />
              </div>
              <span className="w-8 text-right font-mono text-xs text-foreground">
                {applicant.score}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  )
}
