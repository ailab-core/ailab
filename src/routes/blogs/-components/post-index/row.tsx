import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight02Icon } from '@hugeicons/core-free-icons'
import { Link } from '@tanstack/react-router'
import { format } from 'date-fns'
import type { Post } from 'content-collections'
import { TOPIC_LABELS } from '#/lib/posts'
import { DATE_LOCALES } from '#/lib/utils/locale'
import { m } from '#/paraglide/messages'
import { getLocale } from '#/paraglide/runtime'

export function PostIndexRow({ post }: { post: Post }) {
  return (
    <li>
      <Link
        to="/blogs/$slug"
        params={{ slug: post.slug }}
        className="group grid gap-x-10 gap-y-3 py-7 transition-colors md:grid-cols-12 md:py-9"
      >
        <span className="eyebrow flex gap-3 md:col-span-3 md:flex-col md:gap-2 md:pt-1.5">
          <time dateTime={post.published.toISOString()}>
            {format(post.published, 'PP', {
              locale: DATE_LOCALES[getLocale()],
            })}
          </time>
          <span className="text-highlight">
            {TOPIC_LABELS[post.topic]?.() ?? post.topic}
          </span>
        </span>
        <span className="flex flex-col gap-2 md:col-span-7">
          <span className="heading text-title transition-colors duration-300 group-hover:text-highlight">
            {post.title}
          </span>
          <span className="line-clamp-2 text-muted-foreground">
            {post.excerpt}
          </span>
        </span>
        <span className="flex items-center justify-between gap-3 md:col-span-2 md:flex-col md:items-end md:pt-1.5">
          <span className="eyebrow">
            {m.blog_reading_time({ minutes: post.readingTime })}
          </span>
          <HugeiconsIcon
            icon={ArrowRight02Icon}
            className="size-5 text-muted-foreground transition-[color,translate] duration-300 group-hover:translate-x-1 group-hover:text-highlight"
            aria-hidden="true"
          />
        </span>
      </Link>
    </li>
  )
}
