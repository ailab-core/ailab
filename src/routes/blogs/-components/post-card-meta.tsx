import { TOPIC_LABELS } from '#/lib/posts'
import { format } from 'date-fns'
import type { Post } from 'content-collections'
import { DATE_LOCALES } from '#/lib/utils/locale'
import { m } from '#/paraglide/messages'
import { getLocale } from '#/paraglide/runtime'

export function PostCardMeta({ post }: { post: Post }) {
  return (
    <p className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1">
      <span className="text-highlight">
        {TOPIC_LABELS[post.topic]?.() ?? post.topic}
      </span>
      <span aria-hidden="true" className="rounded-full size-1.5 bg-secondary" />
      <time dateTime={post.published.toISOString()}>
        {format(post.published, 'PP', { locale: DATE_LOCALES[getLocale()] })}
      </time>
      <span
        aria-hidden="true"
        className="size-1 rounded-full bg-muted-foreground/40"
      />
      <span>{m.blog_reading_time({ minutes: post.readingTime })}</span>
    </p>
  )
}
