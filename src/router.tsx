import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { deLocalizeUrl, localizeUrl } from './paraglide/runtime'
import { routeTree } from './routeTree.gen'

export function getRouter() {
  const router = createTanStackRouter({
    routeTree,
    // Routes stay locale-free; /mn/... and /zh/... map onto them and links get the prefix back.
    rewrite: {
      input: ({ url }) => deLocalizeUrl(url),
      output: ({ url }) => localizeUrl(url),
    },
    scrollRestoration: true,
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
  })

  return router
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>
  }
  interface StaticDataRouteOption {
    // The page opens on a forced-dark hero, so the transparent topbar renders dark over it.
    darkHero?: boolean
  }
}
