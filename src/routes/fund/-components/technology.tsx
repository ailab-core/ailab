import { HugeiconsIcon } from '@hugeicons/react'
import { SectionHeading } from '#/components'
import { useReveal } from '#/lib/use-reveal'
import { m } from '#/paraglide/messages'
import type { getContent } from '../-content'

export default function Technology({
  items,
}: {
  items: ReturnType<typeof getContent>['technology']
}) {
  const sectionRef = useReveal<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      id="technology"
      className="shell grid scroll-mt-24 gap-14 lg:grid-cols-12 lg:gap-10"
    >
      <SectionHeading
        eyebrow={m.fund_tech_eyebrow()}
        title={
          <>
            {m.fund_tech_title_a()}
            {m.fund_tech_title_b()}
          </>
        }
        intro={m.fund_tech_intro()}
        className="self-start lg:sticky lg:top-32 lg:col-span-4"
      />
      <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7 lg:col-start-6 xl:grid-cols-3">
        {items.map((item) => (
          <li
            key={item.title}
            data-reveal
            className="group flex flex-col gap-8 rounded-lg bg-card p-5 transition-[background-color] duration-200 hover:bg-muted md:p-6"
          >
            <span className="flex size-10 items-center justify-center rounded-md bg-muted text-highlight transition-[background-color] duration-200 group-hover:bg-accent">
              <HugeiconsIcon
                icon={item.icon}
                className="size-4"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </span>
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
