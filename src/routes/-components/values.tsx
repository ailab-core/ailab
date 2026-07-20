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
    backgroundIcon: "/assets/icons/target.png",
    title: "Team",
    body: "Professional team with comprehensive system development experience, delivering scalable, secure, and innovative software solutions across diverse industries",
  },
  {
    backgroundIcon: "/assets/icons/chat-bubble.png",
    title: "Collaboration",
    body: "Building long-term projects and strategic partnerships through reliability, collaboration, and exceptional technology solutions."
  },
  {
    backgroundIcon: "/assets/icons/hash.png",
    title: "Technology",
    body: "Offering professional, reliable, and stable system development and infrastructure services that ensure security, scalability, performance, and operational excellence."
  },
  {
    backgroundIcon: "/assets/icons/tools.png",
    title: "Research & Development",
    body: "Promoting research excellence through academic partnerships, international collaboration, and continuous human resource training and development."
  }
]

export default function Values() {
  const [active, setActive] = useState<ListItem | null>(null)
  const [hover, setHover] = useState<ListItem | null>(null)

  return (
    <AnimatedContent
      className="container mx-auto relative grid grid-cols-1 md:grid-cols-5 justify-center px-8 md:px-0"
      delay={1.2}
      distance={-50}
    >
      <p className="text-3xl font-semibold leading-snug col-span-2 text-center md:text-left">
        {"With more than 80% of our team comprised of engineers, we embody strong technological expertise and an unwavering commitment to innovation."}
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
            <div className="flex items-center justify-end gap-2">
              <p className="font-bold text-right"> {item.title} </p>
              <ChevronDownIcon className="md:inline-block hidden text-muted-foreground group-hover:text-foreground mt-0 group-hover:-mt-2 transition-all duration-100" />
            </div>
            {active && active.title === item.title && (
              <AnimatedContent distance={-10}>
                <p className="text-xl md:text-xl text-right leading-snug text-muted-foreground">
                  {item.body}
                </p>
              </AnimatedContent>
            )}
          </div>
        ))}
      </div>
    </AnimatedContent>
  )
}
