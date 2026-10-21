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
import { FundDashboard } from './-components/fund-dashboard'
import Process from './-components/process'
import Solutions from './-components/solutions'
import Technology from './-components/technology'

const DEMO_HREF = 'mailto:info@ailab.mn?subject=Demo%20request%3A%20Fund'

export const Route = createFileRoute('/fund/')({
  staticData: { darkHero: true },
  head: () => ({
    meta: [
      { title: m.fund_meta_title() },
      { name: 'description', content: m.fund_meta_description() },
    ],
  }),
  component: FundPage,
})

function FundPage() {
  const content = getContent()

  return (
    <main className="flex flex-col">
      <ProductHero
        eyebrow={m.fund_hero_eyebrow()}
        title={m.fund_hero_title()}
        intro={m.fund_hero_intro()}
        demoHref={DEMO_HREF}
        facts={[
          [m.fund_fact_fund_types(), String(content.types.length)],
          // Card and custodian bank links have no logo, so they are counted here but not shown in the marquee.
          [m.fund_fact_integrations(), '6'],
          [m.fund_fact_security(), 'ISO 27001'],
        ]}
      >
        <FundDashboard />
      </ProductHero>
      <ProductCapabilities items={content.capabilities} />
      <div className="flex flex-col gap-32 py-32 md:gap-48 md:py-48">
        <Solutions solutions={content.solutions} />
        <ProductValues
          id="fund-types"
          eyebrow={m.fund_types_eyebrow()}
          title={
            <>
              {m.fund_types_title_a()}
              {m.fund_types_title_b()}
            </>
          }
          intro={m.fund_types_intro()}
          items={content.types}
        />
        <Process />
        <ProductIntegrations
          intro={m.fund_integrations_intro()}
          items={content.integrations}
        />
        <Technology items={content.technology} />
      </div>
      <Cta
        eyebrow={m.fund_cta_eyebrow()}
        title={m.fund_cta_title()}
        intro={m.fund_cta_intro()}
        href={DEMO_HREF}
        label={m.fund_cta_label()}
      />
    </main>
  )
}
