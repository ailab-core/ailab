import { AnimatedContent } from "./"
import { Link } from "@tanstack/react-router"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu"

export function Topbar() {
  return (
    <div className="absolute top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-6 px-8 md:px-0">
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
                  <NavigationMenuLink
                    href="https://prop.mn/"
                    className="w-full items-start"
                  >
                    {"Prop"}
                  </NavigationMenuLink>
                  <NavigationMenuLink className="w-full items-start">
                    {"ShMS"}
                  </NavigationMenuLink>
                  <NavigationMenuLink className="w-full items-start">
                    {"Efund"}
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    href="/stocklab"
                    className="w-full items-start"
                  >
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
