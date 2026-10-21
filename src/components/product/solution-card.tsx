import { useRef } from 'react'
import type { ReactNode } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '#/lib/gsap'

type SolutionCardProps = {
  eyebrow: string
  solution: {
    id: string
    title: string
    description: string
    features: Array<string>
  }
  children: ReactNode
}

export function SolutionCard({
  eyebrow,
  solution,
  children,
}: SolutionCardProps) {
  const cardRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const card = cardRef.current!
      // Pauses the mock's CSS loops while the card is offscreen.
      ScrollTrigger.create({
        trigger: card,
        onToggle: (self) => card.toggleAttribute('data-paused', !self.isActive),
      })

      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.from('[data-feature]', {
        autoAlpha: 0,
        y: 8,
        duration: 0.6,
        ease: 'expo.out',
        stagger: 0.04,
        scrollTrigger: { trigger: card, start: 'top 70%', once: true },
      })
    },
    { scope: cardRef },
  )

  return (
    <article
      ref={cardRef}
      id={solution.id}
      className="rounded-lg relative isolate flex scroll-mt-28 flex-col overflow-hidden bg-card shadow-[0_-20px_40px_-24px_rgb(0_0_0/0.15)] dark:shadow-[0_-24px_48px_-24px_rgb(0_0_0/0.5)]"
    >
      <div className="relative m-2 mb-0 h-72 overflow-hidden rounded-md bg-background md:h-80">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-1/4 -bottom-1/2 size-[36rem] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--primary)_16%,transparent),transparent)]"
        />
        <span className="eyebrow absolute top-5 right-5 md:top-6 md:right-6">
          {eyebrow}
        </span>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-20 bottom-6 flex items-center justify-center px-6 md:px-10"
        >
          <div className="flex h-full w-full max-w-lg flex-col justify-center">
            {children}
          </div>
        </div>
      </div>
      <div className="p-5 md:p-8">
        <h3 className="heading max-w-xl text-title">{solution.title}</h3>
        <p className="mt-3 max-w-xl text-muted-foreground">
          {solution.description}
        </p>
        <ul className="eyebrow mt-6 flex flex-wrap gap-2 text-foreground/80">
          {solution.features.map((feature) => (
            <li
              key={feature}
              data-feature
              className="flex items-center gap-2 rounded-sm bg-muted px-3 py-2"
            >
              <span
                className="size-1.5 rounded-full bg-secondary"
                aria-hidden="true"
              />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
