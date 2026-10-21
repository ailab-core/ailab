import { useRef } from 'react'
import type { RefObject } from 'react'
import { gsap, useGSAP } from '#/lib/gsap'

export function ReadingProgress({
  target,
}: {
  target: RefObject<HTMLElement | null>
}) {
  const barRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      barRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: target.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      },
    )
  })

  return (
    <div
      ref={barRef}
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left scale-x-0 bg-primary"
    />
  )
}
