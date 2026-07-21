import { cn } from "#/lib/utils"
import { useEffect, useState } from "react"
import { AnimatedContent } from "./"
import { Link } from "@tanstack/react-router"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu"

export function Topbar() {
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
    <div className="w-full">
      <div
        className={cn(
          "bg-transparent absolute top-0 left-0 -z-10 transition-all duration-300 w-full h-full",
          top ? "backdrop-blur-none" : "backdrop-blur-sm"
        )}
      />
      <div className="container mx-auto flex justify-between items-center py-6">
        <Link to="/">
          <img
            className="invert"
            width={128}
            src="/assets/logos/ailab.svg"
            alt="Ailab"
          />
        </Link>
        <div className="flex justify-end items-center text-lg gap-8 font-semibold">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <AnimatedContent delay={0.1}>
                  <NavigationMenuTrigger>
                    {"Products"}
                  </NavigationMenuTrigger>
                </AnimatedContent>
                <NavigationMenuContent className="flex flex-col items-start">
                  <NavigationMenuLink
                    href="/finace"
                    className="w-full items-start"
                  >
                    {"Finace"}
                  </NavigationMenuLink>
                  <NavigationMenuLink className="w-full items-start">
                    {"Prop"}
                  </NavigationMenuLink>
                  <NavigationMenuLink className="w-full items-start">
                    {"ShMS"}
                  </NavigationMenuLink>
                  <NavigationMenuLink className="w-full items-start">
                    {"Efund"}
                  </NavigationMenuLink>
                  <NavigationMenuLink className="w-full items-start">
                    {"StockLab"}
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuLink>
                <AnimatedContent delay={0.2}>
                  {"Blogs"}
                </AnimatedContent>
              </NavigationMenuLink>
              <NavigationMenuLink>
                <AnimatedContent delay={0.3}>
                  {"Contact"}
                </AnimatedContent>
              </NavigationMenuLink>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  )
}
