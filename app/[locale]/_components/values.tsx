import Image from "next/image"
import {
  BookOpenTextIcon,
  CpuIcon,
  HandshakeIcon,
  MicroscopeIcon,
  ShieldHalfIcon
} from "lucide-react"
import { AnimatedContent } from "@/components/animated-content"
import { getTranslations } from "next-intl/server"

const VALUES = [
  {
    icon: ShieldHalfIcon,
    title: "team.title",
    description: "team.description",
  },
  {
    icon: HandshakeIcon,
    title: "collaboration.title",
    description: "collaboration.description",
  },
  {
    icon: CpuIcon,
    title: "technology.title",
    description: "technology.description",
  },
  {
    icon: MicroscopeIcon,
    title: "researchAndDevelopment.title",
    description: "researchAndDevelopment.description",
  }
]

export default async function Values() {
  const t = await getTranslations("home.values")

  return (
    <div
      id="about-us"
      className="container md:max-w-7xl mx-auto px-8 md:px-0 flex flex-col gap-16 pt-32"
    >
      <AnimatedContent
        className="flex flex-col justify-center gap-4"
        direction="vertical"
        distance={50}
      >
        <div className="flex gap-2">
          <BookOpenTextIcon className="size-5 stroke-sky-300" />
          <p className="text-sky-300 font-bold">{t("header.tag")}</p>
        </div>
        <p className="text-4xl">
          {t("header.title")}
        </p>
      </AnimatedContent>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16">
        <AnimatedContent
          distance={-50}
          direction="horizontal"
          className="relative"
        >
          <Image
            src="/assets/undraw-business-decisions.svg"
            alt="Values Image"
            width={500}
            height={500}
            className="w-full h-auto object-contain aspect-square p-12"
          />
        </AnimatedContent>
        <AnimatedContent
          distance={50}
          direction="horizontal"
          className="flex flex-col gap-8"
        >
          <p className="text-xl text-muted-foreground leading-relaxed">
            <span className="text-sky-300">{"AILab "}</span>
            <span dangerouslySetInnerHTML={{
              __html: t.markup("header.description1", {
                white: (chunks) => `<span class="text-foreground">${chunks}</span>`
              })
            }} />
          </p>
          <p
            className="text-xl text-muted-foreground leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: t.markup("header.description2", {
                white: (chunks) => `<span class="text-foreground">${chunks}</span>`
              })
            }}
          />
        </AnimatedContent>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {VALUES.map((value, index) => (
          <AnimatedContent
            key={index}
            className="border rounded-xl p-8"
          >
            <value.icon className="size-8 inline-block text-sky-500 mb-4" />
            <p className="text-lg font-semibold pb-2 flex items-center">
              {t(value.title)}
            </p>
            <p className="text-muted-foreground">{t(value.description)}</p>
          </AnimatedContent>
        ))}
      </div>
    </div>
  )
}
