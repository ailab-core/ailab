import { SectionHeading } from '#/components'
import { useReveal } from '#/lib/use-reveal'
import { gsap, useGSAP } from '#/lib/gsap'
import { ProjectCard } from './project-card'
import type { Project } from './project-card'
import { m } from '#/paraglide/messages'

const PROJECTS: Array<Project> = [
  {
    name: 'Pocket',
    tags: [m.home_work_tag_lending, () => 'BNPL', m.home_work_tag_payments],
    href: 'https://pocket.mn/',
    logo: '/assets/logos/pocket-vertical.png',
    body: m.home_work_pocket_body,
    tile: 'bg-white',
    logoClassName: 'w-1/3',
  },
  {
    name: 'Pocket KZ',
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
  const gridRef = useReveal<HTMLUListElement>()

  // Logos drift against the scroll, so each tile reads as a window.
  useGSAP(
    () => {
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
      gsap.utils.toArray<HTMLElement>('[data-logo]').forEach((logo) =>
        gsap.fromTo(
          logo,
          { yPercent: 6 },
          {
            yPercent: -6,
            ease: 'none',
            scrollTrigger: {
              trigger: logo.parentElement,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        ),
      )
    },
    { scope: gridRef },
  )

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
            <span className="text-muted-foreground">
              {m.home_work_title_b()}
            </span>
          </>
        }
        intro={m.home_work_intro()}
        className="lg:max-w-4xl"
      />
      <ul ref={gridRef} className="grid gap-4 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <li key={project.name} data-reveal>
            <ProjectCard project={project} index={index} />
          </li>
        ))}
      </ul>
    </section>
  )
}
