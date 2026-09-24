import { Link } from '@tanstack/react-router'
import type { Post } from 'content-collections'
import { PostCardMeta } from './post-card-meta'

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      to="/blogs/$slug"
      params={{ slug: post.slug }}
      className="group flex h-full flex-col"
    >
      <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-mist">
        <img
          src={post.thumbnail}
          alt=""
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-5">
        <PostCardMeta post={post} />
      </div>
      <h2 className="heading mt-3 text-xl transition-colors group-hover:text-brand md:text-[1.375rem]">
        {post.title}
      </h2>
      <p className="mt-2 line-clamp-2 text-graphite">{post.excerpt}</p>
    </Link>
  )
}
