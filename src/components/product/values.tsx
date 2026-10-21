import { HugeiconsIcon } from '@hugeicons/react'
import type { IconSvgElement } from '@hugeicons/react'
import type { ReactNode } from 'react'
import { useReveal } from '#/lib/use-reveal'
import { SectionHeading } from '../section-heading'

type ProductValuesProps = {
  id?: string
  eyebrow: string
  title: ReactNode
  intro: string
  items: Array<{ icon: IconSvgElement; title: string; description: string }>
}

export function ProductValues({
  id,
  eyebrow,
  title,
  intro,
  items,
}: ProductValuesProps) {
  const gridRef = useReveal<HTMLUListElement>()

  return (
    <section
      id={id}
      className="shell grid scroll-mt-24 gap-14 lg:grid-cols-12 lg:gap-10"
    >
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        intro={intro}
        className="self-start lg:sticky lg:top-32 lg:col-span-4"
      />
      <ul
        ref={gridRef}
        className="grid gap-3 sm:grid-cols-2 lg:col-span-7 lg:col-start-6"
      >
        {items.map((item) => (
          <li
            key={item.title}
            data-reveal
            className="group flex min-h-72 flex-col justify-between gap-12 rounded-lg bg-card p-6 transition-[background-color] duration-200 hover:bg-muted sm:last:odd:col-span-2 md:p-8"
          >
            <span className="flex size-11 items-center justify-center rounded-md bg-muted text-highlight transition-[background-color] duration-200 group-hover:bg-accent">
              <HugeiconsIcon
                icon={item.icon}
                className="size-[1.125rem]"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </span>
            <div>
              <h3 className="heading text-title">{item.title}</h3>
              <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
