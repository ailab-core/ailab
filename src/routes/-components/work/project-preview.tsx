import { cn } from '#/lib/utils'
import type { Project } from './project-row'

type ProjectPreviewProps = {
  projects: Array<Project>
  active: number
}

// All tiles stay mounted and crossfade, so switching never waits on an image.
export function ProjectPreview({ projects, active }: ProjectPreviewProps) {
  return (
    <div
      aria-hidden="true"
      className="sticky top-28 hidden aspect-square overflow-hidden rounded-3xl lg:block"
    >
      {projects.map((project, index) => (
        <div
          key={project.name}
          className={cn(
            'absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-out',
            project.tile,
            index === active ? 'opacity-100' : 'opacity-0',
          )}
        >
          <img
            src={project.logo}
            alt=""
            loading="lazy"
            decoding="async"
            className={cn(
              'transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.1,1)]',
              index === active ? 'scale-100' : 'scale-90',
              project.logoClassName,
            )}
          />
        </div>
      ))}
    </div>
  )
}
