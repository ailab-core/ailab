import { SectionHeading } from '#/components'
import { useReveal } from '#/lib/use-reveal'
import { useScrollIndex } from '#/lib/use-scroll-index'
import { Architecture } from './architecture'
import { Automation } from './automation'
import { CloudDevOps } from './cloud-devops'
import { CreditScoring } from './credit-scoring'
import { DataProcessing } from './data-processing'
import { Development } from './development'
import { m } from '#/paraglide/messages'

const SERVICES = [
  { label: m.home_wwd_development, Visual: Development },
  { label: m.home_wwd_cloud, Visual: CloudDevOps },
  { label: m.home_wwd_credit, Visual: CreditScoring },
  { label: m.home_wwd_data, Visual: DataProcessing },
  { label: m.home_wwd_automation, Visual: Automation },
  { label: m.home_wwd_architecture, Visual: Architecture },
]

export default function WhatWeDo() {
  const sectionRef = useScrollIndex<HTMLElement>()
  const stackRef = useReveal<HTMLUListElement>()

  return (
    <section
      ref={sectionRef}
      id="what-we-do"
      className="shell grid scroll-mt-24 gap-14 lg:grid-cols-12 lg:gap-10"
    >
      <div className="flex flex-col gap-14 self-start lg:sticky lg:top-32 lg:col-span-4">
        <SectionHeading
          eyebrow={m.home_wwd_eyebrow()}
          title={
            <>
              {m.home_wwd_title_a()}
              {m.home_wwd_title_b()}
            </>
          }
          intro={m.home_wwd_intro()}
        />
        <ol className="hidden max-w-xs flex-col gap-1 lg:flex">
          {SERVICES.map((service, index) => (
            <li key={index}>
              <a
                href={`#service-${index}`}
                data-index
                data-active={index === 0 || undefined}
                className="group eyebrow rounded-sm flex items-center gap-3 px-3 py-2.5 transition-[color,background-color] duration-200 ease-out-strong hover:bg-muted hover:text-foreground data-active:bg-card data-active:text-foreground"
              >
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-secondary/35 transition-[background-color] duration-200 group-data-active:bg-secondary"
                />
                {service.label()}
              </a>
            </li>
          ))}
        </ol>
      </div>

      <ul
        ref={stackRef}
        data-stack
        className="flex flex-col gap-6 lg:col-span-7 lg:col-start-6"
      >
        {SERVICES.map(({ Visual }, index) => (
          <li
            key={index}
            id={`service-${index}`}
            data-reveal
            className="scroll-mt-28 md:sticky"
            style={{ top: `calc(7rem + ${index * 1.25}rem)` }}
          >
            <Visual />
          </li>
        ))}
      </ul>
    </section>
  )
}
