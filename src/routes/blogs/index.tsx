import BlogItem from '#/components/BlogItem'
import { createFileRoute } from '@tanstack/react-router'
import { allPosts } from 'content-collections'

export const Route = createFileRoute('/blogs/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="container mx-auto my-48">
      <p className="text-6xl">{"Latest"}</p>
      {allPosts.map((item) => <BlogItem post={item} key={item._meta.fileName} />)}
    </div>
  )
}
