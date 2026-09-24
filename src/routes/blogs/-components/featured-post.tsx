import { Link } from '@tanstack/react-router'
import type { Post } from 'content-collections'
import { PostCardMeta } from './post-card-meta'

export function FeaturedPost({ post }: { post: Post }) {
  return (
    <Link
      to="/blogs/$slug"
      params={{ slug: post.slug }}
      className="group grid items-center gap-8 rounded-3xl bg-mist p-3 md:grid-cols-12 md:gap-10 md:p-4"
    >
      <div className="aspect-[16/10] overflow-hidden rounded-2xl md:col-span-7">
        <img
          src={post.thumbnail}
          alt=""
          decoding="async"
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="px-4 pb-6 md:col-span-5 md:px-0 md:pr-8 md:pb-0">
        <p className="eyebrow">{'Latest'}</p>
        <h2 className="display mt-4 text-3xl transition-colors group-hover:text-brand md:text-[2.75rem]">
          {post.title}
        </h2>
        <p className="mt-4 line-clamp-3 text-graphite">{post.excerpt}</p>
        <div className="mt-6">
          <PostCardMeta post={post} />
        </div>
      </div>
    </Link>
  )
}
