import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Button } from "./ui/button";

const date = new Date();

export default function Footer() {
  return (
    <footer className="container md:max-w-7xl mx-auto px-8 md:px-0 mt-32">
      <div className="flex justify-between py-12 border-t gap-12 md:gap-0">
        <div className="flex flex-col gap-4">
          <Image
            src="/assets/logos/ailab.svg"
            alt="AI Lab Logo"
            width={256}
            height={64}
            className="w-48 h-auto"
          />
          <div className="mt-16">
            <p className="text-muted-foreground text-sm mb-2">
              Certified by
            </p>
            <img src="/assets/brands/iso.svg" alt="ISO Certified" className="w-24 h-auto invert -mx-4" />
          </div>
        </div>
        <div className="flex gap-36">
          <div className="flex flex-col gap-4">
            <p className="font-semibold">
              {"Home"}
            </p>
            <a className="text-sm" href="/#what-we-do">
              {"What we do"}
            </a>
            <a className="text-sm" href="/#about-us">
              {"About us"}
            </a>
            <a className="text-sm" href="/#projects">
              {"Projects"}
            </a>
            <a className="text-sm" href="/#blogs">
              {"Blogs"}
            </a>
            <a className="text-sm" href="/#contact-us">
              {"Contact us"}
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-semibold">
              {"Products"}
            </p>
            <Link className="text-sm" href="/finace">
              {"Finace"}
            </Link>
            <Link className="text-sm" href="https://prop.mn/" target="_blank" rel="noopener noreferrer">
              {"Prop"}
            </Link>
            <Link className="text-sm" href="/shms">
              {"ShMS"}
            </Link>
            <Link className="text-sm" href="/efund">
              {"eFund"}
            </Link>
            <Link className="text-sm hover" href="/stocklab">
              {"stocklab"}
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-semibold">
              {"Socials"}
            </p>
            <div className="flex gap-2">
              <Button
                size="icon-lg"
                variant="ghost"
                nativeButton={false}
                render={
                  <a href="https://www.facebook.com/profile.php?id=61569157168011">
                    <FacebookIcon />
                  </a>
                }
              />
              <Button
                size="icon-lg"
                variant="ghost"
                nativeButton={false}
                render={
                  <a href="https://www.instagram.com/ailabmn/">
                    <InstagramIcon />
                  </a>
                }
              />
              <Button
                size="icon-lg"
                variant="ghost"
                nativeButton={false}
                render={
                  <a href="https://www.linkedin.com/company/ailabllc/posts/?feedView=all">
                    <LinkedinIcon />
                  </a>
                }
              />
              <Button
                size="icon-lg"
                variant="ghost"
                nativeButton={false}
                render={
                  <a href="https://github.com/ailab-core">
                    <GithubIcon />
                  </a>
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t py-4">
        <p className="text-sm text-muted-foreground text-center w-full">
          {`© ${date.getFullYear()} Ailab LLC. All rights reserved.`}
        </p>
      </div>
    </footer >
  )
}
