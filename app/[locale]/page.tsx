"use server"

import Landing from "./_components/landing"
import WhatWeDo from "./_components/what-we-do"
import Values from "./_components/values"
import Projects from "./_components/projects"
import Blogs from "./_components/blogs"
import TrustedBy from "./_components/trusted-by"
import ContactUs from "./_components/contact-us"

export default async function Home() {
  return (
    <div className="flex flex-col gap-32">
      <Landing />
      <WhatWeDo />
      <Values />
      <Projects />
      <TrustedBy />
      <Blogs />
      <ContactUs />
    </div>
  );
}
