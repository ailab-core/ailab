import { useEffect, useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { ChevronDownIcon, MenuIcon, XIcon } from 'lucide-react'
import { NavigationMenu } from 'radix-ui'
import { DEMO_HREF, NAV_LINKS } from '#/lib/navigation'
import { MobileMenu } from './mobile-menu'
import { ProductsMenu } from './products-menu'

const navItem =
  'flex h-10 items-center gap-1 px-3 text-sm font-medium transition-colors hover:text-brand data-[state=open]:text-brand'

export function Topbar() {
  const headerRef = useRef<HTMLElement>(null)
  const [menu, setMenu] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)
  const pinned = menu !== '' || mobileOpen

  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    let lastY = window.scrollY
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const y = window.scrollY
        header.toggleAttribute('data-scrolled', y > 0)
        header.toggleAttribute('data-hidden', y > lastY && y > 160)
        lastY = y
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
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
      ref={headerRef}
      data-pinned={pinned || undefined}
      className="sticky top-0 z-50 border-b border-transparent bg-background transition-[translate,border-color] duration-300 data-scrolled:border-border data-hidden:not-data-pinned:-translate-y-full"
    >
      <div className="shell flex h-18 items-center gap-8">
        <Link to="/" aria-label="AILab home" className="shrink-0">
          <img
            className="invert"
            width={112}
            height={25}
            src="/assets/logos/ailab.svg"
            alt="AILab"
          />
        </Link>

        <NavigationMenu.Root
          value={menu}
          onValueChange={setMenu}
          className="hidden lg:block"
        >
          <NavigationMenu.List className="flex items-center">
            <NavigationMenu.Item value="products">
              <NavigationMenu.Trigger
                className={`${navItem} group cursor-pointer`}
              >
                {'Products'}
                <ChevronDownIcon
                  className="size-4 transition-transform duration-300 group-data-[state=open]:rotate-180"
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
            {NAV_LINKS.map(({ label, ...link }) => (
              <NavigationMenu.Item key={label}>
                <NavigationMenu.Link asChild>
                  <Link {...link} className={navItem}>
                    {label}
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
          <div className="absolute inset-x-0 top-full">
            <NavigationMenu.Viewport className="h-(--radix-navigation-menu-viewport-height) overflow-hidden border-b border-border bg-background shadow-[0_32px_48px_-32px_color-mix(in_oklab,var(--ink)_25%,transparent)] transition-[height] duration-300 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
          </div>
        </NavigationMenu.Root>

        <div className="ml-auto flex items-center gap-2">
          <a
            href="#contact"
            className="hidden h-10 items-center px-3 text-sm font-medium transition-colors hover:text-brand sm:flex"
          >
            {'Contact'}
          </a>
          <a
            href={DEMO_HREF}
            className="hidden h-10 items-center rounded-full bg-brand px-5 text-sm font-medium text-white transition-colors hover:bg-brand-hover sm:flex"
          >
            {'Request a demo'}
          </a>
          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex size-11 cursor-pointer items-center justify-center lg:hidden"
          >
            {mobileOpen ? (
              <XIcon className="size-6" />
            ) : (
              <MenuIcon className="size-6" />
            )}
          </button>
        </div>
      </div>
      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </header>
  )
}
