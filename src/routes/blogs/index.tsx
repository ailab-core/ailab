import { createFileRoute } from '@tanstack/react-router'
import * as z from 'zod'
import type { CSSProperties } from 'react'
import { POSTS } from '#/lib/posts'
import { useReveal } from '#/lib/use-reveal'
import { FeaturedPost } from './-components/featured-post'
import { PostCard } from './-components/post-card'
import { TopicFilter } from './-components/topic-filter'

export const Route = createFileRoute('/blogs/')({
  validateSearch: z.object({ topic: z.string().optional().catch(undefined) }),
  head: () => ({ meta: [{ title: 'Blog | AILab' }] }),
  component: BlogsPage,
})

function BlogsPage() {
  const { topic } = Route.useSearch()
  const gridRef = useReveal<HTMLUListElement>()
  const posts = topic ? POSTS.filter((post) => post.topic === topic) : POSTS
  const featured = topic ? undefined : posts[0]
  const rest = topic ? posts : posts.slice(1)

  return (
    <main className="shell pt-14 pb-32 md:pt-24 md:pb-44">
      <div className="grid gap-6 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <p className="eyebrow">{'Blog'}</p>
          <h1 className="display mt-5 text-5xl md:text-7xl">
            {'News and updates'}
          </h1>
        </div>
        <p className="text-graphite md:col-span-4 md:col-start-9">
          {
            'Company news, interviews with our team, and notes on the technology we build.'
          }
        </p>
      </div>
      <div className="mt-10 md:mt-14">
        <TopicFilter />
      </div>
      {featured && (
        <div className="mt-10 md:mt-14">
          <FeaturedPost post={featured} />
        </div>
      )}
      {rest.length > 0 ? (
        <ul
          ref={gridRef}
          className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 md:mt-20 lg:grid-cols-3"
        >
          {rest.map((post, index) => (
            <li key={post.slug} style={{ '--i': index % 3 } as CSSProperties}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      ) : (
        !featured && (
          <p className="mt-16 text-graphite">
            {'No posts in this topic yet. Choose another topic above.'}
          </p>
        )
      )}
    </main>
  )
}
