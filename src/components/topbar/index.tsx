import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight02Icon, ChevronDownIcon } from '@hugeicons/core-free-icons'
import { useEffect, useState } from 'react'
import { Link, useMatches } from '@tanstack/react-router'
import { NavigationMenu } from 'radix-ui'
import { cn } from 'cn'
import { NAV_LINKS } from '#/lib/navigation'
import { LanguageSwitcher } from './language-switcher'
import { MobileMenu } from './mobile-menu'
import { ProductsMenu } from './products-menu'
import { ThemeToggle } from './theme-toggle'
import { m } from '#/paraglide/messages'

// The ::after rule sits on the bar's bottom edge: it grows in on hover and stays on the active route.
const navItem =
  'relative flex h-full cursor-pointer items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground data-[state=open]:text-foreground data-[status=active]:text-foreground after:absolute after:inset-x-0 after:-bottom-px after:h-[3px] after:origin-left after:scale-x-0 after:bg-highlight after:transition-transform after:duration-300 hover:after:scale-x-100 data-[state=open]:after:scale-x-100 data-[status=active]:after:scale-x-100'

export function Topbar() {
  const [menu, setMenu] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [atTop, setAtTop] = useState(true)
  const darkHero = useMatches({
    select: (matches) => matches.some((match) => match.staticData.darkHero),
  })
  const solid = menu !== '' || mobileOpen || !atTop

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 24)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return

    const onKey = (event: KeyboardEvent) =>
      event.key === 'Escape' && setMobileOpen(false)
    document.documentElement.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.documentElement.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [mobileOpen])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b text-foreground transition-[background-color,border-color] duration-300',
        // An open menu gets a firmer edge so the bar reads as separate from the panel below.
        menu !== ''
          ? 'border-foreground/15 bg-background'
          : solid
            ? 'border-border bg-background/90 backdrop-blur-md'
            : 'border-transparent',
        darkHero && !solid && 'dark',
      )}
    >
      <div className="hidden h-9 border-b border-border md:block">
        <div className="shell flex h-full items-center justify-between gap-6 text-xs text-muted-foreground">
          <p className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <span className="size-1 bg-secondary" aria-hidden="true" />
              {m.topbar_location()}
            </span>
            <span className="h-3 w-px bg-border" aria-hidden="true" />
            <a
              href="mailto:info@ailab.mn"
              className="transition-colors hover:text-foreground"
            >
              {'info@ailab.mn'}
            </a>
          </p>
          <div className="flex h-full items-center gap-4">
            <LanguageSwitcher className="h-full" />
            <span className="h-3 w-px bg-border" aria-hidden="true" />
            <ThemeToggle className="h-full" />
          </div>
        </div>
      </div>

      <div className="shell flex h-16 items-center gap-12">
        <Link to="/" aria-label={m.topbar_home_label()} className="shrink-0">
          <img
            className="invert dark:invert-0"
            width={104}
            height={23}
            src="/assets/logos/ailab.svg"
            alt="AILab"
          />
        </Link>

        <NavigationMenu.Root
          value={menu}
          onValueChange={setMenu}
          className="hidden h-full lg:flex"
        >
          <NavigationMenu.List className="flex h-full gap-9">
            <NavigationMenu.Item value="products" className="h-full">
              <NavigationMenu.Trigger className={`${navItem} group`}>
                {m.common_solutions()}
                <HugeiconsIcon
                  icon={ChevronDownIcon}
                  className="size-3.5 transition-transform duration-300 group-data-[state=open]:rotate-180"
                  aria-hidden="true"
                />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content
                onClick={(event) => {
                  if ((event.target as HTMLElement).closest('a')) setMenu('')
                }}
              >
                <ProductsMenu />
              </NavigationMenu.Content>
            </NavigationMenu.Item>
            {NAV_LINKS.map(({ label, ...link }, index) => (
              <NavigationMenu.Item key={index} className="h-full">
                <NavigationMenu.Link asChild>
                  <Link
                    {...link}
                    activeOptions={{ includeHash: true }}
                    className={navItem}
                  >
                    {label()}
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
          <NavigationMenu.Viewport className="absolute inset-x-0 top-full border-b border-border bg-background shadow-2xl shadow-black/20 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        </NavigationMenu.Root>

        <div className="ml-auto flex items-center gap-2">
          <a
            href="#contact"
            className="rounded-md group hidden h-10 items-center gap-3 bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:flex"
          >
            {m.topbar_get_in_touch()}
            <HugeiconsIcon
              icon={ArrowRight02Icon}
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={
              mobileOpen ? m.topbar_close_menu() : m.topbar_open_menu()
            }
            onClick={() => setMobileOpen(!mobileOpen)}
            className="group -mr-2.5 flex size-11 cursor-pointer flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span className="h-0.5 w-5 bg-current transition-transform duration-300 group-aria-expanded:translate-y-1 group-aria-expanded:rotate-45" />
            <span className="h-0.5 w-5 bg-current transition-transform duration-300 group-aria-expanded:-translate-y-1 group-aria-expanded:-rotate-45" />
          </button>
        </div>
      </div>
      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </header>
  )
}
