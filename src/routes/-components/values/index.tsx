import type { CSSProperties } from 'react'
import { Cpu, FlaskConical, Handshake, UsersRound } from 'lucide-react'
import { useReveal } from '#/lib/use-reveal'
import { TeamRatio } from './team-ratio'

const VALUES = [
  {
    title: 'Team',
    icon: UsersRound,
    body: 'Engineers with deep system development experience, delivering scalable, secure software across industries.',
  },
  {
    title: 'Collaboration',
    icon: Handshake,
    body: 'Long-term projects and strategic partnerships built on reliability and shared ownership.',
  },
  {
    title: 'Technology',
    icon: Cpu,
    body: 'Stable development and infrastructure services with security, scalability, and performance built in.',
  },
  {
    title: 'Research & Development',
    icon: FlaskConical,
    body: 'Academic partnerships, international collaboration, and continuous training for our people.',
  },
]

export default function Values() {
  const gridRef = useReveal<HTMLDivElement>()

  return (
    <section className="shell">
      <div className="max-w-3xl">
        <p className="eyebrow mb-5">{'Our team'}</p>
        <h2 className="display text-4xl md:text-6xl">
          {'A team of '}
          <span className="text-brand">{'engineers'}</span>
          {', first and foremost'}
        </h2>
        <p className="mt-6 max-w-xl text-graphite md:text-lg">
          {
            'We design, build, and run the systems ourselves, from core banking integrations to the apps customers use every day.'
          }
        </p>
      </div>

      <div
        ref={gridRef}
        className="group/team mt-12 grid gap-3 sm:grid-cols-2 md:mt-16 lg:grid-cols-4"
      >
        <TeamRatio />

        {VALUES.map((value, index) => (
          <article
            key={value.title}
            className="group flex flex-col justify-between gap-10 rounded-3xl border border-border bg-card p-6 transition-colors duration-300 hover:border-brand-soft md:p-8"
            style={{ '--i': index + 1 } as CSSProperties}
          >
            <div className="flex items-start justify-between gap-6">
              <span className="eyebrow">{`0${index + 1}`}</span>
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-mist text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                <value.icon
                  className="size-6"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </div>
            </div>
            <div>
              <h3 className="heading text-2xl">{value.title}</h3>
              <p className="mt-3 max-w-[26rem] text-graphite">{value.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
