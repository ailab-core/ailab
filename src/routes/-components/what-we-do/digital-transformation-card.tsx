import {
  BrainCircuitIcon,
  FileTextIcon,
  ImageIcon,
  VideoIcon,
} from "lucide-react"
import LogoLoop from "@/components/LogoLoop"

export default function DigitalTransformationCard() {
  return (
    <div className="bg-card rounded-md flex flex-col gap-4 overflow-hidden py-8">
      <div className="flex flex-col gap-4 px-6">
        <p className="flex items-center gap-2 text-xl font-black">
          <BrainCircuitIcon className="inline-block" />
          {"Digital transformation"}
        </p>
        <ul className="list-disc list-inside text-muted-foreground">
          <li>AI based data processing</li>
          <li>Business process automation</li>
          <li>Fintech solutions, Risk assessment, and credit scoring</li>
        </ul>
      </div>
      <div className="relative h-min">
        <LogoLoop
          logos={[
            {
              node: (
                <div className="bg-secondary border p-2 rounded-lg hover:border-sky-300 duration-300 transition-colors">
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
                <div className="bg-secondary border p-2 rounded-lg hover:border-sky-300 duration-300 transition-colors">
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
                <div className="bg-secondary border p-2 rounded-lg hover:border-sky-300 duration-300 transition-colors">
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
    </div>
  )
}
