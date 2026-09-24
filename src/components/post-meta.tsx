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
    <p className={cn('flex gap-4 text-sm text-graphite', className)}>
      <span className="text-brand">{post.topic}</span>
      <time dateTime={post.published.toISOString()}>
        {format(post.published, 'MMMM d, yyyy')}
      </time>
    </p>
  )
}
