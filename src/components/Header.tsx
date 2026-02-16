import { BanknoteArrowDownIcon, Building2Icon, ChartCandlestickIcon, ChevronRightIcon, GlobeIcon, LandmarkIcon, PresentationIcon } from "lucide-react"
import { Button } from "./ui/button";
import type { LucideIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string, icon: LucideIcon }) {
  return (
    <li {...props}>
      <NavigationMenuLink render={
        <a href={href} className="space-x-2 hover:bg-transparent group">
          <div className="bg-secondary rounded-lg p-2">
            <props.icon className="size-5 text-muted-foreground group-hover:text-foreground duration-300 transition-colors" />
          </div>
          <div className="flex flex-col gap-1 text-sm max-w-2xs">
            <div className="leading-none font-medium flex items-center">
              {title}
              <span className="relative -left-4 opacity-0 group-hover:left-0 group-hover:opacity-100 transition-all duration-300">
                <ChevronRightIcon className="size-4" />
              </span>
            </div>
            <div className="text-xs group-hover:text-foreground text-muted-foreground line-clamp-2 transition-colors duration-300">
              {children}
            </div>
          </div>
        </a>
      } />
    </li>
  )
}

export default function Header() {
  return (
    <div className="border-b fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-full bg-background">
      <div className=" container mx-auto py-4 px-6 gap-24 flex justify-between items-center">
        <div className="flex justify-center gap-8">
          <a className="" href="/">
            <img src="/assets/logos/ailab.svg" alt="AI Lab Logo" className="w-32 h-auto" />
          </a>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent">
                  {"Solutions"}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid grid-cols-2">
                    <ListItem
                      title="Finace"
                      href="/#finace"
                      icon={LandmarkIcon}
                    >
                      {"System that contains processes of loan products"}
                    </ListItem>
                    <ListItem
                      title="Prop"
                      href="/#prop"
                      icon={Building2Icon}
                    >
                      {"Centralized property management system"}
                    </ListItem>
                    <ListItem
                      title="ShMS"
                      href="/#shms"
                      icon={PresentationIcon}
                    >
                      {"The Shareholders' Meeting System"}
                    </ListItem>
                    <ListItem
                      title="EFund"
                      href="/#efund"
                      icon={BanknoteArrowDownIcon}
                    >
                      {"Manage and track your funds"}
                    </ListItem>
                    <ListItem
                      title="StockLab"
                      href="/#stocklab"
                      icon={ChartCandlestickIcon}
                    >
                      {"For operating in the securities market"}
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Button size="icon-lg" variant="ghost">
          <GlobeIcon />
        </Button>
      </div>
    </div>
  )
}
