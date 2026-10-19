import { createFileRoute } from '@tanstack/react-router'
import { Cta } from '#/components'
import {
  ProductCapabilities,
  ProductHero,
  ProductValues,
} from '#/components/product'
import { m } from '#/paraglide/messages'
import { getContent } from './-content'
import Experience from './-components/experience'
import { MeetingConsole } from './-components/meeting-console'
import Pricing from './-components/pricing'
import Solutions from './-components/solutions'

const DEMO_HREF = 'mailto:info@ailab.mn?subject=Demo%20request%3A%20ShMS'

export const Route = createFileRoute('/shms/')({
  staticData: { darkHero: true },
  head: () => ({
    meta: [
      { title: m.shms_meta_title() },
      { name: 'description', content: m.shms_meta_description() },
    ],
  }),
  component: ShmsPage,
})

function ShmsPage() {
  const content = getContent()

  return (
    <main className="flex flex-col">
      <ProductHero
        eyebrow={m.shms_hero_eyebrow()}
        title={m.shms_hero_title()}
        intro={m.shms_hero_intro()}
        demoHref={DEMO_HREF}
        facts={[
          [m.shms_hero_fact_modules(), String(content.solutions.length)],
          [m.shms_hero_fact_packages(), String(content.plans.length)],
          [m.shms_hero_fact_savings(), '30–50%'],
        ]}
      >
        <MeetingConsole />
      </ProductHero>
      <ProductCapabilities items={content.capabilities} />
      <div className="flex flex-col gap-32 py-32 md:gap-48 md:py-48">
        <Solutions solutions={content.solutions} />
        <Experience />
        <ProductValues
          eyebrow={m.shms_values_eyebrow()}
          title={
            <>
              {m.shms_values_title_a()}
              <span className="text-muted-foreground">
                {m.shms_values_title_b()}
              </span>
            </>
          }
          intro={m.shms_values_intro()}
          items={content.reasons}
        />
        <Pricing plans={content.plans} />
      </div>
      <Cta
        eyebrow={m.shms_cta_eyebrow()}
        title={m.shms_cta_title()}
        intro={m.shms_cta_intro()}
        href={DEMO_HREF}
        label={m.shms_cta_label()}
      />
    </main>
  )
}
