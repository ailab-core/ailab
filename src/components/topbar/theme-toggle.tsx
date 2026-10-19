import { HugeiconsIcon } from '@hugeicons/react'
import { MoonIcon, Sun03Icon } from '@hugeicons/core-free-icons'
import { cn } from 'cn'
import { m } from '#/paraglide/messages'

export function ThemeToggle({ className }: { className?: string }) {
  return (
    <button
      type="button"
      aria-label={m.topbar_theme_toggle()}
      onClick={() => {
        const apply = () => {
          const dark = document.documentElement.classList.toggle('dark')
          try {
            localStorage.setItem('theme', dark ? 'dark' : 'light')
          } catch {}
        }
        if (
          !document.startViewTransition ||
          matchMedia('(prefers-reduced-motion: reduce)').matches
        ) {
          apply()
        } else {
          document.startViewTransition(apply)
        }
      }}
      className={cn(
        'flex cursor-pointer items-center justify-center transition-colors hover:text-highlight',
        className,
      )}
    >
      <HugeiconsIcon
        icon={MoonIcon}
        className="size-4 dark:hidden"
        aria-hidden="true"
      />
      <HugeiconsIcon
        icon={Sun03Icon}
        className="hidden size-4 dark:block"
        aria-hidden="true"
      />
    </button>
  )
}
