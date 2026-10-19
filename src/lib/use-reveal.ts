import { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '#/lib/gsap'

// Elements marked [data-reveal] inside the returned ref rise in, batched, the
// first time they scroll into view. Ones already on screen at mount are left
// alone so nothing flickers. Also pauses CSS loops while the root is offscreen.
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useGSAP(
    () => {
      const root = ref.current!
      ScrollTrigger.create({
        trigger: root,
        onToggle: (self) => root.toggleAttribute('data-paused', !self.isActive),
      })

      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const items = gsap.utils
        .toArray<HTMLElement>('[data-reveal]', root)
        .filter((item) => item.getBoundingClientRect().top > innerHeight)
      if (!items.length) return

      gsap.set(items, { autoAlpha: 0, y: 24 })
      ScrollTrigger.batch(items, {
        start: 'top 92%',
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: 'expo.out',
            stagger: 0.08,
          }),
      })
    },
    { scope: ref },
  )

  return ref
}
