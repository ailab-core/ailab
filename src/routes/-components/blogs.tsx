import BlogItem from '#/components/BlogItem'
import { Link } from '@tanstack/react-router'
import { allPosts } from 'content-collections'
import { ChevronRightIcon } from 'lucide-react'

export default function Blogs() {
  const firstFive = allPosts.slice(0, 5)

  return (
    <div className="container mx-auto my-48">
      <p className="text-8xl font-semibold mb-16">
        {"Featured News"}
      </p>
      <div className="flex flex-col justify-center divide-y">
        {firstFive.map((item) => <BlogItem post={item} key={item._meta.fileName} />)}
      </div>
      <div className="flex justify-center items-center">
        <Link
          to='/blogs'
          className="inline-block mt-24 group cursor-pointer"
        >
          <p className="text-xl text-nowrap flex items-center">
            {"Visit Blog"}
            <ChevronRightIcon className="relative left-0 group-hover:left-2 transition-all duration-300" />
          </p>
          <hr className="h-0.5 border-none bg-foreground w-0 duration-300 transition-all group-hover:w-full" />
        </Link>
      </div>
    </div>
  )
}
