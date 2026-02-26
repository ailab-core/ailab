import type { Metadata } from "next";
import Image from "next/image";
import { format, formatDuration } from "date-fns";
import { getBlogBySlug } from "@/lib/blogs";
import { cn } from "@/lib/utils";
import { notFound } from "next/navigation";
import { DATE_LOCALES } from "@/i18n/datefns";

export const dynamic = 'force-dynamic'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string, locale: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  return {
    title: blog.header.title,
    description: blog.header.description,
    openGraph: {
      title: blog.header.title,
      description: blog.header.description,
      images: [
        {
          url: blog.header.thumbnail,
          alt: blog.header.title,
        },
      ],
    }
  }
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string, locale: string }>;
}) {
  const { slug, locale } = await params.catch(() => notFound());
  const blog = await getBlogBySlug(slug);

  return (
    <div className="container md:max-w-3xl mx-auto flex flex-col gap-8 px-8 md:px-0 mt-8">
      <div className="relative aspect-video rounded-lg overflow-hidden">
        <Image
          src={blog.header.thumbnail}
          alt={blog.header.title}
          fill
          className="object-center object-cover"
        />
      </div>
      <h1 className="text-3xl md:text-5xl font-semibold text-center">
        {blog.header.title}
      </h1>
      {blog.header.description && (
        <p className="text-lg text-muted-foreground text-center">
          {blog.header.description}
        </p>
      )}
      <div className="flex justify-center gap-4">
        <p>{format(new Date().toLocaleString(), "PP", { locale: DATE_LOCALES[locale] })}</p>
        <span>{"|"}</span>
        <span className="text-muted-foreground">
          {formatDuration(
            { minutes: Math.ceil(blog.contentHtml.trim().split(" ").length / 200) },
            { locale: DATE_LOCALES[locale] }
          )}
        </span>
      </div>
      <div
        className={cn(
          "[&>h1]:text-3xl [&>h1]:md:text-5xl [&>h1]:font-bold [&>h1]:text-center [&>h1]:mb-6",
          "[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-6",
          "[&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-4",
          "[&>p]:text-base [&>p]:leading-8 [&>p]:mb-6",
          "[&>a]:underline [&>a]:underline-offset-4",
          "[&>blockquote]:border-l-4 [&>blockquote]:border-muted [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-muted-foreground [&>blockquote]:my-6",
          "[&>ul]:list-disc [&>ul]:list-inside [&>ul]:gap-2 [&>ul]:flex [&>ul]:flex-col [&>ul]:mb-6",
          "[&>li]:text-lg [&>li]:leading-8 [&>li]:mb-4",

        )}
        dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
      />
    </div>
  )
}
