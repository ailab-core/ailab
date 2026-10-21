import { Tick02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { cn } from 'cn'

type FlowProps = {
  title: string
  note: string
  steps: Array<[title: string, body: string]>
  // The custodian reconciliation step, drawn as the checkpoint on the rail.
  checkpoint: number
}

export function Flow({ title, note, steps, checkpoint }: FlowProps) {
  return (
    <div className="flex flex-col gap-10 md:gap-14">
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
        <h3 className="heading text-title">{title}</h3>
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <span
            className="size-1.5 rounded-full bg-secondary"
            aria-hidden="true"
          />
          {note}
        </p>
      </div>
      <div className="relative">
        {/* Rail runs between the first and last node centers: vertical on mobile, horizontal from lg. */}
        <div
          aria-hidden="true"
          data-loop
          className="absolute top-5 bottom-5 left-5 w-px bg-border lg:right-[10%] lg:bottom-auto lg:left-[10%] lg:h-px lg:w-auto"
        >
          <div className="absolute inset-0 hidden animate-[travel_3.2s_linear_infinite] lg:block">
            <span className="absolute top-1/2 left-0 size-2 -translate-1/2 rounded-full bg-primary shadow-[0_0_0_4px_var(--card)]" />
          </div>
        </div>
        <ol className="relative grid gap-8 lg:grid-cols-5 lg:gap-4">
          {steps.map(([stepTitle, body], index) => (
            <li
              key={stepTitle}
              className="flex animate-[rise_0.5s_var(--ease-out-strong)_both] gap-5 lg:flex-col lg:items-center lg:text-center"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span
                className={cn(
                  'flex size-10 shrink-0 items-center justify-center rounded-full font-mono text-xs ring-4 ring-card',
                  index === checkpoint
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border bg-card text-muted-foreground',
                )}
              >
                {index === checkpoint ? (
                  <HugeiconsIcon
                    icon={Tick02Icon}
                    className="size-4"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                ) : (
                  `0${index + 1}`
                )}
              </span>
              <div className="pt-2 lg:pt-0">
                <p className="font-semibold">{stepTitle}</p>
                <p className="mt-1 text-sm text-muted-foreground">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
