import { useRef } from 'react'
import { ScrollTrigger, useGSAP } from '#/lib/gsap'

// Marks the [data-index] link matching how far [data-stack] has scrolled past
// the viewport centre. Toggles attributes directly so scrolling never re-renders.
export function useScrollIndex<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useGSAP(
    () => {
      const links = ref.current!.querySelectorAll('[data-index]')
      let current = 0
      ScrollTrigger.create({
        trigger: '[data-stack]',
        start: 'top center',
        end: 'bottom center',
        onUpdate: (self) => {
          const next = Math.min(
            links.length - 1,
            Math.floor(self.progress * links.length),
          )
          if (next === current) return
          links[current].removeAttribute('data-active')
          links[next].setAttribute('data-active', '')
          current = next
        },
      })
    },
    { scope: ref },
  )

  return ref
}
