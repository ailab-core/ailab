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
    <div className={cn('max-w-3xl', className)}>
      {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
      <h2 className="display text-4xl md:text-6xl">{title}</h2>
      {intro && (
        <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg">
          {intro}
        </p>
      )}
    </div>
  )
}
