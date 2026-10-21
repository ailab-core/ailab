import { HugeiconsIcon } from '@hugeicons/react'
import { UserCheck01Icon } from '@hugeicons/core-free-icons'
import { cn } from 'cn'
import { m } from '#/paraglide/messages'

const CHOICES = [m.shms_vote_for, m.shms_vote_against, m.shms_vote_abstain]

export function Phone() {
  return (
    <div className="rounded-xl mx-auto h-[34rem] w-72 bg-muted p-1.5 shadow-2xl shadow-black/50">
      <div className="rounded-lg flex h-full flex-col gap-4 bg-background p-5">
        <div className="-mx-5 -mt-5 flex h-7 items-center justify-between px-4 font-mono text-3xs text-muted-foreground">
          {'9:41'}
          <span className="flex items-end gap-0.5" aria-hidden="true">
            <span className="h-1 w-0.5 bg-current" />
            <span className="h-1.5 w-0.5 bg-current" />
            <span className="h-2 w-0.5 bg-current" />
          </span>
        </div>
        <p className="flex items-center gap-2 text-2xs font-medium tracking-wide text-muted-foreground uppercase">
          <HugeiconsIcon
            icon={UserCheck01Icon}
            className="size-3.5 text-highlight"
          />
          {m.shms_phone_signed_in()}
        </p>
        <div className="rounded-md relative aspect-video overflow-hidden bg-card bg-[radial-gradient(circle_at_30%_30%,color-mix(in_oklab,var(--primary)_35%,transparent),transparent_70%)]">
          <span className="rounded-sm absolute top-2.5 left-2.5 flex items-center gap-1.5 bg-primary px-1.5 py-0.5 text-2xs font-medium tracking-wide text-highlight-foreground uppercase">
            <span className="rounded-full size-1.5 animate-pulse bg-primary-foreground" />
            {m.shms_phone_live()}
          </span>
          <span className="absolute bottom-2.5 left-2.5 text-2xs text-foreground/70">
            {m.shms_console_title()}
          </span>
        </div>
        <div>
          <p className="text-2xs text-muted-foreground">
            {m.shms_mock_agenda_item({ item: '2' })}
          </p>
          <p className="heading mt-1 text-lg">{m.shms_mock_agenda_2()}</p>
        </div>
        <ul className="flex flex-col gap-2 text-sm">
          {CHOICES.map((choice, index) => (
            <li
              key={index}
              className={cn(
                'rounded-full flex h-10 items-center justify-between px-4',
                index ? 'bg-muted text-muted-foreground' : 'bg-primary/15',
              )}
            >
              {choice()}
              <span
                className={cn(
                  'rounded-full size-3.5',
                  index ? 'bg-foreground/15' : 'bg-primary',
                )}
              />
            </li>
          ))}
        </ul>
        <span className="rounded-full mt-auto flex h-10 items-center justify-center bg-primary text-sm text-primary-foreground">
          {m.shms_phone_submit()}
        </span>
      </div>
    </div>
  )
}
