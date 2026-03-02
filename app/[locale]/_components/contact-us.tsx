"use client"

import { BuildingIcon, MailIcon, PhoneIcon, SendIcon } from "lucide-react"
import {
  Button,
  Input,
  Textarea,
  Field,
  FieldLabel,
} from "@/components/ui"
import { AnimatedContent } from "@/components/animated-content"

export default function ContactUs() {
  return (
    <div
      id="contact-us"
      className="container md:max-w-7xl mx-auto px-8 md:px-0 flex flex-col items-center gap-16 pt-32"
    >
      <AnimatedContent
        className="md:w-2xl flex flex-col items-center gap-4"
        direction="vertical"
        distance={50}
      >
        <div className="flex gap-2">
          <SendIcon className="size-5 stroke-sky-300" />
          <p className="text-sky-300 font-bold">{"Contact us"}</p>
        </div>
        <p className="text-4xl">
          {"Get In Touch 👋"}
        </p>
        <p className="text-muted-foreground text-center">
          {"If you have any questions about our products or services, please fill out the form and we will get back to you shortly."}
        </p>
      </AnimatedContent>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16" >
        <AnimatedContent
          className="flex flex-col gap-4"
          direction="horizontal"
          distance={50}
        >
          <div className="flex flex-col gap-2 border p-4">
            <p className="text-lg flex items-center gap-2">
              <MailIcon className="size-4 inline-block" />
              {"Email"}
            </p>
            <p className="text-sm text-muted-foreground">
              {"Have a question or need help?"}
            </p>
            <p className="text-sm text-muted-foreground">
              {"info@ailab.mn"}
            </p>
          </div>
          <div className="flex flex-col gap-2 border p-4">
            <p className="text-lg flex items-center gap-2">
              <PhoneIcon className="size-4 inline-block" />
              {"Phone"}
            </p>
            <p className="text-sm text-muted-foreground">
              {"Prefer to chat? Give us a call Monday–Friday, 9 AM–5 PM"}
            </p>
            <p className="text-sm text-muted-foreground">
              {"+976 7777-2210"}
            </p>
          </div>
          <div className="flex flex-col gap-2 border p-4">
            <p className="text-lg flex items-center gap-2">
              <BuildingIcon className="size-4 inline-block" />
              {"Office"}
            </p>
            <p className="text-sm text-muted-foreground">
              {"Stop by our office @ "}
              <a
                href="https://maps.app.goo.gl/LtHiF2PdNzAZhDFi8"
                className="text-sky-300 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"Address IC Tower, 11th Floor Sukhbaatar District, 1st Khoroo 42 Paris Street, Ulaanbaatar, Mongolia"}
              </a>
            </p>
          </div>
        </AnimatedContent>
        <AnimatedContent
          className="flex flex-col gap-4"
          direction="horizontal"
          distance={-50}
        >
          <Field>
            <FieldLabel htmlFor="name">Name</FieldLabel>
            <Input id="name" placeholder="Your name" />
          </Field>
          <Field>
            <FieldLabel htmlFor="organizationName">Organization</FieldLabel>
            <Input id="organizationName" placeholder="Organization name" />
          </Field>
          <Field>
            <FieldLabel htmlFor="email">E-Mail</FieldLabel>
            <Input id="email" placeholder="Email address" type="email" />
          </Field>
          <Field>
            <FieldLabel htmlFor="phoneNumber">Phone Number</FieldLabel>
            <Input id="phoneNumber" placeholder="Phone number" type="phoneNumber" />
          </Field>
          <Field>
            <FieldLabel htmlFor="message">Message</FieldLabel>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message"
              rows={6}
            />
          </Field>
          <Button size="lg">
            {"Let's talk"}
          </Button>
        </AnimatedContent>
      </div>
    </div >
  )
}
