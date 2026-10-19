import { useRef } from 'react'
import { gsap, ScrollTrigger, SplitText, useGSAP } from '#/lib/gsap'
import { m } from '#/paraglide/messages'
import { ArrowButton } from '../arrow-button'

type CtaProps = {
  eyebrow: string
  title: string
  intro: string
  href: string
  label: string
}

const linkClass =
  'text-primary-foreground underline decoration-primary-foreground/30 underline-offset-4 transition-colors hover:decoration-primary-foreground'

export function Cta({ eyebrow, title, intro, href, label }: CtaProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    (_, contextSafe) => {
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
      const section = sectionRef.current!

      const split = SplitText.create('h2', {
        type: 'words',
        mask: 'words',
        wordsClass: 'split-word',
      })
      gsap
        .timeline({
          defaults: { ease: 'expo.out', duration: 1.1 },
          scrollTrigger: { trigger: section, start: 'top 70%', once: true },
        })
        .from('[data-fade-first]', { autoAlpha: 0, y: 12 })
        .from(
          split.words,
          {
            yPercent: 125,
            stagger: 0.05,
            onComplete: () => split.revert(),
          },
          '<0.1',
        )
        .from('[data-fade]', { autoAlpha: 0, y: 16, stagger: 0.1 }, '<0.35')

      // Rings repeat independently so the pulse never visibly restarts; they only run while on screen.
      const pulse = gsap.fromTo(
        '[data-ring]',
        { scale: 0.25, autoAlpha: 0.7 },
        {
          scale: 1,
          autoAlpha: 0,
          duration: 7.5,
          ease: 'sine.out',
          stagger: { each: 2.5, repeat: -1 },
          paused: true,
        },
      )
      ScrollTrigger.create({
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        onToggle: (self) => (self.isActive ? pulse.play() : pulse.pause()),
      })

      if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return

      const glow = section.querySelector<HTMLElement>('[data-glow]')!
      const toX = gsap.quickTo(glow, 'x', { duration: 0.8, ease: 'power3' })
      const toY = gsap.quickTo(glow, 'y', { duration: 0.8, ease: 'power3' })
      const onMove = contextSafe!((event: PointerEvent) => {
        const box = section.getBoundingClientRect()
        toX(event.clientX - box.left)
        toY(event.clientY - box.top)
      })
      const onEnter = contextSafe!(() =>
        gsap.to(glow, { autoAlpha: 1, duration: 0.6 }),
      )
      const onLeave = contextSafe!(() =>
        gsap.to(glow, { autoAlpha: 0, duration: 0.6 }),
      )
      section.addEventListener('pointermove', onMove)
      section.addEventListener('pointerenter', onEnter)
      section.addEventListener('pointerleave', onLeave)
      return () => {
        section.removeEventListener('pointermove', onMove)
        section.removeEventListener('pointerenter', onEnter)
        section.removeEventListener('pointerleave', onLeave)
      }
    },
    { scope: sectionRef },
  )

  return (
    <section
      ref={sectionRef}
      className="grain relative overflow-hidden bg-primary text-primary-foreground"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgb(2_6_23/0.45))]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(rgb(255_255_255/0.16)_1px,transparent_1.5px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -z-20 size-[min(72rem,180vw)] -translate-1/2"
      >
        {[0, 1, 2].map((ring) => (
          <span
            key={ring}
            data-ring
            className="absolute inset-0 rounded-full border border-primary-foreground/25 opacity-0"
          />
        ))}
      </div>
      <div
        data-glow
        aria-hidden="true"
        className="pointer-events-none invisible absolute top-0 left-0 -z-10 size-[36rem] -translate-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(255_255_255/0.1),transparent)] opacity-0"
      />

      <div className="shell flex flex-col items-center py-24 text-center md:py-32">
        <p
          data-fade-first
          className="eyebrow flex items-center gap-2 rounded-sm border border-primary-foreground/20 bg-primary px-3 py-1.5 text-primary-foreground/80"
        >
          <span className="size-1 bg-secondary" aria-hidden="true" />
          {eyebrow}
        </p>

        <h2 className="heading mt-8 max-w-5xl text-[clamp(2.75rem,1.4rem+5.4vw,6.5rem)] leading-[0.98] tracking-[-0.04em] text-balance">
          {title}
        </h2>

        <p
          data-fade
          className="mt-8 max-w-xl text-lead text-balance text-primary-foreground/80"
        >
          {intro}
        </p>

        <div data-fade className="mt-10">
          <ArrowButton variant="onPrimary" href={href} className="h-12 pl-5">
            {label}
          </ArrowButton>
        </div>

        <div
          data-fade
          className="mt-14 flex flex-col items-center gap-3 text-sm md:mt-20"
        >
          <p className="text-primary-foreground/60">
            {m.cta_direct()}
            <span className="mx-2 text-primary-foreground/30">{'—'}</span>
            <a href="tel:+97677772210" className={`${linkClass} font-mono`}>
              {'+976 7777-2210'}
            </a>
            <span className="mx-2 text-primary-foreground/30">{'·'}</span>
            <a href="mailto:info@ailab.mn" className={linkClass}>
              {'info@ailab.mn'}
            </a>
          </p>
          <p className="eyebrow flex items-center gap-2 text-primary-foreground/60">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-secondary"
              style={{ animation: 'blink 2s ease-in-out infinite' }}
            />
            {m.cta_reply_time()}
          </p>
        </div>
      </div>
    </section>
  )
}
