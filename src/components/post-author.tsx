import type { ReactNode } from 'react'
import { cn } from '#/lib/utils'

type PostAuthorProps = {
  size?: 'sm' | 'lg'
  children?: ReactNode
}

export function PostAuthor({ size = 'sm', children }: PostAuthorProps) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={cn(
          'flex shrink-0 items-center justify-center rounded-full bg-brand',
          size === 'sm' ? 'size-6 p-1' : 'size-11 p-2.5',
        )}
      >
        <img src="/assets/logos/ailab-icon.svg" alt="" className="size-full" />
      </span>
      <div className={cn(size === 'sm' ? 'text-sm' : 'text-base')}>
        <p className="font-medium">{'AILab team'}</p>
        {children}
      </div>
    </div>
  )
}
