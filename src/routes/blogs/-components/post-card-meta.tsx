import { format } from 'date-fns'
import type { Post } from 'content-collections'

export function PostCardMeta({ post }: { post: Post }) {
  return (
    <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-graphite">
      <span className="rounded-full border border-border bg-background px-2.5 py-0.5 text-xs text-ink">
        {post.topic}
      </span>
      <time dateTime={post.published.toISOString()}>
        {format(post.published, 'MMM d, yyyy')}
      </time>
      <span>{`${post.readingTime} min read`}</span>
    </p>
  )
}
