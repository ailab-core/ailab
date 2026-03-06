import * as React from "react"
import { CarFrontIcon, IdCardIcon, ScrollTextIcon, ShieldUserIcon } from "lucide-react"
import { AnimatedContent } from "@/components/animated-content"

const CARDS = [
  {
    icon: ScrollTextIcon,
    title: "Дансны хуулга шинжилгээний систем",
    description: "Харилцагчийн банкны дансны хуулганы боловсруулалт хийн, орлого зарлагын дүн шинжилгээ хийх төгс шийдэл"
  },
  {
    icon: CarFrontIcon,
    title: "Автомашины үнэлгээ",
    description: "Автотээврийн хэрэгслийн зах зээлийн үнэлгээ"
  },
  {
    icon: IdCardIcon,
    title: "Автомашины өмчлөлийн шилжүүлэг",
    description: "Тоон гарын үсгийн тусламжтай автотээврийн хэрэгслийн өмчлөл/нэр шилжүүлэг"
  },
  {
    icon: ShieldUserIcon,
    title: "Даатгал",
    description: "Автотээврийн хэрэгслийг даатгуулах боломж"
  }
]


export default function Cards() {
  return (
    <div className="container h-full md:max-w-7xl mx-auto px-8 md:px-0 flex flex-col items-center justify-between gap-32">
      <div className="flex flex-col items-center">
        {CARDS.map(card => (
          <React.Fragment key={card.title}>
            <AnimatedContent className="w-2xl max-w-full flex flex-col justify-start items-center bg-card gap-4 p-8 text-center rounded-xl h-fit">
              <card.icon className="size-12 text-sky-300" />
              <p className="font-bold"> {card.title} </p>
              <p className="text-muted-foreground"> {card.description} </p>
            </AnimatedContent>
            <div className="w-0.5 h-12 bg-border last:hidden" />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
