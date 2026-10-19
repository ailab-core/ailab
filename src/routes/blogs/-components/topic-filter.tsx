import { Link } from '@tanstack/react-router'
import { POSTS, TOPICS, TOPIC_LABELS } from '#/lib/posts'
import { m } from '#/paraglide/messages'
import { getLocale } from '#/paraglide/runtime'

const tabClass =
  'relative flex h-12 shrink-0 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:origin-left after:scale-x-0 after:bg-highlight after:transition-transform after:duration-300 data-[status=active]:after:scale-x-100'

export function TopicFilter() {
  const posts = POSTS[getLocale()]

  return (
    <nav
      aria-label={m.blog_topics_label()}
      className="flex gap-8 overflow-x-auto border-b border-border [scrollbar-width:none]"
    >
      <Link
        to="/blogs"
        search={{}}
        activeOptions={{ includeSearch: true, exact: true }}
        className={tabClass}
      >
        {m.blog_topic_all()}
        <span className="font-mono text-2xs tabular-nums">{posts.length}</span>
      </Link>
      {TOPICS.map((value) => (
        <Link
          key={value}
          to="/blogs"
          search={{ topic: value }}
          activeOptions={{ includeSearch: true }}
          className={tabClass}
        >
          {TOPIC_LABELS[value]?.() ?? value}
          <span className="font-mono text-2xs tabular-nums">
            {posts.filter((post) => post.topic === value).length}
          </span>
        </Link>
      ))}
    </nav>
  )
}
