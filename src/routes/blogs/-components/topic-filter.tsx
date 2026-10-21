import { Link } from '@tanstack/react-router'
import { POSTS, TOPICS, TOPIC_LABELS } from '#/lib/posts'
import { m } from '#/paraglide/messages'
import { getLocale } from '#/paraglide/runtime'

const tabClass =
  'rounded-full flex h-10 shrink-0 items-center gap-2 bg-muted px-4 text-sm text-muted-foreground transition-[background-color,color,scale] duration-150 ease-out-strong hover:bg-accent hover:text-foreground active:scale-[0.97] data-[status=active]:bg-primary data-[status=active]:text-primary-foreground'

export function TopicFilter() {
  const posts = POSTS[getLocale()]

  return (
    <nav
      aria-label={m.blog_topics_label()}
      className="-m-1 flex gap-2 overflow-x-auto p-1 [scrollbar-width:none]"
    >
      <Link
        to="/blogs"
        search={{}}
        activeOptions={{ includeSearch: true, exact: true }}
        className={tabClass}
      >
        {m.blog_topic_all()}
        <span className="font-mono text-2xs tabular-nums opacity-70">
          {posts.length}
        </span>
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
          <span className="font-mono text-2xs tabular-nums opacity-70">
            {posts.filter((post) => post.topic === value).length}
          </span>
        </Link>
      ))}
    </nav>
  )
}
