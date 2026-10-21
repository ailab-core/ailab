import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import { Link } from '@tanstack/react-router'
import type { Post } from 'content-collections'
import { PostCardMeta } from './post-card-meta'

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      to="/blogs/$slug"
      params={{ slug: post.slug }}
      className="group flex h-full flex-col rounded-lg bg-card p-3 transition-[scale] duration-200 ease-out-strong active:scale-[0.99]"
    >
      <div className="rounded-md aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={post.thumbnail}
          alt=""
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-[scale] duration-300 ease-out-strong group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-5 px-2">
        <PostCardMeta post={post} />
      </div>
      <h2 className="heading mt-3 px-2 text-title transition-colors duration-200 group-hover:text-highlight">
        {post.title}
      </h2>
      <p className="mt-2 line-clamp-2 px-2 text-muted-foreground">
        {post.excerpt}
      </p>
      <span
        aria-hidden="true"
        className="mt-auto flex justify-end px-2 pt-4 pb-2"
      >
        <HugeiconsIcon
          icon={ArrowUpRight01Icon}
          className="size-5 translate-y-1 text-highlight opacity-0 transition-[opacity,translate] duration-200 ease-out-strong group-hover:translate-y-0 group-hover:opacity-100"
        />
      </span>
    </Link>
  )
}
