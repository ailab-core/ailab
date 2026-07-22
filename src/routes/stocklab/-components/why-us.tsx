import { AnimatedContent } from "#/components/animated-content"

export const REASONS = [
  {
    title: "Security",
    description: "Information security compliance with ISO 27001 standards"
  },
  {
    title: "Management",
    description: "Secure financial nominee account management"
  },
  {
    title: "Trading",
    description: "Seamless online trading with speed and reliability"
  },
  {
    title: "Usability",
    description: "Intuitive and User-Friendly UI/UX Experience"
  },
  {
    title: "Ecosystem",
    description: "Unified Financial Ecosystem for Brokers, Banks, and Stock Exchanges"
  },
]

export default function WhyUs() {
  return (
    <div className="dark bg-background text-foreground">
      <div className="relative container mx-auto px-8 md:px-0 flex flex-col items-start justify-between py-32 gap-24 overflow-hidden">
        <AnimatedContent
          className="w-full flex flex-col gap-8 max-w-full md:max-w-5xl"
          distance={50}
          direction="vertical"
        >
          <p className="text-3xl md:text-6xl font-bold">
            {"Why us"}
          </p>
          <p className="text-lg md:text-2xl leading-relaxed">
            {"With deep expertise in financial technology, we provide reliable, secure, and high-performance trading solutions compliant with Mongolian Stock Exchange standards, empowering seamless digital investment experiences."}
          </p>
        </AnimatedContent>
        <div className="w-full flex flex-col gap-12 divide-y divide-y-border">
          {REASONS.map((item) => (
            <AnimatedContent className="grid grid-cols-1 md:grid-cols-12 items-start pb-20 gap-4">
              <p className="col-span-1 md:col-span-4 text-lg md:text-2xl font-bold">{item.title}</p>
              <p className="col-span-1 md:col-span-8 text-base md:text-xl text-muted-foreground">{item.description}</p>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </div>
  )
}
