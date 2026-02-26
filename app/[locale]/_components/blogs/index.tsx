"use server"

import Image from "next/image"
import { Link } from "@/i18n/navigation"
import { getBlogListLanding } from "@/lib/blogs"

export default async function Blogs() {
  const blogs = await getBlogListLanding()
  const featured = blogs.shift()

  return (
    <div className="container md:max-w-7xl mx-auto flex flex-col gap-16 px-8 md:px-0 my-16">
      <h2 className="w-full text-3xl md:text-5xl font-bold gap-8 col-span-2">
        {"What's happening?"}
      </h2>
      <div className="w-full flex flex-col md:flex-row gap-8">
        {featured && (
          <Link
            key={featured.slug}
            href={`/blogs/${featured.slug}`}
            className="flex flex-col gap-4 group cursor-pointer"
          >
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src={featured.header.thumbnail}
                alt={featured.header.title}
                className="w-full h-auto object-cover group-hover:scale-110 transition-all duration-300 group-hover:opacity-60"
                fill
              />
            </div>
            <h2 className="inline-block w-auto text-base md:text-3xl font-semibold group-hover:text-sky-300 transform-all duration-300">
              {featured.header.title}
            </h2>
            {featured.header.description && (
              <p className="text-muted-foreground">{featured.header.description}</p>
            )}
          </Link>
        )}
        <div className="flex flex-col gap-4">
          {(blogs || []).map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="flex flex-col md:flex-row md:gap-4 group cursor-pointer bg-card rounded-lg w-full md:w-lg md:h-30"
            >
              <div className="w-full p-6 order-last md:order-first">
                <h2 className="w-auto font-semibold group-hover:text-sky-300 transform-colors duration-300">
                  {blog.header.title}
                </h2>
                {blog.header.description && (
                  <p className="text-muted-foreground">{blog.header.description}</p>
                )}
              </div>
              <div className="w-full md:w-xs relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={blog.header.thumbnail}
                  alt={blog.header.title}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-all duration-300 group-hover:opacity-60"
                  fill
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
