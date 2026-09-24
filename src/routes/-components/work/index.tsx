import { useRef, useState } from 'react'
import { ArrowUpRightIcon } from 'lucide-react'
import { SectionHeading } from '#/components'
import { cn } from '#/lib/utils'
import { ProjectCard } from './project-card'
import type { Project } from './project-card'

const PROJECTS: Array<Project> = [
  {
    name: 'Pocket',
    tags: ['Lending', 'BNPL', 'Payments'],
    href: 'https://pocket.mn/',
    logo: '/assets/logos/pocket-vertical.png',
    body: 'A fintech platform bringing microloans, BNPL, leasing, savings, and payments into one app.',
    tile: 'bg-mist aspect-[4/3]',
    logoClassName: 'w-1/3',
    layout: 'md:col-span-6',
  },
  {
    name: 'Pocket KZ',
    tags: ['Lending', 'Payments', 'Central Asia'],
    href: 'https://pocket.mn/',
    logo: '/assets/logos/pocket-vertical.png',
    body: 'Pocket’s lending and payments stack, brought to Central Asia.',
    tile: 'bg-[#fde9ea] aspect-[4/3]',
    logoClassName: 'w-1/3',
    layout: 'md:col-span-5 md:col-start-8 md:mt-24',
  },
  {
    name: 'Worki',
    tags: ['Recruiting', 'AI matching'],
    href: 'https://worki.mn/',
    logo: '/assets/logos/worki.svg',
    body: 'A job platform that uses AI to match people with roles, with listings, resume building, and career guidance.',
    tile: 'bg-[#2b2466] aspect-[4/3] md:aspect-[3/1]',
    logoClassName: 'w-1/2 md:w-1/4',
    layout: 'md:col-span-12',
  },
  {
    name: 'iCapital',
    tags: ['Investing', 'Securities'],
    href: 'https://icapital.mn/',
    logo: '/assets/logos/icapital.svg',
    body: 'An investing app for stocks and bonds across Mongolia’s major exchanges.',
    tile: 'bg-[#1b2a5c] aspect-[4/3]',
    logoClassName: 'w-2/5',
    layout: 'md:col-span-5',
  },
  {
    name: 'FinBerry',
    tags: ['Crowdfunding', 'Lending'],
    href: 'https://finberry.mn/',
    logo: '/assets/logos/finberry.svg',
    body: 'A crowdfunding platform for donations, rewards, and loans that connects projects with backers.',
    tile: 'bg-[#8a0f35] aspect-[4/3]',
    logoClassName: 'w-16 md:w-20',
    layout: 'md:col-span-6 md:col-start-7 md:-mt-12',
  },
]

export default function Work() {
  const labelRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="selected-work" className="shell scroll-mt-24">
      <SectionHeading
        eyebrow="Our work"
        title="Selected work"
        intro="Products we’ve designed, built, and run for our partners and ourselves."
        className="mb-14 md:mb-20"
      />
      <ul
        className="grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-12 md:gap-y-28"
        onPointerMove={(event) => {
          if (labelRef.current) {
            labelRef.current.style.translate = `${event.clientX}px ${event.clientY}px`
          }
        }}
      >
        {PROJECTS.map((project) => (
          <li key={project.name} className={project.layout}>
            <ProjectCard project={project} onHover={setActive} />
          </li>
        ))}
      </ul>
      <div
        ref={labelRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-40 hidden transition-[translate] duration-150 ease-out pointer-fine:block"
      >
        <div
          className={cn(
            'flex -translate-1/2 items-center gap-2 rounded-full bg-brand px-5 py-3 text-base font-medium whitespace-nowrap text-white transition-[opacity,scale] duration-200',
            active ? 'scale-100 opacity-100' : 'scale-50 opacity-0',
          )}
        >
          {active && `Visit ${new URL(active.href).hostname}`}
          <ArrowUpRightIcon className="size-4" />
        </div>
      </div>
    </section>
  )
}
