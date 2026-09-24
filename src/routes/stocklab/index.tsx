import { createFileRoute } from '@tanstack/react-router'
import {
  ProductCapabilities,
  ProductCta,
  ProductHero,
  ProductIntegrations,
  ValueTabs,
} from '#/components'
import {
  ADDITIONAL_INTEGRATIONS,
  CAPABILITIES,
  CORE_INTEGRATIONS,
  REASONS,
} from './-content'
import Pricing from './-components/pricing'
import Solutions from './-components/solutions'
import { TradingTerminal } from './-components/trading-terminal'

const DEMO_HREF = 'mailto:info@ailab.mn?subject=Demo%20request%3A%20StockLab'

export const Route = createFileRoute('/stocklab/')({
  head: () => ({
    meta: [
      { title: 'StockLab | Brokerage platform by AILab' },
      {
        name: 'description',
        content:
          'Trading, back office, mobile, and nominee systems for brokerages on the Mongolian Stock Exchange.',
      },
    ],
  }),
  component: StockLabPage,
})

function StockLabPage() {
  return (
    <main className="flex flex-col gap-24 pb-32 md:gap-40 md:pb-44">
      <div className="flex flex-col gap-16 md:gap-24">
        <ProductHero
          eyebrow="StockLab brokerage platform"
          title="The platform for every trade"
          intro="Secure trading, back-office, and mobile systems that meet Mongolian Stock Exchange standards, from investor onboarding to settlement."
          demoHref={DEMO_HREF}
        >
          <TradingTerminal />
        </ProductHero>
        <ProductCapabilities items={CAPABILITIES} />
      </div>
      <Solutions />
      <ValueTabs
        eyebrow="Why StockLab"
        title="Built for Mongolia’s capital market"
        intro="Deep fintech expertise and reliable, secure, high-performance trading built for digital investing."
        items={REASONS}
      />
      <ProductIntegrations
        intro="StockLab connects to the exchange, depository, clearing house, and the identity and payment services investors use."
        items={[...CORE_INTEGRATIONS, ...ADDITIONAL_INTEGRATIONS]}
        className="lg:grid-cols-6"
      />
      <Pricing />
      <ProductCta
        title="Run your brokerage on one platform"
        intro="We’ll walk you through StockLab with your clients and products in mind."
        demoHref={DEMO_HREF}
      />
    </main>
  )
}
