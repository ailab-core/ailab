import { GaugeIcon } from 'lucide-react'
import type { CSSProperties } from 'react'
import { cn } from '#/lib/utils'
import { Card } from './card'

const APPLICANTS = [
  { id: '#4821', score: 742, approved: true },
  { id: '#4822', score: 588, approved: false },
  { id: '#4823', score: 801, approved: true },
]

export function CreditScoring() {
  return (
    <Card
      icon={GaugeIcon}
      title="Risk & credit scoring"
      lead="Consistent lending decisions"
      rest="from risk assessment and behavioral credit scoring."
    >
      <ul className="flex flex-col gap-3 p-6 pt-8">
        {APPLICANTS.map((applicant, index) => (
          <li
            key={applicant.id}
            className="rounded-lg border border-border bg-background px-4 py-3"
          >
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-muted-foreground">
                {applicant.id}
              </span>
              <span
                className={cn(
                  'rounded-full px-2 py-0.5',
                  applicant.approved
                    ? 'bg-emerald-400/10 text-emerald-300'
                    : 'bg-amber-400/10 text-amber-200',
                )}
              >
                {applicant.approved ? 'Approved' : 'Review'}
              </span>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <div className="h-1 flex-1 overflow-hidden rounded-full bg-border">
                <div
                  className="h-full origin-left rounded-full bg-brand-soft"
                  style={
                    {
                      '--to': (applicant.score - 300) / 550,
                      animation: `fill 5s ${index * 0.35}s ease-in-out infinite both`,
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
