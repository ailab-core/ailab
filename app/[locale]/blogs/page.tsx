import { format } from "date-fns";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { getBlogList } from "@/lib/blogs";
import { DATE_LOCALES } from "@/i18n/datefns";

export const dynamic = 'force-dynamic'

export default async function Blogs({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const blogs = await getBlogList().catch(() => notFound());
  const featured = blogs.shift()

  return (
    <div className="container mx-auto md:max-w-7xl px-8 md:px-0 grid grid-cols-2 gap-16 mt-8">
      {featured && (
        <Link
          key={featured.slug}
          href={`/blogs/${featured.slug}`}
          className="col-span-2 flex flex-col gap-4 group cursor-pointer"
        >
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={featured.header.thumbnail}
              alt={featured.header.title}
              className="w-full h-auto object-cover group-hover:scale-110 transition-all duration-300 group-hover:opacity-60"
              fill
            />
          </div>
          <p className="text-muted-foreground">
            {format(new Date().toLocaleString(), "PP", { locale: DATE_LOCALES[locale] })}
          </p>
          <h2 className="inline-block w-auto text-5xl font-semibold group-hover:text-sky-300 transform-all duration-300">
            {featured.header.title}
          </h2>
          {featured.header.description && (
            <p className="text-muted-foreground">{featured.header.description}</p>
          )}
        </Link>
      )}
      {(blogs || []).map((blog) => (
        <Link
          key={blog.slug}
          href={`/blogs/${blog.slug}`}
          className="flex flex-col gap-4 group cursor-pointer"
        >
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={blog.header.thumbnail}
              alt={blog.header.title}
              className="w-full h-auto object-cover group-hover:scale-110 transition-all duration-300 group-hover:opacity-60"
              fill
            />
          </div>
          <p className="text-muted-foreground">
            {format(new Date().toLocaleString(), "PP", { locale: DATE_LOCALES[locale] })}
          </p>
          <h2 className="inline-block w-auto text-3xl font-semibold group-hover:text-sky-300 transform-colors duration-300">
            {blog.header.title}
          </h2>
          {blog.header.description && (
            <p className="text-muted-foreground">{blog.header.description}</p>
          )}
        </Link>
      ))}
    </div>
  )
}
