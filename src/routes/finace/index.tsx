import { createFileRoute } from '@tanstack/react-router'
import { Cta } from '#/components'
import {
  ProductCapabilities,
  ProductHero,
  ProductIntegrations,
  ProductValues,
} from '#/components/product'
import { m } from '#/paraglide/messages'
import { CLIENTS, getContent } from './-content'
import { LoanDashboard } from './-components/loan-dashboard'
import Solutions from './-components/solutions'

const DEMO_HREF = 'mailto:info@ailab.mn?subject=Demo%20request%3A%20Finace'

export const Route = createFileRoute('/finace/')({
  staticData: { darkHero: true },
  head: () => ({
    meta: [
      { title: m.finace_meta_title() },
      {
        name: 'description',
        content: m.finace_meta_description(),
      },
    ],
  }),
  component: FinacePage,
})

function FinacePage() {
  const content = getContent()

  return (
    <main className="flex flex-col">
      <ProductHero
        eyebrow={m.finace_hero_eyebrow()}
        title={m.finace_hero_title()}
        intro={m.finace_hero_intro()}
        demoHref={DEMO_HREF}
        facts={[
          [m.finace_fact_systems(), String(content.solutions.length)],
          [m.finace_fact_integrations(), String(content.integrations.length)],
          [m.finace_fact_security(), 'ISO 27001'],
        ]}
        clients={CLIENTS}
      >
        <LoanDashboard />
      </ProductHero>
      <ProductCapabilities items={content.capabilities} />
      <div className="flex flex-col gap-32 py-32 md:gap-48 md:py-48">
        <Solutions solutions={content.solutions} />
        <ProductValues
          eyebrow={m.finace_values_eyebrow()}
          title={
            <>
              {m.finace_values_title_a()}
              {m.finace_values_title_b()}
            </>
          }
          intro={m.finace_values_intro()}
          items={content.values}
        />
        <ProductIntegrations
          intro={m.finace_integrations_intro()}
          items={content.integrations}
        />
      </div>
      <Cta
        eyebrow={m.finace_cta_eyebrow()}
        title={m.finace_cta_title()}
        intro={m.finace_cta_intro()}
        href={DEMO_HREF}
        label={m.finace_cta_label()}
      />
    </main>
  )
}
