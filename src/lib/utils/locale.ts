import { mn, zhCN } from 'date-fns/locale'
import type { Locale } from '#/paraglide/runtime'

export const LANGUAGES: Record<Locale, { label: string; short: string }> = {
  en: { label: 'English', short: 'EN' },
  mn: { label: 'Монгол', short: 'MN' },
  zh: { label: '中文', short: '中文' },
}

// date-fns falls back to English when no locale is passed.
export const DATE_LOCALES = { en: undefined, mn, zh: zhCN }
