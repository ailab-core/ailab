"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import gsap from "gsap"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Footer from "@/components/footer"
import Header from "@/components/header"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export default function Providers({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
      normalizeScroll: true
    })

    return () => {
      smoother.kill()
    }
  }, [])

  useEffect(() => {
    if (pathname !== prevPathname) {
      window.scrollTo(0, 0);
      setPrevPathname(pathname);
    }
  }, [pathname]);

  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content" className="flex flex-col">
          {children}
          <Footer />
        </div>
      </div>
    </>
  )
}
