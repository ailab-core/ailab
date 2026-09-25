import { Link } from '@tanstack/react-router'
import { TOPICS } from '#/lib/posts'

const pillClass =
  'inline-flex h-10 items-center rounded-full bg-mist px-5 font-mono text-xs font-medium uppercase transition-colors hover:bg-hairline data-[status=active]:bg-brand data-[status=active]:text-white'

export function TopicFilter() {
  return (
    <nav aria-label="Topics" className="flex flex-wrap gap-2">
      <Link
        to="/blogs"
        search={{}}
        activeOptions={{ includeSearch: true, exact: true }}
        className={pillClass}
      >
        {'All'}
      </Link>
      {TOPICS.map((topic) => (
        <Link
          key={topic}
          to="/blogs"
          search={{ topic }}
          activeOptions={{ includeSearch: true }}
          className={pillClass}
        >
          {topic}
        </Link>
      ))}
    </nav>
  )
}
