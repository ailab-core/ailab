import { AnimatedContent } from "#/components"
import { LinkIcon } from "lucide-react";

export default function Work() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-12 md:gap-24 px-4 md:px-0 pb-24">
      <p className="text-4xl md:text-6xl w-full font-bold">
        {"Our proud creations"}
        <span className="text-xl md:text-2xl font-semibold text-muted-foreground block mt-2 md:mt-6">
          {"Explore some of our latest projects"}
        </span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-y-64">
        <AnimatedContent id="work" className="col-span-full md:col-span-6">
          <a
            href="https://pocket.mn/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-12 group cursor-pointer hover:cursor-none"
          >
            <div className="p-36 bg-neutral-100 group-hover:scale-105 transition-all duration-300">
              <img
                src="/assets/logos/pocket-vertical.png"
                alt="Pocket"
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-min text-nowrap">
                <p className="text-2xl md:text-4xl font-bold">
                  {"Pocket "}<LinkIcon className="inline-block" />
                </p>
                <hr className="h-0.5 border-none bg-foreground w-0 duration-300 transition-all group-hover:w-full" />
              </div>
              <p className="text-lg font-semibold">{"A comprehensive fintech platform that integrates microloans, BNPL, leasing, savings, and payments. Leveraging AI and IT innovation, it ensures a secure, efficient, and user‑friendly financial ecosystem"}</p>
            </div>
          </a>
        </AnimatedContent>
        <div className="hidden md:block md:col-span-1" />
        <AnimatedContent id="work" delay={.5} className="col-span-full md:col-span-5">
          <a
            href="https://pocket.mn/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-12 group relative top-0 md:top-1/4 cursor-pointer hover:cursor-none"
          >
            <div className="p-36 bg-neutral-100 group-hover:scale-105 transition-all duration-300">
              <img
                src="/assets/logos/pocket-vertical.png"
                alt="Pocket KZ"
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-min text-nowrap">
                <p className="text-2xl md:text-4xl font-bold">{"Pocket KZ "}<LinkIcon className="inline-block" /></p>
                <hr className="h-0.5 border-none bg-foreground w-0 duration-300 transition-all group-hover:w-full" />
              </div>
              <p className="text-lg font-semibold">{"Pocket brings advanced fintech and AI solutions to Central Asia, powering microloans, payments, and enterprise systems"}</p>
            </div>
          </a>
        </AnimatedContent>
        <div className="col-span-full md:col-span-2" />
        <AnimatedContent id="work" className="col-span-full md:col-span-10">
          <a
            href="https://worki.mn/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-12 group cursor-pointer hover:cursor-none"
          >
            <div className="w-full p-36 bg-indigo-900 group-hover:scale-105 transition-all duration-300">
              <img
                src="/assets/logos/worki.svg"
                alt="Worki"
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-min text-nowrap">
                <p className="text-2xl md:text-4xl font-bold">{"Worki "}<LinkIcon className="inline-block" /></p>
                <hr className="h-0.5 border-none bg-foreground w-0 duration-300 transition-all group-hover:w-full" />
              </div>
              <p className="text-lg font-semibold">{"Designed with job seekers in mind, the platform uses advanced AI to match talent with opportunity, providing listings, resume building, and career guidance in one seamless experience"}</p>
            </div>
          </a>
        </AnimatedContent>
        <AnimatedContent id="work" className="col-span-full md:col-span-6">
          <a
            href="https://icapital.mn/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-12 group cursor-pointer hover:cursor-none"
          >
            <div className="w-full p-36 bg-blue-900 group-hover:scale-105 transition-all duration-300">
              <img
                src="/assets/logos/icapital.svg"
                alt="ICapital"
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-min text-nowrap">
                <p className="text-2xl md:text-4xl font-bold">{"iCapital "}<LinkIcon className="inline-block" /></p>
                <hr className="h-0.5 border-none bg-foreground w-0 duration-300 transition-all group-hover:w-full" />
              </div>
              <p className="text-lg font-semibold">{"Designed for simplicity and efficiency, the application connects investors to stocks, bonds, and investment opportunities across Mongolia’s major stock exchanges"}</p>
            </div>
          </a>
        </AnimatedContent>
        <div className="hidden md:block md:col-span-1" />
        <AnimatedContent id="work" delay={.5} className="col-span-full md:col-span-5">
          <a
            href="https://finberry.mn/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-12 group relative top-0 md:-top-1/8 cursor-pointer hover:cursor-none"
          >
            <div className="w-full p-36 bg-rose-100 group-hover:scale-105 transition-all duration-300">
              <img
                src="/assets/logos/finberry.svg"
                alt="FinBerry"
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-min text-nowrap">
                <p className="text-2xl md:text-4xl font-bold">{"FinBerry "}<LinkIcon className="inline-block" /></p>
                <hr className="h-0.5 border-none bg-foreground w-0 duration-300 transition-all group-hover:w-full" />
              </div>
              <p className="text-lg font-semibold">{"Designed to help creators and innovators, the platform provides flexible crowdfunding options—donations, rewards, and loans—to connect projects with supporters"}</p>
            </div>
          </a>
        </AnimatedContent>
      </div>
    </div>
  )
}

