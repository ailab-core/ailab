import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { allPosts } from 'content-collections'
import { ArrowLeftIcon } from 'lucide-react'
import { PostMeta } from '#/components'

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
          { property: 'og:image', content: loaderData.thumbnail },
        ]
      : [],
  }),
  component: PostPage,
})

function PostPage() {
  const post = Route.useLoaderData()

  return (
    <main className="pt-12 pb-32 md:pt-20 md:pb-44">
      <article>
        <header className="shell">
          <div className="mx-auto max-w-3xl">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-sm text-graphite transition-colors hover:text-ink"
            >
              <ArrowLeftIcon className="size-4" aria-hidden="true" />
              {'All posts'}
            </Link>
            <PostMeta post={post} className="mt-10" />
            <h1 className="display mt-4 text-4xl md:text-6xl">{post.title}</h1>
          </div>
          <img
            src={post.thumbnail}
            alt=""
            decoding="async"
            className="mx-auto mt-12 aspect-[16/9] w-full max-w-5xl rounded-3xl bg-mist object-cover md:mt-16"
          />
        </header>
        <div className="shell mt-12 md:mt-16">
          <div
            className="prose prose-lg mx-auto max-w-3xl prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-brand"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </article>
    </main>
  )
}
