import { createFileRoute } from '@tanstack/react-router'
import Hero from './-components/hero'
import WhatWeDo from './-components/what-we-do'
import Work from './-components/work'
import Partners from './-components/partners'
import Missions from './-components/missions'
import Blogs from './-components/blogs'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="space-y-48">
      <Hero />
      <WhatWeDo />
      <Partners />
      <Work />
      <Missions />
      <Blogs />
    </div>
  )
}
