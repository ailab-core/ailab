import { useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import { useReveal } from '#/lib/use-reveal'
import { cn } from '#/lib/utils'

type ValueTabsProps = {
  eyebrow: string
  title: string
  intro: string
  items: Array<{ icon: LucideIcon; title: string; description: string }>
}

export function ValueTabs({ eyebrow, title, intro, items }: ValueTabsProps) {
  const [active, setActive] = useState(0)
  const sectionRef = useReveal<HTMLElement>()
  const current = items[active]

  return (
    <section
      ref={sectionRef}
      className="shell grid gap-12 md:grid-cols-12 md:gap-6"
    >
      <div className="md:col-span-5">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="display mt-5 text-4xl md:text-5xl">{title}</h2>
        <p className="mt-5 max-w-md text-graphite">{intro}</p>
        <div
          role="tablist"
          aria-label={eyebrow}
          className="mt-10 flex flex-col"
        >
          {items.map((item, index) => {
            const selected = index === active
            return (
              <button
                key={item.title}
                type="button"
                role="tab"
                id={`value-tab-${index}`}
                aria-selected={selected}
                aria-controls="value-panel"
                onClick={() => setActive(index)}
                className="group cursor-pointer border-t border-border py-4 text-left last:border-b"
              >
                <span
                  className={cn(
                    'heading text-lg transition-colors',
                    selected
                      ? 'text-ink'
                      : 'text-graphite group-hover:text-ink',
                  )}
                >
                  {item.title}
                </span>
                {selected && (
                  <span className="mt-3 block h-0.5 overflow-hidden rounded-full bg-hairline">
                    <span
                      className="block h-full origin-left bg-brand group-hover:[animation-play-state:paused] motion-reduce:[animation-name:none]"
                      style={{ animation: 'progress 6s linear both' }}
                      onAnimationEnd={() =>
                        setActive((index + 1) % items.length)
                      }
                    />
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>
      <div
        id="value-panel"
        role="tabpanel"
        aria-labelledby={`value-tab-${active}`}
        className="dark relative flex min-h-[28rem] flex-col justify-between overflow-hidden rounded-3xl bg-background p-8 text-foreground md:col-span-7 md:p-12"
      >
        <ul className="grid grid-cols-3 gap-3" aria-hidden="true">
          {items.map((item, index) => (
            <li
              key={item.title}
              className={cn(
                'flex aspect-[4/3] items-center justify-center rounded-2xl border transition-colors duration-500',
                index === active
                  ? 'border-brand-soft/50 bg-brand-soft/10 text-brand-soft'
                  : 'border-border text-muted-foreground/50',
              )}
            >
              <item.icon className="size-7" />
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <h3 className="text-[1.75rem] leading-tight tracking-[-0.02em] md:text-[2rem]">
            {current.title}
          </h3>
          <p className="mt-3 max-w-lg text-muted-foreground">
            {current.description}
          </p>
        </div>
      </div>
    </section>
  )
}
