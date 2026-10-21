import { useRef } from 'react'
import type { ReactNode } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '#/lib/gsap'
import { ArrowButton } from '../arrow-button'
import { m } from '#/paraglide/messages'

type ProductHeroProps = {
  eyebrow: string
  title: string
  intro: string
  demoHref: string
  facts: Array<[label: string, value: string]>
  clients?: Array<{ name: string; src: string }>
  children: ReactNode
}

export function ProductHero({
  eyebrow,
  title,
  intro,
  demoHref,
  facts,
  clients,
  children,
}: ProductHeroProps) {
  const rootRef = useRef<HTMLElement>(null)
  const consoleRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const panel = consoleRef.current!
      // Pauses the dashboard's CSS loops while it is offscreen.
      ScrollTrigger.create({
        trigger: panel,
        onToggle: (self) =>
          panel.toggleAttribute('data-paused', !self.isActive),
      })

      // On wide screens the dashboard starts turned away, like product photography, and squares up on scroll.
      gsap
        .matchMedia()
        .add(
          '(min-width: 64rem) and (prefers-reduced-motion: no-preference)',
          () => {
            gsap.fromTo(
              panel,
              { rotationY: -24, rotationX: 10, rotationZ: 2, scale: 0.92 },
              {
                rotationY: -6,
                rotationX: 2,
                rotationZ: 0,
                scale: 1,
                ease: 'none',
                scrollTrigger: {
                  trigger: rootRef.current,
                  start: 'top top',
                  end: 'bottom top',
                  scrub: 0.6,
                },
              },
            )
          },
        )
    },
    { scope: rootRef },
  )

  return (
    <section
      ref={rootRef}
      className="dark relative isolate flex min-h-svh flex-col overflow-hidden bg-background text-foreground"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -right-1/4 -z-10 size-[70rem] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--primary)_20%,transparent),transparent)]"
      />

      <div className="shell flex flex-1 flex-col pt-32 pb-8 md:pb-10">
        <div className="relative z-10 my-auto py-10 lg:max-w-[52%]">
          <p className="hero-line eyebrow tracking-wider text-highlight uppercase">
            {eyebrow}
          </p>
          <h1
            className="hero-line heading mt-8 text-hero"
            style={{ animationDelay: '0.08s' }}
          >
            {title}
          </h1>
        </div>

        <div
          className="hero-line relative my-10 lg:absolute lg:top-[40%] lg:-right-[14%] lg:my-0 lg:w-[60rem] lg:-translate-y-1/2 lg:perspective-[2200px]"
          style={{ animationDelay: '0.3s' }}
        >
          <div ref={consoleRef} className="origin-left will-change-transform">
            {children}
          </div>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(90deg,var(--background)_32%,transparent_62%),linear-gradient(0deg,var(--background)_4%,transparent_30%)] lg:block"
        />

        <div className="relative z-10 grid items-end gap-8 lg:grid-cols-12">
          <div
            className="hero-line flex flex-col gap-6 lg:col-span-5"
            style={{ animationDelay: '0.2s' }}
          >
            <p className="max-w-md text-lead text-muted-foreground">{intro}</p>
            <div className="flex flex-wrap items-center gap-6">
              <ArrowButton href={demoHref}>
                {m.common_request_demo()}
              </ArrowButton>
              <a
                href="#solutions"
                className="eyebrow text-foreground transition-colors hover:text-highlight"
              >
                {m.product_hero_see_included()}
              </a>
            </div>
          </div>
          <dl
            className="hero-line rounded-lg bg-card/80 px-5 py-3 backdrop-blur-md lg:col-span-4 lg:col-start-9"
            style={{ animationDelay: '0.4s' }}
          >
            {facts.map(([label, value]) => (
              <div
                key={label}
                className="flex items-baseline justify-between py-2.5"
              >
                <dt className="eyebrow">{label}</dt>
                <dd className="heading text-xl tabular-nums">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {clients && (
          <ul className="relative z-10 mt-14 flex flex-wrap items-center gap-x-12 gap-y-6">
            <li className="eyebrow">{m.product_hero_trusted_by()}</li>
            {clients.map((client) => (
              <li key={client.name}>
                <img
                  src={client.src}
                  alt={client.name}
                  loading="lazy"
                  className="h-7 w-auto opacity-50 grayscale transition-opacity hover:opacity-100"
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
