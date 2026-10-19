import { SectionHeading } from '#/components'
import { POSTS } from '#/lib/posts'
import { useReveal } from '#/lib/use-reveal'
import { m } from '#/paraglide/messages'
import { getLocale } from '#/paraglide/runtime'
import { PostCard } from './post-card'

export function MorePosts({ currentSlug }: { currentSlug: string }) {
  const listRef = useReveal<HTMLUListElement>()
  const posts = POSTS[getLocale()]
    .filter((post) => post.slug !== currentSlug)
    .slice(0, 4)

  return (
    <section className="border-t border-border bg-muted/50 py-20 md:py-28">
      <div className="shell">
        <SectionHeading title={m.blog_more_title()} />
        <ul
          ref={listRef}
          className="mt-12 grid border-t border-l border-border sm:grid-cols-2 md:mt-16 lg:grid-cols-4"
        >
          {posts.map((post) => (
            <li key={post.slug} data-reveal className="border-r border-b">
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
