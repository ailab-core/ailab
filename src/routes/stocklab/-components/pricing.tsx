import { AnimatedContent } from "#/components/animated-content"

const PRICING_PLANS = [
  {
    name: "Standard",
    description:
      "A foundational solution designed for small and medium-sized organizations.",
    price: "15,840,000 ₮",
    features: [
      "Financial nominee system",
      "Back-office management system",
      "Primary market trading web platform",
      "Secondary market trading web platform (basic features)"
    ],
  },
  {
    name: "Premium",
    description:
      "Designed for organizations requiring advanced automation and system integrations.",
    price: "22,770,000 ₮",
    features: [
      "All Standard package features",
      "Advanced secondary market trading capabilities",
      "Notification and communication system",
      "Core mobile application services",
      "Integration with DAN and E-Barimt"
    ],
  },
  {
    name: "Enterprise",
    description:
      "A comprehensive solution built for large-scale organizations and high-performance trading environments.",
    price: "32,340,000 ₮",
    features: [
      "All Premium package features",
      "Additional third-party system integrations",
      "Additional exchange connectivity",
      "Government bond trading support",
      "Audit logging",
      "Bond calculation and management"
    ],
  },
]
export default function Pricing() {
  return (
    <div className="container mx-auto px-8 md:px-0 flex flex-col items-center justify-between gap-16 py-48">
      <AnimatedContent
        className="w-full flex flex-col gap-4"
        direction="vertical"
        distance={50}
      >
        <p className="text-3xl md:text-6xl font-bold">
          {"Pricing"}
        </p>
        <p className="text-lg md:text-2xl leading-relaxed">
          {"Transparent, flexible, and tailored to your needs"}
        </p>
      </AnimatedContent>
      <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-8 bp">
        {PRICING_PLANS.map((plan) => (
          <AnimatedContent
            key={plan.name}
            className="flex flex-col gap-8 group p-4 dark bg-background text-foreground"
            delay={.5}
          >
            <div className="flex flex-col gap-4">
              <p className="text-2xl md:text-4xl font-bold">{plan.name}</p>
              <p className="text-sm md:text-xl text-muted-foreground h-12 md:h-24">{plan.description}</p>
            </div>
            <p className="text-2xl md:text-4xl font-semibold">
              {plan.price}
              <span className="ml-1 text-sm font-normal text-muted-foreground">
                {"(Tax included)"}
              </span>
            </p>
            <ul className="text-sm md:text-lg space-y-2 font-semibold leading-tight">
              <p className="text-xs md:text-base text-muted-foreground mb-4">
                {"The package includes the following features:"}
              </p>
              {plan.features.map((feature, index) => (
                <li className="flex items-center gap-2" key={index}>
                  {feature}
                </li>
              ))}
            </ul>
          </AnimatedContent>
        ))}
      </div>
    </div>
  )
}
