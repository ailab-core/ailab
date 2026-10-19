import type { Post } from 'content-collections'
import { PostIndexRow } from './row'

export function PostIndex({
  posts,
  title,
}: {
  posts: Array<Post>
  title: string
}) {
  return (
    <section>
      <h2 className="eyebrow flex items-center justify-between gap-4 border-b border-border pb-4">
        <span className="flex items-center gap-2">
          <span className="size-1 bg-secondary" aria-hidden="true" />
          {title}
        </span>
        <span className="tabular-nums">
          {String(posts.length).padStart(2, '0')}
        </span>
      </h2>
      <ol className="divide-y divide-border border-b border-border">
        {posts.map((post) => (
          <PostIndexRow key={post.slug} post={post} />
        ))}
      </ol>
    </section>
  )
}
