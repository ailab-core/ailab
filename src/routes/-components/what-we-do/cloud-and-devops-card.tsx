import { LayersIcon } from "#/components/animate-ui/icons/layers"
import { AnimateIcon } from "#/components/animate-ui/icons/icon"
import { CloudUploadIcon } from "#/components/animate-ui/icons/cloud-upload"
import { BinaryIcon } from "#/components/animate-ui/icons/binary"
import { CloudLightningIcon } from "#/components/animate-ui/icons/cloud-lightning"
import { BetweenHorizontalEndIcon } from "#/components/animate-ui/icons/between-horizontal-end"

export default function CloudAndDevOpsCard() {
  return (
    <AnimateIcon
      className="dark bg-background text-foreground px-4 py-4 flex flex-col gap-8 overflow-hidden group"
      animateOnHover
    >
      <p className="flex items-center gap-2 text-2xl font-black uppercase">
        <CloudLightningIcon className="inline-block stroke-3" />
        {"Cloud & DevOps"}
      </p>
      <div className="flex flex-col items-center overflow-hidden">
        <div className="bg-card border flex justify-center items-center w-full group p-4 text-muted-foreground">
          <BinaryIcon className="bg-card p-2 size-14 border group-hover:border-sky-300 shrink-0 group-hover:text-sky-300 duration-300 transition-all" />
          <div className="w-full border-t-2 border-b-0 border-dashed border-border group-hover:border-sky-300 duration-300 delay-100" />
          <BetweenHorizontalEndIcon className="bg-card p-2 size-14 border group-hover:border-sky-300 shrink-0 group-hover:text-sky-300 duration-300 transition-all" />
          <div className="w-full border-t-2 border-b-0 border-dashed border-border group-hover:border-sky-300 duration-300 delay-200" />
          <CloudUploadIcon className="bg-card p-2 size-14 border group-hover:border-sky-300 shrink-0 group-hover:text-sky-300 duration-300 transition-all" />
          <div className="w-full border-t-2 border-b-0 border-dashed border-border group-hover:border-sky-300 duration-300 delay-400" />
          <LayersIcon className="bg-card p-2 size-14 border group-hover:border-sky-300 shrink-0 group-hover:text-sky-300 duration-300 transition-all" />
        </div>
      </div>
      <ul className="list-none list-inside text-lg font-semibold leading-tight">
        <li>{"Cloud implementation"}</li>
        <li>{"CI/CD automation"}</li>
        <li>{"Data scalability"}</li>
        <li>{"Data management, and quality assurance"}</li>
        <li>{"High available infrastructure"}</li>
      </ul>
    </AnimateIcon>
  )
}
