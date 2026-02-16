import { createFileRoute } from '@tanstack/react-router'
import Landing from './-components/landing-2'
import WhatWeDo from './-components/what-we-do'
import Values from './-components/values'
import Projects from "./-components/projects"
import TrustedBy from "./-components/trusted-by"
import ContactUs from './-components/contact-us'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <>
      <Landing />
      <WhatWeDo />
      <Values />
      <Projects />
      <TrustedBy />
      <ContactUs />
    </>
  )
}
