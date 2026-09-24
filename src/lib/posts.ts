import { allPosts } from 'content-collections'

export const POSTS = [...allPosts].sort(
  (a, b) => b.published.getTime() - a.published.getTime(),
)
