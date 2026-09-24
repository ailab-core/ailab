import type { CSSProperties } from 'react'
import { Link } from '@tanstack/react-router'
import type { Post } from 'content-collections'
import { PostMeta } from '#/components'

export function PostRow({ post, index }: { post: Post; index: number }) {
  return (
    <li
      className="border-b border-border"
      style={{ '--i': index } as CSSProperties}
    >
      <Link
        to="/blogs/$slug"
        params={{ slug: post.slug }}
        className="group grid grid-cols-[6.5rem_1fr] items-center gap-5 py-5 md:grid-cols-[8rem_1fr]"
      >
        <div className="aspect-[4/3] overflow-hidden rounded-lg bg-mist">
          <img
            src={post.thumbnail}
            alt=""
            loading="lazy"
            decoding="async"
            className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>
        <div>
          <PostMeta post={post} className="text-xs" />
          <h3 className="heading mt-2 text-lg transition-colors duration-300 group-hover:text-brand md:text-xl">
            {post.title}
          </h3>
        </div>
      </Link>
    </li>
  )
}
