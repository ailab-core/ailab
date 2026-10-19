import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight02Icon } from '@hugeicons/core-free-icons'
import { Link } from '@tanstack/react-router'
import { format } from 'date-fns'
import type { Post } from 'content-collections'
import { DATE_LOCALES } from '#/lib/utils/locale'
import { TOPIC_LABELS } from '#/lib/posts'
import { m } from '#/paraglide/messages'
import { getLocale } from '#/paraglide/runtime'

const DATE_FORMAT = { en: 'dd MMM yyyy', mn: 'PP', zh: 'PPP' }

export function FeaturedCard({ post }: { post: Post }) {
  const locale = getLocale()

  return (
    <Link
      to="/blogs/$slug"
      params={{ slug: post.slug }}
      className="rounded-lg group relative isolate flex h-full flex-col overflow-hidden border border-border bg-card transition-colors duration-500 hover:border-foreground/20"
    >
      <div className="aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={post.thumbnail}
          alt=""
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.1,1)] group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <p className="eyebrow">
          <span className="text-highlight">
            {TOPIC_LABELS[post.topic]?.() ?? post.topic}
          </span>
          <span className="mx-2">{'·'}</span>
          <time dateTime={post.published.toISOString()}>
            {format(post.published, DATE_FORMAT[locale], {
              locale: DATE_LOCALES[locale],
            })}
          </time>
        </p>
        <h3 className="heading mt-4 text-title">{post.title}</h3>
        <span className="eyebrow mt-auto flex items-center justify-between pt-8 text-foreground">
          {m.home_posts_read_more()}
          <HugeiconsIcon
            icon={ArrowRight02Icon}
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  )
}
