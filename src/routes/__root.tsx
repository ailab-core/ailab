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

import { m } from '#/paraglide/messages'
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
      { title: m.root_meta_title() },
      {
        name: 'description',
        content: m.root_meta_description(),
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
    <html lang={getLocale()} suppressHydrationWarning>
      <head>
        <ScriptOnce>
          {`try{var t=localStorage.getItem('theme');if(t!=='light')document.documentElement.classList.add('dark')}catch(e){}`}
        </ScriptOnce>
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
