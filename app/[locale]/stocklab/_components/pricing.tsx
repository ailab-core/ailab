import { AnimatedContent } from "@/components/animated-content";
import { Button, Separator } from "@/components/ui";
import { CheckIcon, CircleDollarSignIcon } from "lucide-react";

const PRICING_PLANS = [
  {
    name: "Стандарт",
    description: "Жижиг–дунд байгууллагад зориулсан суурь суурилуулалтын шийдэл.",
    price: "15,840,000 ₮",
    features: [
      "Номинал санхүү систем",
      "Бэк-оффис удирдлагын систем",
      "Анхдагч арилжааны веб",
      "Хоёрдогч арилжааны веб (суурь функц)"
    ],
  },
  {
    name: "Премиум",
    description: "Ахисан түвшний автоматжуулалт, интеграцчилал шаардлагатай байгууллагад.",
    price: "22,770,000 ₮",
    features: [
      "Стандарт багцын бүх боломж",
      "Хоёрдогч арилжааны вебийн өргөтгөсөн функц",
      "Мэдээлэл илгээх систем",
      "Аппликейшний үндсэн үйлчилгээ",
      "ДАН болон И-баримт холболт"
    ],
  },
  {
    name: "Корпораци",
    description: "Томоохон байгууллага, өндөр ачааллын системд зориулсан цогц шийдэл.",
    price: "32,340,000 ₮",
    features: [
      "Премиум багцын бүх боломж",
      "Нэмэлт бүх төрлийн системийн холболтууд",
      "Нэмэлт бирж холболт",
      "Засгийн газрын бонд",
      "Аудит лог",
      "Бондын тооцоолол"
    ],
  },
]

export default function Pricing() {
  return (
    <div className="container h-full md:max-w-7xl mx-auto px-8 md:px-0 flex flex-col items-center justify-between gap-16">
      <AnimatedContent
        className="w-full flex flex-col gap-4"
        direction="vertical"
        distance={50}
      >
        <div className="flex items-center gap-2">
          <CircleDollarSignIcon className="size-5 text-sky-300" />
          <p className="text-sky-300 font-bold">{"Үнийн санал"}</p>
        </div>
        <p className="text-2xl md:text-4xl">
          {"Ил тод, уян хатан, таны хэрэгцээнд нийцсэн шийдэл."}
        </p>
      </AnimatedContent>
      <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-8">
        {PRICING_PLANS.map((plan) => (
          <AnimatedContent
            key={plan.name}
            className="flex flex-col gap-8 group bg-card rounded-2xl p-8"
          >
            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold">{plan.name}</p>
              <p className="text-sm text-muted-foreground">{plan.description}</p>
            </div>
            <p className="text-3xl font-semibold">
              {plan.price}
              <span className="ml-1 text-xs font-normal text-muted-foreground">{"(НӨАТ орсон)"}</span>
            </p>
            <Button
              nativeButton={false}
              render={(
                <a href="/#contact-us">
                  {"Холбоо барих"}
                </a>
              )}
            />
            <Separator />
            <p className="text-sm text-muted-foreground">
              {"Багцад дараах боломжууд багтсан:"}
            </p>
            <ul className="text-sm space-y-4">
              {plan.features.map((feature, index) => (
                <li className="flex items-center gap-2" key={index}>
                  <CheckIcon className="text-sky-300 size-3" />
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
