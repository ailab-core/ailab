import { createFileRoute } from '@tanstack/react-router'
import * as z from 'zod'
import { POSTS, TOPIC_LABELS } from '#/lib/posts'
import { m } from '#/paraglide/messages'
import { getLocale } from '#/paraglide/runtime'
import { FeaturedPost } from './-components/featured-post'
import { PostIndex } from './-components/post-index'
import { TopicFilter } from './-components/topic-filter'

export const Route = createFileRoute('/blogs/')({
  validateSearch: z.object({ topic: z.string().optional().catch(undefined) }),
  head: () => ({
    meta: [
      { title: m.blog_meta_title() },
      { name: 'description', content: m.blog_hero_intro() },
    ],
  }),
  component: BlogsPage,
})

function BlogsPage() {
  const { topic } = Route.useSearch()
  const localePosts = POSTS[getLocale()]
  const posts = topic
    ? localePosts.filter((post) => post.topic === topic)
    : localePosts
  // Interview thumbnails show people, so the featured slot skips them.
  const featured = topic
    ? undefined
    : posts.find((post) => post.topic !== 'Interview')
  const rest = featured ? posts.filter((post) => post !== featured) : posts

  return (
    <main className="pb-32 md:pb-44">
      <header className="shell pt-36 md:pt-44">
        <div className="grid gap-x-10 gap-y-6 pb-12 md:grid-cols-12 md:pb-16">
          <p className="hero-line eyebrow flex items-center gap-2 md:col-span-12">
            <span className="size-1 bg-secondary" aria-hidden="true" />
            {m.blog_eyebrow()}
          </p>
          <h1
            className="hero-line heading text-section md:col-span-7"
            style={{ animationDelay: '0.08s' }}
          >
            {m.blog_hero_title()}
          </h1>
          <p
            className="hero-line max-w-md self-end text-lead text-muted-foreground md:col-span-5 md:justify-self-end"
            style={{ animationDelay: '0.16s' }}
          >
            {m.blog_hero_intro()}
          </p>
        </div>
        <div className="hero-line" style={{ animationDelay: '0.24s' }}>
          <TopicFilter />
        </div>
      </header>
      <div className="shell flex flex-col gap-16 pt-12 md:gap-24 md:pt-16">
        {featured && <FeaturedPost post={featured} />}
        {rest.length > 0 ? (
          <PostIndex
            posts={rest}
            title={
              topic ? (TOPIC_LABELS[topic]?.() ?? topic) : m.blog_all_posts()
            }
          />
        ) : (
          !featured && (
            <p className="text-lead text-muted-foreground">
              {m.blog_empty_topic()}
            </p>
          )
        )}
      </div>
    </main>
  )
}
