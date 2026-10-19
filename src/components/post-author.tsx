import type { ReactNode } from 'react'
import { m } from '#/paraglide/messages'

export function PostAuthor({ children }: { children?: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="rounded-md flex size-11 shrink-0 items-center justify-center bg-primary p-2.5">
        <span
          aria-hidden="true"
          className="brand-mark w-full bg-primary-foreground"
        />
      </span>
      <div>
        <p className="font-medium">{m.common_ailab_team()}</p>
        {children}
      </div>
    </div>
  )
}
