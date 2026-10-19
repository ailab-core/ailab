import { HugeiconsIcon } from '@hugeicons/react'
import {
  Analytics01Icon,
  ApiIcon,
  BlocksIcon,
  Building03Icon,
  CreditCardIcon,
  PlusSignIcon,
  SmartPhone01Icon,
  UserMultipleIcon,
} from '@hugeicons/core-free-icons'
import { Card } from './card'
import { m } from '#/paraglide/messages'

const ROWS = [
  {
    from: { icon: Building03Icon, label: () => 'ERP' },
    to: { icon: SmartPhone01Icon, label: m.home_wwd_arch_mobile_app },
  },
  {
    from: { icon: UserMultipleIcon, label: () => 'CRM' },
    to: { icon: CreditCardIcon, label: m.home_wwd_arch_payments },
  },
  {
    from: { icon: Analytics01Icon, label: m.home_wwd_arch_credit_bureau },
    to: { icon: ApiIcon, label: m.home_wwd_arch_banking_api },
  },
]

const CHIP =
  'flex h-10 min-w-0 items-center gap-2 rounded-sm border border-border bg-background px-2.5 leading-tight md:h-14 md:px-3.5 md:text-sm'

export function Architecture() {
  return (
    <Card
      icon={BlocksIcon}
      title={m.home_wwd_architecture()}
      lead={m.home_wwd_arch_lead()}
      rest={m.home_wwd_arch_rest()}
    >
      <div className="grid grid-cols-[minmax(0,1fr)_0.75rem_auto_0.75rem_minmax(0,1fr)] gap-y-2.5 px-5 pt-2 text-xs md:grid-cols-[minmax(0,1fr)_3.5rem_auto_3.5rem_minmax(0,1fr)] md:gap-y-3.5 md:pt-4 md:px-8">
        <div className="eyebrow col-span-5 mb-1 flex justify-between gap-4 whitespace-nowrap">
          <span>{m.home_wwd_arch_yours()}</span>
          <span>{m.home_wwd_arch_new()}</span>
        </div>

        <span className="col-start-3 row-span-3 row-start-2 flex w-14 flex-col items-center justify-center gap-2 rounded-md border border-highlight/50 bg-background shadow-[0_0_40px] shadow-highlight/25 md:w-24">
          <img src="/assets/logos/ailab-icon.svg" alt="" className="size-7" />
          <span className="text-muted-foreground">AILab</span>
        </span>

        {ROWS.map(({ from, to }, row) => (
          <div key={row} className="contents">
            <span
              className={`col-start-1 ${CHIP}`}
              style={{ gridRowStart: row + 2 }}
            >
              <HugeiconsIcon
                icon={from.icon}
                className="hidden size-3.5 shrink-0 text-muted-foreground sm:block"
              />
              <span className="min-w-0 break-words">{from.label()}</span>
            </span>
            {[2, 4].map((col) => (
              <span
                key={col}
                className="relative self-center border-t border-dashed border-border"
                style={{ gridColumnStart: col, gridRowStart: row + 2 }}
              >
                <span
                  className="absolute inset-x-0 -top-px"
                  style={{
                    animation: `flow 2.4s ${row * -0.8 + (col === 4 ? -1.2 : 0)}s linear infinite`,
                  }}
                >
                  <span className="block size-1.5 -translate-x-1/2 -translate-y-1/2 bg-secondary shadow-[0_0_10px_2px] shadow-secondary/50" />
                </span>
              </span>
            ))}
            <span
              className="relative col-start-5"
              style={{ gridRowStart: row + 2 }}
            >
              {row === 2 && (
                <span
                  className={`${CHIP} absolute inset-0 border-dashed text-muted-foreground`}
                >
                  <HugeiconsIcon
                    icon={PlusSignIcon}
                    className="size-3.5 shrink-0"
                  />
                  <span className="min-w-0 break-words">{m.home_wwd_arch_add()}</span>
                </span>
              )}
              {/* The newest product plugs in on a loop while everything else keeps running. */}
              <span
                className={`${CHIP} relative`}
                style={
                  row === 2
                    ? { animation: 'appear 8s ease-out infinite both' }
                    : undefined
                }
              >
                <HugeiconsIcon
                  icon={to.icon}
                  className="hidden size-3.5 shrink-0 text-highlight sm:block"
                />
                <span className="min-w-0 break-words">{to.label()}</span>
                {row === 2 && (
                  <span className="ml-auto hidden shrink-0 rounded-sm bg-secondary/15 px-1.5 py-0.5 text-[0.625rem] text-highlight-secondary sm:inline">
                    {m.home_wwd_arch_new_badge()}
                  </span>
                )}
              </span>
            </span>
          </div>
        ))}
      </div>
    </Card>
  )
}
