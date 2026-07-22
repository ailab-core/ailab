import {
  FileTextIcon,
  ImageIcon,
  VideoIcon,
} from "lucide-react"
import { LogoLoop } from "#/components"
import { AnimateIcon } from "#/components/animate-ui/icons/icon"
import { BotIcon } from "#/components/animate-ui/icons/bot"

export default function DigitalTransformationCard() {
  return (
    <AnimateIcon
      className="dark bg-background text-foreground flex flex-col gap-8 overflow-hidden py-4"
      animateOnHover
      loop
    >
      <p className="flex items-center gap-2 text-lg md:text-2xl font-black uppercase px-4">
        <BotIcon className="inline-block stroke-3" />
        {"Digital transformation"}
      </p>
      <div className="relative h-min">
        <LogoLoop
          logos={[
            {
              node: (
                <div className="bg-card text-muted-foreground border p-2 hover:border-sky-300 duration-300 transition-colors group">
                  <FileTextIcon className="group-hover:stroke-sky-300" />
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
                <div className="bg-card text-muted-foreground border p-2 hover:border-sky-300 duration-300 transition-colors group">
                  <ImageIcon className="group-hover:stroke-sky-300" />
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
                <div className="bg-card text-muted-foreground border p-2 hover:border-sky-300 duration-300 transition-colors group">
                  <VideoIcon className="group-hover:stroke-sky-300" />
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
      <ul className="list-none list-inside text-sm md:text-lg font-semibold leading-tight px-4">
        <li>{"AI based data processing"}</li>
        <li>{"Business process automation"}</li>
        <li>{"Fintech solutions, Risk assessment, and Credit scoring"}</li>
      </ul>
    </AnimateIcon>
  )
}
