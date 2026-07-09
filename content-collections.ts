import { defineCollection, defineConfig } from '@content-collections/core'
import * as z from 'zod'

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
})

export default defineConfig({
  content: [posts],
})
