import { format } from 'date-fns'
import { mn, zhCN } from 'date-fns/locale'
import { getLocale } from '#/paraglide/runtime'
import type { Locale } from '#/paraglide/runtime'

export const LANGUAGES: Record<Locale, { label: string; short: string }> = {
  en: { label: 'English', short: 'EN' },
  mn: { label: 'Монгол', short: 'MN' },
  zh: { label: '中文', short: '中文' },
}

// date-fns falls back to English when no locale is passed.
const DATE_LOCALES = { en: undefined, mn, zh: zhCN }

// Post dates are calendar days parsed as UTC midnight; reading them in UTC keeps
// server and client on the same day in every timezone (no hydration mismatch).
export function formatPostDate(date: Date, pattern = 'PP') {
  return format(
    new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()),
    pattern,
    { locale: DATE_LOCALES[getLocale()] },
  )
}
