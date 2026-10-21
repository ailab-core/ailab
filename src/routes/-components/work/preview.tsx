import { cn } from 'cn'
import type { Project } from './row'

// Every tile stays mounted and stacked, so switching is a pure opacity/transform
// crossfade with no image decode. The slight blur hides the double-exposure frame.
export function WorkPreview({
  projects,
  index,
  instant,
}: {
  projects: Array<Project>
  index: number
  instant: boolean
}) {
  return (
    <div
      aria-hidden="true"
      data-instant={instant || undefined}
      className="sticky top-28 hidden self-start overflow-hidden rounded-lg bg-card p-2 data-instant:**:transition-none lg:block"
    >
      <div className="flex items-center gap-4 px-3 pt-1.5 pb-3.5">
        <span className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-accent" />
          <span className="size-2.5 rounded-full bg-accent" />
          <span className="size-2.5 rounded-full bg-accent" />
        </span>
        <span className="flex-1 truncate rounded-full bg-muted px-4 py-1 text-center font-mono text-xs text-muted-foreground">
          {projects[index].href.replace(/^https?:\/\/|\/$/g, '')}
        </span>
        <span className="w-[2.375rem]" />
      </div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-md">
        {projects.map((project, projectIndex) => {
          const shown = projectIndex === index
          return (
            <div
              key={project.name}
              className={cn(
                'absolute inset-0 flex items-center justify-center transition-opacity duration-200 ease-out-strong',
                project.tile,
                shown ? 'opacity-100' : 'opacity-0',
              )}
            >
              <img
                src={project.logo}
                alt=""
                loading="lazy"
                decoding="async"
                className={cn(
                  'transition-[scale,filter] duration-300 ease-out-strong',
                  project.logoClassName,
                  shown ? 'blur-none' : 'scale-[0.96] blur-[2px]',
                )}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
