import type { ReactNode } from 'react'
import { useReveal } from '#/lib/use-reveal'

type ProductHeroProps = {
  eyebrow: string
  title: string
  intro: string
  demoHref: string
  clients?: Array<{ name: string; src: string }>
  children: ReactNode
}

export function ProductHero({
  eyebrow,
  title,
  intro,
  demoHref,
  clients,
  children,
}: ProductHeroProps) {
  const panelRef = useReveal<HTMLDivElement>()

  return (
    <section className="shell pt-14 md:pt-24">
      <div className="max-w-4xl">
        <p className="eyebrow hero-line">{eyebrow}</p>
        <h1
          className="hero-line display mt-5 text-[3.25rem] sm:text-7xl lg:text-[5.5rem]"
          style={{ animationDelay: '0.08s' }}
        >
          {title}
        </h1>
        <div className="hero-line mt-8" style={{ animationDelay: '0.2s' }}>
          <p className="max-w-xl text-graphite md:text-lg">{intro}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={demoHref}
              className="inline-flex h-11 items-center rounded-full bg-brand px-5 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
            >
              {'Request a demo'}
            </a>
            <a
              href="#solutions"
              className="inline-flex h-11 items-center rounded-full bg-mist px-5 text-sm font-medium transition-colors hover:bg-hairline"
            >
              {'See what’s included'}
            </a>
          </div>
        </div>
      </div>
      <div
        ref={panelRef}
        className="hero-line mt-12 overflow-hidden rounded-3xl md:mt-16"
        style={{ animationDelay: '0.3s' }}
      >
        {children}
      </div>
      {clients && (
        <ul className="mt-12 flex flex-wrap items-center justify-between gap-x-10 gap-y-6 md:mt-16">
          {clients.map((client) => (
            <li key={client.name}>
              <img
                src={client.src}
                alt={client.name}
                loading="lazy"
                className="h-9 w-auto opacity-50 grayscale invert"
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
