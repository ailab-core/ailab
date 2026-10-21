import { HugeiconsIcon } from '@hugeicons/react'
import {
  CheckmarkCircle02Icon,
  File01Icon,
  WorkflowIcon,
} from '@hugeicons/core-free-icons'
import { Card } from './card'
import { m } from '#/paraglide/messages'

const STEPS = [
  { label: m.home_wwd_auto_step_1, time: '0:02' },
  { label: m.home_wwd_auto_step_2, time: '0:18' },
  { label: m.home_wwd_auto_step_3, time: '1:12' },
  { label: m.home_wwd_auto_step_4, time: '2:04' },
]

export function Automation() {
  return (
    <Card
      icon={WorkflowIcon}
      title={m.home_wwd_automation()}
      lead={m.home_wwd_auto_lead()}
      rest={m.home_wwd_auto_rest()}
    >
      <div className="absolute inset-0 bg-[radial-gradient(var(--accent)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:linear-gradient(to_bottom,transparent,black_30%)]" />
      <div className="relative mx-5 mt-2 overflow-hidden rounded-md bg-muted text-sm md:mx-8">
        <div className="flex items-center justify-between gap-4 px-4 py-3 text-xs">
          <span className="flex items-center gap-2 whitespace-nowrap text-foreground">
            <HugeiconsIcon
              icon={File01Icon}
              className="size-3.5 text-highlight"
            />
            {m.home_wwd_auto_ticket()}
            <span className="text-muted-foreground">#1042</span>
          </span>
          <span className="relative whitespace-nowrap text-muted-foreground">
            {m.home_wwd_auto_running()}
            <span
              className="absolute inset-y-0 right-0 flex min-w-full items-center justify-end gap-1.5 bg-muted text-highlight"
              style={{ animation: 'swap 8s -0.3s linear infinite both' }}
            >
              <span className="rounded-full size-2 bg-primary" />
              {m.home_wwd_auto_done()}
            </span>
          </span>
        </div>

        {/* The "done" copy sits on top of the "waiting" copy and is revealed one row per step. */}
        <div className="relative">
          {[false, true].map((done) => (
            <div
              key={String(done)}
              className={done ? 'absolute inset-0 bg-muted' : undefined}
              style={
                done
                  ? { animation: 'reveal 8s linear infinite both' }
                  : undefined
              }
            >
              <span
                className={`absolute top-6 bottom-6 left-[1.625rem] md:top-7 md:bottom-7 w-px ${done ? 'bg-primary' : 'bg-muted-foreground/25'}`}
              />
              {STEPS.map((step, index) => (
                <div
                  key={index}
                  className="relative flex h-12 items-center gap-3 px-4 md:h-14"
                >
                  {done ? (
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      className="size-5 shrink-0 bg-muted text-highlight"
                    />
                  ) : (
                    <span className="flex size-5 shrink-0 items-center justify-center bg-muted">
                      <span className="size-3 rounded-full border border-dashed border-muted-foreground/50" />
                    </span>
                  )}
                  <span
                    className={`flex-1 truncate ${done ? 'text-foreground' : 'text-muted-foreground'}`}
                  >
                    {step.label()}
                  </span>
                  <span
                    className={`shrink-0 text-xs tabular-nums ${done ? 'text-highlight' : 'text-muted-foreground/60'}`}
                  >
                    {done ? (
                      <>
                        <span className="hidden sm:inline">
                          {m.home_wwd_auto_auto()} ·{' '}
                        </span>
                        {step.time}
                      </>
                    ) : (
                      m.home_wwd_auto_pending()
                    )}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
