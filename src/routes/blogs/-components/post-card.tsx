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
      className="group relative flex h-full flex-col p-5 transition-colors duration-300 hover:bg-card md:p-6"
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 -top-px h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.1,1)] group-hover:scale-x-100"
      />
      <div className="rounded-md aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={post.thumbnail}
          alt=""
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.1,1)] group-hover:scale-105"
        />
      </div>
      <div className="mt-6">
        <PostCardMeta post={post} />
      </div>
      <h2 className="heading mt-3 text-title transition-colors group-hover:text-highlight">
        {post.title}
      </h2>
      <p className="mt-2 line-clamp-2 text-muted-foreground">{post.excerpt}</p>
      <span aria-hidden="true" className="mt-auto flex justify-end pt-5">
        <HugeiconsIcon
          icon={ArrowUpRight01Icon}
          className="size-5 translate-y-1 text-highlight opacity-0 transition-[opacity,translate] duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        />
      </span>
    </Link>
  )
}
