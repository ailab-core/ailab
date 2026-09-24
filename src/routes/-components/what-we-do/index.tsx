import { SectionHeading } from '#/components'
import { useReveal } from '#/lib/use-reveal'
import { Architecture } from './architecture'
import { Automation } from './automation'
import { CloudDevOps } from './cloud-devops'
import { CreditScoring } from './credit-scoring'
import { DataProcessing } from './data-processing'
import { Development } from './development'

export default function WhatWeDo() {
  const gridRef = useReveal<HTMLDivElement>()

  return (
    <section
      id="what-we-do"
      className="dark bg-background py-24 text-foreground md:py-36"
    >
      <div className="shell flex flex-col gap-12 md:gap-16">
        <SectionHeading
          eyebrow="Services"
          title="What we provide"
          intro="End-to-end engineering for financial institutions: product development, infrastructure, automation, and the architecture that ties them together."
        />
        <div
          ref={gridRef}
          className="grid gap-3 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[27rem] *:nth-2:[--i:1] *:nth-3:[--i:2] *:nth-4:[--i:3] *:nth-5:[--i:4] *:nth-6:[--i:5]"
          onPointerMove={(event) => {
            const card = (event.target as HTMLElement).closest<HTMLElement>(
              '[data-card]',
            )
            if (!card) return
            const rect = card.getBoundingClientRect()
            card.style.setProperty('--x', `${event.clientX - rect.left}px`)
            card.style.setProperty('--y', `${event.clientY - rect.top}px`)
          }}
        >
          <Development />
          <CloudDevOps />
          <CreditScoring />
          <DataProcessing />
          <Automation />
          <Architecture />
        </div>
      </div>
    </section>
  )
}
