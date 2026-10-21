import { format } from 'date-fns'
import type { Post } from 'content-collections'
import { TOPIC_LABELS } from '#/lib/posts'
import { DATE_LOCALES } from '#/lib/utils/locale'
import { m } from '#/paraglide/messages'
import { getLocale } from '#/paraglide/runtime'

const DATE_FORMAT = { en: 'dd MMM yyyy', mn: 'PP', zh: 'PPP' }

export function PostMeta({ post }: { post: Post }) {
  const locale = getLocale()

  return (
    <p className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-2">
      <span className="rounded-full bg-highlight/10 px-3 py-1 text-highlight">
        {TOPIC_LABELS[post.topic]?.() ?? post.topic}
      </span>
      <time dateTime={post.published.toISOString()}>
        {format(post.published, DATE_FORMAT[locale], {
          locale: DATE_LOCALES[locale],
        })}
      </time>
      <span
        aria-hidden="true"
        className="size-1 rounded-full bg-muted-foreground/40"
      />
      <span>{m.blog_reading_time({ minutes: post.readingTime })}</span>
    </p>
  )
}
