import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import { Link } from '@tanstack/react-router'
import type { Post } from 'content-collections'
import { PostMeta } from './meta'

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      to="/blogs/$slug"
      params={{ slug: post.slug }}
      className="group flex h-full flex-col gap-4 rounded-lg bg-card p-6 transition-[scale] duration-150 ease-out-strong active:scale-[0.99] md:p-8"
    >
      <PostMeta post={post} />
      <div className="mt-auto flex items-end justify-between gap-6 pt-4">
        <div className="flex flex-col gap-2">
          <h3 className="heading line-clamp-3 text-title text-balance">
            {post.title}
          </h3>
          <p className="line-clamp-2 text-muted-foreground">{post.excerpt}</p>
        </div>
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted transition-[background-color,color] duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
          <HugeiconsIcon
            icon={ArrowUpRight01Icon}
            className="size-4 transition-[translate] duration-200 ease-out-strong group-hover:translate-x-px group-hover:-translate-y-px"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  )
}
