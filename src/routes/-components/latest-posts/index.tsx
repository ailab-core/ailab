import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import { SectionHeading } from '#/components'
import { POSTS } from '#/lib/posts'
import { useReveal } from '#/lib/use-reveal'
import { PostCard } from './post-card'

const navButtonClass =
  'flex size-12 items-center justify-center rounded-full border border-border transition-colors hover:border-foreground disabled:pointer-events-none disabled:opacity-35'

export default function LatestPosts() {
  const railRef = useReveal<HTMLUListElement>()
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  // Watching the first and last cards is cheaper than listening to scroll.
  useEffect(() => {
    const rail = railRef.current
    if (!rail?.firstElementChild || !rail.lastElementChild) return
    const first = rail.firstElementChild
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const visible = entry.intersectionRatio > 0.95
          if (entry.target === first) setAtStart(visible)
          else setAtEnd(visible)
        }
      },
      { root: rail, threshold: [0.95, 1] },
    )
    observer.observe(first)
    observer.observe(rail.lastElementChild)
    return () => observer.disconnect()
  }, [railRef])

  const step = (direction: 1 | -1) => {
    const rail = railRef.current
    const card = rail?.firstElementChild as HTMLElement | null
    if (!rail || !card) return
    rail.scrollBy({
      left: direction * (card.offsetWidth + 20),
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
    })
  }

  return (
    <section>
      <div className="shell mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Our blog"
          title="From the blog"
          intro="What we’re learning, what we’re shipping, and who’s building it."
        />
        <div className="flex items-center gap-6">
          <Link
            to="/blogs"
            className="border-b border-brand pb-1 font-medium transition-colors hover:text-brand"
          >
            {'Read all posts'}
          </Link>
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              aria-label="Previous posts"
              disabled={atStart}
              onClick={() => step(-1)}
              className={navButtonClass}
            >
              <ArrowLeftIcon className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next posts"
              disabled={atEnd}
              onClick={() => step(1)}
              className={navButtonClass}
            >
              <ArrowRightIcon className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <ul
        ref={railRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-[max(1.5rem,calc((100%-96rem)/2+1.5rem))] scroll-px-[max(1.5rem,calc((100%-96rem)/2+1.5rem))] pb-2 [scrollbar-width:none] md:px-[max(2.5rem,calc((100%-96rem)/2+2.5rem))] md:scroll-px-[max(2.5rem,calc((100%-96rem)/2+2.5rem))] *:nth-2:[--i:1] *:nth-3:[--i:2] *:nth-4:[--i:3]"
      >
        {POSTS.map((post) => (
          <li
            key={post.slug}
            className="w-[82%] shrink-0 snap-start sm:w-[24rem] lg:w-[28rem] xl:w-[30rem]"
          >
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </section>
  )
}
