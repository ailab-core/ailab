"use client"

import { useCallback, useState } from "react";
import { CheckIcon, CircleDollarSignIcon, HandCoinsIcon, LandmarkIcon, PlusIcon } from "lucide-react";
import { AnimatedContent } from "@/components/animated-content";
import {
  Button,
  Label,
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  ToggleGroup,
  ToggleGroupItem
} from "@/components/ui";

type Plan = {
  name: string;
  description: string;
  price?: string;
  prices?: string[];
  features: string[];
}

function PlanItem({ plan }: { plan: Plan }) {
  return (
    <div
      key={plan.name}
      className="w-sm max-w-full flex flex-col gap-8 group bg-card rounded-2xl p-8"
    >
      <div className="flex flex-col gap-2">
        <p className="text-xl font-semibold">{plan.name}</p>
        <p className="text-sm text-muted-foreground">{plan.description}</p>
      </div>
      {plan.price && (
        <p className="text-3xl font-semibold">
          {plan.price}
          <span className="ml-1 text-xs font-normal text-muted-foreground">{"(НӨАТ орсон)"}</span>
        </p>
      )}
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
          <>
            <li className="flex items-start gap-3" key={index}>
              <CheckIcon className="mt-1 text-sky-300 size-3 shrink-0" />
              {feature}
            </li>
            {plan.prices && plan.prices[index] && (
              <p className="ml-6 text-xl font-semibold">
                {plan.prices[index]}
                <span className="ml-1 text-xs font-normal text-muted-foreground">{"(НӨАТ орсон)"}</span>
              </p>
            )}
          </>
        ))}
      </ul >
    </div>
  )
}

export default function Pricing() {
  const [size, setSize] = useState(["s"])

  const LOS = useCallback(() => {
    const installationPlan = {
      name: "Суурилуулалтын багц",
      description: "Зээлийн багц: 10 тэрбум хүртэл",
      price: "2,145,000 ₮",
      features: [
        "Зээлийн судалгааны автоматжуулалт",
        "Зээлийн шийдвэр гаргалт, олголт, хаалт, хяналт",
        "Барьцаа хөрөнгийн менежмент",
        "Зээлийн бүтээгдэхүүн"
      ],
    }

    const usagePlan = {
      name: "Ашиглалтын багц",
      description: "Зээлийн багц: 10 тэрбум хүртэл",
      price: "660,000 ₮",
      features: [
        "Системийн дэмжлэгийн үйлчилгээ",
        "Тасралтгүй найдвартай ажиллагааны үйлчилгээ",
        "Серверийн арчилгааны үйлчилгээ",
        "10 хүртэл хүсэлт шийдвэрлэх эрх",
      ],
    }

    switch (size[0]) {
      case "s":
        installationPlan.description = "Зээлийн багц: 10 тэрбум хүртэл"
        installationPlan.price = "2,145,000 ₮"
        usagePlan.description = "Зээлийн багц: 10 тэрбум хүртэл"
        usagePlan.price = "660,000 ₮"
        usagePlan.features[3] = "10 хүртэл хүсэлт шийдвэрлэх эрх"
        break;
      case "m":
        installationPlan.description = "Зээлийн багц: 20 тэрбум хүртэл"
        installationPlan.price = "2,310,000 ₮"
        usagePlan.description = "Зээлийн багц: 20 тэрбум хүртэл"
        usagePlan.price = "1,120,000 ₮"
        usagePlan.features[3] = "15 хүртэл хүсэлт шийдвэрлэх эрх"
        break;
      case "l":
        installationPlan.description = "Зээлийн багц: 30 тэрбум хүртэл"
        installationPlan.price = "2,264,000 ₮"
        usagePlan.description = "Зээлийн багц: 30 тэрбум хүртэл"
        usagePlan.price = "2,130,000 ₮"
        usagePlan.features[3] = "20 хүртэл хүсэлт шийдвэрлэх эрх"
        break;
      case "xl":
        installationPlan.description = "Зээлийн багц: 80 тэрбум хүртэл"
        installationPlan.price = "2,970,000 ₮"
        usagePlan.description = "Зээлийн багц: 80 тэрбум хүртэл"
        usagePlan.price = "3,600,000 ₮"
        usagePlan.features[3] = "25 хүртэл хүсэлт шийдвэрлэх эрх"
        break;
      case "2xl":
        installationPlan.description = "Зээлийн багц: 150 тэрбум хүртэл"
        installationPlan.price = "3,300,000 ₮"
        usagePlan.description = "Зээлийн багц: 150 тэрбум хүртэл"
        usagePlan.price = "5,870,000 ₮"
        usagePlan.features[3] = "30 хүртэл хүсэлт шийдвэрлэх эрх"
        break;
      case "3xl":
        installationPlan.description = "Зээлийн багц: 150 тэрбумаас дээш"
        installationPlan.price = "4,290,000 ₮"
        usagePlan.description = "Зээлийн багц: 150 тэрбумаас дээш"
        usagePlan.price = "7,930,000 ₮"
        usagePlan.features[3] = "35 хүртэл хүсэлт шийдвэрлэх эрх"
        break;
    }

    return [installationPlan, usagePlan]
  }, [size])

  const CBS = useCallback(() => {
    const installationPlan = {
      name: "Суурилуулалтын багц",
      description: "Банкны багц: 10 тэрбум хүртэл",
      price: "2,475,000 ₮",
      features: [
        "Санхүүгийн бүтээгдэхүүн",
        "Зээлийн менежмент модуль",
        "Corporate Gateway холболт",
        "СЗХ-ы тайлангийн модуль"
      ],
    }

    const usagePlan = {
      name: "Ашиглалтын багц",
      description: "Банкны багц: 10 тэрбум хүртэл",
      price: "770,000 ₮",
      features: [
        "Системийн дэмжлэгийн үйлчилгээ",
        "Тасралтгүй найдвартай ажиллагааны үйлчилгээ",
        "Серверийн арчилгааны үйлчилгээ",
        "10 хүртэл хүсэлт шийдвэрлэх эрх",
      ],
    }

    switch (size[0]) {
      case "s":
        installationPlan.description = "Зээлийн багц: 10 тэрбум хүртэл"
        installationPlan.price = "2,475,000 ₮"
        usagePlan.description = "Зээлийн багц: 10 тэрбум хүртэл"
        usagePlan.price = "770,000 ₮"
        usagePlan.features[3] = "10 хүртэл хүсэлт шийдвэрлэх эрх"
        break;
      case "m":
        installationPlan.description = "Зээлийн багц: 20 тэрбум хүртэл"
        installationPlan.price = "2,805,000 ₮"
        usagePlan.description = "Зээлийн багц: 20 тэрбум хүртэл"
        usagePlan.price = "1,770,000 ₮"
        usagePlan.features[3] = "15 хүртэл хүсэлт шийдвэрлэх эрх"
        break;
      case "l":
        installationPlan.description = "Зээлийн багц: 30 тэрбум хүртэл"
        installationPlan.price = "3,630,000 ₮"
        usagePlan.description = "Зээлийн багц: 30 тэрбум хүртэл"
        usagePlan.price = "2,860,000 ₮"
        usagePlan.features[3] = "20 хүртэл хүсэлт шийдвэрлэх эрх"
        break;
      case "xl":
        installationPlan.description = "Зээлийн багц: 80 тэрбум хүртэл"
        installationPlan.price = "4,125,000 ₮"
        usagePlan.description = "Зээлийн багц: 80 тэрбум хүртэл"
        usagePlan.price = "4,530,000 ₮"
        usagePlan.features[3] = "25 хүртэл хүсэлт шийдвэрлэх эрх"
        break;
      case "2xl":
        installationPlan.description = "Зээлийн багц: 150 тэрбум хүртэл"
        installationPlan.price = "5,280,000 ₮"
        usagePlan.description = "Зээлийн багц: 150 тэрбум хүртэл"
        usagePlan.price = "6,560,000 ₮"
        usagePlan.features[3] = "30 хүртэл хүсэлт шийдвэрлэх эрх"
        break;
      case "3xl":
        installationPlan.description = "Зээлийн багц: 150 тэрбумаас дээш"
        installationPlan.price = "5,610,000 ₮"
        usagePlan.description = "Зээлийн багц: 150 тэрбумаас дээш"
        usagePlan.price = "7,460,000 ₮"
        usagePlan.features[3] = "35 хүртэл хүсэлт шийдвэрлэх эрх"
        break;
    }

    return [installationPlan, usagePlan]
  }, [size])

  const Additional = useCallback(() => {
    const plan = {
      name: "Нэмэлт багц",
      description: "Зээлийн багц: 10 тэрбум хүртэл",
      features: [
        "BSA банкны дансны хуулга таних, боловсруулах систем",
        "Автотээврийн хэрэгслийн зах зээлийн үнэлгээ бүхий скоринг",
        "АТҮТ ТӨҮГ-ын автотээврийн хэрэгслийн нэр, өмчлөлийг тоон гарын үсэг ашиглан цахимаар шилжүүлэх хүсэлтийг шийдвэрлэх систем"
      ],
      prices: [
        "1,000,000 ₮",
        "1,000,000 ₮",
        "1,000,000 ₮"
      ]
    }

    switch (size[0]) {
      case "s":
        plan.description = "Зээлийн багц: 10 тэрбум хүртэл"
        plan.prices = [
          "1,000,000 ₮",
          "1,000,000 ₮",
          "1,000,000 ₮"
        ]
        break;
      case "m":
        plan.description = "Зээлийн багц: 20 тэрбум хүртэл"
        plan.prices = [
          "1,200,000 ₮",
          "1,000,000 ₮",
          "1,000,000 ₮"
        ]
        break;
      case "l":
        plan.description = "Зээлийн багц: 30 тэрбум хүртэл"
        plan.prices = [
          "1,500,000 ₮",
          "1,000,000 ₮",
          "1,000,000 ₮"
        ]
        break;
      case "xl":
        plan.description = "Зээлийн багц: 80 тэрбум хүртэл"
        plan.prices = [
          "1,800,000 ₮",
          "1,200,000 ₮",
          "1,200,000 ₮"
        ]
        break;
      case "2xl":
        plan.description = "Зээлийн багц: 150 тэрбум хүртэл"
        plan.prices = [
          "2,000,000 ₮",
          "1,200,000 ₮",
          "1,500,000 ₮"
        ]
        break;
      case "3xl":
        plan.description = "Зээлийн багц: 150 тэрбумаас дээш"
        plan.prices = [
          "2,500,000 ₮",
          "1,500,000 ₮",
          "1,500,000 ₮"
        ]
        break;
    }

    return plan
  }, [size])

  return (
    <div className="container h-full md:max-w-7xl mx-auto px-8 md:px-0 flex flex-col items-center justify-between gap-16">
      <AnimatedContent
        className="w-full flex flex-col items-center gap-4"
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
      <Tabs className="items-center gap-8">
        <TabsList variant="line">
          <TabsTrigger value="los">
            <HandCoinsIcon /> {"LOS (Loan Origination System)"}
          </TabsTrigger>
          <TabsTrigger value="cbs">
            <LandmarkIcon /> {"CBS (Core Banking System)"}
          </TabsTrigger>
          <TabsTrigger value="additional">
            <PlusIcon />
            {"Нэмэлт багц"}
          </TabsTrigger>
        </TabsList>
        <div className="flex items-center gap-4">
          <Label>{"Choose your size:"}</Label>
          <ToggleGroup
            size="lg"
            variant="outline"
            spacing={1}
            value={size}
            onValueChange={(value) => value.length !== 0 ? setSize(value) : setSize(["s"])}
          >
            <ToggleGroupItem value="s" aria-label="s">
              {"S"}
            </ToggleGroupItem>
            <ToggleGroupItem value="m" aria-label="m">
              {"M"}
            </ToggleGroupItem>
            <ToggleGroupItem value="l" aria-label="l">
              {"L"}
            </ToggleGroupItem>
            <ToggleGroupItem value="xl" aria-label="xl">
              {"XL"}
            </ToggleGroupItem>
            <ToggleGroupItem value="2xl" aria-label="2xl">
              {"2XL"}
            </ToggleGroupItem>
            <ToggleGroupItem value="3xl" aria-label="3xl">
              {"3XL"}
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <TabsContent value="los" className="w-full flex md:flex-row flex-col items-start justify-center gap-8">
          {LOS().map((plan) => <PlanItem key={plan.name} plan={plan} />)}
        </TabsContent>
        <TabsContent value="cbs" className="w-full flex md:flex-row flex-col items-start justify-center gap-8">
          {CBS().map((plan) => <PlanItem key={plan.name} plan={plan} />)}
        </TabsContent>
        <TabsContent value="additional" className="w-full flex md:flex-row flex-col items-start justify-center gap-8">
          <PlanItem plan={Additional()} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
