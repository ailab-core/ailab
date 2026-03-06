import Image from "next/image";
import { BoxesIcon, CircleCheckIcon } from "lucide-react";
import { AnimatedContent } from "@/components/animated-content";
import { cn } from "@/lib/utils";

const SOLUTIONS = [
  {
    title: "LOS (Loan origination system)",
    description: "ББСБ, БЗГ-ын зээлийн судалгаа, олголт, хяналт, хаалт, эргэн төлөлтийн үйл ажиллагааг автоматжуулж, зээлийн эдийн засагчийн ажлыг стандартжуулах, удирдлагын багийн шийдвэр гаргалтад дэмжлэг үзүүлэх, эрсдлийг бууруулах шийдэл.",
    image: "/assets/undraw-stock-prices.svg",
    features: [
      "Зээлийн бүхий л төрлийн бүтээгдэхүүн",
      "Харилцагчийн бүртгэл, менежмент",
      "Зээлийн судалгааны автоматжуулалт",
      "Барьцаа хөрөнгийн менежмент",
      "Байгууллагын бүтцийн тохируулга",
      "Зээлийн шийдвэр гаргалт, олголтын процессын тохируулга, уян хатан байдал",
      "Гэрээ, бичиг баримтын тохиргоо",
      "Хар саарал жагсаалт",
      "ЗМС-ийн лавлагаа, нийлүүлэлт",
      "Зээлийн багцын шилжүүлэг",
      "Хэрэглэгчийн болон салбарын хязгаарлалтгүй эрх",
      "Бүтээгдэхүүний динамик тохиргоо"
    ],
  },
  {
    title: "CBS (Core banking system)",
    description: "Байгууллагын зээлийн үйл ажиллагаа, гүйлгээ, эргэн төлөлт, ерөнхий дэвтэртэй холбоотой процессыг автоматжуулсан клауд шийдэл.",
    image: "/assets/undraw-webapp.svg",
    features: [
      "Ерөнхий дэвтрийн удирдлага, тохиргоо",
      "Санхүүгийн бүхий л төрлийн гүйлгээ",
      "Гүйлгээний утгаар зээлийн төлөлт таних модуль",
      "Зээлийн хүү шимтгэлийн тооцоолол",
      "Зээлийн менежмент",
      "Өр авлагын удирдлага",
      "Барьцаа хөрөнгийн удирдлага, хяналт",
      "Эрсдэлийн сан, итгэлцэл, бонд зэрэг нэмэлт боломжууд",
      "Зохицуулагч байгууллагуудын болон дотоод тайлангийн багц",
    ],
  },
  {
    title: "BSA (Bank statement analysis)",
    description: "Харилцагчийн банкны дансны хуулганы боловсруулалт хийн, орлого зарлагын дүн шинжилгээ хийх төгс шийдэл",
    image: "/assets/undraw-mobileapp.svg",
    features: [
      "Дансны хуулгыг excel рүү хөрвүүлэх, орлогын түүвэр бэлтгэх",
      "Дансны хуулганы анализ дүн шинжилгээ",
      "Орлого зарлагын дүгнэлт",
      "Сэжигтэй гүйлгээний шинжилгээ, дүгнэлт",
      "Зах зээлийн 7 том банкны дансны хуулгыг хүлээн авах боломж"
    ]
  },
]

export default function Solutions() {
  return (
    <div className="container h-full md:max-w-7xl mx-auto px-8 md:px-0 flex flex-col items-center justify-between gap-32">
      <AnimatedContent
        className="flex flex-col items-center gap-4"
        direction="vertical"
        distance={50}
      >
        <div className="flex items-center gap-2">
          <BoxesIcon className="size-5 text-sky-300" />
          <p className="text-sm text-sky-300 font-bold">{"Solutions"}</p>
        </div>
        <p className="text-4xl">
          {"Бүтээгдэхүүний онцлог"}
        </p>
      </AnimatedContent>
      <div className="w-full flex flex-col gap-32">
        {SOLUTIONS.map((solution, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-12 md:gap-24">
            <AnimatedContent
              className={cn("bg-card rounded-xl", index % 2 === 0 ? "md:order-first" : "md:order-last")}
              distance={index % 2 === 0 ? 50 : -50}
              direction="horizontal"
            >
              <Image
                src={solution.image}
                alt="stock"
                width={500}
                height={500}
                className="w-full h-auto object-contain p-24"
              />
            </AnimatedContent>
            <AnimatedContent
              className="flex flex-col gap-8"
              distance={index % 2 === 0 ? -50 : 50}
              direction="horizontal"
            >
              <p className="text-3xl">
                {solution.title}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
              <ul className="text-muted-foreground font-semibold space-y-4">
                {solution.features.map((feature, idx) => (
                  <li className="flex items-center gap-2" key={idx}>
                    <CircleCheckIcon className="text-sky-300 size-5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </AnimatedContent>
          </div>
        ))}
      </div>
    </div>
  )
}
