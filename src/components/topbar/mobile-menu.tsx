import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight02Icon } from '@hugeicons/core-free-icons'
import { Link } from '@tanstack/react-router'
import { DEMO_HREF, NAV_LINKS, PRODUCTS } from '#/lib/navigation'
import { ArrowButton } from '../arrow-button'
import { LanguageSwitcher } from './language-switcher'
import { ProductItem } from './product-item'
import { ThemeToggle } from './theme-toggle'
import { m } from '#/paraglide/messages'

const linkClass =
  'heading group flex items-center justify-between py-4 text-title transition-colors hover:text-highlight data-[status=active]:text-highlight'

export function MobileMenu({ onClose }: { onClose: () => void }) {
  const arrow = (
    <HugeiconsIcon
      icon={ArrowRight02Icon}
      className="size-5 text-muted-foreground transition-[color,translate] duration-300 group-hover:translate-x-1 group-hover:text-highlight"
      aria-hidden="true"
    />
  )

  return (
    <div
      id="mobile-menu"
      className="absolute inset-x-0 top-full h-[calc(100svh-4rem)] animate-in overflow-y-auto overscroll-contain border-t border-border bg-background fade-in-0 md:h-[calc(100svh-6.25rem)] lg:hidden"
      onClick={(event) => {
        if ((event.target as HTMLElement).closest('a')) onClose()
      }}
    >
      <nav
        className="shell flex min-h-full flex-col gap-10 py-6"
        aria-label={m.topbar_mobile_nav_label()}
      >
        <ul className="flex flex-col divide-y divide-border border-b border-border">
          {NAV_LINKS.map(({ label, ...link }, index) => (
            <li key={index}>
              <Link
                {...link}
                activeOptions={{ includeHash: true }}
                className={linkClass}
              >
                {label()}
                {arrow}
              </Link>
            </li>
          ))}
          <li>
            <a href="#contact" className={linkClass}>
              {m.common_contact()}
              {arrow}
            </a>
          </li>
        </ul>
        <div>
          <p className="eyebrow flex items-center gap-2 border-b border-border pb-3">
            <span className="size-1 bg-secondary" aria-hidden="true" />
            {m.common_solutions()}
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10">
            {PRODUCTS.map((product) => (
              <li key={product.label} className="border-b border-border">
                <ProductItem product={product} />
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto flex flex-col gap-5">
          <div className="flex h-11 items-center justify-between border-y border-border text-sm text-muted-foreground md:hidden">
            <LanguageSwitcher className="h-full" />
            <ThemeToggle className="h-full w-11" />
          </div>
          <ArrowButton href={DEMO_HREF} className="w-full justify-between">
            {m.common_request_demo()}
          </ArrowButton>
        </div>
      </nav>
    </div>
  )
}
