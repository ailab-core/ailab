import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"

function SocialIcon({
  name,
  href,
}: {
  name: string,
  href: string,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 size-12 hover:bg-sky-300 transition-colors duration-300"
    >
      <img src={`/assets/brands/${name}.svg`} alt={name} className="invert" />
    </a>
  )
}

export default function Footer() {
  const now = new Date()

  return (
    <div className="dark text-foreground bg-background pt-36 pb-6 space-y-36">
      <div className="container mx-auto grid grid-cols-12">
        <div className="col-span-6 flex flex-col gap-4">
          <p className="text-6xl font-bold mb-2">{"Get In Touch"}</p>
          <a className="text-2xl font-semibold border-b-2 border-b-transparent hover:border-b-white flex items-center gap-4 w-fit transition-all duration-300 cursor-pointer">
            <MailIcon />
            {"info@ailab.mn"}
          </a>
          <a className="text-2xl font-semibold border-b-2 border-b-transparent hover:border-b-white flex items-center gap-4 w-fit transition-all duration-300 cursor-pointer">
            <PhoneIcon />{"+976 7777-2210"}
          </a>
          <a className="text-2xl font-semibold border-b-2 border-b-transparent hover:border-b-white flex items-center gap-4 w-fit transition-all duration-300 cursor-pointer">
            <MapPinIcon className="shrink-0" />
            {"#1102, IC Tower, Paris street, 1st khoroo, SB District, UB, Mongolia"}
          </a>
        </div>
        <div className="col-span-6 flex gap-4">
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-12 items-center">
        <div className="col-span-6 flex gap-2">
          <SocialIcon name="facebook" href="https://www.facebook.com/profile.php?id=61569157168011" />
          <SocialIcon name="linkedin" href="https://www.linkedin.com/company/ailabllc" />
          <SocialIcon name="github" href="https://github.com/ailab-core" />
        </div>
        <div className="col-span-6">
          <p className="text-sm">{`Copyright © ${now.getFullYear()} AILab. All rights reserved.`}</p>
        </div>
      </div>
    </div>
  )
}

