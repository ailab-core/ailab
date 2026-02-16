import {
  CloudIcon,
  DatabaseIcon,
  GitlabIcon,
  PackageIcon,
  ServerCrashIcon,
} from "lucide-react"

export default function CloudAndDevOpsCard() {
  return (
    <div className="bg-card rounded-md px-6 py-8 flex flex-col gap-4 overflow-hidden group">
      <p className="flex items-center gap-2 text-xl font-black">
        <CloudIcon className="inline-block stroke-2" />
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
            <DatabaseIcon className="stroke-muted-foreground size-8 shrink-0 group-hover:stroke-sky-300 duration-300 transition-all" />
            <p className="text-xs font-mono text-muted-foreground">{"postgres"}</p>
          </div>
          <div className="w-full border-t border-b-0 border-dashed border-border group-hover:border-sky-300 duration-300 delay-100" />
          <div className="bg-secondary border group-hover:border-sky-300 rounded-lg px-4 py-2 flex flex-col justify-center items-center gap-2 duration-300 delay-200 size-20 shrink-0">
            <ServerCrashIcon className="stroke-muted-foreground size-8 shrink-0 group-hover:stroke-sky-300 duration-300 transition-all delay-200" />
            <p className="text-xs font-mono text-muted-foreground">{"almalinux"}</p>
          </div>
          <div className="w-full border-t border-b-0 border-dashed border-border group-hover:border-sky-300 duration-300 delay-300" />
          <div className="bg-secondary border group-hover:border-sky-300 rounded-lg px-4 py-2 flex flex-col justify-center items-center gap-2 duration-300 delay-400 size-20 shrink-0">
            <PackageIcon className="stroke-muted-foreground size-8 shrink-0 group-hover:stroke-sky-300 duration-300 transition-all delay-400" />
            <p className="text-xs font-mono text-muted-foreground">{"kubernetes"}</p>
          </div>
          <div className="w-full border-t border-b-0 border-dashed border-border group-hover:border-sky-300 duration-300 delay-500" />
          <div className="bg-secondary border group-hover:border-sky-300 rounded-lg px-4 py-2 flex flex-col justify-center items-center gap-2 duration-300 delay-600 size-20 shrink-0">
            <GitlabIcon className="stroke-muted-foreground size-8 shrink-0 group-hover:stroke-sky-300 duration-300 transition-all delay-600" />
            <p className="text-xs font-mono text-muted-foreground">{"gitlab"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
