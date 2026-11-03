import type { Post } from 'content-collections'
import { TOPIC_LABELS } from '#/lib/posts'
import { formatPostDate } from '#/lib/utils/locale'
import { m } from '#/paraglide/messages'
import { getLocale } from '#/paraglide/runtime'

const DATE_FORMAT = { en: 'dd MMM yyyy', mn: 'PP', zh: 'PPP' }

export function PostMeta({ post }: { post: Post }) {
  return (
    <p className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-2">
      <span className="bg-highlight/10 px-3 py-1 text-highlight">
        {TOPIC_LABELS[post.topic]?.() ?? post.topic}
      </span>
      <time dateTime={post.published.toISOString()}>
        {formatPostDate(post.published, DATE_FORMAT[getLocale()])}
      </time>
      <span aria-hidden="true" className="size-1 bg-muted-foreground/40" />
      <span>{m.blog_reading_time({ minutes: post.readingTime })}</span>
    </p>
  )
}
