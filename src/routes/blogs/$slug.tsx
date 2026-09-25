import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { allPosts } from 'content-collections'
import { format } from 'date-fns'
import { PostAuthor } from '#/components'
import { MorePosts } from './-components/more-posts'
import { ShareBar } from './-components/share-bar'

export const Route = createFileRoute('/blogs/$slug')({
  loader: ({ params }) => {
    const post = allPosts.find((item) => item.slug === params.slug)
    if (!post) throw notFound()
    return post
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} | AILab` },
          { name: 'description', content: loaderData.excerpt },
          { property: 'og:image', content: loaderData.thumbnail },
        ]
      : [],
  }),
  component: PostPage,
})

function PostPage() {
  const post = Route.useLoaderData()
  const meta = (
    <p className="flex gap-3 text-sm text-graphite">
      <span>{`${post.readingTime} min read`}</span>
      <time dateTime={post.published.toISOString()}>
        {format(post.published, 'MMM d, yyyy')}
      </time>
    </p>
  )

  return (
    <main>
      <article className="mx-auto max-w-[43rem] px-6 pt-12 pb-20 md:pt-20 md:pb-28">
        <Link
          to="/blogs"
          search={{ topic: post.topic }}
          className="inline-flex rounded-full bg-mist px-3 py-1 font-mono text-xs font-medium uppercase transition-colors hover:bg-hairline"
        >
          {post.topic}
        </Link>
        <h1 className="mt-6 text-[2rem] leading-tight font-bold tracking-tight md:text-[2.75rem]">
          {post.title}
        </h1>
        <p className="mt-4 text-xl leading-relaxed text-graphite">
          {post.excerpt}
        </p>
        <div className="mt-8">
          <PostAuthor size="lg">{meta}</PostAuthor>
        </div>
        <div className="mt-8 flex items-center justify-between border-y border-border py-2">
          <Link
            to="/blogs"
            className="text-sm text-graphite transition-colors hover:text-ink"
          >
            {'All posts'}
          </Link>
          <ShareBar />
        </div>
        <img
          src={post.thumbnail}
          alt=""
          decoding="async"
          className="mt-10 aspect-[16/9] w-full rounded-lg bg-mist object-cover"
        />
        <div
          className="prose prose-xl mt-10 max-w-none font-serif text-ink prose-headings:font-sans prose-headings:font-bold prose-headings:tracking-tight prose-p:leading-[1.7] prose-a:text-brand prose-blockquote:border-l-ink prose-blockquote:font-normal prose-strong:font-semibold prose-strong:text-ink prose-img:rounded-lg prose-li:my-1"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <div className="mt-16 flex items-center justify-between border-t border-border pt-8">
          <Link
            to="/blogs"
            search={{ topic: post.topic }}
            className="inline-flex rounded-full bg-mist px-4 py-2 font-mono text-xs font-medium uppercase transition-colors hover:bg-hairline"
          >
            {post.topic}
          </Link>
          <ShareBar />
        </div>
        <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-border p-6 sm:flex-row sm:items-center sm:justify-between">
          <PostAuthor size="lg">
            <p className="text-sm text-graphite">
              {'Engineers building fintech and AI products in Ulaanbaatar.'}
            </p>
          </PostAuthor>
          <a
            href="mailto:info@ailab.mn"
            className="inline-flex h-10 shrink-0 items-center justify-center rounded-full bg-brand px-5 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
          >
            {'Get in touch'}
          </a>
        </div>
      </article>
      <MorePosts currentSlug={post.slug} />
    </main>
  )
}
