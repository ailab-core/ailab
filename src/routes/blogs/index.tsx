import { createFileRoute } from '@tanstack/react-router'
import { BlogCard, SectionHeading } from '#/components'
import { POSTS } from '#/lib/posts'

export const Route = createFileRoute('/blogs/')({
  head: () => ({ meta: [{ title: 'Blog | AILab' }] }),
  component: BlogsPage,
})

function BlogsPage() {
  return (
    <main className="shell pt-16 pb-32 md:pt-24 md:pb-44">
      <SectionHeading
        eyebrow="News and stories"
        title="Blog"
        intro="News, interviews, and notes from the AILab team."
        className="mb-14 md:mb-20"
      />
      <ul className="grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {POSTS.map((post) => (
          <li key={post.slug}>
            <BlogCard post={post} />
          </li>
        ))}
      </ul>
    </main>
  )
}
