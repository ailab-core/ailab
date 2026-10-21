import { HugeiconsIcon } from '@hugeicons/react'
import { CheckIcon } from '@hugeicons/core-free-icons'
import { cn } from 'cn'
import { m } from '#/paraglide/messages'

const CHOICES = [m.shms_vote_for, m.shms_vote_against, m.shms_vote_abstain]

export function VotingMock() {
  return (
    <div className="flex flex-col gap-3">
      <div className="rounded-md bg-card p-4">
        <p className="text-xs text-muted-foreground">
          {m.shms_mock_agenda_item({ item: '2' })}
        </p>
        <p className="heading mt-1 text-lg">{m.shms_mock_agenda_2()}</p>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {CHOICES.map((choice, index) => (
            <span
              key={index}
              className={cn(
                'rounded-full flex h-9 items-center justify-center gap-1.5 text-xs',
                index
                  ? 'bg-muted text-muted-foreground'
                  : 'bg-primary/15 text-foreground',
              )}
            >
              {!index && (
                <HugeiconsIcon
                  icon={CheckIcon}
                  className="size-3.5 text-highlight"
                  style={{
                    animation: 'appear 5s var(--ease-out-strong) infinite both',
                  }}
                />
              )}
              {choice()}
            </span>
          ))}
        </div>
      </div>
      <div className="rounded-md flex items-center justify-between bg-card px-4 py-3 text-sm">
        {m.shms_mock_elect_board()}
        <span className="flex -space-x-1.5" aria-hidden="true">
          {[0, 1, 2].map((index) => (
            <span
              key={index}
              className="rounded-full size-6 bg-foreground/20 ring-2 ring-card"
            />
          ))}
        </span>
      </div>
    </div>
  )
}
