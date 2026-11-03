import {
  HeadContent,
  Link,
  ScriptOnce,
  Scripts,
  createRootRoute,
  useRouter,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { Analytics } from '@vercel/analytics/react'

import { m } from '#/paraglide/messages'
import { getLocale } from '#/paraglide/runtime'
import { SITE_NAME, SITE_URL } from '#/lib/utils/seo'

import appCss from '../styles.css?url'
import { Footer, Topbar } from '#/components'

export const Route = createRootRoute({
  beforeLoad: async () => {
    // Other redirect strategies are possible; see
    // https://github.com/TanStack/router/tree/main/examples/react/i18n-paraglide#offline-redirect
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', getLocale())
    }
  },

  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover',
      },
      { name: 'color-scheme', content: 'dark light' },
      { name: 'theme-color', content: '#000000' },
      { title: m.root_meta_title() },
      {
        name: 'description',
        content: m.root_meta_description(),
      },
      { property: 'og:site_name', content: SITE_NAME },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      {
        rel: 'icon',
        href: '/assets/logos/ailab-icon.svg',
        type: 'image/svg+xml',
      },
      { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/manifest.json' },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: SITE_NAME,
          legalName: 'AILab LLC',
          url: SITE_URL,
          logo: `${SITE_URL}/logo512.png`,
          email: 'info@ailab.mn',
          sameAs: [
            'https://www.facebook.com/profile.php?id=61569157168011',
            'https://www.linkedin.com/company/ailabllc',
            'https://github.com/ailab-core',
          ],
        }),
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
  errorComponent: ErrorPage,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang={getLocale()} suppressHydrationWarning>
      <head>
        <ScriptOnce>
          {`try{var t=localStorage.getItem('theme');if(t!=='light')document.documentElement.classList.add('dark');else document.addEventListener('DOMContentLoaded',function(){var m=document.querySelector('meta[name=theme-color]');if(m)m.content='#f4f4f1'})}catch(e){}`}
        </ScriptOnce>
        <HeadContent />
      </head>
      <body>
        <Analytics />
        <Topbar />
        {children}
        <Footer />
        <TanStackDevtools
          config={{ position: 'bottom-right' }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}

function NotFound() {
  return (
    <main className="shell flex min-h-[70svh] flex-col items-start justify-center gap-6 pt-36 pb-24">
      <h1 className="heading text-section">{m.root_not_found_title()}</h1>
      <p className="text-muted-foreground">{m.root_not_found_body()}</p>
      <Link
        to="/"
        className="rounded-full inline-flex h-11 items-center bg-primary px-6 text-sm font-medium text-primary-foreground transition-[background-color,scale] duration-150 ease-out-strong hover:bg-primary/90 active:scale-[0.97]"
      >
        {m.root_back_home()}
      </Link>
    </main>
  )
}

function ErrorPage() {
  const router = useRouter()

  return (
    <main className="shell flex min-h-[70svh] flex-col items-start justify-center gap-6 pt-36 pb-24">
      <h1 className="heading text-section">{m.root_error_title()}</h1>
      <p className="text-muted-foreground">{m.root_error_body()}</p>
      <button
        type="button"
        onClick={() => router.invalidate()}
        className="rounded-full inline-flex h-11 cursor-pointer items-center bg-primary px-6 text-sm font-medium text-primary-foreground transition-[background-color,scale] duration-150 ease-out-strong hover:bg-primary/90 active:scale-[0.97]"
      >
        {m.root_try_again()}
      </button>
    </main>
  )
}
