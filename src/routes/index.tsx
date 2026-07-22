import { createFileRoute } from '@tanstack/react-router'
import Hero from './-components/hero'
import Values from './-components/values'
import WhatWeDo from './-components/what-we-do'
import Work from './-components/work'
import Partners from './-components/partners'
import Missions from './-components/missions'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="space-y-24 md:space-y-48">
      <Hero />
      <Values />
      <Partners />
      <WhatWeDo />
      <Missions />
      <Work />
    </div>
  )
}
