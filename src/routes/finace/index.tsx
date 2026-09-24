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
  CLIENTS,
  CORE_INTEGRATIONS,
  VALUES,
} from './-content'
import { LoanDashboard } from './-components/loan-dashboard'
import Solutions from './-components/solutions'

const DEMO_HREF = 'mailto:info@ailab.mn?subject=Demo%20request%3A%20Finace'

export const Route = createFileRoute('/finace/')({
  head: () => ({
    meta: [
      { title: 'Finace | Lending and core banking by AILab' },
      {
        name: 'description',
        content:
          'Loan origination, core banking, and bank statement analysis for NBFIs, microlenders, and banks.',
      },
    ],
  }),
  component: FinacePage,
})

function FinacePage() {
  return (
    <main className="flex flex-col gap-24 pb-32 md:gap-40 md:pb-44">
      <div className="flex flex-col gap-16 md:gap-24">
        <ProductHero
          eyebrow="Finace lending platform"
          title="The platform for every loan"
          intro="Origination, core banking, and statement analysis for NBFIs, microlenders, and banks, from the first application to the general ledger."
          demoHref={DEMO_HREF}
          clients={CLIENTS}
        >
          <LoanDashboard />
        </ProductHero>
        <ProductCapabilities items={CAPABILITIES} />
      </div>
      <Solutions />
      <ValueTabs
        eyebrow="Why Finace"
        title="Built around how lenders work"
        intro="Quality solutions, reliable service, and continuous improvement, built on long-term partnerships."
        items={VALUES}
      />
      <ProductIntegrations
        intro="Finace works with the registries, credit bureaus, insurers, and services Mongolian lenders already use."
        items={[...CORE_INTEGRATIONS, ...ADDITIONAL_INTEGRATIONS]}
        className="lg:grid-cols-5"
      />
      <ProductCta
        title="Put your lending on one platform"
        intro="We’ll walk you through Finace with your products and workflows in mind."
        demoHref={DEMO_HREF}
      />
    </main>
  )
}
