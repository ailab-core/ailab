import { createFileRoute } from '@tanstack/react-router'
import Hero from './-components/hero'
import LatestPosts from './-components/latest-posts'
import Partners from './-components/partners'
import Values from './-components/values'
import WhatWeDo from './-components/what-we-do'
import Work from './-components/work'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main className="flex flex-col gap-28 pb-32 md:gap-44 md:pb-44">
      <Hero />
      <Values />
      <Partners />
      <WhatWeDo />
      <Work />
      <LatestPosts />
    </main>
  )
}
