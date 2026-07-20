import { BracesIcon, TerminalIcon } from "lucide-react"
import { ChevronLeftRightIcon } from "#/components/animate-ui/icons/chevron-left-right"
import { AnimateIcon } from "#/components/animate-ui/icons/icon"

const CODE_SNIPPET = `package com.example.springboot;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FinanceController {

  @GetMapping("/")
  public String index() {
    return "Welcome to the Finance API!";
  }
}
`

const TERMINAL_SNIPPET = `> git clone

> cd finance-api

> ./mvnw spring-boot:run

> curl http://localhost:8080
Welcome to the Finance API!
`


export default function DevelopmentCard() {
  return (
    <AnimateIcon
      className="dark bg-background text-foreground p-4 flex flex-col gap-12 overflow-hidden relative group"
      animateOnHover
    >
      <p className="flex items-center gap-2 text-2xl font-black uppercase">
        <ChevronLeftRightIcon className="inline-block stroke-3" />
        {"Development"}
      </p>
      <div className="relative flex-1 overflow-hidden">
        <div className="bg-card h-80 border border-border overflow-hidden transition-colors duration-300">
          <p className="text-xs text-muted-foreground bg-card px-2 py-1.5 flex items-center gap-1">
            <BracesIcon className="inline-block size-4" />
            {"neovim"}
          </p>
          <hr />
          <p
            className="text-xs text-muted-foreground font-mono p-4 flex flex-col"
            dangerouslySetInnerHTML={{ __html: CODE_SNIPPET.replace(/\n/g, "<br>").replace(/ /g, "&nbsp;") }}
          />
        </div>
        <div className="absolute h-80 top-40 left-20 w-xl bg-card border border-border group-hover:border-sky-300 overflow-hidden transition-colors duration-300">
          <p className="text-xs text-muted-foreground bg-card px-2 py-1.5 flex items-center gap-1">
            <TerminalIcon className="inline-block size-4" />
            {"terminal"}
          </p>
          <hr />
          <p
            className="text-xs text-muted-foreground font-mono p-4 flex flex-col"
            dangerouslySetInnerHTML={{ __html: TERMINAL_SNIPPET.replace(/\n/g, "<br>").replace(/ /g, "&nbsp;") }}
          />
          <p className="text-xs text-muted-foreground font-mono p-4 pt-0 flex items-center gap-2">
            {"> "}
            <span className="inline-block bg-white w-1.5 h-4 animate-caret-blink" />
          </p>
        </div>
      </div>
      <p className="text-lg font-semibold leading-tight">
        {"Building adaptive financial software solutions that merge technology and design to create unique, user-first experiences"}
      </p>
    </AnimateIcon>
  )
}
