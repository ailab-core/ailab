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

export function WorkRow({
  project,
  active,
  onActivate,
}: {
  project: Project
  active: boolean
  onActivate: (instant: boolean) => void
}) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      data-active={active || undefined}
      onPointerEnter={(event) => {
        if (event.pointerType === 'mouse') onActivate(false)
      }}
      onFocus={() => onActivate(true)}
      className="group flex flex-col gap-2 rounded-lg bg-card p-2 transition-[background-color,scale] duration-200 ease-out-strong active:scale-[0.99] lg:bg-transparent lg:data-active:bg-card"
    >
      <div
        className={cn(
          'flex aspect-[16/10] items-center justify-center overflow-hidden rounded-md lg:hidden',
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
      <div className="flex items-start gap-5 p-4 md:gap-8 md:p-6">
        <div className="flex flex-1 flex-col gap-3">
          <h3 className="heading text-headline font-bold transition-colors duration-200 lg:text-muted-foreground lg:group-data-active:text-foreground">
            {project.name}
          </h3>
          <p className="eyebrow flex flex-wrap gap-x-2">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="not-first:before:mr-2 not-first:before:content-['·']"
              >
                {tag()}
              </span>
            ))}
          </p>
          <p className="mt-1 max-w-md text-muted-foreground">
            {project.body()}
          </p>
        </div>
        <span className="mt-2 flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-foreground transition-[background-color,color] duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
          <HugeiconsIcon
            icon={ArrowUpRight01Icon}
            className="size-4 transition-[translate] duration-200 ease-out-strong group-hover:translate-x-px group-hover:-translate-y-px"
            aria-hidden="true"
          />
          <span className="sr-only">{m.home_work_visit_site()}</span>
        </span>
      </div>
    </a>
  )
}
