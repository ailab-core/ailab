import { LayersIcon } from "@/components/animate-ui/icons/layers"
import { AnimateIcon } from "@/components/animate-ui/icons/icon"
import { CloudUploadIcon } from "@/components/animate-ui/icons/cloud-upload"
import { BinaryIcon } from "@/components/animate-ui/icons/binary"
import { CloudLightningIcon } from "@/components/animate-ui/icons/cloud-lightning"
import { BetweenHorizontalEndIcon } from "@/components/animate-ui/icons/between-horizontal-end"

export default function CloudAndDevOpsCard() {
  return (
    <AnimateIcon
      className="bg-card rounded-md px-6 py-8 flex flex-col gap-4 overflow-hidden group"
      animateOnHover
    >
      <p className="flex items-center gap-2 text-xl font-black">
        <CloudLightningIcon className="inline-block stroke-2" />
        {"Cloud & DevOps"}
      </p>
      <ul className="list-disc list-inside text-muted-foreground">
        <li>Cloud implementation</li>
        <li>CI/CD automation</li>
        <li>Data scalability</li>
        <li>Data management, and quality assurance (checklist)</li>
        <li>High available infrastructure</li>
      </ul>
      <div className="flex flex-col items-center mt-4">
        <div className="flex justify-center items-center w-full group">
          <div className="bg-secondary border group-hover:border-sky-300 rounded-lg px-4 py-2 flex flex-col justify-center items-center gap-2 duration-300 size-20 shrink-0">
            <BinaryIcon className="text-muted-foreground size-8 shrink-0 group-hover:text-sky-300 duration-300 transition-all" />
            <p className="text-xs font-mono text-muted-foreground">
              {"gitlab"}
            </p>
          </div>
          <div className="w-full border-t border-b-0 border-dashed border-border group-hover:border-sky-300 duration-300 delay-100" />
          <div className="bg-secondary border group-hover:border-sky-300 rounded-lg px-4 py-2 flex flex-col justify-center items-center gap-2 duration-300 delay-100 size-20 shrink-0">
            <BetweenHorizontalEndIcon className="text-muted-foreground size-8 shrink-0 group-hover:text-sky-300 duration-300 transition-all delay-100" />
            <p className="text-xs font-mono text-muted-foreground">
              {"k8s"}
            </p>
          </div>
          <div className="w-full border-t border-b-0 border-dashed border-border group-hover:border-sky-300 duration-300 delay-200" />
          <div className="bg-secondary border group-hover:border-sky-300 rounded-lg px-4 py-2 flex flex-col justify-center items-center gap-2 duration-300 delay-300 size-20 shrink-0">
            <CloudUploadIcon className="text-muted-foreground size-8 shrink-0 group-hover:text-sky-300 duration-300 transition-all delay-300" />
            <p className="text-xs font-mono text-muted-foreground">
              {"almalinux"}
            </p>
          </div>
          <div className="w-full border-t border-b-0 border-dashed border-border group-hover:border-sky-300 duration-300 delay-400" />
          <div className="bg-secondary border group-hover:border-sky-300 rounded-lg px-4 py-2 flex flex-col justify-center items-center gap-2 duration-300 delay-500 size-20 shrink-0">
            <LayersIcon className="text-muted-foreground size-8 shrink-0 group-hover:text-sky-300 duration-300 delay-500 transition-all" />
            <p className="text-xs font-mono text-muted-foreground">
              {"psql"}
            </p>
          </div>
        </div>
      </div>
    </AnimateIcon>
  )
}
