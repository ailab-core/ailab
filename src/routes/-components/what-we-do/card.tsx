import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { cn } from '#/lib/utils'

type CardProps = {
  icon: LucideIcon
  title: string
  lead: string
  rest: string
  className?: string
  children: ReactNode
}

export function Card({
  icon: Icon,
  title,
  lead,
  rest,
  className,
  children,
}: CardProps) {
  return (
    <article
      data-card
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card',
        'before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(28rem_circle_at_var(--x,50%)_var(--y,50%),color-mix(in_oklab,var(--brand-soft)_9%,transparent),transparent_45%)] before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100',
        className,
      )}
    >
      <div className="relative z-10 p-6 pb-0">
        <h3 className="eyebrow flex items-center gap-2">
          <Icon className="size-4 text-muted-foreground" aria-hidden="true" />
          {title}
        </h3>
        <p className="mt-4 max-w-[26rem] text-base leading-snug text-muted-foreground">
          <span className="text-foreground">{lead}</span> {rest}
        </p>
      </div>
      <div className="relative flex-1" aria-hidden="true">
        {children}
      </div>
    </article>
  )
}
