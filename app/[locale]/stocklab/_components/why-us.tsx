import Image from "next/image"
import {
  BanknoteIcon,
  Building2Icon,
  FeatherIcon,
  LandmarkIcon,
  LeafIcon,
  PiggyBankIcon,
  SproutIcon,
} from "lucide-react"
import { AnimateIcon } from "@/components/animate-ui/icons/icon"
import { LockIcon } from "@/components/animate-ui/icons/lock"
import { ChartLineIcon } from "@/components/animate-ui/icons/chart-line"
import { CloudLightningIcon } from "@/components/animate-ui/icons/cloud-lightning"
import { ClipboardListIcon } from "@/components/animate-ui/icons/clipboard-list"
import { UsersIcon } from "@/components/animate-ui/icons/users"
import { AnimatedContent } from "@/components/animated-content"

export default function WhyUs() {
  return (
    <>
      <div className="relative container h-full md:max-w-7xl mx-auto px-8 md:px-0 flex flex-col items-center justify-between gap-16 overflow-hidden">
        <AnimatedContent
          className="w-full flex flex-col gap-4"
          distance={50}
          direction="vertical"
        >
          <div className="bg-slate-200 rounded-full w-min p-4">
            <LeafIcon className="size-8 stroke-neutral-800" />
          </div>
          <p className="text-5xl text-primary-foreground font-semibold">
            {"Манай бүтээгдэхүүнийг сонгох шалтгаан"}
          </p>
          <p className="font-medium text-primary-foreground/60 text-left max-w-4xl">
            {"Бид санхүүгийн технологийн салбарт мэргэшсэн, туршлагатай мэргэжилтнүүдийн багтай бөгөөд манай бүтээгдэхүүн нь Монголын хөрөнгийн биржийн стандартад нийцсэн, найдвартай, хурдан, аюулгүй арилжааны шийдлийг санал болгодог."}
          </p>
        </AnimatedContent>
        <div className="w-full grid grid-cols-12 gap-8">
          <AnimatedContent className="col-span-6">
            <div className="flex flex-col items-center justify-between gap-4 group bg-slate-200/50 rounded-2xl p-8">
              <div className="w-full h-72 flex items-center justify-center p-4 relative group-hover:p-2 transition-padding duration-300">
                <div className="w-full h-full relative">
                  <Image
                    src="/assets/undraw-data-security.svg"
                    alt="undraw-data-security"
                    fill
                  />
                </div>
              </div>
              <p className="w-sm max-w-full text-lg text-primary-foreground font-semibold text-center">
                <a href="https://www.iso.org/standard/27001" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                  {"ISO 27001:2022"}
                </a>
                {" стандартын дагуу мэдээллийн аюулгүй байдал"}
              </p>
            </div>
          </AnimatedContent>
          <AnimatedContent className="col-span-6">
            <AnimateIcon
              className="flex flex-col items-center justify-between gap-4 group bg-slate-200/50 rounded-2xl p-8"
              animateOnHover
            >
              <div className="w-full h-72 flex items-center justify-center p-4 relative group-hover:p-2 transition-padding duration-300">
                <div className="absolute left-1/6 bottom-1/6 border border-slate-300 rounded-full p-3">
                  <ClipboardListIcon className="size-8 text-slate-800" />
                </div>
                <div className="absolute right-1/6 top-1/6 border border-slate-300 rounded-full p-3">
                  <UsersIcon className="size-8 text-slate-800" />
                </div>
                <div className="w-full h-full relative">
                  <Image
                    src="/assets/undraw-spreadsheets.svg"
                    alt="undraw-spreadsheets"
                    fill
                  />
                </div>
              </div>
              <p className="w-sm max-w-full text-lg text-primary-foreground font-semibold text-center">
                {"Санхүүгийн аюулгүй номинал дансны бүртгэл"}
              </p>
            </AnimateIcon>
          </AnimatedContent>
          <AnimatedContent className="col-span-4">
            <AnimateIcon
              className="h-full flex flex-col justify-between items-center gap-4 group bg-slate-200/50 rounded-2xl p-8"
              animateOnHover
            >
              <div className="w-full h-72 flex items-center justify-center p-8 relative">
                <div className="p-8 bg-slate-200 rounded-full group-hover:bg-sky-200 transition-colors duration-300">
                  <CloudLightningIcon className="size-24 text-slate-800" />
                </div>
                <div className="absolute left-1/6 top-1/6 border border-slate-300 rounded-full p-3">
                  <ChartLineIcon className="size-8 text-slate-800" />
                </div>
                <div className="absolute right-1/6 bottom-1/6 border border-slate-300 rounded-full p-3">
                  <LockIcon className="size-8 text-slate-800" />
                </div>
              </div>
              <p className="w-xs max-w-full text-lg text-primary-foreground font-semibold text-center">
                {"100% онлайн, хурдтай, найдвартай арилжаа"}
              </p>
            </AnimateIcon>
          </AnimatedContent>
          <AnimatedContent className="col-span-4">
            <div className="h-full flex flex-col justify-between items-center gap-4 group bg-slate-200/50 rounded-2xl p-8">
              <div className="w-full h-72 flex items-center justify-center p-8 relative">
                <div className="bg-slate-200 w-10/12 h-48 p-6 space-y-2 border border-slate-300 relative">
                  <div className="w-[calc(100%+2px)] h-6 border-x border-slate-300 absolute -left-px -top-6" />
                  <div className="w-6 h-[calc(100%+2px)] border-y border-slate-300 absolute -left-6 -top-px" />
                  <div className="bg-sky-300 w-32 max-w-full h-6 rounded-full mb-6" />
                  <div className="bg-slate-300 w-full h-4 rounded-full" />
                  <div className="bg-slate-300 w-28 max-w-full h-4 rounded-full" />
                  <div className="bg-slate-300 w-12 max-w-full h-4 rounded-full" />
                  <div className="w-6 h-[calc(100%+2px)] border-y border-slate-300 absolute -right-6 -top-px" />
                  <div className="w-[calc(100%+2px)] h-6 border-x border-slate-300 absolute -left-px -bottom-6" />
                </div>
              </div>
              <p className="w-xs max-w-full text-lg text-primary-foreground font-semibold text-center">
                {"Хэрэглэгчид зориулсан хялбар UI/UX"}
              </p>
            </div>
          </AnimatedContent>
          <AnimatedContent className="col-span-4">
            <div className="h-full flex flex-col justify-between items-center gap-4 group bg-slate-200/50 rounded-2xl p-8">
              <div className="w-full h-72">
                <div className="w-full h-72 relative flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                  <div className="size-64 border border-slate-400 opacity-30 rounded-full absolute left-1/2 -translate-x-1/2" />
                  <div className="size-48 border border-slate-400 opacity-60 rounded-full absolute left-1/2 -translate-x-1/2" />
                  <div className="size-32 border border-slate-400 opacity-100 rounded-full absolute left-1/2 -translate-x-1/2" />
                  <SproutIcon className="size-16 text-slate-800 absolute left-1/2 -translate-x-1/2 group-hover:-rotate-6 transition-transform duration-300" />
                  <div className="absolute left-1/6 top-1/6 bg-slate-100 border border-slate-300 rounded-full p-2">
                    <LandmarkIcon className="size-6 text-amber-600" />
                  </div>
                  <div className="absolute right-1/6 top-1/6 bg-slate-100 border border-slate-300 rounded-full p-2">
                    <PiggyBankIcon className="size-6 text-rose-600" />
                  </div>
                  <div className="absolute right-1/6 bottom-1/6 bg-slate-100 border border-slate-300 rounded-full p-2">
                    <BanknoteIcon className="size-6 text-emerald-600" />
                  </div>
                  <div className="absolute left-1/6 bottom-1/6 bg-slate-100 border border-slate-300 rounded-full p-2">
                    <Building2Icon className="size-6 text-sky-600" />
                  </div>
                </div>
              </div>
              <p className="w-xs max-w-full text-lg text-primary-foreground font-semibold text-center">
                {"Брокер, банк, хөрөнгийн биржийн нэгдсэн экосистем"}
              </p>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </>
  )
}
