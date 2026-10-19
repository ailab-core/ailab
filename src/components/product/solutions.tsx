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
        <ol className="hidden max-w-xs flex-col lg:flex">
          {items.map((item, index) => (
            <li key={item.solution.id}>
              <a
                href={`#${item.solution.id}`}
                data-index
                data-active={index === 0 || undefined}
                className="group eyebrow flex items-center gap-3 border-t border-border py-3 transition-colors hover:text-foreground data-active:text-foreground"
              >
                <span
                  aria-hidden="true"
                  className="size-1.5 bg-border transition-colors group-data-active:bg-primary"
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
            <SolutionCard
              index={index}
              eyebrow={item.eyebrow}
              solution={item.solution}
            >
              {item.mock}
            </SolutionCard>
          </div>
        ))}
      </div>
    </section>
  )
}
