import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight02Icon } from '@hugeicons/core-free-icons'
import { Link } from '@tanstack/react-router'
import { format } from 'date-fns'
import type { Post } from 'content-collections'
import { DATE_LOCALES } from '#/lib/utils/locale'
import { TOPIC_LABELS } from '#/lib/posts'
import { getLocale } from '#/paraglide/runtime'

const DATE_FORMAT = { en: 'dd MMM yyyy', mn: 'PP', zh: 'PPP' }

export function PostCard({ post }: { post: Post }) {
  const locale = getLocale()

  return (
    <Link
      to="/blogs/$slug"
      params={{ slug: post.slug }}
      className="group grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-2 py-6 md:grid-cols-[9rem_1fr_auto_auto]"
    >
      <span className="eyebrow col-span-2 md:col-span-1">
        {TOPIC_LABELS[post.topic]?.() ?? post.topic}
      </span>
      <h3 className="heading text-xl transition-colors group-hover:text-highlight">
        {post.title}
      </h3>
      <time
        dateTime={post.published.toISOString()}
        className="eyebrow hidden md:block"
      >
        {format(post.published, DATE_FORMAT[locale], {
          locale: DATE_LOCALES[locale],
        })}
      </time>
      <HugeiconsIcon
        icon={ArrowRight02Icon}
        className="size-4 text-muted-foreground transition-[color,translate] duration-300 group-hover:translate-x-1 group-hover:text-foreground"
        aria-hidden="true"
      />
    </Link>
  )
}
