import { MouseIcon } from "lucide-react"
import TextType from "@/components/TextType"
import LogoLoop from "@/components/LogoLoop"
import AnimatedContent from "@/components/AnimatedContent"
import { InteractiveGridBackground } from "@/components/GridBackground"
import { Card, CardContent } from "@/components/ui/card"

const PRODUCTS = [
  {
    title: "Prop",
    description: "Centralized property management  system.",
    image: "/assets/prop.png",
  },
  {
    title: "Finace",
    description: "A web-based system that fully automates the five core processes of loan products.",
    image: "/assets/finace.png",
  },
  {
    title: "ESF",
    description:
      "Our savings system empowers employees to achieve financial stability while confidently preparing for tomorrow",
    image: "/assets/esf.png",
  },
  {
    title: "StockLab",
    description:
      "Our platform delivers an end-to-end solution tailored for organizations operating in the securities market. ",
    image: "/assets/stocklab.png",
  },
  {
    title: "ShMS",
    description:
      "The Shareholders\" Meeting System organizes meetings and voting for joint-stock companies.",
    image: "/assets/shms.png",
  },
]

const loop = PRODUCTS.map((feature) => {
  return {
    title: feature.title,
    href: "#",
    node: (
      <Card className="w-xs bg-card">
        <CardContent>
          <h3 className="text-2xl font-black mb-2">
            {feature.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {feature.description}
          </p>
          <img
            src={feature.image}
            alt={feature.title}
            className="mt-8 w-full! h-auto! object-contain rounded-2xl"
          />
        </CardContent>
      </Card>
    )
  }
})

export default function Landing() {
  return (
    <InteractiveGridBackground>
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
        <AnimatedContent
          direction="vertical"
          distance={50}
          duration={2}
        >
          <MouseIcon className="text-muted-foreground size-8" />
        </AnimatedContent>
      </div>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="max-w-2xl space-y-6">
          <div className="flex flex-col">
            {/* <img src="/assets/logos/ailab.svg" alt="AI Lab Logo" className="w-48 h-auto mb-12" /> */}
            <AnimatedContent
              direction="vertical"
              distance={50}
              duration={2}
              delay={.5}
            >
              <p className="text-6xl uppercase font-black">
                {"Advance Your Business Through "}
              </p>
              <TextType
                text={["Innovation", "Technology", "Efficiency", "Growth"]}
                className="text-6xl font-black uppercase"
              />
            </AnimatedContent>
          </div>
          <AnimatedContent
            direction="horizontal"
            distance={-50}
            duration={1}
          >
            <hr className="w-20 h-2 bg-primary rounded-xl" />
          </AnimatedContent>
          <AnimatedContent
            direction="vertical"
            distance={-50}
            duration={2}
            delay={.5}
          >
            <p className="text-xl leading-relaxed">
              {"We are committed to sustainably developing innovative solutions that streamline daily organizational operations, empower data-driven decision-making, and accelerate digital transformation."}
            </p>
          </AnimatedContent>
        </div>
        <div className="flex gap-4 max-h-svh overflow-hidden py-4 relative">
          <LogoLoop
            logos={loop}
            speed={60}
            className="pointer-events-auto"
            direction="down"
            logoHeight={60}
            gap={20}
            hoverSpeed={0}
            fadeOut
            fadeOutColor="#030619"
          />
          <LogoLoop
            logos={loop}
            speed={60}
            direction="up"
            className="pointer-events-auto"
            logoHeight={60}
            gap={20}
            hoverSpeed={0}
            fadeOut
            fadeOutColor="#030619"
          />
        </div>
      </div>
    </InteractiveGridBackground>
  )
}
