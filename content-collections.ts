import { defineCollection, defineConfig } from '@content-collections/core'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import * as z from 'zod'

const markdown = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeSlug)
  .use(rehypeStringify)

const posts = defineCollection({
  name: 'posts',
  directory: './src/contents',
  include: '**/*.md',
  schema: z.object({
    title: z.string(),
    topic: z.string(),
    published: z.coerce.date(),
    description: z.string().optional(),
    thumbnail: z.string(),
    content: z.string(),
  }),
  transform: async (post) => {
    const plain = post.content
      .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
      .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
      .replace(/[*_`>#|]/g, '')
    const firstParagraph =
      plain
        .split(/\n\s*\n/)
        .map((paragraph) => paragraph.replace(/\s+/g, ' ').trim())
        .find((paragraph) => paragraph.length > 40) ?? ''
    const excerpt =
      post.description ??
      (firstParagraph.length > 180
        ? `${firstParagraph.slice(0, 180).replace(/\s+\S*$/, '')}…`
        : firstParagraph)

    // Posts live in ./<locale>/<slug>.md; Chinese has no word spaces, so count characters.
    const locale = post._meta.directory
    const length =
      locale === 'zh' ? plain.replace(/\s+/g, '').length / 2 : plain.split(/\s+/).length

    return {
      ...post,
      slug: post._meta.fileName.replace(/\.md$/, ''),
      locale,
      excerpt,
      readingTime: Math.max(1, Math.round(length / 200)),
      html: String(await markdown.process(post.content)),
    }
  },
})

export default defineConfig({
  content: [posts],
})
