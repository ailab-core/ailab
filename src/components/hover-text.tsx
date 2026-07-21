import { useEffect, useRef } from "react"
import gsap from "gsap"

export function HoverText() {
  const hoverRef = useRef<HTMLParagraphElement>(null)

  const pointerMove = (e: PointerEvent) => {
    const body = document.getElementById("body")

    if (body && hoverRef.current) {
      gsap.to(hoverRef.current, {
        x: e.pageX,
        y: e.pageY,
        duration: 0.1
      })
    }
  }

  const pointerEnter = (e: PointerEvent, text: string) => {
    if (hoverRef.current) {
      hoverRef.current.innerHTML = text
      gsap.to(hoverRef.current, { scale: 1, opacity: 1, duration: 0.1 })
      pointerMove(e)
    }
  }

  const pointerLeave = (e: PointerEvent) => {
    if (hoverRef.current) {
      hoverRef.current.innerHTML = ""
      gsap.to(hoverRef.current, { scale: 0.5, opacity: 0, duration: 0.1 })
      pointerMove(e)
    }
  }

  useEffect(() => {
    const blogs = document.querySelectorAll<HTMLElement>("#blog")
    const works = document.querySelectorAll<HTMLElement>("#work")
    const body = document.getElementById("body")

    if (body) {
      gsap.to(hoverRef.current, {
        scale: 0,
        xPercent: -50,
        yPercent: -50,
        duration: 0.1
      })
      body.addEventListener("pointermove", pointerMove)
    }

    blogs.forEach((blog) => {
      blog.addEventListener("pointerenter", (e) => pointerEnter(e, "Read blog"))
      blog.addEventListener("pointerleave", pointerLeave)
    })

    works.forEach((work) => {
      work.addEventListener("pointerenter", (e) => pointerEnter(e, "View work"))
      work.addEventListener("pointerleave", pointerLeave)
    })

    return () => {
      if (body) {
        body.removeEventListener("pointermove", pointerMove)
      }

      blogs.forEach((blog) => {
        blog.addEventListener("pointerenter", (e) =>
          pointerEnter(e, "Read blog")
        )
        blog.addEventListener("pointerleave", pointerLeave)
      })

      works.forEach((work) => {
        work.addEventListener("pointerenter", (e) =>
          pointerEnter(e, "View work")
        )
        work.addEventListener("pointerleave", pointerLeave)
      })
    }
  }, [])

  return (
    <p
      ref={hoverRef}
      className="absolute top-0 left-0 pointer-events-none dark bg-background text-foreground py-4 px-6 text-2xl z-50 scale-0"
    >
      {"View Post"}
    </p>
  )
}
