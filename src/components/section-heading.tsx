import { useRef } from 'react'
import type { ReactNode } from 'react'
import { cn } from 'cn'
import { gsap, SplitText, useGSAP } from '#/lib/gsap'

type SectionHeadingProps = {
  eyebrow?: string
  title: ReactNode
  intro?: string
  className?: string
  children?: ReactNode
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  className,
  children,
}: SectionHeadingProps) {
  const rootRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return

      // Word masks wrap naturally on resize, so no re-split is needed.
      const split = SplitText.create('h2', {
        type: 'words',
        mask: 'words',
        wordsClass: 'split-word',
      })
      gsap
        .timeline({
          defaults: { ease: 'expo.out', duration: 1 },
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top 85%',
            once: true,
          },
        })
        .from(split.words, {
          yPercent: 125,
          stagger: 0.04,
          onComplete: () => split.revert(),
        })
        .from('[data-fade]', { autoAlpha: 0, y: 12, stagger: 0.08 }, '<0.2')
    },
    { scope: rootRef },
  )

  return (
    <div ref={rootRef} className={cn('flex flex-col gap-6', className)}>
      {eyebrow && (
        <p data-fade className="eyebrow flex items-center gap-2">
          <span className="size-1 bg-secondary" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2 className="heading text-section">{title}</h2>
      {intro && (
        <p data-fade className="max-w-sm text-muted-foreground">
          {intro}
        </p>
      )}
      {children && <div data-fade>{children}</div>}
    </div>
  )
}
