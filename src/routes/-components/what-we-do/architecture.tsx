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
  'flex h-10 min-w-0 items-center gap-2 rounded-sm px-2.5 leading-tight md:h-14 md:px-3.5 md:text-sm'

const LINE = 'relative h-px self-center bg-muted-foreground/25'

// Packets enter the hub on the left half of each cycle and leave it on the right.
const packet = (row: number, col: number) =>
  `flow 2.4s ${row * -0.8 + (col === 4 ? -1.2 : 0)}s linear infinite`

export function Architecture() {
  return (
    <Card
      icon={BlocksIcon}
      title={m.home_wwd_architecture()}
      lead={m.home_wwd_arch_lead()}
      rest={m.home_wwd_arch_rest()}
    >
      {/* One 8s loop: traffic runs through the hub, then a new product plugs into the empty
          slot, its wire draws in and traffic starts reaching it, without the others pausing. */}
      <div
        data-loop
        className="mx-5 mt-2 grid grid-cols-[minmax(0,1fr)_1.5rem_auto_1.5rem_minmax(0,1fr)] gap-y-2 rounded-md bg-muted p-3 text-xs md:mx-8 md:grid-cols-[minmax(0,1fr)_3.5rem_auto_3.5rem_minmax(0,1fr)] md:gap-y-3 md:p-4"
      >
        <div className="col-span-5 mb-1 flex justify-between gap-4 whitespace-nowrap text-muted-foreground">
          <span>{m.home_wwd_arch_yours()}</span>
          <span>{m.home_wwd_arch_new()}</span>
        </div>

        <span className="col-start-3 row-span-3 row-start-2 flex w-14 flex-col items-center justify-center gap-2 rounded-sm bg-primary text-primary-foreground/80 md:w-20">
          <span className="brand-mark w-6 bg-primary-foreground md:w-7" />
          AILab
        </span>

        {ROWS.map(({ from, to }, row) => {
          const isNew = row === ROWS.length - 1

          return (
            <div key={row} className="contents">
              <span
                className={`col-start-1 ${CHIP} bg-card`}
                style={{ gridRowStart: row + 2 }}
              >
                <HugeiconsIcon
                  icon={from.icon}
                  className="hidden size-3.5 shrink-0 text-muted-foreground sm:block"
                />
                <span className="min-w-0 break-words">{from.label()}</span>
              </span>

              <span
                className={`col-start-2 ${LINE}`}
                style={{ gridRowStart: row + 2 }}
              >
                <span
                  className="absolute inset-x-0 top-1/2"
                  style={{ animation: packet(row, 2) }}
                >
                  <span className="block h-1.5 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-highlight" />
                </span>
              </span>

              <span
                className={`col-start-4 ${isNew ? 'relative h-px self-center bg-[repeating-linear-gradient(90deg,color-mix(in_oklab,var(--muted-foreground)_35%,transparent)_0_3px,transparent_3px_6px)]' : LINE}`}
                style={{ gridRowStart: row + 2 }}
              >
                {/* Tall enough that clipping the wire never clips its packets. */}
                <span
                  className="absolute inset-x-0 top-1/2 h-2 -translate-y-1/2"
                  style={
                    isNew
                      ? {
                          animation:
                            'wire 8s 0.3s var(--ease-out-strong) infinite both',
                        }
                      : undefined
                  }
                >
                  {isNew && (
                    <span className="absolute inset-x-0 top-1/2 h-px bg-muted-foreground/25" />
                  )}
                  <span
                    className="absolute inset-x-0 top-1/2"
                    style={{ animation: packet(row, 4) }}
                  >
                    <span className="block h-1.5 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-highlight" />
                  </span>
                </span>
              </span>

              <span
                className="relative col-start-5"
                style={{ gridRowStart: row + 2 }}
              >
                {isNew && (
                  <span
                    className={`${CHIP} absolute inset-0 border border-dashed border-muted-foreground/30 text-muted-foreground`}
                  >
                    <HugeiconsIcon
                      icon={PlusSignIcon}
                      className="size-3.5 shrink-0"
                    />
                    <span className="min-w-0 break-words">
                      {m.home_wwd_arch_add()}
                    </span>
                  </span>
                )}
                <span
                  className={`${CHIP} relative bg-card`}
                  style={
                    isNew
                      ? {
                          animation:
                            'plug 8s var(--ease-out-strong) infinite both',
                        }
                      : undefined
                  }
                >
                  <HugeiconsIcon
                    icon={to.icon}
                    className="hidden size-3.5 shrink-0 text-highlight sm:block"
                  />
                  <span className="min-w-0 break-words">{to.label()}</span>
                  {isNew && (
                    <span className="ml-auto hidden shrink-0 rounded-sm bg-primary/15 px-1.5 py-0.5 text-[0.625rem] text-highlight sm:inline">
                      {m.home_wwd_arch_new_badge()}
                    </span>
                  )}
                </span>
              </span>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
