import { format } from "date-fns"
import type { Post } from "content-collections"

export default function BlogItem({ post }: { post: Post }) {
  return (
    <div
      className="grid grid-cols-12 gap-16 py-12 first:pt-0 last:pb-0 group cursor-pointer relative hover:cursor-none"
      id="blog"
      key={post._meta.path}
    >
      <div className="col-span-5 aspect-video w-full h-full overflow-hidden object-center rounded-4xl">
        <img
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-300"
          src={post.thumbnail}
          alt={post.title}
        />
      </div>
      <div className="col-span-7 flex flex-col justify-between h-full">
        <div className="space-y-4">
          <p className="text-xl text-muted-foreground">{post.topic}</p>
          <p className="text-4xl font-bold">{post.title}</p>
        </div>
        <p className="text-xl text-muted-foreground">
          {format(new Date(post.published), "MMMM dd, yyyy")}
        </p>
      </div>
    </div>
  )
}
