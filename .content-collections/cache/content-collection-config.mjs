// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import * as z from "zod";
var markdown = unified().use(remarkParse).use(remarkGfm).use(remarkRehype).use(rehypeSlug).use(rehypeStringify);
var posts = defineCollection({
  name: "posts",
  directory: "./src/contents",
  include: "**/*.md",
  schema: z.object({
    title: z.string(),
    topic: z.string(),
    published: z.coerce.date(),
    description: z.string().optional(),
    thumbnail: z.string(),
    content: z.string()
  }),
  transform: async (post) => ({
    ...post,
    slug: post._meta.path,
    html: String(await markdown.process(post.content))
  })
});
var content_collections_default = defineConfig({
  content: [posts]
});
export {
  content_collections_default as default
};
