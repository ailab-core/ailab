import type { ReactNode } from 'react'
import { cn } from '#/lib/utils'

type SolutionCardProps = {
  eyebrow: string
  solution: {
    id: string
    title: string
    description: string
    features: Array<string>
  }
  className?: string
  children: ReactNode
}

export function SolutionCard({
  eyebrow,
  solution,
  className,
  children,
}: SolutionCardProps) {
  return (
    <article
      id={solution.id}
      className={cn(
        'flex scroll-mt-28 flex-col rounded-3xl bg-mist p-7 md:p-10',
        className,
      )}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h3 className="mt-4 text-[1.75rem] leading-tight tracking-[-0.02em] md:text-[2rem]">
        {solution.title}
      </h3>
      <p className="mt-4 max-w-md text-graphite">{solution.description}</p>
      <div className="mt-8 rounded-2xl bg-background p-5" aria-hidden="true">
        {children}
      </div>
      <ul className="mt-8 grid gap-x-6 text-sm sm:grid-cols-2">
        {solution.features.map((feature) => (
          <li key={feature} className="border-t border-hairline py-2.5">
            {feature}
          </li>
        ))}
      </ul>
    </article>
  )
}
