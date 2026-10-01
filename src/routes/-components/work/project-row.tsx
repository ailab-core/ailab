import { ArrowUpRightIcon } from 'lucide-react'
import { cn } from '#/lib/utils'

export type Project = {
  name: string
  href: string
  logo: string
  body: string
  tags: Array<string>
  tile: string
  logoClassName: string
}

type ProjectRowProps = {
  project: Project
  active: boolean
  onActivate: () => void
}

export function ProjectRow({ project, active, onActivate }: ProjectRowProps) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      data-active={active || undefined}
      onPointerEnter={onActivate}
      onFocus={onActivate}
      className="group block border-t border-border py-6 md:py-8"
    >
      <div
        className={cn(
          'mb-6 flex aspect-[3/2] items-center justify-center rounded-2xl lg:hidden',
          project.tile,
        )}
      >
        <img
          src={project.logo}
          alt=""
          loading="lazy"
          decoding="async"
          className={project.logoClassName}
        />
      </div>
      <div className="flex items-baseline justify-between gap-6">
        <h3 className="display text-2xl transition-colors duration-300 md:text-4xl lg:text-graphite/60 lg:group-data-active:text-foreground">
          {project.name}
        </h3>
        <ArrowUpRightIcon
          className="size-5 shrink-0 self-center text-brand transition-[opacity,translate] duration-300 md:size-6 lg:-translate-x-2 lg:translate-y-2 lg:opacity-0 lg:group-data-active:translate-0 lg:group-data-active:opacity-100"
          aria-hidden="true"
        />
      </div>
      <div className="mt-4 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between md:gap-10">
        <p className="max-w-xl text-graphite">{project.body}</p>
        <p className="shrink-0 text-sm text-graphite/80">
          {project.tags.join(', ')}
        </p>
      </div>
    </a>
  )
}
