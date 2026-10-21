import { HugeiconsIcon } from '@hugeicons/react'
import type { IconSvgElement } from '@hugeicons/react'
import type { ReactNode } from 'react'

type CardProps = {
  icon: IconSvgElement
  title: string
  lead: string
  rest: string
  tags?: Array<() => string>
  children: ReactNode
}

export function Card({
  icon: Icon,
  title,
  lead,
  rest,
  tags,
  children,
}: CardProps) {
  return (
    <article className="rounded-lg relative isolate flex h-[32rem] flex-col overflow-hidden bg-card shadow-[0_-20px_40px_-24px_rgb(0_0_0/0.15)] dark:shadow-[0_-24px_48px_-24px_rgb(0_0_0/0.5)] md:h-[34rem]">
      <div className="flex items-center justify-between gap-4 p-5 md:p-6">
        <span className="rounded-md flex size-11 items-center justify-center bg-muted text-highlight">
          <HugeiconsIcon
            icon={Icon}
            className="size-[1.125rem]"
            aria-hidden="true"
          />
        </span>
        <span className="eyebrow">{title}</span>
      </div>
      <div
        className="relative flex-1 overflow-hidden mask-b-from-70%"
        aria-hidden="true"
      >
        {children}
      </div>
      <div className="p-5 pt-2 md:p-8 md:pt-2">
        <h3 className="heading max-w-lg text-title">{lead}</h3>
        <p className="mt-2 max-w-md text-muted-foreground">{rest}</p>
        {tags && (
          <ul className="eyebrow mt-5 flex flex-wrap gap-x-4 gap-y-1.5">
            {tags.map((tag, index) => (
              <li key={index} className="flex items-center gap-2">
                <span
                  className="rounded-full size-1.5 bg-secondary"
                  aria-hidden="true"
                />
                {tag()}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}
