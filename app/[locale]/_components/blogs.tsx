import Image from "next/image"
import { getLocale, getTranslations } from "next-intl/server"
import { format } from "date-fns"
import { ChevronRightIcon, NewspaperIcon } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { AnimatedContent } from "@/components/animated-content"
import { Button } from "@/components/ui"
import { getBlogListLanding } from "@/lib/blogs"
import { DATE_LOCALES } from "@/i18n/datefns"

export default async function Blogs() {
  const locale = await getLocale()
  const blogs = await getBlogListLanding()
  const t = await getTranslations("home.blogs")

  return (
    <div
      id="blogs"
      className="container md:max-w-7xl mx-auto px-8 md:px-0 flex flex-col items-center gap-8 pt-32"
    >
      <AnimatedContent
        className="md:w-3xl flex flex-col md:items-center gap-4"
        distance={50}
        direction="vertical"
      >
        <div className="flex items-center gap-2 col-span-2">
          <NewspaperIcon className="size-4 stroke-sky-300" />
          <p className="text-sm text-sky-300 font-bold">{t("tag")}</p>
        </div>
        <p className="text-4xl">
          {t("title")}
        </p>
        <p className="text-lg text-muted-foreground md:text-center">
          {t("description")}
        </p>
        <Button
          variant="outline"
          nativeButton={false}
          render={
            <Link href="/blogs">
              {t("viewAll")}
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
              className="grid grid-cols-1 md:grid-cols-2 gap-4 group cursor-pointer border rounded-xl p-4 w-full hover:bg-card transition-colors duration-300 overflow-hidden"
            >
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <Image
                  src={blog.header.thumbnail}
                  alt={blog.header.title}
                  className="w-full object-cover group-hover:scale-110 transition-all duration-300 group-hover:opacity-60"
                  fill
                />
              </div>
              <div className="w-full flex flex-col gap-3">
                <p className="text-sm text-muted-foreground">
                  {format(new Date(blog.header.ctime).toLocaleString(), "PP", { locale: DATE_LOCALES[locale] })}
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
