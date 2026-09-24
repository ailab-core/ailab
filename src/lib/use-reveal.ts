import { useEffect, useRef } from 'react'

// Children of the returned element rise in (staggered by their --i) the first
// time it scrolls into view. Elements already on screen at mount skip the
// reveal so nothing flickers. Also pauses looping animations while offscreen.
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (element.getBoundingClientRect().top > window.innerHeight) {
      element.setAttribute('data-reveal', '')
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        element.toggleAttribute('data-paused', !entry.isIntersecting)
        if (entry.isIntersecting) element.setAttribute('data-visible', '')
      },
      { rootMargin: '0px 0px -12% 0px' },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return ref
}
