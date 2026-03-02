import Image from "next/image";
import { CircleCheckIcon } from "lucide-react";
import { AnimatedContent } from "@/components/animated-content";

export const SOLUTIONS = [
  {
    title: "Анхдагч, Хоёрдогч арилжаа",
    description: "IPO-с эхлээд бодит цагийн арилжаа хүртэл — нэг систем дээр. Хөрөнгө оруулагчдыг цахимаар бүртгэж, KYC баталгаажуулалт хийж, үнэт цаас захиалах, худалдан авах, зарах бүх процессыг бүрэн автомат, аюулгүй, real-time орчинд гүйцэтгэнэ.",
    image: "/assets/undraw-stock-prices.svg",
    features: [
      "Хөрөнгө оруулагчдыг цахимаар бүртгэх, онлайн баталгаажуулалт",
      "Иргэний үнэмлэх, банкны дансны баталгаажуулалт",
      "KYC / Compliance шаардлагад нийцсэн танилт, шалгалт",
      "Үнэт цаас захиалах, худалдан авах, зарах боломж",
      "Бондын арилжаа, удирдлага",
      "Арилжааны түүх, статистик, тайлан",
      "Бодит цагийн API дээр суурилсан зах зээлийн дата"
    ],
  },
  {
    title: "Бэк оффисын систем",
    description: "Брокер, банк, ҮЦТХТ, номинал систем болон арилжааны бүхий л үйл ажиллагааг холбож нэгтгэдэг үндсэн менежмент платформ.",
    image: "/assets/undraw-webapp.svg",
    features: [
      "Харилцагчийн бүртгэл, гэрээ, дансны удирдлага",
      "Анхдагч болон хоёрдогч зах зээлийн арилжааны гүйлгээ",
      "API бүртгэл, хөрөнгө удирдлага",
      "Арилжааны лог, аудит лог",
      "Мэдээлэл дамжуулалт, шийдвэрийн модуль",
      "Бирж, брокер, бүтээгдэхүүний төвлөрсөн тохиргоо",
    ],
  },
  {
    title: "Аппликейшн",
    description: "Хэрэглэгчид гар утаснаасаа:",
    image: "/assets/undraw-mobileapp.svg",
    features: [
      "Үнэт цаасны данс нээх",
      "IPO болон хоёрдогч зах зээлийн арилжаанд оролцох",
      "Үнэт цаас худалдан авах, зарах захиалга өгөх",
      "Мөнгө татах хүсэлт цахимаар гаргах",
      "Бодит цагийн ханш, арилжааны мэдээлэл авах",
      "Бодит цагийн дансны мэдээлэл"
    ]
  },
  {
    title: "Санхүүгийн номинал систем",
    description: "Номинал систем нь арилжааны гүйлгээтэй холбоотой бүх мөнгөн урсгалын бүртгэл, төлбөр, шилжүүлэг, баланс тохиргоог автоматжуулсан санхүүгийн цөм систем юм.",
    image: "/assets/undraw-onlinebanking.svg",
    features: [
      "Олон төрлийн дансны удирдлага",
      "Гүйлгээнүүдийн автомат бүртгэл",
      "Шимтгэлийн бодлого, динамик тохиргоо",
      "Системийн холболтууд",
      "Дансны автомат баланс, нэгтгэл тайлан",
    ]
  }
]

export default function Solutions() {
  return (
    <div className="container h-full md:max-w-7xl mx-auto px-8 md:px-0 flex flex-col items-center justify-between gap-32">
      <AnimatedContent
        className="w-full flex flex-col items-center gap-16"
        distance={50}
        direction="vertical"
      >
        <p className="text-4xl">
          {"Solutions"}
        </p>
      </AnimatedContent>
      <div className="w-full flex flex-col gap-48">
        {SOLUTIONS.map((solution, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-24">
            <AnimatedContent
              className={index % 2 === 0 ? "order-first" : "order-last"}
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
              <p className="text-3xl font-semibold">
                {solution.title}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
              <ul className="text-muted-foreground font-semibold space-y-4">
                {solution.features.map((feature, idx) => (
                  <li className="flex items-center gap-2" key={idx}>
                    <CircleCheckIcon className="text-sky-300 size-5" />
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
