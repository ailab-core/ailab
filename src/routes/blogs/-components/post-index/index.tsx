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
      <h2 className="eyebrow flex items-center gap-2 pb-4">
        <span
          className="rounded-full size-1.5 bg-secondary"
          aria-hidden="true"
        />
        {title}
      </h2>
      <ol className="flex flex-col gap-2">
        {posts.map((post, index) => (
          <PostIndexRow key={post.slug} post={post} index={index} />
        ))}
      </ol>
    </section>
  )
}
