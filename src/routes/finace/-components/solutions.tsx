import { AnimatedContent } from "#/components"
import { cn } from "#/lib/utils"

const SOLUTIONS = [
  {
    title: "Loan origination system",
    description: "A solution that automates the loan research, issuance, monitoring, closing, and repayment processes of NBFIs and MFIs, standardizes the work of loan economists, supports management team decision-making, and reduces risk.",
    image: "/assets/undraw-transfer-money.svg",
    imageBg: "bg-purple-600",
    features: [
      "Loan Product Management",
      "Customer Onboarding",
      "Automated Credit Assessment",
      "Collateral Management",
      "Approval Workflow Automation",
      "Document Management",
      "Credit Bureau Integration",
      "Dynamic Configuration",
    ],
  },
  {
    title: "Core banking system",
    description: "A cloud solution that automates processes related to an organization's loan operations, transactions, repayments, and general ledger.",
    image: "/assets/undraw-online-banking.svg",
    imageBg: "bg-blue-600",
    features: [
      "General Ledger",
      "Financial Transactions",
      "Loan Management",
      "Collateral Management",
      "Risk Management",
      "Regulatory Reporting",
    ],
  },
  {
    title: "Bank statement analysis",
    description: "The perfect solution for processing customer bank statements and analyzing income and expenses",
    image: "/assets/undraw-analysis.svg",
    imageBg: "bg-emerald-400",
    features: [
      "Bank Statement Processing",
      "Statement Analytics",
      "Income & Expense Insights",
      "Fraud & Suspicious Transaction Detection",
      "Support for 7 Major Banks",
    ]
  },
]

export default function Solutions() {
  return (
    <div className="container mx-auto px-8 md:px-0 flex flex-col items-start justify-between gap-64 my-64">
      {SOLUTIONS.map((solution, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-24 md:gap-48 relative">
          <AnimatedContent
            className={cn("flex flex-col gap-8 md:gap-16 order-last", index % 2 === 0 ? "md:order-first" : "md:order-last")}
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
