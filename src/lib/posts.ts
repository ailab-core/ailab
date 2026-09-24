import { allPosts } from 'content-collections'

export const POSTS = [...allPosts].sort(
  (a, b) => b.published.getTime() - a.published.getTime(),
)

export const TOPICS = [...new Set(POSTS.map((post) => post.topic))]
