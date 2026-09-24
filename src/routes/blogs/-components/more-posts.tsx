import { Link } from '@tanstack/react-router'
import { format } from 'date-fns'
import { PostAuthor } from '#/components'
import { POSTS } from '#/lib/posts'

export function MorePosts({ currentSlug }: { currentSlug: string }) {
  const posts = POSTS.filter((post) => post.slug !== currentSlug).slice(0, 4)

  return (
    <section className="bg-mist py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold tracking-tight">
          {'More from AILab'}
        </h2>
        <ul className="mt-10 grid gap-x-10 gap-y-12 md:grid-cols-2">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                to="/blogs/$slug"
                params={{ slug: post.slug }}
                className="group block"
              >
                <div className="aspect-[16/9] overflow-hidden rounded-lg bg-background">
                  <img
                    src={post.thumbnail}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5">
                  <PostAuthor />
                </div>
                <h3 className="mt-3 text-xl leading-snug font-bold tracking-tight">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-graphite">
                  {post.excerpt}
                </p>
                <p className="mt-3 flex gap-3 text-sm text-graphite">
                  <time dateTime={post.published.toISOString()}>
                    {format(post.published, 'MMM d, yyyy')}
                  </time>
                  <span>{`${post.readingTime} min read`}</span>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
