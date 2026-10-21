import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight02Icon, ChevronDownIcon } from '@hugeicons/core-free-icons'
import { useEffect, useRef, useState } from 'react'
import { Link, useMatches } from '@tanstack/react-router'
import { NavigationMenu } from 'radix-ui'
import { cn } from 'cn'
import { CONTACT_HREF, EMAIL, NAV_LINKS } from '#/lib/navigation'
import { LanguageSwitcher } from './language-switcher'
import { MobileMenu } from './mobile-menu'
import { ProductsMenu } from './products-menu'
import { ThemeToggle } from './theme-toggle'
import { m } from '#/paraglide/messages'

// Hover is drawn by one shared pill in the list; ::after is only the active-route dot.
const navItem =
  'relative flex h-full cursor-pointer items-center gap-1.5 px-4 text-xs font-semibold tracking-wider text-muted-foreground uppercase transition-colors duration-150 hover:text-foreground data-[state=open]:text-foreground data-[status=active]:text-foreground after:absolute after:bottom-2 after:left-1/2 after:size-1 after:-translate-x-1/2 after:rounded-full after:bg-highlight after:opacity-0 data-[status=active]:after:opacity-100'

export function Topbar() {
  const [menu, setMenu] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [atTop, setAtTop] = useState(true)
  const darkHero = useMatches({
    select: (matches) => matches.some((match) => match.staticData.darkHero),
  })
  const solid = menu !== '' || mobileOpen || !atTop
  const listRef = useRef<HTMLUListElement>(null)
  const pillRef = useRef<HTMLLIElement>(null)

  // The pill clips itself to the hovered item, so moving across items glides instead of blinking.
  // It appears in place when hidden and only slides between items, never in from a stale spot.
  const movePill = (item: Element | null | undefined) => {
    const pill = pillRef.current!
    if (!item) {
      pill.style.opacity = '0'
      return
    }
    const list = listRef.current!.getBoundingClientRect()
    const box = item.getBoundingClientRect()
    const clip = `inset(0 ${list.right - box.right}px 0 ${box.left - list.left}px round 9999px)`
    if (pill.style.opacity === '1') {
      pill.style.clipPath = clip
      return
    }
    pill.style.transition = 'none'
    pill.style.clipPath = clip
    pill.getBoundingClientRect()
    pill.style.transition = ''
    pill.style.opacity = '1'
  }

  // A menu closed from inside the panel leaves no hovered item behind.
  useEffect(() => {
    if (menu === '' && !listRef.current?.matches(':hover')) movePill(null)
  }, [menu])

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
        'fixed inset-x-0 top-0 z-50 text-foreground transition-[background-color] duration-200',
        // An open menu goes fully opaque so it fuses with the panel below into one surface.
        menu !== ''
          ? 'bg-background'
          : solid && 'bg-background/80 backdrop-blur-md',
        darkHero && !solid && 'dark',
      )}
    >
      <div className="hidden h-9 md:block">
        <div className="shell flex h-full items-center justify-between gap-6 text-xs text-muted-foreground">
          <p className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <span
                className="rounded-full size-1.5 bg-secondary"
                aria-hidden="true"
              />
              {m.topbar_location()}
            </span>
            <span
              className="size-1 rounded-full bg-muted-foreground/40"
              aria-hidden="true"
            />
            <a
              href={`mailto:${EMAIL}`}
              className="transition-colors hover:text-foreground"
            >
              {EMAIL}
            </a>
          </p>
          <div className="flex h-full items-center gap-4">
            <LanguageSwitcher className="h-full" />
            <span
              className="size-1 rounded-full bg-muted-foreground/40"
              aria-hidden="true"
            />
            <ThemeToggle className="h-full" />
          </div>
        </div>
      </div>

      <div className="shell flex h-16 items-center gap-8">
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
          <NavigationMenu.List
            ref={listRef}
            onPointerOver={(event) => {
              if (event.pointerType !== 'mouse') return
              const item = (event.target as Element).closest('[data-nav-item]')
              if (item) movePill(item)
            }}
            onPointerLeave={() =>
              movePill(
                menu === ''
                  ? null
                  : listRef.current?.querySelector('[data-state=open]'),
              )
            }
            className="relative flex h-full"
          >
            <li
              ref={pillRef}
              role="presentation"
              style={{ opacity: 0 }}
              className="pointer-events-none absolute inset-x-0 top-1/2 h-9 -translate-y-1/2 bg-muted transition-[clip-path,opacity] duration-200 ease-out-strong"
            />
            <NavigationMenu.Item value="products" className="h-full">
              <NavigationMenu.Trigger
                data-nav-item
                className={`${navItem} group`}
              >
                {m.common_solutions()}
                <HugeiconsIcon
                  icon={ChevronDownIcon}
                  className="size-3.5 transition-transform duration-200 ease-out-strong group-data-[state=open]:rotate-180"
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
                    data-nav-item
                    className={navItem}
                  >
                    {label()}
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
          <NavigationMenu.Viewport className="absolute inset-x-0 top-full bg-background shadow-lg shadow-black/5 dark:shadow-black/40 duration-200 ease-out-strong data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:duration-150 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-top-1" />
        </NavigationMenu.Root>

        <div className="ml-auto flex items-center gap-2">
          <a
            href={CONTACT_HREF}
            className="group hidden h-10 items-center gap-3 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-[background-color,scale] duration-150 ease-out-strong hover:bg-primary/90 active:scale-[0.97] sm:flex"
          >
            {m.topbar_get_in_touch()}
            <HugeiconsIcon
              icon={ArrowRight02Icon}
              className="size-4 transition-[translate] duration-200 ease-out-strong group-hover:translate-x-0.5"
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
            className="group -mr-2.5 flex size-11 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full transition-[scale] duration-150 ease-out-strong active:scale-[0.95] lg:hidden"
          >
            <span className="h-0.5 w-5 bg-current transition-[translate,rotate] duration-200 ease-out-strong group-aria-expanded:translate-y-1 group-aria-expanded:rotate-45" />
            <span className="h-0.5 w-5 bg-current transition-[translate,rotate] duration-200 ease-out-strong group-aria-expanded:-translate-y-1 group-aria-expanded:-rotate-45" />
          </button>
        </div>
      </div>
      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </header>
  )
}
