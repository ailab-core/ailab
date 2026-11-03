import { HugeiconsIcon } from '@hugeicons/react'
import { MoonIcon, Sun03Icon } from '@hugeicons/core-free-icons'
import { cn } from 'cn'
import { m } from '#/paraglide/messages'

export function ThemeToggle({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => {
        const root = document.documentElement
        const apply = () => {
          // Suppresses per-element color tweens for the swap frame; cleared once the new theme has painted.
          root.classList.add('theme-switching')
          requestAnimationFrame(() =>
            requestAnimationFrame(() =>
              root.classList.remove('theme-switching'),
            ),
          )
          const dark = root.classList.toggle('dark')
          document
            .querySelector('meta[name="theme-color"]')
            ?.setAttribute('content', dark ? '#000000' : '#f4f4f1')
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
        'flex cursor-pointer items-center justify-center rounded-full transition-[color,scale] duration-150 ease-out-strong hover:text-highlight active:scale-[0.97]',
        className,
      )}
    >
      {/* CSS picks the label, so it is right before hydration and needs no state. */}
      <span className="sr-only dark:hidden">{m.topbar_theme_to_dark()}</span>
      <span className="sr-only not-dark:hidden">
        {m.topbar_theme_to_light()}
      </span>
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
