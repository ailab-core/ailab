import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowLeft02Icon } from '@hugeicons/core-free-icons'
import { useRef } from 'react'
import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { PostAuthor } from '#/components'
import { POSTS, TOPIC_LABELS } from '#/lib/posts'
import { formatPostDate } from '#/lib/utils/locale'
import { SITE_NAME, SITE_URL, absoluteUrl, seo } from '#/lib/utils/seo'
import { m } from '#/paraglide/messages'
import { getLocale, locales } from '#/paraglide/runtime'
import { MorePosts } from './-components/more-posts'
import { ReadingProgress } from './-components/reading-progress'
import { ShareBar } from './-components/share-bar'

export const Route = createFileRoute('/blogs/$slug')({
  loader: ({ params }) => {
    const post = POSTS[getLocale()].find((p) => p.slug === params.slug)
    if (!post) throw notFound()
    return post
  },
  head: ({ loaderData: post }) => {
    if (!post) return {}
    const path = `/blogs/${post.slug}`
    const head = seo({
      path,
      title: m.blog_post_meta_title({ title: post.title }),
      ogTitle: post.title,
      description: post.excerpt,
      image: post.thumbnail,
      type: 'article',
      available: locales.filter((l) =>
        POSTS[l].some((p) => p.slug === post.slug),
      ),
    })
    const published = post.published.toISOString()

    return {
      meta: [
        ...head.meta,
        { property: 'article:published_time', content: published },
        { property: 'article:section', content: post.topic },
      ],
      links: head.links,
      scripts: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            image: absoluteUrl(post.thumbnail),
            datePublished: published,
            inLanguage: post.locale,
            mainEntityOfPage: absoluteUrl(path, getLocale()),
            author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
            publisher: {
              '@type': 'Organization',
              name: SITE_NAME,
              logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo512.png` },
            },
          }),
        },
      ],
    }
  },
  component: PostPage,
})

const topicClass =
  'rounded-full inline-flex h-11 items-center gap-2 bg-muted px-3.5 text-xs font-medium tracking-wider uppercase transition-[background-color,scale] duration-150 ease-out-strong hover:bg-accent active:scale-[0.97]'

function PostPage() {
  const post = Route.useLoaderData()
  const articleRef = useRef<HTMLElement>(null)

  return (
    // Keyed so post-to-post navigation remeasures the reading bar and replays the intro.
    <main key={post.slug}>
      <ReadingProgress target={articleRef} />
      <article ref={articleRef} className="pb-20 md:pb-28">
        <header className="relative overflow-hidden">
          <div className="relative mx-auto max-w-5xl px-6 pt-28 md:pt-36">
            <Link
              to="/blogs"
              className="hero-line group inline-flex h-11 items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              <HugeiconsIcon
                icon={ArrowLeft02Icon}
                className="size-4 transition-[translate] duration-200 ease-out-strong group-hover:-translate-x-1"
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
                <span className="size-1.5 bg-secondary" aria-hidden="true" />
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
              className="hero-line mt-10 flex flex-wrap items-center justify-between gap-6 bg-card p-4 md:px-6"
              style={{ animationDelay: '0.28s' }}
            >
              <PostAuthor>
                <p className="eyebrow mt-0.5 flex gap-3">
                  <span>
                    {m.blog_reading_time({ minutes: post.readingTime })}
                  </span>
                  <time dateTime={post.published.toISOString()}>
                    {formatPostDate(post.published)}
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
            fetchPriority="high"
            className="aspect-[16/9] w-full bg-muted object-cover"
          />
        </div>
        <div className="mx-auto max-w-[43rem] px-6">
          <div
            className="prose prose-lg md:prose-xl mt-14 max-w-none font-serif prose-headings:font-display prose-headings:font-medium prose-headings:tracking-tight prose-p:leading-[1.7] prose-a:decoration-secondary prose-a:underline-offset-4 prose-blockquote:border-0 prose-blockquote:bg-muted prose-blockquote:px-6 prose-blockquote:py-0.5 prose-blockquote:font-normal prose-strong:font-semibold prose-li:my-1"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <div className="mt-16 flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/blogs"
              search={{ topic: post.topic }}
              className={topicClass}
            >
              <span className="size-1.5 bg-secondary" aria-hidden="true" />
              {TOPIC_LABELS[post.topic]?.() ?? post.topic}
            </Link>
            <ShareBar />
          </div>
          <div className="mt-8 flex flex-col gap-6 bg-card p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
            <div>
              <PostAuthor>
                <p className="text-sm text-muted-foreground">
                  {m.blog_author_bio()}
                </p>
              </PostAuthor>
            </div>
            <a
              href="mailto:info@ailab.mn"
              className="rounded-full inline-flex h-11 shrink-0 items-center justify-center bg-primary px-6 text-sm font-medium text-primary-foreground transition-[background-color,scale] duration-150 ease-out-strong hover:bg-primary/90 active:scale-[0.97]"
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
