import { createFileRoute } from '@tanstack/react-router'
import { POSTS } from '#/lib/posts'
import { absoluteUrl } from '#/lib/utils/seo'
import { locales } from '#/paraglide/runtime'
import type { Locale } from '#/paraglide/runtime'

const PAGES = [
  '/',
  '/atlas',
  '/finace',
  '/fund',
  '/primebee',
  '/shms',
  '/blogs',
]

// Every URL is listed once per locale, each carrying the full hreflang set (Google's sitemap format).
function entries(
  path: string,
  available: ReadonlyArray<Locale>,
  lastmod?: Date,
) {
  const alternates = available
    .map(
      (l) =>
        `<xhtml:link rel="alternate" hreflang="${l}" href="${absoluteUrl(path, l)}"/>`,
    )
    .join('')
  const mod = lastmod
    ? `<lastmod>${lastmod.toISOString().slice(0, 10)}</lastmod>`
    : ''

  return available
    .map(
      (l) => `<url><loc>${absoluteUrl(path, l)}</loc>${mod}${alternates}</url>`,
    )
    .join('')
}

export const Route = createFileRoute('/sitemap.xml')({
  server: {
    handlers: {
      GET: () => {
        const slugs = new Map<string, { locales: Locale[]; published: Date }>()
        for (const locale of locales) {
          for (const post of POSTS[locale]) {
            const entry = slugs.get(post.slug)
            if (entry) entry.locales.push(locale)
            else
              slugs.set(post.slug, {
                locales: [locale],
                published: post.published,
              })
          }
        }

        const body = [
          ...PAGES.map((path) => entries(path, locales)),
          ...[...slugs].map(([slug, { locales: available, published }]) =>
            entries(`/blogs/${slug}`, available, published),
          ),
        ].join('')

        return new Response(
          `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${body}</urlset>`,
          {
            headers: {
              'Content-Type': 'application/xml; charset=utf-8',
              'Cache-Control': 'public, max-age=3600, s-maxage=86400',
            },
          },
        )
      },
    },
  },
})
