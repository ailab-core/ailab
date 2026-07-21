import { cn } from "#/lib/utils";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"
import type { AnchorHTMLAttributes } from "react"

function SocialIcon({ name, href }: { name: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 size-12 hover:bg-sky-200 transition-colors duration-300 group"
    >
      <img src={`/assets/brands/${name}.svg`} alt={name} className="invert group-hover:invert-0 transition-all duration-300" />
    </a>
  )
}

function FooterLink({
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={cn("text-xl font-semibold border-b-2 border-b-transparent hover:border-b-white flex items-center gap-4 w-fit transition-all duration-300 cursor-pointer", className)}
      href=""
      {...props}
    />
  )
}

export function Footer() {
  const now = new Date()

  return (
    <div className="dark text-foreground bg-background pt-36 pb-6 space-y-12 md:space-y-36 px-4 md:px-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">
        <div className="col-span-1 md:col-span-6 flex flex-col gap-4">
          <p className="text-4xl md:text-6xl font-bold mb-2">{"Get In Touch"}</p>
          <FooterLink>
            <MailIcon />
            {"info@ailab.mn"}
          </FooterLink>
          <FooterLink>
            <PhoneIcon />
            {"+976 7777-2210"}
          </FooterLink>
          <FooterLink>
            <MapPinIcon className="shrink-0" />
            {"#1102, IC Tower, Paris street, 1st khoroo, SB District, UB, Mongolia"}
          </FooterLink>
        </div>
        <div className="col-span-1 md:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
          <div className="flex flex-col gap-4">
            <p className="text-lg font-semibold text-muted-foreground">
              {"Links"}
            </p>
            <FooterLink>
              {"Blogs"}
            </FooterLink>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-lg font-semibold text-muted-foreground">
              {"Products"}
            </p>
            <FooterLink href="/finace">
              {"Finace"}
            </FooterLink>
            <FooterLink>
              {"Prop"}
            </FooterLink>
            <FooterLink>
              {"ShMS"}
            </FooterLink>
            <FooterLink>
              {"Efund"}
            </FooterLink>
            <FooterLink>
              {"StockLab"}
            </FooterLink>
          </div>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-6">
        <div className="col-span-1 md:col-span-6 flex gap-2">
          <SocialIcon
            name="facebook"
            href="https://www.facebook.com/profile.php?id=61569157168011"
          />
          <SocialIcon
            name="linkedin"
            href="https://www.linkedin.com/company/ailabllc"
          />
          <SocialIcon name="github" href="https://github.com/ailab-core" />
        </div>
        <div className="col-span-1 md:col-span-6">
          <p className="text-sm">{`Copyright © ${now.getFullYear()} AILab. All rights reserved.`}</p>
        </div>
      </div>
    </div>
  )
}
