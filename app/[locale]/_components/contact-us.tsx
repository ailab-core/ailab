"use client"

import { useTranslations } from "next-intl"
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
  const t = useTranslations("home.contactUs")

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
          <p className="text-sky-300 font-bold">{t("tag")}</p>
        </div>
        <p className="text-4xl">
          {t("title")}
        </p>
        <p className="text-muted-foreground text-center">
          {t("description")}
        </p>
      </AnimatedContent>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16" >
        <AnimatedContent
          className="flex flex-col gap-4"
          direction="horizontal"
          distance={50}
        >
          <div className="flex flex-col gap-2 border p-4 rounded-xl">
            <p className="text-lg flex items-center gap-2">
              <MailIcon className="size-4 inline-block" />
              {t("emailCard.title")}
            </p>
            <p className="text-sm text-muted-foreground">
              {t("emailCard.description")}
            </p>
            <p className="text-sm text-muted-foreground">
              {"info@ailab.mn"}
            </p>
          </div>
          <div className="flex flex-col gap-2 border p-4 rounded-xl">
            <p className="text-lg flex items-center gap-2">
              <PhoneIcon className="size-4 inline-block" />
              {t("phoneCard.title")}
            </p>
            <p className="text-sm text-muted-foreground">
              {t("phoneCard.description")}
            </p>
            <p className="text-sm text-muted-foreground">
              {"+976 7777-2210"}
            </p>
          </div>
          <div className="flex flex-col gap-2 border p-4 rounded-xl">
            <p className="text-lg flex items-center gap-2">
              <BuildingIcon className="size-4 inline-block" />
              {t("officeCard.title")}
            </p>
            <p className="text-sm text-muted-foreground">
              {t("officeCard.description")}
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
            <FieldLabel htmlFor="name">{t("form.name")}</FieldLabel>
            <Input id="name" placeholder={t("form.name")} />
          </Field>
          <Field>
            <FieldLabel htmlFor="organizationName">{t("form.organizationName")}</FieldLabel>
            <Input id="organizationName" placeholder={t("form.organizationName")} />
          </Field>
          <Field>
            <FieldLabel htmlFor="email">{t("form.email")}</FieldLabel>
            <Input id="email" placeholder={t("form.email")} type="email" />
          </Field>
          <Field>
            <FieldLabel htmlFor="phoneNumber">{t("form.phoneNumber")}</FieldLabel>
            <Input id="phoneNumber" placeholder={t("form.phoneNumber")} type="phoneNumber" />
          </Field>
          <Field>
            <FieldLabel htmlFor="message">{t("form.message")}</FieldLabel>
            <Textarea
              id="message"
              name="message"
              placeholder={t("form.message")}
              rows={6}
            />
          </Field>
          <Button>
            {t("form.submit")}
          </Button>
        </AnimatedContent>
      </div>
    </div >
  )
}
