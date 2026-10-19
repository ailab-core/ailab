import { HugeiconsIcon } from '@hugeicons/react'
import type { IconSvgElement } from '@hugeicons/react'
import { useReveal } from '#/lib/use-reveal'
import { m } from '#/paraglide/messages'

type Capability = { label: string; icon: IconSvgElement; target: string }

export function ProductCapabilities({ items }: { items: Array<Capability> }) {
  const sectionRef = useReveal<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      aria-label={m.product_capabilities_label()}
      className="group overflow-hidden border-y border-border bg-card py-6 mask-x-from-90% md:py-8"
    >
      {/* The list repeats once so the loop is seamless; the copy is hidden from assistive tech. */}
      <ul className="flex w-max animate-[marquee_48s_linear_infinite] group-hover:[animation-play-state:paused]">
        {[...items, ...items].map((capability, index) => {
          const copy = index >= items.length
          return (
            <li key={index} aria-hidden={copy || undefined}>
              <a
                href={`#${capability.target}`}
                tabIndex={copy ? -1 : undefined}
                className="flex items-center gap-4 pr-10 whitespace-nowrap transition-colors hover:text-highlight md:pr-14"
              >
                <span className="rounded-md flex size-10 items-center justify-center border border-border bg-background text-highlight">
                  <HugeiconsIcon
                    icon={capability.icon}
                    className="size-[1.125rem]"
                    aria-hidden="true"
                  />
                </span>
                <span className="heading text-title uppercase">
                  {capability.label}
                </span>
                <span
                  aria-hidden="true"
                  className="ml-6 size-1.5 bg-secondary md:ml-10"
                />
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
