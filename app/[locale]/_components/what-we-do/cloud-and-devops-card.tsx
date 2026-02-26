import { LayersIcon } from "@/components/animate-ui/icons/layers"
import { AnimateIcon } from "@/components/animate-ui/icons/icon"
import { CloudUploadIcon } from "@/components/animate-ui/icons/cloud-upload"
import { BinaryIcon } from "@/components/animate-ui/icons/binary"
import { CloudLightningIcon } from "@/components/animate-ui/icons/cloud-lightning"
import { BetweenHorizontalEndIcon } from "@/components/animate-ui/icons/between-horizontal-end"

export default function CloudAndDevOpsCard() {
  return (
    <AnimateIcon
      className="px-6 py-8 flex flex-col gap-4 overflow-hidden group"
      animateOnHover
    >
      <p className="flex items-center gap-2 text-xl font-bold">
        <CloudLightningIcon className="inline-block stroke-2" />
        {"Cloud & DevOps"}
      </p>
      <ul className="text-sm md:text-base list-disc list-inside text-muted-foreground">
        <li>Cloud implementation</li>
        <li>CI/CD automation</li>
        <li>Data scalability</li>
        <li>Data management, and quality assurance (checklist)</li>
        <li>High available infrastructure</li>
      </ul>
      <div className="flex flex-col items-center mt-4">
        <div className="bg-secondary border rounded-lg flex justify-center items-center w-full group p-4">
          <BinaryIcon className="bg-secondary p-2 text-muted-foreground size-14 rounded-lg border group-hover:border-sky-300 shrink-0 group-hover:text-sky-300 duration-300 transition-all" />
          <div className="w-full border-t border-b-0 border-dashed border-border group-hover:border-sky-300 duration-300 delay-100" />
          <BetweenHorizontalEndIcon className="bg-secondary p-2 text-muted-foreground size-14 rounded-lg border group-hover:border-sky-300 shrink-0 group-hover:text-sky-300 duration-300 transition-all" />
          <div className="w-full border-t border-b-0 border-dashed border-border group-hover:border-sky-300 duration-300 delay-200" />
          <CloudUploadIcon className="bg-secondary p-2 text-muted-foreground size-14 rounded-lg border group-hover:border-sky-300 shrink-0 group-hover:text-sky-300 duration-300 transition-all" />
          <div className="w-full border-t border-b-0 border-dashed border-border group-hover:border-sky-300 duration-300 delay-400" />
          <LayersIcon className="bg-secondary p-2 text-muted-foreground size-14 rounded-lg border group-hover:border-sky-300 shrink-0 group-hover:text-sky-300 duration-300 transition-all" />
        </div>
      </div>
    </AnimateIcon>
  )
}
