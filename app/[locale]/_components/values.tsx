import Image from "next/image"
import { BookOpenTextIcon, CpuIcon, HandshakeIcon, Icon, MicroscopeIcon, ShieldHalfIcon } from "lucide-react"
import { targetArrow } from "@lucide/lab"
import { AnimatedContent } from "@/components/animated-content"

const VALUES = [
  {
    icon: ShieldHalfIcon,
    title: "Team",
    description: "Professional team with comprehensive system development experience",
  },
  {
    icon: HandshakeIcon,
    title: "Collaboration",
    description: "Long-term projects, and partnerships",
  },
  {
    icon: CpuIcon,
    title: "Technology",
    description: "Professional, reliable, stable, comprehensive system development, and infrastructure services.",
  },
  {
    icon: MicroscopeIcon,
    title: "Research & Development",
    description: "Domestic, and foreign universities cooperation, HR training",
  }
]

export default function Values() {
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
          <p className="text-sky-300 font-bold">{"About us"}</p>
        </div>
        <p className="text-4xl">
          {"Our Values & Mission"}
        </p>
      </AnimatedContent>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <AnimatedContent
          distance={-50}
          direction="horizontal"
        >
          <Image
            src="/assets/undraw-business-decisions.svg"
            alt="Values Image"
            width={1600}
            height={900}
            className="w-full h-auto object-contain aspect-video"
          />
        </AnimatedContent>
        <AnimatedContent
          distance={50}
          direction="horizontal"
          className="flex flex-col gap-8"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            <span className="text-sky-300">{"AILab "}</span>
            <span className="text-foreground">{"is a specialized technology company established in 2018. "}</span>
            {"We focus on fintech, artificial intelligence, big data system development, and the design of core infrastructure. Driven by our mission to accelerate the future of business through innovation and smart solutions, we aspire to become a global leader in financial technology."}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <span className="text-foreground">{"With more than 80% of our team comprised of engineers, "}</span>
            {"we embody strong technological expertise and an unwavering commitment to innovation."}
          </p>
        </AnimatedContent>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {VALUES.map((value, index) => (
          <AnimatedContent
            key={index}
            className="border p-8"
          >
            <value.icon className="size-8 inline-block text-sky-500 mb-4" />
            <p className="text-lg font-semibold pb-2 flex items-center">
              {value.title}
            </p>
            <p className="text-muted-foreground">{value.description}</p>
          </AnimatedContent>
        ))}
      </div>
    </div>
  )
}
