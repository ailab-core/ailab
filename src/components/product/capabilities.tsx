import { ArrowDownRightIcon } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Capability = { label: string; icon: LucideIcon; target: string }

export function ProductCapabilities({ items }: { items: Array<Capability> }) {
  return (
    <section className="shell">
      <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {items.map((capability) => (
          <li key={capability.label}>
            <a
              href={`#${capability.target}`}
              className="group flex h-16 items-center gap-3 bg-background px-5 text-sm font-medium transition-colors hover:bg-mist"
            >
              <capability.icon
                className="size-4 text-brand"
                aria-hidden="true"
              />
              {capability.label}
              <ArrowDownRightIcon
                className="ml-auto size-4 text-graphite opacity-0 transition-opacity group-hover:opacity-100"
                aria-hidden="true"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
