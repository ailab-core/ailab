import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight02Icon } from '@hugeicons/core-free-icons'
import { Link } from '@tanstack/react-router'
import type { Post } from 'content-collections'
import { m } from '#/paraglide/messages'
import { PostMeta } from './meta'

export function FeaturedCard({ post }: { post: Post }) {
  return (
    <Link
      to="/blogs/$slug"
      params={{ slug: post.slug }}
      className="group flex h-full flex-col overflow-hidden rounded-lg bg-card transition-[scale] duration-150 ease-out-strong active:scale-[0.99]"
    >
      <div className="m-2 aspect-[16/9] overflow-hidden rounded-md bg-muted">
        <img
          src={post.thumbnail}
          alt=""
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-[scale] duration-300 ease-out-strong group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6 md:p-8">
        <PostMeta post={post} />
        <h3 className="heading text-headline text-balance">{post.title}</h3>
        <p className="line-clamp-3 max-w-xl text-muted-foreground">
          {post.excerpt}
        </p>
        <span className="mt-auto flex items-center gap-3 pt-6 text-sm font-medium">
          <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <HugeiconsIcon
              icon={ArrowRight02Icon}
              className="size-4 transition-[translate] duration-200 ease-out-strong group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
          {m.home_posts_read_more()}
        </span>
      </div>
    </Link>
  )
}
