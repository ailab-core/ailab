import {
  FileTextIcon,
  ImageIcon,
  VideoIcon,
} from "lucide-react"
import { LogoLoop } from "@/components/logo-loop"
import { AnimateIcon } from "@/components/animate-ui/icons/icon"
import { BotIcon } from "@/components/animate-ui/icons/bot"
import { getTranslations } from "next-intl/server"

export default async function DigitalTransformationCard() {
  const t = await getTranslations("home.whatWeDo.digitalTransformation")

  return (
    <AnimateIcon
      className="border-t border-dashed flex flex-col gap-4 overflow-hidden py-8"
      animateOnHover
      loop
    >
      <div className="flex flex-col gap-4 px-6">
        <p className="flex items-center gap-2 text-lg font-bold">
          <BotIcon className="inline-block" />
          {t("title")}
        </p>
        <ul className="text-sm list-disc list-inside text-muted-foreground">
          <li>{t("item1")}</li>
          <li>{t("item2")}</li>
          <li>{t("item3")}</li>
        </ul>
      </div>
      <div className="relative h-min">
        <LogoLoop
          logos={[
            {
              node: (
                <div className="bg-card text-muted-foreground border p-2 hover:border-sky-300 duration-300 transition-colors rounded-xl">
                  <FileTextIcon />
                </div>
              )
            }
          ]}
          speed={30}
          className="pointer-events-auto"
          direction="left"
          logoHeight={60}
          gap={20}
          hoverSpeed={0}
        />
        <LogoLoop
          logos={[
            {
              node: (
                <div className="bg-card text-muted-foreground border p-2 hover:border-sky-300 duration-300 transition-colors rounded-xl">
                  <ImageIcon />
                </div>
              )
            }
          ]}
          speed={30}
          className="pointer-events-auto"
          direction="left"
          logoHeight={60}
          gap={20}
          hoverSpeed={0}
        />
        <LogoLoop
          logos={[
            {
              node: (
                <div className="bg-card text-muted-foreground border p-2 hover:border-sky-300 duration-300 transition-colors rounded-xl">
                  <VideoIcon />
                </div>
              )
            }
          ]}
          speed={30}
          className="pointer-events-auto"
          direction="left"
          logoHeight={60}
          gap={20}
          hoverSpeed={0}
        />
      </div>
    </AnimateIcon>
  )
}
