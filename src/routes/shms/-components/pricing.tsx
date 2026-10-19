import { ArrowButton, SectionHeading } from '#/components'
import { useReveal } from '#/lib/use-reveal'
import { m } from '#/paraglide/messages'
import type { ShmsContent } from '../-content'

const INCLUDES = [
  m.shms_pricing_include_1,
  m.shms_pricing_include_2,
  m.shms_pricing_include_3,
  m.shms_pricing_include_4,
]

// The packages only differ by shareholder count, so one hairline row reads better than five repeated cards.
export default function Pricing({ plans }: { plans: ShmsContent['plans'] }) {
  const gridRef = useReveal<HTMLUListElement>()

  return (
    <section className="shell flex flex-col gap-14 md:gap-20">
      <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
        <SectionHeading
          eyebrow={m.shms_pricing_eyebrow()}
          title={
            <>
              {m.shms_pricing_title_a()}
              <span className="text-muted-foreground">
                {m.shms_pricing_title_b()}
              </span>
            </>
          }
          intro={m.shms_pricing_intro()}
        />
        <div className="flex flex-col gap-4 lg:max-w-sm">
          <p className="eyebrow">{m.shms_pricing_includes()}</p>
          <ul className="flex flex-wrap gap-2">
            {INCLUDES.map((label, index) => (
              <li
                key={index}
                className="rounded-md flex items-center gap-2 border border-border bg-card px-3 py-2 text-sm"
              >
                <span className="size-1 bg-secondary" aria-hidden="true" />
                {label()}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ul
        ref={gridRef}
        className="rounded-lg grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-5"
      >
        {plans.map((plan, index) => (
          <li
            key={plan.name}
            data-reveal
            className="flex flex-col gap-10 bg-card p-6 sm:last:col-span-2 lg:last:col-span-1"
          >
            <div className="flex items-center justify-between">
              <p className="eyebrow flex items-center gap-2 text-foreground">
                <span className="size-1 bg-secondary" aria-hidden="true" />
                {plan.name}
              </p>
              <span className="eyebrow tabular-nums">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <div>
              <p className="heading flex items-start gap-1.5 text-figure tabular-nums">
                {plan.price}
                <span className="heading pt-0.5 text-lg">{'₮'}</span>
              </p>
              <p className="eyebrow mt-3">{m.shms_pricing_note()}</p>
            </div>
            <p className="border-t border-border pt-4 text-sm text-muted-foreground">
              {plan.shareholders}
            </p>
            <ArrowButton
              href={`mailto:info@ailab.mn?subject=${encodeURIComponent(`ShMS ${plan.name}`)}`}
              className="mt-auto w-full justify-between"
            >
              {m.product_pricing_cta({ plan: plan.name })}
            </ArrowButton>
          </li>
        ))}
      </ul>
    </section>
  )
}
