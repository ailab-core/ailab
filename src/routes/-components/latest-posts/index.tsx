import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight02Icon } from '@hugeicons/core-free-icons'
import { Link } from '@tanstack/react-router'
import { SectionHeading } from '#/components'
import { POSTS } from '#/lib/posts'
import { useReveal } from '#/lib/use-reveal'
import { m } from '#/paraglide/messages'
import { getLocale } from '#/paraglide/runtime'
import { FeaturedCard } from './featured-card'
import { PostCard } from './post-card'

export default function LatestPosts() {
  const gridRef = useReveal<HTMLDivElement>()
  const posts = POSTS[getLocale()]
  // Interview thumbnails show people, so the image lead is always another topic.
  const featured = posts.find((post) => post.topic !== 'Interview') ?? posts[0]
  const rest = posts.filter((post) => post !== featured).slice(0, 3)

  return (
    <section className="shell flex flex-col gap-14 md:gap-20">
      <SectionHeading
        eyebrow={m.home_posts_eyebrow()}
        title={m.home_posts_title()}
        intro={m.home_posts_intro()}
      >
        <Link
          to="/blogs"
          className="group eyebrow inline-flex items-center gap-2 text-foreground transition-[color,scale] duration-150 ease-out-strong hover:text-highlight active:scale-[0.97]"
        >
          {m.home_posts_view_all()}
          <HugeiconsIcon
            icon={ArrowRight02Icon}
            className="size-3.5 transition-[translate] duration-200 ease-out-strong group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </SectionHeading>
      <div ref={gridRef} className="grid gap-4 lg:grid-cols-12">
        <div data-reveal className="lg:col-span-7">
          <FeaturedCard post={featured} />
        </div>
        <ul className="grid gap-4 md:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
          {rest.map((post) => (
            <li key={post.slug} data-reveal>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
