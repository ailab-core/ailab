import { useRef } from 'react'
import type { ReactNode } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '#/lib/gsap'

type SolutionCardProps = {
  index: number
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
  index,
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
      className="rounded-lg relative isolate flex scroll-mt-28 flex-col overflow-hidden bg-card dark:ring-1 dark:ring-border shadow-[0_-20px_40px_-24px_rgb(0_0_0/0.15)] dark:shadow-[0_-24px_48px_-24px_rgb(0_0_0/0.5)]"
    >
      <div className="dark relative h-72 overflow-hidden bg-background text-foreground md:h-80">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-1/4 -bottom-1/2 size-[36rem] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--primary)_16%,transparent),transparent)]"
        />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 md:p-6">
          <span className="rounded-md flex size-11 items-center justify-center border border-border bg-card text-sm font-medium text-highlight tabular-nums">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="eyebrow">{eyebrow}</span>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-20 bottom-6 flex items-center justify-center px-6 md:px-10"
        >
          <div className="flex h-full w-full max-w-lg flex-col justify-center">
            {children}
          </div>
        </div>
      </div>
      {/* In light mode only the light half is outlined, so no pale frame wraps the dark mock. */}
      <div className="rounded-b-lg border border-t-0 border-border p-5 md:p-8 dark:border-transparent">
        <h3 className="heading max-w-xl text-title">{solution.title}</h3>
        <p className="mt-3 max-w-xl text-muted-foreground">
          {solution.description}
        </p>
        <ul className="eyebrow mt-6 flex flex-wrap gap-x-5 gap-y-2.5 border-t border-border pt-5 text-foreground/80">
          {solution.features.map((feature) => (
            <li key={feature} data-feature className="flex items-center gap-2">
              <span className="size-1 bg-secondary" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
