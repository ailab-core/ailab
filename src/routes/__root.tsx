import {
  HeadContent,
  Link,
  Scripts,
  createRootRoute,
  useRouter,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import { getLocale } from '#/paraglide/runtime'

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
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'AILab | Fintech and AI engineering, Ulaanbaatar' },
      {
        name: 'description',
        content:
          'AILab builds lending, payments, and trading platforms for banks, lenders, and brokerages in Mongolia.',
      },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/assets/logos/ailab-icon.svg' },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
  errorComponent: ErrorPage,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang={getLocale()}>
      <head>
        <HeadContent />
      </head>
      <body>
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
    <main className="shell flex min-h-[60svh] flex-col items-start justify-center gap-6 py-24">
      <h1 className="display text-5xl md:text-7xl">{'Page not found'}</h1>
      <p className="text-graphite">
        {'The page you’re looking for doesn’t exist or has moved.'}
      </p>
      <Link
        to="/"
        className="inline-flex h-12 items-center rounded-full bg-brand px-6 font-medium text-white transition-colors hover:bg-brand-hover"
      >
        {'Back to home'}
      </Link>
    </main>
  )
}

function ErrorPage() {
  const router = useRouter()

  return (
    <main className="shell flex min-h-[60svh] flex-col items-start justify-center gap-6 py-24">
      <h1 className="display text-5xl md:text-7xl">{'Something went wrong'}</h1>
      <p className="text-graphite">
        {'This page failed to load. Try again, or come back in a moment.'}
      </p>
      <button
        type="button"
        onClick={() => router.invalidate()}
        className="inline-flex h-12 cursor-pointer items-center rounded-full bg-brand px-6 font-medium text-white transition-colors hover:bg-brand-hover"
      >
        {'Try again'}
      </button>
    </main>
  )
}
