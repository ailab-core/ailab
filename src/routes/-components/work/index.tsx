import { useState } from 'react'
import { SectionHeading } from '#/components'
import { useReveal } from '#/lib/use-reveal'
import { ProjectPreview } from './project-preview'
import { ProjectRow } from './project-row'
import type { Project } from './project-row'

const PROJECTS: Array<Project> = [
  {
    name: 'Pocket',
    tags: ['Lending', 'BNPL', 'Payments'],
    href: 'https://pocket.mn/',
    logo: '/assets/logos/pocket-vertical.png',
    body: 'A fintech platform bringing microloans, BNPL, leasing, savings, and payments into one app.',
    tile: 'bg-mist',
    logoClassName: 'w-1/3',
  },
  {
    name: 'Pocket KZ',
    tags: ['Lending', 'Payments', 'Central Asia'],
    href: 'https://pocket.mn/',
    logo: '/assets/logos/pocket-vertical.png',
    body: 'Pocket’s lending and payments stack, brought to Central Asia.',
    tile: 'bg-[#fde9ea]',
    logoClassName: 'w-1/3',
  },
  {
    name: 'Worki',
    tags: ['Recruiting', 'AI matching'],
    href: 'https://worki.mn/',
    logo: '/assets/logos/worki.svg',
    body: 'A job platform that uses AI to match people with roles, with listings, resume building, and career guidance.',
    tile: 'bg-[#2b2466]',
    logoClassName: 'w-1/2',
  },
  {
    name: 'iCapital',
    tags: ['Investing', 'Securities'],
    href: 'https://icapital.mn/',
    logo: '/assets/logos/icapital.svg',
    body: 'An investing app for stocks and bonds across Mongolia’s major exchanges.',
    tile: 'bg-[#1b2a5c]',
    logoClassName: 'w-2/5',
  },
]

export default function Work() {
  const listRef = useReveal<HTMLUListElement>()
  const [active, setActive] = useState(0)

  return (
    <section id="selected-work" className="shell scroll-mt-24">
      <SectionHeading
        eyebrow="Our work"
        title="Selected work"
        intro="Products we’ve designed, built, and run for our partners and ourselves."
        className="mb-12 md:mb-16"
      />
      <div className="grid items-start gap-12 lg:grid-cols-12">
        <ul
          ref={listRef}
          className="border-b border-border lg:col-span-7 *:nth-2:[--i:1] *:nth-3:[--i:2] *:nth-4:[--i:3] *:nth-5:[--i:4]"
        >
          {PROJECTS.map((project, index) => (
            <li key={project.name}>
              <ProjectRow
                project={project}
                active={index === active}
                onActivate={() => setActive(index)}
              />
            </li>
          ))}
        </ul>
        <div className="lg:col-span-5 lg:h-full">
          <ProjectPreview projects={PROJECTS} active={active} />
        </div>
      </div>
    </section>
  )
}
