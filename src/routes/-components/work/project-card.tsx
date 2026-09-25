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

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col"
    >
      <div
        className={cn(
          'flex aspect-[3/2] items-center justify-center overflow-hidden rounded-2xl md:max-lg:in-[li:last-child]:aspect-[3/1]',
          project.tile,
        )}
      >
        <img
          src={project.logo}
          alt=""
          loading="lazy"
          decoding="async"
          className={cn(
            'transition-transform duration-700 ease-out group-hover:scale-[1.04]',
            project.logoClassName,
          )}
        />
      </div>
      <div className="mt-5 flex items-center justify-between gap-4">
        <h3 className="heading text-2xl">{project.name}</h3>
        <ArrowUpRightIcon
          className="size-5 shrink-0 text-graphite transition-[translate,color] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand"
          aria-hidden="true"
        />
      </div>
      <p className="mt-2 text-base text-graphite">{project.body}</p>
      <p className="mt-auto pt-4 text-sm text-graphite/70">
        {project.tags.join(' · ')}
      </p>
    </a>
  )
}
