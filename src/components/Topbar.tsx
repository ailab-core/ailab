import { cn } from "#/lib/utils"
import { useEffect, useState } from "react"
import AnimatedContent from "./AnimatedContent"
import { Link } from "@tanstack/react-router"

export default function Topbar() {
  const [top, setTop] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setTop(false)
      }

      if (window.scrollY < 300) {
        setTop(true)
      }
    }

    window.document.addEventListener("scroll", handleScroll)

    return () => {
      window.document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className={cn(
        "bg-background absolute top-0 left-0 -z-10 transition-all duration-300 w-full h-full",
        top ? "backdrop-blur-none" : "backdrop-blur-sm"
      )} />
      <div className="container mx-auto flex justify-between items-center py-6">
        <Link to="/">
          <img
            className="invert"
            width={128}
            src="/assets/logos/ailab.svg"
            alt="Ailab"
          />
        </Link>
        <div className="flex justify-end items-center text-lg gap-8">
          <AnimatedContent delay={0.1}>
            <p className="">{"Products"}</p>
          </AnimatedContent>
          <AnimatedContent delay={0.2}>
            <p className="">{"Blogs"}</p>
          </AnimatedContent>
          <AnimatedContent delay={0.3}>
            <p className="">{"Contact"}</p>
          </AnimatedContent>
        </div>
      </div>
    </div>
  )
}
