import { createFileRoute } from '@tanstack/react-router'
import { Cta } from '#/components'
import {
  ProductCapabilities,
  ProductHero,
  ProductIntegrations,
  ProductValues,
} from '#/components/product'
import { m } from '#/paraglide/messages'
import { getContent } from './-content'
import Pricing from './-components/pricing'
import Solutions from './-components/solutions'
import { TradingTerminal } from './-components/trading-terminal'

const DEMO_HREF = 'mailto:info@ailab.mn?subject=Demo%20request%3A%20Atlas'

export const Route = createFileRoute('/atlas/')({
  staticData: { darkHero: true },
  head: () => ({
    meta: [
      { title: m.atlas_meta_title() },
      { name: 'description', content: m.atlas_meta_description() },
    ],
  }),
  component: AtlasPage,
})

function AtlasPage() {
  const content = getContent()

  return (
    <main className="flex flex-col">
      <ProductHero
        eyebrow={m.atlas_hero_eyebrow()}
        title={m.atlas_hero_title()}
        intro={m.atlas_hero_intro()}
        demoHref={DEMO_HREF}
        facts={[
          [m.atlas_hero_fact_systems(), String(content.solutions.length)],
          [
            m.atlas_hero_fact_integrations(),
            String(content.integrations.length),
          ],
          [m.atlas_hero_fact_packages(), String(content.plans.length)],
        ]}
      >
        <TradingTerminal />
      </ProductHero>
      <ProductCapabilities items={content.capabilities} />
      <div className="flex flex-col gap-32 py-32 md:gap-48 md:py-48">
        <Solutions solutions={content.solutions} />
        <ProductValues
          eyebrow={m.atlas_values_eyebrow()}
          title={
            <>
              {m.atlas_values_title_a()}
              <span className="text-muted-foreground">
                {m.atlas_values_title_b()}
              </span>
            </>
          }
          intro={m.atlas_values_intro()}
          items={content.reasons}
        />
        <ProductIntegrations
          intro={m.atlas_integrations_intro()}
          items={content.integrations}
        />
        <Pricing plans={content.plans} />
      </div>
      <Cta
        eyebrow={m.atlas_cta_eyebrow()}
        title={m.atlas_cta_title()}
        intro={m.atlas_cta_intro()}
        href={DEMO_HREF}
        label={m.atlas_cta_label()}
      />
    </main>
  )
}
