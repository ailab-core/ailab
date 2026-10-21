import type { ComponentProps, ReactNode } from 'react'
import { useScrollIndex } from '#/lib/use-scroll-index'
import { SectionHeading } from '../section-heading'
import { SolutionCard } from './solution-card'

type ProductSolutionsProps = {
  eyebrow: string
  title: ReactNode
  intro: string
  items: Array<{
    eyebrow: string
    solution: ComponentProps<typeof SolutionCard>['solution']
    mock: ReactNode
  }>
}

export function ProductSolutions({
  eyebrow,
  title,
  intro,
  items,
}: ProductSolutionsProps) {
  const sectionRef = useScrollIndex<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="shell grid scroll-mt-24 gap-14 lg:grid-cols-12 lg:gap-10"
    >
      <div className="flex flex-col gap-14 self-start lg:sticky lg:top-32 lg:col-span-4">
        <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
        <ol className="hidden max-w-xs flex-col gap-1 lg:flex">
          {items.map((item, index) => (
            <li key={item.solution.id}>
              <a
                href={`#${item.solution.id}`}
                data-index
                data-active={index === 0 || undefined}
                className="group eyebrow flex items-center gap-3 rounded-md px-3 py-3 transition-[color,background-color] duration-200 hover:bg-muted hover:text-foreground data-active:bg-card data-active:text-foreground"
              >
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-secondary/35 transition-[background-color] duration-200 group-data-active:bg-secondary"
                />
                {item.eyebrow}
              </a>
            </li>
          ))}
        </ol>
      </div>
      <div
        data-stack
        className="flex flex-col gap-6 lg:col-span-7 lg:col-start-6"
      >
        {items.map((item, index) => (
          <div
            key={item.solution.id}
            className="md:sticky"
            style={{ top: `calc(6.5rem + ${index * 1.25}rem)` }}
          >
            <SolutionCard eyebrow={item.eyebrow} solution={item.solution}>
              {item.mock}
            </SolutionCard>
          </div>
        ))}
      </div>
    </section>
  )
}
