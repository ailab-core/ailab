import { HugeiconsIcon } from '@hugeicons/react'
import type { IconSvgElement } from '@hugeicons/react'
import { cn } from 'cn'
import { useReveal } from '#/lib/use-reveal'
import { m } from '#/paraglide/messages'

type Capability = { label: string; icon: IconSvgElement; target: string }

export function ProductCapabilities({ items }: { items: Array<Capability> }) {
  const sectionRef = useReveal<HTMLElement>()
  // The second row starts mid-list and runs the other way, so no item lines up with itself.
  const half = Math.ceil(items.length / 2)
  const rows = [items, [...items.slice(half), ...items.slice(0, half)]]
  // One loop unit must outrun the widest screen, so short lists repeat until they hold ~12 pills.
  const repeat = Math.ceil(12 / items.length)

  return (
    <section
      ref={sectionRef}
      aria-label={m.product_capabilities_label()}
      className="flex flex-col gap-3 overflow-hidden py-10 mask-x-from-85% md:py-14"
    >
      {rows.map((row, rowIndex) => (
        // The unit is doubled so translateX(-50%) loops seamlessly; only the first pass of row one is reachable.
        <ul
          key={rowIndex}
          aria-hidden={rowIndex > 0 || undefined}
          className={cn(
            'flex w-max animate-[marquee_60s_linear_infinite] hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]',
            rowIndex > 0 &&
              '[animation-direction:reverse] [animation-duration:72s]',
          )}
        >
          {Array.from({ length: repeat * 2 }, () => row)
            .flat()
            .map((capability, index) => {
              const hidden = rowIndex > 0 || index >= row.length
              return (
                <li
                  key={index}
                  aria-hidden={(rowIndex === 0 && hidden) || undefined}
                  className="pr-3"
                >
                  <a
                    href={`#${capability.target}`}
                    tabIndex={hidden ? -1 : undefined}
                    className="group flex h-14 items-center gap-3 rounded-full bg-card pr-6 pl-2 whitespace-nowrap transition-[background-color,color,scale] duration-150 hover:bg-primary hover:text-primary-foreground active:scale-[0.97] md:h-16 md:pr-7"
                  >
                    <span className="flex size-10 items-center justify-center rounded-full bg-muted text-highlight transition-[background-color,color] duration-150 group-hover:bg-primary-foreground/15 group-hover:text-primary-foreground md:size-12">
                      <HugeiconsIcon
                        icon={capability.icon}
                        className="size-[1.125rem]"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="text-base font-medium md:text-lg">
                      {capability.label}
                    </span>
                  </a>
                </li>
              )
            })}
        </ul>
      ))}
    </section>
  )
}
