import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowLeft02Icon } from '@hugeicons/core-free-icons'
import { useRef } from 'react'
import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { format } from 'date-fns'
import { PostAuthor } from '#/components'
import { POSTS, TOPIC_LABELS } from '#/lib/posts'
import { DATE_LOCALES } from '#/lib/utils/locale'
import { m } from '#/paraglide/messages'
import { getLocale } from '#/paraglide/runtime'
import { MorePosts } from './-components/more-posts'
import { ReadingProgress } from './-components/reading-progress'
import { ShareBar } from './-components/share-bar'

export const Route = createFileRoute('/blogs/$slug')({
  loader: ({ params }) => {
    const post = POSTS[getLocale()].find((p) => p.slug === params.slug)
    if (!post) throw notFound()
    return post
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: m.blog_post_meta_title({ title: loaderData.title }) },
          { name: 'description', content: loaderData.excerpt },
          { property: 'og:image', content: loaderData.thumbnail },
        ]
      : [],
  }),
  component: PostPage,
})

const topicClass =
  'rounded-md inline-flex h-8 items-center gap-2 border border-border px-3 text-xs font-medium tracking-wider uppercase transition-colors hover:border-highlight hover:text-highlight'

function PostPage() {
  const post = Route.useLoaderData()
  const articleRef = useRef<HTMLElement>(null)

  return (
    <main>
      <ReadingProgress target={articleRef} />
      <article ref={articleRef} className="pb-20 md:pb-28">
        <header className="relative overflow-hidden">
          <div className="relative mx-auto max-w-5xl px-6 pt-32 md:pt-40">
            <Link
              to="/blogs"
              className="hero-line group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <HugeiconsIcon
                icon={ArrowLeft02Icon}
                className="size-4 transition-transform group-hover:-translate-x-1"
                aria-hidden="true"
              />
              {m.blog_all_posts()}
            </Link>
            <div
              className="hero-line mt-10 md:mt-14"
              style={{ animationDelay: '0.06s' }}
            >
              <Link
                to="/blogs"
                search={{ topic: post.topic }}
                className={topicClass}
              >
                <span className="size-1 bg-secondary" aria-hidden="true" />
                {TOPIC_LABELS[post.topic]?.() ?? post.topic}
              </Link>
            </div>
            <h1
              className="hero-line heading mt-6 max-w-4xl text-headline"
              style={{ animationDelay: '0.12s' }}
            >
              {post.title}
            </h1>
            <p
              className="hero-line mt-6 max-w-2xl text-lead text-muted-foreground"
              style={{ animationDelay: '0.2s' }}
            >
              {post.excerpt}
            </p>
            <div
              className="hero-line mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-border py-5"
              style={{ animationDelay: '0.28s' }}
            >
              <PostAuthor>
                <p className="eyebrow mt-0.5 flex gap-3">
                  <span>
                    {m.blog_reading_time({ minutes: post.readingTime })}
                  </span>
                  <time dateTime={post.published.toISOString()}>
                    {format(post.published, 'PP', {
                      locale: DATE_LOCALES[getLocale()],
                    })}
                  </time>
                </p>
              </PostAuthor>
              <ShareBar />
            </div>
          </div>
        </header>
        <div className="mx-auto max-w-5xl px-6">
          <img
            src={post.thumbnail}
            alt=""
            decoding="async"
            className="rounded-lg hero-line aspect-[16/9] w-full bg-muted object-cover"
            style={{ animationDelay: '0.36s' }}
          />
        </div>
        <div className="mx-auto max-w-[43rem] px-6">
          <div
            className="prose prose-lg md:prose-xl mt-14 max-w-none font-serif prose-headings:font-display prose-headings:font-medium prose-headings:tracking-tight prose-p:leading-[1.7] prose-a:decoration-secondary prose-a:underline-offset-4 prose-blockquote:border-l-2 prose-blockquote:font-normal prose-strong:font-semibold prose-li:my-1"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <div className="mt-16 flex items-center justify-between border-t border-border pt-8">
            <Link
              to="/blogs"
              search={{ topic: post.topic }}
              className={topicClass}
            >
              <span className="size-1 bg-secondary" aria-hidden="true" />
              {TOPIC_LABELS[post.topic]?.() ?? post.topic}
            </Link>
            <ShareBar />
          </div>
          <div className="rounded-lg dark relative isolate mt-12 flex flex-col gap-6 overflow-hidden border border-border bg-background p-6 text-foreground sm:flex-row sm:items-center sm:justify-between md:p-8">
            <div className="relative">
              <PostAuthor>
                <p className="text-sm text-muted-foreground">
                  {m.blog_author_bio()}
                </p>
              </PostAuthor>
            </div>
            <a
              href="mailto:info@ailab.mn"
              className="rounded-md relative inline-flex h-11 shrink-0 items-center justify-center bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {m.blog_get_in_touch()}
            </a>
          </div>
        </div>
      </article>
      <MorePosts currentSlug={post.slug} />
    </main>
  )
}
