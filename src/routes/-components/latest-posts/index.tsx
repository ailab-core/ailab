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
  // Interview thumbnails show people, so only other posts get image cards.
  const featured = posts
    .filter((post) => post.topic !== 'Interview')
    .slice(0, 2)
  const rest = posts.filter((post) => !featured.includes(post))

  return (
    <section className="shell flex flex-col gap-14 md:gap-20">
      <SectionHeading
        eyebrow={m.home_posts_eyebrow()}
        title={m.home_posts_title()}
        intro={m.home_posts_intro()}
      >
        <Link
          to="/blogs"
          className="group eyebrow inline-flex items-center gap-2 text-foreground transition-colors hover:text-highlight"
        >
          {m.home_posts_view_all()}
          <HugeiconsIcon
            icon={ArrowRight02Icon}
            className="size-3.5 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </SectionHeading>
      <div ref={gridRef} className="flex flex-col gap-14">
        <ul className="grid gap-4 md:grid-cols-2">
          {featured.map((post) => (
            <li key={post.slug} data-reveal>
              <FeaturedCard post={post} />
            </li>
          ))}
        </ul>
        <ul className="border-t border-border">
          {rest.map((post) => (
            <li key={post.slug} data-reveal className="border-b border-border">
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
