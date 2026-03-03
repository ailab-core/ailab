import Image from "next/image"
import { BoxesIcon } from "lucide-react"
import { AnimateIcon } from "@/components/animate-ui/icons/icon"
import { LinkIcon } from "@/components/animate-ui/icons/link"
import { AnimatedContent } from "@/components/animated-content"
import { getTranslations } from "next-intl/server"

export const PROJECTS = [
  {
    title: "pocket.title",
    description: "pocket.description",
    image: "/assets/logos/pocket.svg",
    banner: "/assets/banners/pocket.jpg",
    href: "https://pocket.mn/"
  },
  {
    title: "pocketKg.title",
    description: "pocketKg.description",
    image: "/assets/logos/pocket.svg",
    banner: "/assets/banners/pocket.jpg",
    href: "https://pocket.kg/"
  },
  {
    title: "worki.title",
    description: "worki.description",
    image: "/assets/logos/worki.svg",
    banner: "/assets/banners/worki.jpg",
    href: "https://worki.mn/"
  },
  {
    title: "icapital.title",
    description: "icapital.description",
    image: "/assets/logos/icapital.svg",
    banner: "/assets/banners/icapital.jpg",
    href: "https://icapital.mn/"
  },
  {
    title: "finberry.title",
    description: "finberry.description",
    image: "/assets/logos/finberry.svg",
    banner: "/assets/banners/finberry.jpg",
    href: "https://finberry.mn/"
  }
]

export default async function Projects() {
  const t = await getTranslations("home.projects")

  return (
    <div
      id="projects"
      className="container md:max-w-7xl mx-auto px-8 md:px-0 flex flex-col gap-16 pt-32"
    >
      <AnimatedContent
        className="w-xl max-w-full flex flex-col gap-4"
        distance={50}
        direction="vertical"
      >
        <div className="flex gap-2">
          <BoxesIcon className="size-5 stroke-sky-300" />
          <p className="text-sky-300 font-bold">{t("header.tag")}</p>
        </div>
        <p className="text-4xl">
          {t("header.title")}
        </p>
        <p className="text-muted-foreground">
          {t("header.description")}
        </p>
      </AnimatedContent>
      <div className="flex flex-col gap-16">
        {PROJECTS.map((project, index) => (
          <AnimateIcon key={index} animateOnHover>
            <AnimatedContent
              className="w-full md:max-h-96 relative p-12 overflow-hidden group rounded-xl"
              direction={"horizontal"}
              distance={index % 2 === 0 ? -50 : 50}
            >
              <div className="absolute w-full h-full top-0 left-0">
                <Image
                  src={project.banner}
                  alt={`${project.title} banner`}
                  fill={true}
                  className="w-full h-full object-cover md:object-top opacity-20 group-hover:opacity-10 duration-300 transition-all"
                />
              </div>
              <div className="w-full flex flex-col md:flex-row justify-between items-center relative z-10">
                <div className="w-full md:w-auto flex flex-col md:flex-row items-center">
                  <p className="self-start text-4xl text-muted-foreground font-bold">{`/0${index + 1}`}</p>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-50 p-12 object-contain"
                  />
                </div>
                <div className="max-w-2xl flex flex-col justify-center gap-2">
                  <a
                    href={project.href}
                    className="w-min text-nowrap text-2xl font-bold mt-6 group-hover:text-sky-300 duration-300 uppercase cursor-pointer"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {t(project.title)}
                    <LinkIcon className="inline-block size-4 ml-2" />
                    <hr className="h-1 border-none bg-sky-300 w-0 duration-300 transition-all group-hover:w-full" />
                  </a>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(project.description)}
                  </p>
                </div>
              </div>
            </AnimatedContent>
          </AnimateIcon>
        ))}
      </div>
    </div >
  )
}
