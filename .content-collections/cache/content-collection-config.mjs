// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
import { createHighlighter } from "@tanstack/highlight/core";
import { css } from "@tanstack/highlight/languages/css";
import { html } from "@tanstack/highlight/languages/html";
import { js } from "@tanstack/highlight/languages/js";
import { json } from "@tanstack/highlight/languages/json";
import { plaintext } from "@tanstack/highlight/languages/plaintext";
import { python } from "@tanstack/highlight/languages/python";
import { shell } from "@tanstack/highlight/languages/shell";
import { ts } from "@tanstack/highlight/languages/ts";
import { tsx } from "@tanstack/highlight/languages/tsx";
import { createTanStackMarkdownHighlighter } from "@tanstack/highlight/markdown";
import { renderHtml } from "@tanstack/markdown/html";
import { parseMarkdown } from "@tanstack/markdown/parser";
import * as z from "zod";
var highlighter = createTanStackMarkdownHighlighter(
  createHighlighter({
    languages: [css, html, js, json, plaintext, python, shell, ts, tsx]
  })
);
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
  transform: (post) => {
    const plain = post.content.replace(/!\[[^\]]*\]\([^)]*\)/g, "").replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/[*_`>#|]/g, "");
    const firstParagraph = plain.split(/\n\s*\n/).map((paragraph) => paragraph.replace(/\s+/g, " ").trim()).find((paragraph) => paragraph.length > 40) ?? "";
    const excerpt = post.description ?? (firstParagraph.length > 180 ? `${firstParagraph.slice(0, 180).replace(/\s+\S*$/, "")}\u2026` : firstParagraph);
    const locale = post._meta.directory;
    const length = locale === "zh" ? plain.replace(/\s+/g, "").length / 2 : plain.split(/\s+/).length;
    const seen = /* @__PURE__ */ new Map();
    const document = parseMarkdown(post.content, {
      headingIds: (text) => {
        const base = text.toLowerCase().replace(/[^\p{L}\p{M}\p{N}\p{Pc} -]/gu, "").replace(/ /g, "-");
        const count = seen.get(base) ?? 0;
        seen.set(base, count + 1);
        return count ? `${base}-${count}` : base;
      }
    });
    return {
      ...post,
      slug: post._meta.fileName.replace(/\.md$/, ""),
      locale,
      excerpt,
      readingTime: Math.max(1, Math.round(length / 200)),
      html: renderHtml(document, { highlighter })
    };
  }
});
var content_collections_default = defineConfig({
  content: [posts]
});
export {
  content_collections_default as default
};
