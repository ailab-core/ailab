import { cn } from '#/lib/utils'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  intro?: string
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('grid gap-6 md:grid-cols-12 md:items-end', className)}>
      <div className="md:col-span-6">
        {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
        <h2 className="display text-4xl md:text-6xl">{title}</h2>
      </div>
      {intro && (
        <p className="text-muted-foreground md:col-span-5 md:col-start-8">
          {intro}
        </p>
      )}
    </div>
  )
}
