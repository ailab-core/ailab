import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import { cn } from 'cn'
import { m } from '#/paraglide/messages'

export type Project = {
  name: string
  href: string
  logo: string
  body: () => string
  tags: Array<() => string>
  tile: string
  logoClassName: string
}

export function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-lg group relative isolate flex h-full flex-col overflow-hidden border border-border bg-card transition-colors duration-500 hover:border-foreground/20"
    >
      <div
        className={cn(
          'relative flex aspect-[16/10] items-center justify-center overflow-hidden',
          project.tile,
        )}
      >
        <div data-logo className="flex size-full items-center justify-center">
          <img
            src={project.logo}
            alt=""
            loading="lazy"
            decoding="async"
            className={cn(
              'transition-[scale] duration-700 ease-[cubic-bezier(0.2,0.7,0.1,1)] group-hover:scale-110',
              project.logoClassName,
            )}
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <p className="eyebrow flex flex-wrap items-center gap-x-2">
          <span className="text-highlight tabular-nums">{`0${index + 1}`}</span>
          {project.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="before:mr-2 before:content-['·']">
              {tag()}
            </span>
          ))}
        </p>
        <h3 className="heading mt-4 text-title">{project.name}</h3>
        <p className="mt-2 max-w-md text-muted-foreground">{project.body()}</p>
        <span className="eyebrow mt-auto flex items-center justify-between pt-8 text-foreground">
          {m.home_work_visit_site()}
          <HugeiconsIcon
            icon={ArrowUpRight01Icon}
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </a>
  )
}
