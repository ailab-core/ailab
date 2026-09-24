import { Link } from '@tanstack/react-router'
import type { Post } from 'content-collections'
import { PostMeta } from './post-meta'

export function BlogCard({ post }: { post: Post }) {
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
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <PostMeta post={post} className="mt-5" />
      <h3 className="heading mt-2 text-xl md:text-2xl">
        <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1.5px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 group-hover:bg-[length:100%_1.5px]">
          {post.title}
        </span>
      </h3>
    </Link>
  )
}
