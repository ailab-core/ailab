import {
  PackageIcon,
} from "lucide-react"
import { UsersIcon } from "@/components/animate-ui/icons/users"
import { BlocksIcon } from "@/components/animate-ui/icons/blocks"
import { AnimateIcon } from "@/components/animate-ui/icons/icon"
import { ClipboardListIcon } from "@/components/animate-ui/icons/clipboard-list"
import { LockKeyholeIcon } from "@/components/animate-ui/icons/lock-keyhole"
import { HouseWifiIcon } from "@/components/animate-ui/icons/house-wifi"

const FOLDER_STRUCTURE = `finance-api/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── example/
│   │   │           └── springboot/
│   │   │               ├── FinanceController.java
│   │   │               └── FinanceApplication.java
│   │   └── resources/
│   │       └── application.properties
├── .gitignore
├── mvnw
├── mvnw.cmd
├── pom.xml
`

export default function FlexibleSystemArchitectureCard() {
  return (
    <AnimateIcon
      className="bg-card rounded-md pt-8 overflow-hidden relative group"
      animateOnHover
    >
      <div className="px-6 flex flex-col gap-4 h-full">
        <p className="flex items-center gap-2 text-xl font-black">
          <BlocksIcon className="inline-block stroke-2" />
          {"Flexible system architecture"}
        </p>
        <p className="text-muted-foreground pb-4">
          {"Our flexible system architecture adapts to your growing business needs. With modular design and scalable infrastructure, it enables seamless integration, faster updates, and reliable performance—ensuring your technology evolves without disruption."}
        </p>
        <div className="relative">
          <div className="mx-2 mb-4 md:mx-8 z-0 bg-card h-120 border border-border rounded-md overflow-hidden transition-colors duration-300">
            <p
              className="text-xs text-muted-foreground font-mono p-4 flex flex-col"
              dangerouslySetInnerHTML={{ __html: FOLDER_STRUCTURE.replace(/\n/g, "<br>").replace(/ /g, "&nbsp;") }}
            />
          </div>
          <div className="mt-auto grid grid-cols-5 gap-2 bg-secondary border rounded-lg p-4 absolute z-10 bottom-4 right-0">
            <p className="col-span-5 text-center text-sm text-muted-foreground font-mono pb-4">
              {"PRODUCT SOLUTION"}
            </p>
            <div className="col-span-2 bg-secondary border border-dashed p-2 rounded-lg w-full flex flex-col justify-center items-center gap-2 group-hover:border-sky-300 duration-300 transition-colors">
              <ClipboardListIcon className="text-muted-foreground size-8 group-hover:text-sky-300 duration-300 transition-colors" />
              <p className="text-center text-xs font-mono text-muted-foreground">
                {"Enterprise Resource Planning"}
              </p>
            </div>
            <hr className="my-auto border-dashed group-hover:border-sky-300 duration-300 transition-colors delay-100" />
            <div className="col-span-2 bg-secondary border border-dashed p-2 rounded-lg w-full flex flex-col justify-center items-center gap-2 group-hover:border-sky-300 duration-300 transition-colors delay-200">
              <UsersIcon className="text-muted-foreground size-8 group-hover:text-sky-300 duration-300 transition-colors delay-200" />
              <p className="text-center text-xs font-mono text-muted-foreground">
                {"Customer Relationship Management"}
              </p>
            </div>
            <hr className="col-span-2 mx-auto h-16 w-1 border-dashed border-t-0 border-l group-hover:border-sky-300 duration-300 transition-colors delay-700" />
            <div className="w-full h-full flex justify-center items-center">
              <PackageIcon className="size-16 stroke-1 text-muted-foreground group-hover:text-sky-300 mx-auto duration-300 transition-colors delay-800" />
            </div>
            <hr className="col-span-2 mx-auto h-16 w-1 border-dashed border-t-0 border-l group-hover:border-sky-300 duration-300 transition-colors delay-300" />
            <div className="col-span-2 bg-secondary border border-dashed p-2 rounded-lg w-full flex flex-col justify-center items-center gap-2 group-hover:border-sky-300 duration-300 transition-colors delay-600">
              <LockKeyholeIcon className="text-muted-foreground size-8 group-hover:text-sky-300 duration-300 transition-colors delay-600" />
              <p className="text-center text-xs font-mono text-muted-foreground">
                {"Payment system"}
              </p>
            </div>
            <hr className="my-auto border-dashed group-hover:border-sky-300 duration-300 transition-colors delay-500" />
            <div className="col-span-2 bg-secondary border border-dashed p-2 rounded-lg w-full flex flex-col justify-center items-center gap-2 group-hover:border-sky-300 duration-300 transition-colors delay-400">
              <HouseWifiIcon className="text-muted-foreground size-8 group-hover:text-sky-300 duration-300 transition-colors delay-400" />
              <p className="text-center text-xs font-mono text-muted-foreground">{"Banking API"}</p>
            </div>
          </div>
        </div>
      </div>
    </AnimateIcon>
  )
}
