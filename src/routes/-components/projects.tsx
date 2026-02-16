import { LinkIcon } from "lucide-react"
import AnimatedContent from "@/components/AnimatedContent"
import SplitText from "@/components/SplitText"

export const PROJECTS = [
  {
    title: "Pocket",
    description: "A comprehensive fintech platform that integrates microloans, BNPL, leasing, savings, and payments. Leveraging AI and IT innovation, it ensures a secure, efficient, and user‑friendly financial ecosystem",
    image: "/assets/logos/pocket.svg",
    banner: "/assets/banners/pocket.jpg",
    href: "https://pocket.mn/"
  },
  {
    title: "Pocket KG",
    description: "Pocket brings advanced fintech and AI solutions to Central Asia, powering microloans, payments, and enterprise systems",
    image: "/assets/logos/pocket.svg",
    banner: "/assets/banners/pocket.jpg",
    href: "https://pocket.kg/"
  },
  {
    title: "Worki",
    description: "Designed with job seekers in mind, the platform uses advanced AI to match talent with opportunity, providing listings, resume building, and career guidance in one seamless experience",
    image: "/assets/logos/worki.svg",
    banner: "/assets/banners/worki.jpg",
    href: "https://worki.mn/"
  },
  {
    title: "ICapital",
    description: "Designed for simplicity and efficiency, the application connects investors to stocks, bonds, and investment opportunities across Mongolia’s major stock exchanges",
    image: "/assets/logos/icapital.svg",
    banner: "/assets/banners/icapital.jpg",
    href: "https://icapital.mn/"
  },
  {
    title: "Finberry",
    description: "Designed to help creators and innovators, the platform provides flexible crowdfunding options—donations, rewards, and loans—to connect projects with supporters",
    image: "/assets/logos/finberry.svg",
    banner: "/assets/banners/finberry.jpg",
    href: "https://finberry.mn/"
  }
]

export default function Projects() {
  return (
    <div className="container mx-auto px-8 md:px-0 flex flex-col gap-16">
      <div className="flex flex-col justify-center items-start gap-2">
        <SplitText
          text={"Our projects"}
          className="w-full text-6xl md:text-8xl font-black uppercase"
          delay={50}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
        />
        <SplitText
          text={"Custom software solutions powering the future of financial services—enhancing security, efficiency, and innovation"}
          className="w-full text-lg text-muted-foreground"
          delay={10}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
        />
      </div>
      <div className="flex flex-col gap-16">
        {PROJECTS.map((project, index) => (
          <AnimatedContent
            key={index}
            direction="vertical"
            distance={150}
            duration={2}
          >
            <div className="w-full md:max-h-96 relative p-12 overflow-hidden rounded-xl group">
              <div className="absolute w-full h-full top-0 left-0">
                <img
                  src={project.banner}
                  alt={`${project.title} banner`}
                  className="w-full h-full rounded-lg object-cover md:object-top opacity-20 group-hover:opacity-10 duration-300 transition-all"
                />
              </div>
              <div className="w-full flex flex-col md:flex-row justify-between items-center relative z-10">
                <div className="w-full md:w-auto flex flex-col md:flex-row items-center">
                  <p className="self-start text-4xl text-muted-foreground font-black">{`/0${index + 1}`}</p>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-50 p-12 object-contain"
                  />
                </div>
                <div className="max-w-2xl flex flex-col justify-center gap-4 group/link">
                  <a href={project.href} className="w-min text-nowrap text-2xl font-black mt-6 group-hover/link:text-sky-300 duration-300 uppercase cursor-pointer">
                    {project.title}
                    <LinkIcon className="inline-block size-4 ml-2" />
                    <hr className="h-1 border-none bg-sky-300 w-0 duration-300 transition-all group-hover/link:w-full" />
                  </a>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedContent>
        ))}
      </div>
    </div>
  )
}
