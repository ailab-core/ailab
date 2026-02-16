import { CpuIcon, HandshakeIcon, MicroscopeIcon, ShieldHalfIcon } from "lucide-react"
import AnimatedContent from "@/components/AnimatedContent"
import ScrollReveal from "@/components/ScrollReveal"
import SplitText from "@/components/SplitText"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

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
    <div className="container mx-auto px-4 flex flex-col py-32 gap-16">
      <div className="flex flex-col justify-center items-start gap-2">
        <SplitText
          text={"Our core values"}
          className="text-8xl font-black uppercase"
          delay={20}
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
          text={"Professionalism, Leadership, Ownership, Ethics, Collaboration, Speed"}
          className="text-lg text-muted-foreground"
          delay={10}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
        />
      </div>
      <div className="max-w-3xl mx-auto ml-auto mr-32 flex flex-col gap-8">
        <ScrollReveal
          enableBlur
          baseOpacity={0.1}
          baseRotation={0}
          blurStrength={8}
          textClassName="text-4xl leading-relaxed font-light"
        >
          {"AI Lab is a specialized technology company established in 2018. We focus on fintech, artificial intelligence, big data system development, and the design of core infrastructure. Driven by our mission to accelerate the future of business through innovation and smart solutions, we aspire to become a global leader in financial technology."}
        </ScrollReveal>
        <ScrollReveal
          enableBlur
          baseOpacity={0.1}
          baseRotation={0}
          blurStrength={8}
          textClassName="text-4xl leading-relaxed font-light"
        >
          {"With more than 80% of our team comprised of engineers, we embody strong technological expertise and an unwavering commitment to innovation."}
        </ScrollReveal>
      </div>
      <div className="grid grid-cols-4 gap-16 py-32">
        {VALUES.map((value, index) => (
          <AnimatedContent
            key={index}
            direction="vertical"
            distance={150}
            duration={2}
            delay={index * 0.2}
          >
            <Card
              className={cn(
                "relative overflow-hidden z-0 hover:border-sky-300 duration-300 transition-colors",
                index === 1 && "top-32",
                index === 2 && "-top-16"
              )}
            >
              <CardContent className="flex flex-col gap-40">
                <value.icon className="text-muted-foreground size-36 absolute -z-10 right-8 group-hover/card:text-sky-300 duration-300 transition-colors" />
                <p className="font-black">0{index + 1} / <span className="text-muted-foreground/30">0{VALUES.length}</span></p>
                <div>
                  <p className="text-2xl font-black pb-2">{value.title}</p>
                  <p className="text-base text-muted-foreground">{value.description}</p>
                </div>
              </CardContent>
            </Card>
          </AnimatedContent>
        ))}
      </div>
    </div>
  )
}
