"use server"

import Image from "next/image"
import { Link } from "@/i18n/navigation"
import { getBlogListLanding } from "@/lib/blogs"
import { ChevronRightIcon, NewspaperIcon } from "lucide-react"
import { AnimatedContent } from "@/components/animated-content"
import { format } from "date-fns"
import { Button } from "@/components/ui"

export default async function Blogs() {
  const blogs = await getBlogListLanding()

  return (
    <div
      id="blogs"
      className="container md:max-w-7xl mx-auto px-8 md:px-0 flex flex-col items-center gap-8 pt-32"
    >
      <AnimatedContent
        className="md:w-2xl flex flex-col md:items-center gap-4"
        distance={50}
        direction="vertical"
      >
        <div className="flex items-center gap-2 col-span-2">
          <NewspaperIcon className="size-4 stroke-sky-300" />
          <p className="text-sm text-sky-300 font-bold">{"Blogs"}</p>
        </div>
        <p className="text-4xl">
          {"Discover updates"}
        </p>
        <p className="text-muted-foreground md:text-center">
          {"We regularly share new insights and experience on lending, regulatory compliance, automation, and digital transformation in the financial sector."}
        </p>
        <Button
          size="lg"
          variant="outline"
          nativeButton={false}
          render={
            <Link href="/blogs">
              View All Blogs
              <ChevronRightIcon />
            </Link>
          }
        />
      </AnimatedContent>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {(blogs || []).map((blog) => (
          <AnimatedContent
            key={blog.slug}
            distance={50}
            direction="vertical"
          >
            <Link
              href={`/blogs/${blog.slug}`}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 group cursor-pointer border p-4 w-full hover:bg-card transition-colors duration-300 overflow-hidden"
            >
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={blog.header.thumbnail}
                  alt={blog.header.title}
                  className="w-full object-cover group-hover:scale-110 transition-all duration-300 group-hover:opacity-60"
                  fill
                />
              </div>
              <div className="w-full flex flex-col gap-3">
                <p className="text-sm text-muted-foreground">
                  {format(new Date(blog.header.ctime).toLocaleString(), "PP")}
                </p>
                <p className="text-lg font-semibold group-hover:text-sky-300 transform-colors duration-300">
                  {blog.header.title}
                </p>
              </div>
            </Link>
          </AnimatedContent>
        ))}
      </div>
    </div>
  )
}
