import Image from "next/image"
import { CpuIcon, HandshakeIcon, Icon, MicroscopeIcon, ShieldHalfIcon } from "lucide-react"
import { targetArrow } from "@lucide/lab"

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
    <div className="container md:max-w-7xl mx-auto px-8 md:px-0 flex flex-col gap-16 py-32">
      <h2 className="w-full text-3xl md:text-5xl font-bold flex items-center gap-8">
        <Icon className="size-12 inline-block" iconNode={targetArrow} />
        {"Our core values"}
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <Image
          src="/assets/finace.png"
          alt="Values Image"
          width={1600}
          height={900}
          className="w-full h-auto object-cover rounded-lg aspect-video"
        />
        <div className="flex flex-col gap-8">
          <p className="text-muted-foreground text-2xl md:text-xl leading-relaxed font-light">
            <span className="text-sky-300">{"AILab "}</span>
            <span className="text-foreground">{"is a specialized technology company established in 2018. "}</span>
            {"We focus on fintech, artificial intelligence, big data system development, and the design of core infrastructure. Driven by our mission to accelerate the future of business through innovation and smart solutions, we aspire to become a global leader in financial technology."}
          </p>
          <p className="text-muted-foreground text-2xl md:text-xl leading-relaxed font-light!">
            <span className="text-foreground">{"With more than 80% of our team comprised of engineers, "}</span>
            {"we embody strong technological expertise and an unwavering commitment to innovation."}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
        {VALUES.map((value, index) => (
          <div key={index}>
            <value.icon className="size-8 inline-block text-sky-500 mb-4" />
            <p className="text-lg font-bold pb-2 flex items-center">
              {value.title}
            </p>
            <p className="text-muted-foreground text-sm">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
