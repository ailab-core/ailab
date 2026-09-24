import { cn } from '#/lib/utils'
import { SectionIntro } from './section-intro'

type ProductIntegrationsProps = {
  intro: string
  items: Array<{ name: string; src: string }>
  className?: string
}

export function ProductIntegrations({
  intro,
  items,
  className,
}: ProductIntegrationsProps) {
  return (
    <section className="shell">
      <SectionIntro
        eyebrow="Integrations"
        title="Connected from day one"
        intro={intro}
      />
      <ul
        className={cn(
          'mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3 md:mt-20',
          className,
        )}
      >
        {items.map((item) => (
          <li
            key={item.name}
            className="flex flex-col items-center justify-center gap-4 bg-background px-4 py-8 text-center"
          >
            <img
              src={item.src}
              alt=""
              loading="lazy"
              className="h-9 w-auto max-w-[8rem] object-contain"
            />
            <span className="text-xs text-graphite">{item.name}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
