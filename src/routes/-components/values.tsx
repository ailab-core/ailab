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
    <div className="container mx-auto px-8 md:px-0 flex flex-col gap-16">
      <SplitText
        text={"Our core values"}
        className="w-full text-4xl md:text-6xl font-black uppercase"
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
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <div className="flex flex-col gap-8">
          <ScrollReveal
            enableBlur
            baseOpacity={0.1}
            baseRotation={0}
            blurStrength={8}
            textClassName="text-2xl md:text-3xl leading-relaxed font-light"
          >
            {"AI Lab is a specialized technology company established in 2018. We focus on fintech, artificial intelligence, big data system development, and the design of core infrastructure. Driven by our mission to accelerate the future of business through innovation and smart solutions, we aspire to become a global leader in financial technology."}
          </ScrollReveal>
          <ScrollReveal
            enableBlur
            baseOpacity={0.1}
            baseRotation={0}
            blurStrength={8}
            textClassName="text-2xl md:text-3xl leading-relaxed font-light"
          >
            {"With more than 80% of our team comprised of engineers, we embody strong technological expertise and an unwavering commitment to innovation."}
          </ScrollReveal>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mt-32">
        {VALUES.map((value, index) => (
          <AnimatedContent
            key={index}
            direction="vertical"
            distance={150}
            duration={2}
            delay={index * 0.2}
          >
            <div>
              <value.icon className={cn("size-8 mb-4 text-muted-foreground stroke-1")} />
              <p className="text-2xl font-black pb-2">{value.title}</p>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          </AnimatedContent>
        ))}
      </div>
    </div>
  )
}
