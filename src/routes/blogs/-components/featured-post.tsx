import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight02Icon } from '@hugeicons/core-free-icons'
import { Link } from '@tanstack/react-router'
import type { Post } from 'content-collections'
import { m } from '#/paraglide/messages'
import { PostCardMeta } from './post-card-meta'

export function FeaturedPost({ post }: { post: Post }) {
  return (
    <Link
      to="/blogs/$slug"
      params={{ slug: post.slug }}
      className="group grid gap-x-10 gap-y-8 md:grid-cols-12"
    >
      <div className="rounded-lg aspect-[16/10] overflow-hidden bg-muted md:col-span-7">
        <img
          src={post.thumbnail}
          alt=""
          decoding="async"
          fetchPriority="high"
          className="size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.1,1)] group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-col gap-5 md:col-span-5 md:py-2">
        <p className="eyebrow flex items-center gap-2">
          <span className="size-1 bg-secondary" aria-hidden="true" />
          {m.blog_featured_latest()}
        </p>
        <h2 className="heading text-headline transition-colors duration-300 group-hover:text-highlight">
          {post.title}
        </h2>
        <p className="line-clamp-3 text-muted-foreground">{post.excerpt}</p>
        <div className="mt-auto flex flex-col gap-5 border-t border-border pt-5">
          <PostCardMeta post={post} />
          <span className="flex items-center gap-2 text-sm font-medium text-highlight">
            {m.blog_read_article()}
            <HugeiconsIcon
              icon={ArrowRight02Icon}
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </Link>
  )
}
