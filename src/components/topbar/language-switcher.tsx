import { HugeiconsIcon } from '@hugeicons/react'
import { GlobeIcon, Tick02Icon } from '@hugeicons/core-free-icons'
import { useLocation } from '@tanstack/react-router'
import { DropdownMenu } from 'radix-ui'
import { cn } from 'cn'
import { m } from '#/paraglide/messages'
import { getLocale, localizeHref, locales } from '#/paraglide/runtime'
import { LANGUAGES } from '#/lib/utils/locale'

export function LanguageSwitcher({ className }: { className?: string }) {
  const current = getLocale()
  // The router hands back the de-localized path, so it can be re-prefixed per locale.
  const href = useLocation({ select: (location) => location.href })

  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger
        aria-label={m.topbar_language_label()}
        className={cn(
          'flex cursor-pointer items-center gap-1.5 rounded-full transition-colors hover:text-highlight data-[state=open]:text-highlight',
          className,
        )}
      >
        <HugeiconsIcon icon={GlobeIcon} className="size-4" aria-hidden="true" />
        <span className="text-xs font-semibold tracking-wider">
          {LANGUAGES[current].short}
        </span>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={8}
          className="z-50 min-w-40 origin-(--radix-dropdown-menu-content-transform-origin) rounded-md bg-popover p-1 text-popover-foreground shadow-lg shadow-black/5 dark:shadow-black/40 duration-150 ease-out-strong data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"
        >
          {locales.map((locale) => (
            <DropdownMenu.Item key={locale} asChild>
              {/* A full load swaps every message at once; switching language is rare. */}
              <a
                href={localizeHref(href, { locale })}
                hrefLang={locale}
                lang={locale}
                aria-current={locale === current ? 'true' : undefined}
                className="flex h-10 items-center justify-between gap-6 rounded-[calc(var(--radius-md)-0.25rem)] px-3 text-sm outline-none data-highlighted:bg-muted"
              >
                {LANGUAGES[locale].label}
                {locale === current && (
                  <HugeiconsIcon
                    icon={Tick02Icon}
                    className="size-4 text-primary dark:text-secondary"
                    aria-hidden="true"
                  />
                )}
              </a>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
