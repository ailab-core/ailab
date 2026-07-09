import { useState } from "react"
import { ChevronDownIcon } from "lucide-react"
import AnimatedContent from "#/components/AnimatedContent"

type ListItem = {
  backgroundIcon: string
  title: string
  body: string
}

const ITEMS: Array<ListItem> = [
  {
    backgroundIcon: "/assets/icons/hash.png",
    title: "Development",
    body: "Building adaptive financial software solutions that merge technology and design to create unique, user-first experiences"
  },
  {
    backgroundIcon: "/assets/icons/bulb.png",
    title: "Cloud & Devops",
    body: "Cloud implementation, CI/CD automation, data scalability and management, quality assurance and high available infrastructure"
  },
  {
    backgroundIcon: "/assets/icons/tools.png",
    title: "Flexible system architecture",
    body: "Our flexible system architecture adapts to your growing business needs. With modular design and scalable infrastructure, it enables seamless integration, faster updates, and reliable performance—ensuring your technology evolves without disruption."
  },
  {
    backgroundIcon: "/assets/icons/mobile.png",
    title: "Digital transformation",
    body: "AI based data processing, Business process automation, Fintech solutions, Risk assessment, and Credit scoring "
  }
]

export default function WhatWeDo() {
  const [active, setActive] = useState<ListItem | null>(null)
  const [hover, setHover] = useState<ListItem | null>(null)

  return (
    <div className="container mx-auto relative grid grid-cols-1 md:grid-cols-5 justify-center px-8 md:px-0">
      <p className="text-2xl md:text-3xl leading-relaxed col-span-2 text-center md:text-left">
        {"We are committed to sustainably developing innovative solutions that streamline daily organizational operations, empower data-driven decision-making, and accelerate digital transformation."}
      </p>
      <div className="w-full h-20" />
      <div className="flex flex-col items-end gap-6 text-2xl md:text-3xl col-span-2">
        {ITEMS.map((item: any) => (
          <div
            key={item.title}
            className="flex flex-col gap-2 group cursor-pointer"
            onClick={() => setActive(active?.title === item.title ? null : item)}
            onMouseEnter={() => !active && setHover(hover?.title === item.title ? null : item)}
            onMouseLeave={() => setHover(null)}
          >
            {((active && active.backgroundIcon === item.backgroundIcon) || (hover && hover.backgroundIcon === item.backgroundIcon)) && (
              <div className="hidden md:inline-block absolute -top-12 left-1/2 -translate-x-1/2 opacity-80 duration-500 -z-10">
                <AnimatedContent>
                  <img
                    width={386}
                    height={386}
                    src={(active && active.backgroundIcon === item.backgroundIcon)
                      ? active.backgroundIcon
                      : (hover && hover.backgroundIcon === item.backgroundIcon)
                        ? hover.backgroundIcon
                        : ""
                    }
                    alt={(active && active.backgroundIcon === item.backgroundIcon)
                      ? active.title
                      : (hover && hover.backgroundIcon === item.backgroundIcon)
                        ? hover.backgroundIcon
                        : ""}
                  />
                </AnimatedContent>
              </div>
            )}
            <div className="flex items-center justify-center md:justify-end gap-2">
              <p className="font-bold text-center md:text-right"> {item.title} </p>
              <ChevronDownIcon className="md:inline-block hidden text-muted-foreground group-hover:text-foreground mt-0 group-hover:-mt-2 transition-all duration-100" />
            </div>
            {active && active.title === item.title && (
              <AnimatedContent distance={-10}>
                <p className="text-xl md:text-2xl text-right leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </AnimatedContent>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
