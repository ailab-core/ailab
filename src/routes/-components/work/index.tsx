import { useState } from 'react'
import { SectionHeading } from '#/components'
import { useReveal } from '#/lib/use-reveal'
import { WorkPreview } from './preview'
import { WorkRow } from './row'
import type { Project } from './row'
import { m } from '#/paraglide/messages'

const PROJECTS: Array<Project> = [
  {
    name: 'Pocket',
    tags: [m.home_work_tag_lending, () => 'BNPL', m.home_work_tag_payments],
    href: 'https://pocket.mn/',
    logo: '/assets/logos/pocket-vertical.png',
    body: m.home_work_pocket_body,
    tile: 'bg-[#eef1f6]',
    logoClassName: 'w-1/3',
  },
  {
    name: 'Pocket Central Asia',
    tags: [
      m.home_work_tag_lending,
      m.home_work_tag_payments,
      m.home_work_tag_central_asia,
    ],
    href: 'https://pocket.mn/',
    logo: '/assets/logos/pocket-vertical.png',
    body: m.home_work_pocket_kz_body,
    tile: 'bg-[#fde9ea]',
    logoClassName: 'w-1/3',
  },
  {
    name: 'Worki',
    tags: [m.home_work_tag_recruiting, m.home_work_tag_ai_matching],
    href: 'https://worki.mn/',
    logo: '/assets/logos/worki.svg',
    body: m.home_work_worki_body,
    tile: 'bg-[#2b2466]',
    logoClassName: 'w-1/2',
  },
  {
    name: 'iCapital',
    tags: [m.home_work_tag_investing, m.home_work_tag_securities],
    href: 'https://icapital.mn/',
    logo: '/assets/logos/icapital.svg',
    body: m.home_work_icapital_body,
    tile: 'bg-[#1b2a5c]',
    logoClassName: 'w-2/5',
  },
]

export default function Work() {
  const listRef = useReveal<HTMLDivElement>()
  // Keyboard focus swaps the preview instantly; only the pointer gets the crossfade.
  const [active, setActive] = useState({ index: 0, instant: false })

  return (
    <section
      id="selected-work"
      className="shell flex scroll-mt-24 flex-col gap-14 md:gap-20"
    >
      <SectionHeading
        eyebrow={m.home_work_eyebrow()}
        title={
          <>
            {m.home_work_title_a()}
            {m.home_work_title_b()}
          </>
        }
        intro={m.home_work_intro()}
        className="lg:max-w-4xl"
      />
      <div
        ref={listRef}
        className="grid gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24"
      >
        <ul className="flex flex-col gap-2">
          {PROJECTS.map((project, index) => (
            <li key={project.name} data-reveal>
              <WorkRow
                project={project}
                active={index === active.index}
                onActivate={(instant) => setActive({ index, instant })}
              />
            </li>
          ))}
        </ul>
        <WorkPreview
          projects={PROJECTS}
          index={active.index}
          instant={active.instant}
        />
      </div>
    </section>
  )
}
