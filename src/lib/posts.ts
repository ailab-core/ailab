import { allPosts } from 'content-collections'
import { m } from '#/paraglide/messages'
import { locales } from '#/paraglide/runtime'
import type { Locale } from '#/paraglide/runtime'

const sorted = [...allPosts].sort(
  (a, b) => b.published.getTime() - a.published.getTime(),
)

// Pre-split once so render only does a lookup: POSTS[getLocale()].
export const POSTS = Object.fromEntries(
  locales.map((locale) => [
    locale,
    sorted.filter((post) => post.locale === locale),
  ]),
) as Record<Locale, typeof sorted>

// Topic values stay English in every locale's frontmatter; labels are translated at render.
export const TOPICS = [...new Set(sorted.map((post) => post.topic))]

export const TOPIC_LABELS: Record<string, () => string> = {
  News: m.blog_topic_news,
  Knowledge: m.blog_topic_knowledge,
  Interview: m.blog_topic_interview,
}
