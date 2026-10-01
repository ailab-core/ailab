import { Link } from '@tanstack/react-router'
import type { Post } from 'content-collections'

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      to="/blogs/$slug"
      params={{ slug: post.slug }}
      draggable={false}
      className="group block"
    >
      <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-mist">
        <img
          src={post.thumbnail}
          alt=""
          loading="lazy"
          decoding="async"
          draggable={false}
          className="size-full object-cover"
        />
      </div>
      <p className="mt-5 flex gap-4 text-sm text-graphite">
        <span className="font-medium text-brand">{post.topic}</span>
        <span>{`${post.readingTime} min read`}</span>
      </p>
      <h3 className="heading mt-2 text-xl transition-colors group-hover:text-brand md:text-2xl">
        {post.title}
      </h3>
    </Link>
  )
}
