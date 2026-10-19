import { HugeiconsIcon } from '@hugeicons/react'
import {
  CheckIcon,
  FileExportIcon,
  UserCheck01Icon,
  UserGroupIcon,
  VoteIcon,
} from '@hugeicons/core-free-icons'
import { cn } from 'cn'
import { Console } from '#/components/product'
import { m } from '#/paraglide/messages'

const RESULTS = [
  { label: m.shms_vote_for, share: 82 },
  { label: m.shms_vote_against, share: 11 },
  { label: m.shms_vote_abstain, share: 7 },
]

const AGENDA = [
  { label: m.shms_mock_agenda_1, state: 'done' },
  { label: m.shms_mock_agenda_2, state: 'live' },
  { label: m.shms_mock_agenda_3, state: 'next' },
]

// The voting panel sits right of the agenda so the floating toasts never cover it.
export function MeetingConsole() {
  return (
    <Console
      title={m.shms_console_title()}
      notifications={[
        { icon: UserCheck01Icon, text: m.shms_notification_dan() },
        { icon: VoteIcon, text: m.shms_notification_vote({ item: '3' }) },
        { icon: UserGroupIcon, text: m.shms_notification_ballot() },
        { icon: FileExportIcon, text: m.shms_notification_report() },
      ]}
    >
      <dl className="grid grid-cols-3 gap-3">
        <div className="rounded-md border border-border bg-background px-3 py-2.5">
          <dt className="eyebrow">{m.shms_console_quorum()}</dt>
          <dd className="mt-1 text-lg text-highlight tabular-nums">
            {'67.4%'}
          </dd>
        </div>
        <div className="rounded-md border border-border bg-background px-3 py-2.5">
          <dt className="eyebrow">{m.shms_console_online()}</dt>
          <dd className="mt-1 text-lg tabular-nums">{'1,248'}</dd>
        </div>
        <div className="rounded-md border border-border bg-background px-3 py-2.5">
          <dt className="eyebrow">{m.shms_console_shares()}</dt>
          <dd className="mt-1 text-lg tabular-nums">{'12,450,000'}</dd>
        </div>
      </dl>
      <div className="mt-3 grid gap-3 md:grid-cols-3">
        <div className="rounded-md border border-border bg-background p-4 md:order-last md:col-span-2">
          <p className="eyebrow flex items-center gap-2 text-foreground">
            <span className="size-1.5 animate-pulse bg-secondary" />
            {m.shms_console_now_voting()}
          </p>
          <p className="heading mt-3 text-title">{m.shms_mock_agenda_2()}</p>
          <p className="mt-1 text-xs text-muted-foreground">
            {m.shms_mock_agenda_item({ item: '2' })}
          </p>
          <ul className="mt-6 flex flex-col gap-4">
            {RESULTS.map((result, index) => (
              <li key={index}>
                <div className="flex justify-between text-sm">
                  {result.label()}
                  <span className="text-muted-foreground tabular-nums">
                    {`${result.share}%`}
                  </span>
                </div>
                <div className="mt-2 h-1.5 bg-foreground/10">
                  <div
                    className={cn(
                      'h-full origin-left ',
                      index ? 'bg-foreground/40' : 'bg-secondary',
                    )}
                    style={{
                      width: `${result.share}%`,
                      animation: `fill 7s ${index * 0.3}s ease-in-out infinite both`,
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-md hidden flex-col border border-border bg-background md:flex">
          <p className="eyebrow border-b border-border px-4 py-3 text-foreground">
            {m.shms_mock_agenda()}
          </p>
          <ol className="flex flex-col text-sm">
            {AGENDA.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 border-b border-border px-4 py-3 last:border-b-0"
              >
                <span
                  className={cn(
                    'rounded-sm flex size-5 shrink-0 items-center justify-center  text-2xs',
                    item.state === 'done' &&
                      'bg-primary text-primary-foreground',
                    item.state === 'live' &&
                      'bg-secondary text-secondary-foreground',
                    item.state === 'next' &&
                      'border border-border text-muted-foreground',
                  )}
                >
                  {item.state === 'done' ? (
                    <HugeiconsIcon icon={CheckIcon} className="size-3" />
                  ) : (
                    index + 1
                  )}
                </span>
                <span
                  className={cn(
                    item.state === 'next' && 'text-muted-foreground',
                  )}
                >
                  {item.label()}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Console>
  )
}
