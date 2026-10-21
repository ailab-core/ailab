import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight02Icon } from '@hugeicons/core-free-icons'
import { Link } from '@tanstack/react-router'
import { CONTACT_HREF, EMAIL, NAV_LINKS, PRODUCTS } from '#/lib/navigation'
import { ArrowButton } from '../arrow-button'
import { LanguageSwitcher } from './language-switcher'
import { ProductItem } from './product-item'
import { ThemeToggle } from './theme-toggle'
import { m } from '#/paraglide/messages'

const linkClass =
  'heading group flex items-center justify-between rounded-lg bg-card px-5 py-4 text-title transition-[color,background-color,scale] duration-200 ease-out-strong hover:bg-muted hover:text-highlight active:scale-[0.99] data-[status=active]:text-highlight'

export function MobileMenu({ onClose }: { onClose: () => void }) {
  const arrow = (
    <HugeiconsIcon
      icon={ArrowRight02Icon}
      className="size-5 text-muted-foreground transition-[color,translate] duration-200 ease-out-strong group-hover:translate-x-1 group-hover:text-highlight"
      aria-hidden="true"
    />
  )

  return (
    <div
      id="mobile-menu"
      className="absolute inset-x-0 top-full h-[calc(100svh-4rem)] overflow-y-auto overscroll-contain bg-background transition-[opacity,translate] duration-300 ease-drawer starting:-translate-y-2 starting:opacity-0 md:h-[calc(100svh-6.25rem)] lg:hidden"
      onClick={(event) => {
        if ((event.target as HTMLElement).closest('a')) onClose()
      }}
    >
      <nav
        className="shell flex min-h-full flex-col gap-10 py-6"
        aria-label={m.topbar_mobile_nav_label()}
      >
        <ul className="flex flex-col gap-2">
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
        </ul>
        <div>
          <p className="eyebrow pb-4">{m.common_solutions()}</p>
          <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
            {PRODUCTS.map((product) => (
              <li key={product.label}>
                <ProductItem product={product} />
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto flex flex-col gap-5">
          {/* Mirrors the desktop utility strip, which is hidden below md. */}
          <div className="flex h-11 items-center justify-between rounded-full bg-muted pl-4 text-sm text-muted-foreground md:hidden">
            <a
              href={`mailto:${EMAIL}`}
              className="truncate transition-colors hover:text-foreground"
            >
              {EMAIL}
            </a>
            <div className="flex h-full shrink-0 items-center gap-3">
              <LanguageSwitcher className="h-full" />
              <span
                className="size-1 rounded-full bg-muted-foreground/40"
                aria-hidden="true"
              />
              <ThemeToggle className="h-full w-11" />
            </div>
          </div>
          <ArrowButton href={CONTACT_HREF} className="w-full justify-between">
            {m.topbar_get_in_touch()}
          </ArrowButton>
        </div>
      </nav>
    </div>
  )
}
