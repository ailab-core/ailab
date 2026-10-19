import { createFileRoute } from '@tanstack/react-router'
import Hero from './-components/hero'
import LatestPosts from './-components/latest-posts'
import OurVision from './-components/our-vision'
import Partners from './-components/partners'
import Statement from './-components/statement'
import Values from './-components/values'
import WhatWeDo from './-components/what-we-do'
import Work from './-components/work'

export const Route = createFileRoute('/')({
  staticData: { darkHero: true },
  component: Home,
})

function Home() {
  return (
    <main className="flex flex-col pb-32 md:pb-44">
      <Hero />
      <Statement />
      <div className="flex flex-col gap-32 pt-32 md:gap-48 md:pt-48">
        <OurVision />
        <Values />
        <WhatWeDo />
        <Partners />
        <Work />
        <LatestPosts />
      </div>
    </main>
  )
}
