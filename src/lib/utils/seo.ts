import { getLocale, locales } from '#/paraglide/runtime'
import type { Locale } from '#/paraglide/runtime'

export const SITE_URL = 'https://ailab.mn'
export const SITE_NAME = 'AILab'
const DEFAULT_IMAGE = '/og-image.png'

const OG_LOCALES: Record<Locale, string> = {
  en: 'en_US',
  mn: 'mn_MN',
  zh: 'zh_CN',
}

// Mirrors the paraglide URL pattern: English at the root, others under /mn and /zh.
export function absoluteUrl(path: string, locale: Locale = 'en') {
  if (/^https?:\/\//.test(path)) return path
  const prefix = locale === 'en' ? '' : `/${locale}`
  return `${SITE_URL}${prefix}${path}`
}

type SeoInput = {
  path: string
  title: string
  // Social cards can carry a punchier headline than the search title.
  ogTitle?: string
  description: string
  image?: string
  type?: 'website' | 'article'
  // Locales the page exists in; blog posts are not translated into every language.
  available?: ReadonlyArray<Locale>
}

// Canonical and hreflang links live here, so only leaf routes call this (links are not deduped).
export function seo({
  path,
  title,
  ogTitle = title,
  description,
  image = DEFAULT_IMAGE,
  type = 'website',
  available = locales,
}: SeoInput) {
  const locale = getLocale()
  const url = absoluteUrl(path, locale)
  const imageUrl = absoluteUrl(image)

  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { property: 'og:type', content: type },
      { property: 'og:url', content: url },
      { property: 'og:title', content: ogTitle },
      { property: 'og:description', content: description },
      { property: 'og:image', content: imageUrl },
      { property: 'og:image:alt', content: title },
      { property: 'og:locale', content: OG_LOCALES[locale] },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: ogTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: imageUrl },
    ],
    links: [
      { rel: 'canonical', href: url },
      ...available.map((l) => ({
        rel: 'alternate',
        hrefLang: l,
        href: absoluteUrl(path, l),
      })),
      ...(available.includes('en')
        ? [{ rel: 'alternate', hrefLang: 'x-default', href: absoluteUrl(path) }]
        : []),
    ],
  }
}
