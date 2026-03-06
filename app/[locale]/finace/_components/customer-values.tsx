import { AnimatedContent } from "@/components/animated-content"
import {
  BadgeCheckIcon,
  ClipboardPenLineIcon,
  FolderLockIcon,
  LockKeyholeIcon,
  PackageIcon,
  SproutIcon,
  TriangleAlertIcon,
  UsersIcon,
} from "lucide-react"

const VALUES = [
  {
    icon: BadgeCheckIcon,
    title: "Стандартжуулалт",
    description: "Зээлийн судалгаа, шийдвэр гаргалт, олголт, хаалтын процессыг бүрэн автоматжуулна"
  },
  {
    icon: ClipboardPenLineIcon,
    title: "Скоринг",
    description: "Харилцагчийн зан төлөвт суурилсан оноо"
  },
  {
    icon: TriangleAlertIcon,
    title: "Эрсдэл бууруулах",
    description: "Процесс автоматжуулалт, хяналт, аудит, зээл төлөлт, тусгай активын үйл ажиллагаа, эрсдлийн оноо"
  },
  {
    icon: FolderLockIcon,
    title: "МАБМТ",
    description: "Систем, технологийн сайжруулалтыг тогтмол хийн, мэдээллийн аюулгүй байдлыг ISO27001:2022 стандартын дагуу хангана"
  },
  {
    icon: SproutIcon,
    title: "Тогтвортой хөгжил",
    description: "Системийн шинэчлэлт, арчилгаа, мэргэшсэн хүний нөөц, тасралтгүй R&D хийх механизм"
  },
  {
    icon: LockKeyholeIcon,
    title: "Залилангаас сэргийлэх",
    description: "Алба хэлтсийн уялдааг цахимжуулах, хүний оролцоог багасгах шийдлийг санал болгоно"
  }
]

export default function CustomerValues() {
  return (
    <div className="container h-full md:max-w-7xl mx-auto px-8 md:px-0 flex flex-col items-center justify-between gap-16">
      <AnimatedContent
        className="w-full flex flex-col gap-4"
        distance={50}
        direction="vertical"
      >
        <div className="bg-sky-200 rounded-full w-min p-4">
          <UsersIcon className="size-8 stroke-neutral-800" />
        </div>
        <p className="text-3xl md:text-5xl text-primary-foreground font-semibold">
          {"Хэрэглэгчид өгөх үнэ цэн"}
        </p>
        <p className="text-primary-foreground/60 text-left max-w-4xl">
          {"Бид чанартай бүтээгдэхүүн, найдвартай үйлчилгээ, тасралтгүй сайжруулалтаар дамжуулан таны хэрэгцээг ойлгож, хүлээлтээс давсан шийдлийг хүргэхийг зорьдог. Хэрэглэгчийн итгэл, сэтгэл ханамж нь бидний амжилтын үндэс бөгөөд урт хугацааны хамтын ажиллагааг бий болгох нь бидний гол үнэт зүйл юм."}
        </p>
      </AnimatedContent>
      <div className="grid grid-cols-3 gap-8">
        {VALUES.map(value => (
          <AnimatedContent key={value.title} className="w-2xl max-w-full flex flex-col justify-start items-center bg-slate-100 gap-4 p-8 text-center rounded-xl">
            <value.icon className="size-12 text-sky-500" />
            <p className="text-primary-foreground font-bold"> {value.title} </p>
            <p className="text-slate-800"> {value.description} </p>
          </AnimatedContent>
        ))}
      </div>
    </div>
  )
}
