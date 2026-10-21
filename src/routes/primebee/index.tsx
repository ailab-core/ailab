import { createFileRoute } from '@tanstack/react-router'
import { Cta } from '#/components'
import {
  ProductCapabilities,
  ProductHero,
  ProductIntegrations,
  ProductValues,
} from '#/components/product'
import { m } from '#/paraglide/messages'
import {
  getCapabilities,
  getIntegrations,
  getPlans,
  getSolutions,
  getValues,
} from './-content'
import { LeadBoard } from './-components/lead-board'
import Pricing from './-components/pricing'
import Solutions from './-components/solutions'

const DEMO_HREF = 'mailto:info@ailab.mn?subject=Demo%20request%3A%20PrimeBee'

export const Route = createFileRoute('/primebee/')({
  staticData: { darkHero: true },
  head: () => ({
    meta: [
      { title: m.primebee_meta_title() },
      {
        name: 'description',
        content: m.primebee_meta_description(),
      },
      {
        property: 'og:title',
        content: m.primebee_meta_og_title(),
      },
    ],
  }),
  component: PrimeBeePage,
})

function PrimeBeePage() {
  const integrations = getIntegrations()

  return (
    <main className="flex flex-col">
      <ProductHero
        eyebrow={m.primebee_hero_eyebrow()}
        title={m.primebee_hero_title()}
        intro={m.primebee_hero_intro()}
        demoHref={DEMO_HREF}
        facts={[
          [m.primebee_fact_modules(), String(getSolutions().length)],
          [m.primebee_fact_integrations(), String(integrations.length)],
          [m.primebee_fact_plans_from(), getPlans()[0].price],
        ]}
      >
        <LeadBoard />
      </ProductHero>
      <ProductCapabilities items={getCapabilities()} />
      <div className="flex flex-col gap-32 py-32 md:gap-48 md:py-48">
        <Solutions />
        <ProductValues
          id="why"
          eyebrow={m.primebee_why_eyebrow()}
          title={
            <>
              {m.primebee_why_title_a()}
              {m.primebee_why_title_b()}
            </>
          }
          intro={m.primebee_why_intro()}
          items={getValues()}
        />
        <ProductIntegrations
          id="integrations"
          intro={m.primebee_integrations_intro()}
          items={integrations}
        />
        <Pricing />
      </div>
      <Cta
        eyebrow={m.primebee_cta_eyebrow()}
        title={m.primebee_cta_title()}
        intro={m.primebee_cta_intro()}
        href={DEMO_HREF}
        label={m.primebee_cta_label()}
      />
    </main>
  )
}
