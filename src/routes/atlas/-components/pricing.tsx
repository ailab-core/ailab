import { SectionHeading } from '#/components'
import { PricingCard } from '#/components/product'
import { useReveal } from '#/lib/use-reveal'
import { m } from '#/paraglide/messages'
import type { AtlasContent } from '../-content'

export default function Pricing({ plans }: { plans: AtlasContent['plans'] }) {
  const gridRef = useReveal<HTMLUListElement>()

  return (
    <section className="shell flex flex-col gap-14 md:gap-20">
      <SectionHeading
        eyebrow={m.atlas_pricing_eyebrow()}
        title={
          <>
            {m.atlas_pricing_title_a()}
            <span className="text-muted-foreground">
              {m.atlas_pricing_title_b()}
            </span>
          </>
        }
        intro={m.atlas_pricing_intro()}
      />
      <ul ref={gridRef} className="grid gap-4 md:grid-cols-3">
        {plans.map((plan, index) => (
          <li key={index}>
            <PricingCard
              index={index}
              plan={plan}
              note={m.atlas_pricing_note()}
              href={`mailto:info@ailab.mn?subject=${encodeURIComponent(`Atlas ${plan.name}`)}`}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
