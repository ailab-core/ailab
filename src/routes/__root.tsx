import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { ScrollSmoother, ScrollTrigger, gsap } from 'gsap/all'
import { useEffect } from 'react'
import appCss from '../styles.css?url'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'AILab',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

function RootDocument({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
    })

    return () => {
      smoother.kill()
    }
  }, [])

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="relative">
        <Header />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}
            <Footer />
            <TanStackDevtools
              config={{
                position: 'bottom-right',
              }}
              plugins={[
                {
                  name: 'Tanstack Router',
                  render: <TanStackRouterDevtoolsPanel />,
                },
              ]}
            />
            <Scripts />
          </div>
        </div>
      </body>
    </html>
  )
}
