import { AnimatedContent } from "#/components"
import { cn } from "#/lib/utils"

export const SOLUTIONS = [
  {
    title: "Primary & Secondary Market Trading",
    description:
      "From IPO participation to real-time secondary market trading, our integrated platform enables secure investor onboarding, KYC verification, and fully automated securities trading in a real-time environment.",
    image: "/assets/undraw-investment.svg",
    imageBg: "bg-emerald-300",
    features: [
      "Digital investor onboarding and online identity verification",
      "National ID and bank account verification",
      "KYC and compliance screening",
      "Securities subscription, buying, and selling",
      "Bond trading and management",
      "Trading history, analytics, and reporting",
      "Real-time market data via live APIs"
    ],
  },
  {
    title: "Back Office Management System",
    description:
      "A centralized management platform that seamlessly integrates brokers, banks, securities depositories, nominee systems, and end-to-end trading operations into a unified back-office environment.",
    image: "/assets/undraw-system-interface.svg",
    imageBg: "bg-blue-300",
    features: [
      "Client registration, contract, and account management",
      "Primary and secondary market transaction processing",
      "API management and asset administration",
      "Trading logs and audit trails",
      "Data exchange and workflow management",
      "Centralized configuration for exchanges, brokers, and financial products"
    ],
  },
  {
    title: "Mobile Application",
    description:
      "Empower investors to manage their investments anytime, anywhere through a secure and intuitive mobile application.",
    image: "/assets/undraw-mobile-application.svg",
    imageBg: "bg-yellow-200",
    features: [
      "Open securities trading accounts digitally",
      "Participate in IPOs and secondary market trading",
      "Place buy and sell orders for securities",
      "Submit fund withdrawal requests online",
      "Access real-time market prices and trading data",
      "View real-time account balances and portfolio information"
    ]
  },
  {
    title: "Financial Nominee System",
    description:
      "A core financial platform that automates the recording of cash flows, payment processing, fund transfers, and account balancing for all securities trading activities.",
    image: "/assets/undraw-online-stats.svg",
    imageBg: "bg-pink-200",
    features: [
      "Multi-account management",
      "Automated transaction processing and ledger management",
      "Configurable fee policies and dynamic pricing rules",
      "Seamless integration with external systems",
      "Automated account reconciliation and consolidated reporting"
    ]
  }
]

export default function Solutions() {
  return (
    <div className="container mx-auto px-8 md:px-0 flex flex-col items-start justify-between gap-64 my-64">
      {SOLUTIONS.map((solution, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-24 md:gap-48 relative">
          <AnimatedContent
            className={cn("flex flex-col gap-6 md:gap-12 order-last", index % 2 === 0 ? "md:order-first" : "md:order-last")}
            direction="vertical"
            delay={.5}
          >
            <p className="text-3xl md:text-6xl font-bold">
              {solution.title}
            </p>
            <p className="text-lg md:text-2xl leading-relaxed">
              {solution.description}
            </p>
            <ul className="text-base md:text-xl font-bold space-y-2">
              {solution.features.map((feature, idx) => (
                <li key={idx}> {feature} </li>
              ))}
            </ul>
          </AnimatedContent>
          <AnimatedContent
            direction="vertical"
            delay={.5}
          >
            <img
              src={solution.image}
              alt="stock"
              className={cn(
                "w-full h-full object-contain p-8 md:p-36 shadow-[20px_20px_0px_rgba(0,0,0,1)]",
                solution.imageBg && solution.imageBg
              )}
            />
          </AnimatedContent>
        </div>
      ))}
    </div>
  )
}
