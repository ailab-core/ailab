import { cn } from 'cn'
import { useReveal } from '#/lib/use-reveal'
import { SectionHeading } from '../section-heading'
import { m } from '#/paraglide/messages'

export type Logo = { name: string; src: string; ink?: 'dark' | 'light' }

type ProductIntegrationsProps = {
  id?: string
  intro: string
  items: Array<Logo>
}

export function ProductIntegrations({
  id,
  intro,
  items,
}: ProductIntegrationsProps) {
  const sectionRef = useReveal<HTMLElement>()
  const rows = [items, [...items].reverse()]

  return (
    <section
      ref={sectionRef}
      id={id}
      className="flex scroll-mt-24 flex-col gap-14 md:gap-20"
    >
      <div className="shell flex flex-col justify-between gap-10 md:flex-row md:items-end">
        <SectionHeading
          eyebrow={m.product_integrations_eyebrow()}
          title={
            <>
              {m.product_integrations_title_a()}
              {m.product_integrations_title_b()}
            </>
          }
          intro={intro}
        />
        <p className="flex items-start gap-3">
          <span className="heading text-hero tabular-nums">{items.length}</span>
          <span className="eyebrow pt-3">
            {m.product_integrations_count_label()}
          </span>
        </p>
      </div>
      <div className="group flex flex-col gap-3 overflow-hidden mask-x-from-85%">
        {rows.map((row, rowIndex) => (
          <ul
            key={rowIndex}
            aria-hidden={rowIndex === 1 || undefined}
            className="flex w-max gap-3 group-hover:[animation-play-state:paused]"
            style={{
              animation: `marquee ${row.length * 5}s linear infinite`,
              animationDirection: rowIndex ? 'reverse' : 'normal',
            }}
          >
            {/* Four copies keep each half of the loop wider than the viewport. */}
            {[...row, ...row, ...row, ...row].map((item, index) => (
              <li
                key={index}
                aria-hidden={
                  (rowIndex === 0 && index >= row.length) || undefined
                }
                className="group/item flex h-32 w-56 shrink-0 flex-col items-center justify-center gap-4 rounded-lg bg-card"
              >
                <img
                  src={item.src}
                  alt=""
                  loading="lazy"
                  className={cn(
                    'h-9 w-auto max-w-[7.5rem] object-contain opacity-60 grayscale transition-[opacity,filter] duration-200 group-hover/item:opacity-100 group-hover/item:grayscale-0',
                    // Hue rotation undoes the color shift from inverting, so hover keeps brand colors.
                    item.ink === 'dark' && 'dark:invert dark:hue-rotate-180',
                    item.ink === 'light' &&
                      'invert hue-rotate-180 dark:invert-0 dark:hue-rotate-0',
                  )}
                />
                <span className="eyebrow">{item.name}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}
