import { useState } from 'react'
import {
  ArrowDownLeft01Icon,
  ArrowUpRight01Icon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { cn } from 'cn'
import { SectionHeading } from '#/components'
import { useReveal } from '#/lib/use-reveal'
import { m } from '#/paraglide/messages'
import { Flow } from './flow'

export default function Process() {
  const sectionRef = useReveal<HTMLElement>()
  const [isOutflow, setIsOutflow] = useState(false)

  const directions = [
    { icon: ArrowDownLeft01Icon, label: m.fund_process_inflow() },
    { icon: ArrowUpRight01Icon, label: m.fund_process_outflow() },
  ]

  return (
    <section
      ref={sectionRef}
      id="process"
      className="shell flex scroll-mt-24 flex-col gap-14"
    >
      <SectionHeading
        eyebrow={m.fund_process_eyebrow()}
        title={
          <>
            {m.fund_process_title_a()}
            {m.fund_process_title_b()}
          </>
        }
        intro={m.fund_process_intro()}
      />
      <div
        data-reveal
        className="flex flex-col gap-10 rounded-lg bg-card p-6 md:gap-14 md:p-10"
      >
        <div className="relative grid w-full grid-cols-2 rounded-full bg-muted p-1 sm:w-80">
          <span
            aria-hidden="true"
            className={cn(
              'absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-primary transition-transform duration-200 ease-out-strong',
              isOutflow && 'translate-x-full',
            )}
          />
          {directions.map((direction, index) => (
            <button
              key={direction.label}
              type="button"
              aria-pressed={isOutflow === (index === 1)}
              onClick={() => setIsOutflow(index === 1)}
              className="relative flex h-10 items-center justify-center gap-2 rounded-full text-sm font-semibold text-muted-foreground transition-[color,transform] duration-200 ease-out-strong active:scale-[0.97] aria-pressed:text-primary-foreground"
            >
              <HugeiconsIcon
                icon={direction.icon}
                className="size-4"
                aria-hidden="true"
              />
              {direction.label}
            </button>
          ))}
        </div>
        {isOutflow ? (
          <Flow
            key="outflow"
            title={m.fund_process_outflow_title()}
            note={m.fund_process_outflow_note()}
            checkpoint={2}
            steps={[
              [
                m.fund_process_outflow_step_1_title(),
                m.fund_process_outflow_step_1_body(),
              ],
              [
                m.fund_process_outflow_step_2_title(),
                m.fund_process_outflow_step_2_body(),
              ],
              [
                m.fund_process_outflow_step_3_title(),
                m.fund_process_outflow_step_3_body(),
              ],
              [
                m.fund_process_outflow_step_4_title(),
                m.fund_process_outflow_step_4_body(),
              ],
              [
                m.fund_process_outflow_step_5_title(),
                m.fund_process_outflow_step_5_body(),
              ],
            ]}
          />
        ) : (
          <Flow
            key="inflow"
            title={m.fund_process_inflow_title()}
            note={m.fund_process_inflow_note()}
            checkpoint={3}
            steps={[
              [
                m.fund_process_inflow_step_1_title(),
                m.fund_process_inflow_step_1_body(),
              ],
              [
                m.fund_process_inflow_step_2_title(),
                m.fund_process_inflow_step_2_body(),
              ],
              [
                m.fund_process_inflow_step_3_title(),
                m.fund_process_inflow_step_3_body(),
              ],
              [
                m.fund_process_inflow_step_4_title(),
                m.fund_process_inflow_step_4_body(),
              ],
              [
                m.fund_process_inflow_step_5_title(),
                m.fund_process_inflow_step_5_body(),
              ],
            ]}
          />
        )}
      </div>
    </section>
  )
}
