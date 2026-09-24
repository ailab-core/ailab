import { Link } from '@tanstack/react-router'
import type { CSSProperties } from 'react'
import { POSTS } from '#/lib/posts'
import { useReveal } from '#/lib/use-reveal'
import { FeaturedPost } from './featured-post'
import { PostRow } from './post-row'

const [FEATURED, ...REST] = POSTS

export default function LatestPosts() {
  const gridRef = useReveal<HTMLDivElement>()
  const listRef = useReveal<HTMLUListElement>()

  return (
    <section className="shell">
      <div className="mb-12 flex items-end justify-between gap-6 md:mb-16">
        <div>
          <p className="eyebrow mb-5">{'Blog'}</p>
          <h2 className="display text-4xl md:text-6xl">{'From the blog'}</h2>
        </div>
        <Link
          to="/blogs"
          className="shrink-0 border-b border-brand pb-1 font-medium transition-colors hover:text-brand"
        >
          {'Read all posts'}
        </Link>
      </div>
      <div ref={gridRef} className="grid gap-12 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-7">
          <FeaturedPost post={FEATURED} />
        </div>
        <ul
          ref={listRef}
          className="border-t border-border md:col-span-5"
          style={{ '--i': 1 } as CSSProperties}
        >
          {REST.slice(0, 4).map((post, index) => (
            <PostRow key={post.slug} post={post} index={index} />
          ))}
        </ul>
      </div>
    </section>
  )
}
