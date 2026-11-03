import { useRef } from 'react'
import { ScrollTrigger, useGSAP } from '#/lib/gsap'

// Marks the [data-index] link matching how far [data-stack] has scrolled past
// the viewport centre, and glides the [data-index-pill] under it. Cards more
// than one away from the current one get [data-idle] so their CSS loops pause.
// Writes to the DOM directly so scrolling never re-renders.
export function useScrollIndex<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useGSAP(
    () => {
      const links = ref.current!.querySelectorAll<HTMLElement>('[data-index]')
      const pill = ref.current!.querySelector<HTMLElement>('[data-index-pill]')
      const cards = ref.current!.querySelector('[data-stack]')!.children
      // Read once per refresh so scroll callbacks never force a reflow.
      let boxes: Array<[number, number]> = []
      let current = 0

      const place = () => {
        for (let i = 0; i < cards.length; i++) {
          cards[i].toggleAttribute('data-idle', Math.abs(i - current) > 1)
        }
        if (!pill || !boxes[current]) return
        const [top, height] = boxes[current]
        pill.style.height = `${height}px`
        pill.style.transform = `translateY(${top}px)`
      }

      ScrollTrigger.create({
        trigger: '[data-stack]',
        start: 'top center',
        end: 'bottom center',
        onRefresh: () => {
          boxes = Array.from(links, (link) => [
            link.offsetTop,
            link.offsetHeight,
          ])
          place()
        },
        onUpdate: (self) => {
          const next = Math.min(
            links.length - 1,
            Math.floor(self.progress * links.length),
          )
          if (next === current) return
          links[current].removeAttribute('data-active')
          links[current].removeAttribute('aria-current')
          links[next].setAttribute('data-active', '')
          links[next].setAttribute('aria-current', 'true')
          current = next
          place()
        },
      })
    },
    { scope: ref },
  )

  return ref
}
