import { format } from 'date-fns'
import type { Post } from 'content-collections'
import { cn } from '#/lib/utils'

export function PostMeta({
  post,
  className,
}: {
  post: Post
  className?: string
}) {
  return (
    <p className={cn('flex items-center gap-4 text-sm text-graphite', className)}>
      <span className="font-mono text-xs font-medium text-brand uppercase">
        {post.topic}
      </span>
      <time dateTime={post.published.toISOString()}>
        {format(post.published, 'MMMM d, yyyy')}
      </time>
    </p>
  )
}
