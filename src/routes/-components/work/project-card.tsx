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
  layout: string
}

type ProjectCardProps = {
  project: Project
  onHover: (project: Project | null) => void
}

export function ProjectCard({ project, onHover }: ProjectCardProps) {
  const domain = new URL(project.href).hostname

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block pointer-fine:cursor-none"
      onPointerEnter={(event) =>
        event.pointerType === 'mouse' && onHover(project)
      }
      onPointerLeave={() => onHover(null)}
    >
      <div
        className={cn(
          'relative flex items-center justify-center overflow-hidden rounded-2xl',
          project.tile,
        )}
      >
        <img
          src={project.logo}
          alt=""
          loading="lazy"
          decoding="async"
          className={cn(
            'transition-transform duration-700 ease-out group-hover:scale-[1.06]',
            project.logoClassName,
          )}
        />
        <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/5" />
      </div>
      <div className="mt-6 flex items-baseline justify-between gap-6">
        <h3 className="heading text-2xl md:text-3xl">
          <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1.5px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_1.5px]">
            {project.name}
          </span>
        </h3>
        <span className="flex shrink-0 items-center gap-1 text-sm text-graphite">
          {domain}
          <ArrowUpRightIcon className="size-4" aria-hidden="true" />
        </span>
      </div>
      <p className="mt-2 max-w-[36rem] text-base text-graphite">
        {project.body}
      </p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-border px-3 py-1 text-xs text-graphite"
          >
            {tag}
          </li>
        ))}
      </ul>
    </a>
  )
}
