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
      className="group grid gap-x-10 gap-y-6 rounded-lg bg-card p-3 transition-[opacity,scale] duration-200 ease-out-strong active:scale-[0.99] starting:opacity-0 md:grid-cols-12"
    >
      <div className="rounded-md aspect-[16/10] overflow-hidden bg-muted md:col-span-7">
        <img
          src={post.thumbnail}
          alt=""
          decoding="async"
          fetchPriority="high"
          className="size-full object-cover transition-[scale] duration-300 ease-out-strong group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-col gap-5 px-3 pb-3 md:col-span-5 md:py-6 md:pr-6 md:pl-0">
        <p className="eyebrow">{m.blog_featured_latest()}</p>
        <h2 className="heading text-headline transition-colors duration-200 group-hover:text-highlight">
          {post.title}
        </h2>
        <p className="line-clamp-3 text-muted-foreground">{post.excerpt}</p>
        <div className="mt-auto flex flex-col gap-5 pt-3">
          <PostCardMeta post={post} />
          <span className="flex items-center gap-2 text-sm font-medium text-highlight">
            {m.blog_read_article()}
            <HugeiconsIcon
              icon={ArrowRight02Icon}
              className="size-4 transition-[translate] duration-200 ease-out-strong group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </Link>
  )
}
