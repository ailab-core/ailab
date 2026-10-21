import { useRef } from 'react'
import { gsap, SplitText, useGSAP } from '#/lib/gsap'
import { m } from '#/paraglide/messages'

export default function Statement() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return

      // Words brighten in reading order as the paragraph scrolls through the viewport.
      const split = SplitText.create('p', { type: 'words' })
      gsap.from(split.words, {
        opacity: 0.18,
        ease: 'none',
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: 'bottom 70%',
          scrub: true,
        },
      })
    },
    { scope: sectionRef },
  )

  return (
    <section
      ref={sectionRef}
      className="relative isolate bg-primary text-primary-foreground"
    >
      <div className="shell flex min-h-[80svh] flex-col justify-center gap-10 py-24 md:py-32">
        <span className="eyebrow tracking-wider text-primary-foreground/70 uppercase">
          {m.home_statement_eyebrow()}
        </span>
        <div className="heading flex max-w-6xl flex-col gap-[1lh] text-headline font-semibold">
          <p>{m.home_statement_body()}</p>
          <p>{m.home_statement_body_2()}</p>
        </div>
      </div>
    </section>
  )
}
