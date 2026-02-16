import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MapPinIcon
} from "lucide-react";
import { Button } from "./ui/button";

const date = new Date();

export default function Footer() {
  return (
    <div className="container mx-auto px-4">
      <div className="border-t">
        <div className="grid grid-cols-1 md:grid-cols-3 py-12 gap-12 md:gap-0">
          <div className="flex flex-col gap-4">
            <img src="/assets/logos/ailab.svg" alt="AI Lab Logo" className="w-64 h-auto" />
            <div className="flex gap-2">
              <Button className="rounded-full" size="icon-xl" variant="ghost" render={
                <a href="https://www.facebook.com/profile.php?id=61569157168011">
                  <FacebookIcon />
                </a>
              } />
              <Button className="rounded-full" size="icon-xl" variant="ghost" render={
                <a href="https://www.instagram.com/ailabmn/">
                  <InstagramIcon />
                </a>
              } />
              <Button className="rounded-full" size="icon-xl" variant="ghost" render={
                <a href="https://www.linkedin.com/company/ailabllc/posts/?feedView=all">
                  <LinkedinIcon />
                </a>
              } />
              <Button className="rounded-full" size="icon-xl" variant="ghost" render={
                <a href="https://github.com/ailab-core">
                  <GithubIcon />
                </a>
              } />
            </div>
            <div className="mt-16">
              <p className="text-muted-foreground text-sm mb-2">
                Certified by
              </p>
              <img src="/assets/brands/iso.svg" alt="ISO Certified" className="w-24 h-auto invert -mx-4" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <a className="text-2xl font-black hover:text-sky-300" href="/about-us">
              About us
            </a>
            <a className="text-2xl font-black hover:text-sky-300" href="/solutions">
              Solutions
            </a>
            <a className="text-2xl font-black hover:text-sky-300" href="/insights">
              Insights
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-black">{"info@ailab.mn"}</p>
            <Button size="icon-xl" render={
              <a href="https://maps.app.goo.gl/yZgNimwLgoo1iEgo6">
                <MapPinIcon />
              </a>
            }>
            </Button>
            <p className="text-muted-foreground">{"+976 7777-2210"}</p>
            <p className="text-muted-foreground">
              {"Address IC Tower, 11th Floor Sukhbaatar District, 1st Khoroo 42 Paris Street, Ulaanbaatar, Mongolia"}
            </p>
          </div>
        </div>
        <div className="border-t py-4">
          <p className="text-sm text-muted-foreground text-center w-full">
            {`© ${date.getFullYear()} Ailab LLC. All rights reserved.`}
          </p>
        </div>
      </div>
    </div>
  )
}
