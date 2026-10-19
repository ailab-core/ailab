import { SectionHeading } from '#/components'
import { PricingCard } from '#/components/product'
import { useReveal } from '#/lib/use-reveal'
import { m } from '#/paraglide/messages'
import { getPlans } from '../../-content'
import { AddOns } from './add-ons'

export default function Pricing() {
  const gridRef = useReveal<HTMLUListElement>()

  return (
    <section
      id="pricing"
      className="shell flex scroll-mt-24 flex-col gap-14 md:gap-20"
    >
      <SectionHeading
        eyebrow={m.primebee_pricing_eyebrow()}
        title={
          <>
            {m.primebee_pricing_title_a()}
            <span className="text-muted-foreground">
              {m.primebee_pricing_title_b()}
            </span>
          </>
        }
        intro={m.primebee_pricing_intro()}
      />
      <ul ref={gridRef} className="grid gap-4 md:grid-cols-3">
        {getPlans().map((plan, index) => (
          <li key={plan.id}>
            <PricingCard
              index={index}
              plan={plan}
              note={m.primebee_pricing_note()}
              href={`mailto:info@ailab.mn?subject=${encodeURIComponent(`PrimeBee ${plan.id}`)}`}
            />
          </li>
        ))}
      </ul>
      <AddOns />
    </section>
  )
}
