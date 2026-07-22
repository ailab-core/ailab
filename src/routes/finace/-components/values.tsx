import {
  BadgeCheckIcon,
  ClipboardPenLineIcon,
  FolderLockIcon,
  LockKeyholeIcon,
  SproutIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { AnimatedContent } from "@/components/animated-content"

const VALUES = [
  {
    icon: BadgeCheckIcon,
    title: "Standardization",
    description:
      "Fully automates the entire lending lifecycle, including credit assessment, decision-making, disbursement, and loan closure."
  },
  {
    icon: ClipboardPenLineIcon,
    title: "Scoring",
    description:
      "Behavior-based customer credit scoring for more accurate and consistent lending decisions."
  },
  {
    icon: TriangleAlertIcon,
    title: "Risk Reduction",
    description:
      "Reduces operational risk through process automation, audit controls, repayment monitoring, special asset management, and risk scoring."
  },
  {
    icon: FolderLockIcon,
    title: "Security",
    description:
      "Ensures information security in compliance with ISO/IEC 27001:2022 through continuous system and technology enhancements."
  },
  {
    icon: SproutIcon,
    title: "Sustainable Development",
    description:
      "Supports long-term growth through continuous system maintenance, upgrades, skilled professionals, and ongoing research and development."
  },
  {
    icon: LockKeyholeIcon,
    title: "Fraud Prevention",
    description:
      "Minimizes fraud risk by digitizing cross-departmental workflows and reducing manual intervention."
  }
];
export default function Values() {
  return (
    <div className="dark bg-background text-foreground">
      <div className="container mx-auto flex flex-col justify-center items-start gap-12 py-36 relative px-8 md:px-0">
        <AnimatedContent>
          <p className="text-3xl md:text-6xl font-bold">
            {"Values"}
          </p>
        </AnimatedContent>
        <AnimatedContent delay={.2}>
          <p className="text-xl md:text-3xl max-w-full md:max-w-3xl">
            {"We exceed customer expectations with quality solutions, reliable services, and continuous improvement while fostering trust and long-term partnerships."}
          </p>
        </AnimatedContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mt-12">
          {VALUES.map(value => (
            <AnimatedContent
              key={value.title}
              className="dark w-2xl max-w-full flex flex-col gap-4 rounded-xl"
              delay={.4}
            >
              {/* <value.icon className="size-12 text-sky-500" /> */}
              <p className="text-2xl md:text-4xl text-foreground font-bold"> {value.title} </p>
              <p className="text-md md:text-xl text-muted-foreground"> {value.description} </p>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </div>
  )
}
