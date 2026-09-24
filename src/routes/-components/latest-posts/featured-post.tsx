import { Link } from '@tanstack/react-router'
import type { Post } from 'content-collections'
import { PostMeta } from '#/components'

export function FeaturedPost({ post }: { post: Post }) {
  return (
    <Link
      to="/blogs/$slug"
      params={{ slug: post.slug }}
      className="group block"
    >
      <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-mist">
        <img
          src={post.thumbnail}
          alt=""
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
        />
      </div>
      <PostMeta post={post} className="mt-6" />
      <h3 className="heading mt-3 max-w-2xl text-3xl transition-colors duration-300 group-hover:text-brand md:text-4xl">
        {post.title}
      </h3>
    </Link>
  )
}
