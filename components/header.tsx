"use client"

import { useTranslations } from "next-intl";
import {
  BanknoteArrowDownIcon,
  Building2Icon,
  ChartCandlestickIcon,
  ChevronRightIcon,
  GlobeIcon,
  LandmarkIcon,
  PresentationIcon
} from "lucide-react"
import { usePathname } from "next/navigation";
import {
  Button,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from "@/components/ui"
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";

const PRODUCTS = [
  {
    title: "Finace",
    href: "/#finace",
    icon: LandmarkIcon,
    description: "System contains processes of loan products"
  },
  {
    title: "Prop",
    href: "/#prop",
    icon: Building2Icon,
    description: "Centralized property management system"
  },
  {
    title: "ShMS",
    href: "/#shms",
    icon: PresentationIcon,
    description: "The Shareholders' Meeting System"
  },
  {
    title: "EFund",
    href: "/#efund",
    icon: BanknoteArrowDownIcon,
    description: "Manage and track your funds"
  },
  {
    title: "StockLab",
    href: "/#stocklab",
    icon: ChartCandlestickIcon,
    description: "For operating in the securities market"
  }
]

export default function Header() {
  const t = useTranslations("header")
  const pathname = usePathname()

  return (
    <header className="border-b w-full bg-background">
      <div className="container md:max-w-7xl mx-auto py-4 px-8 md:px-0 gap-24 flex justify-between items-center">
        <div className="flex justify-center gap-8">
          <a className="" href="/">
            <img src="/assets/logos/ailab.svg" alt="AI Lab Logo" className="w-32 h-auto" />
          </a>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent">
                  {t("products.title")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid grid-cols-1">
                    {PRODUCTS.map((product) => (
                      <li key={product.href}>
                        <NavigationMenuLink
                          render={
                            <Link href={product.href} className="space-x-2 hover:bg-transparent group">
                              <div className="bg-secondary rounded-lg p-2">
                                <product.icon className="size-5 text-muted-foreground group-hover:text-foreground duration-300 transition-colors" />
                              </div>
                              <div className="flex flex-col gap-1 text-sm max-w-2xs">
                                <div className="leading-none font-medium flex items-center">
                                  {product.title}
                                  <span className="relative -left-4 opacity-0 group-hover:left-0 group-hover:opacity-100 transition-all duration-300">
                                    <ChevronRightIcon className="size-4" />
                                  </span>
                                </div>
                                <div className="text-xs group-hover:text-foreground text-muted-foreground line-clamp-2 transition-colors duration-300">
                                  {product.description}
                                </div>
                              </div>
                            </Link>
                          }
                        />
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuLink render={
                <Link href="/blogs">
                  {t("blogs")}
                </Link>
              } />
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger render={
            <Button size="icon-lg" variant="ghost">
              <GlobeIcon />
            </Button>
          } />
          <DropdownMenuContent align="end">
            <DropdownMenuGroup>
              <DropdownMenuLabel>{t("languages.title")}</DropdownMenuLabel>
              {routing.locales.map((locale) => (
                <DropdownMenuItem
                  key={locale}
                  render={
                    <Link
                      href={pathname.slice(3, pathname.length) || '/'}
                      locale={locale}
                    >
                      {t(`languages.${locale}`)}
                    </Link>
                  }
                />
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header >
  )
}
