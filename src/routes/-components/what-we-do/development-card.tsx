import { BracesIcon, CodeIcon, TerminalIcon } from "lucide-react"

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
    <div className="bg-card rounded-md px-6 py-8 flex flex-col gap-4 overflow-hidden relative group">
      <p className="flex items-center gap-2 text-xl font-black">
        <CodeIcon className="inline-block" />
        {"Development"}
      </p>
      <p className="text-muted-foreground">
        {"Building adaptive financial software solutions that merge technology and design to create unique, user-first experiences"}
      </p>
      <div className="relative">
        <div className="bg-card h-120 border border-border rounded-md overflow-hidden transition-colors duration-300 mt-8">
          <p className="text-xs text-muted-foreground bg-secondary px-2 py-1.5 flex items-center gap-1">
            <BracesIcon className="inline-block size-4" />
            Neovim
          </p>
          <hr />
          <p
            className="text-xs text-muted-foreground font-mono p-4 flex flex-col"
            dangerouslySetInnerHTML={{ __html: CODE_SNIPPET.replace(/\n/g, "<br>").replace(/ /g, "&nbsp;") }}
          />
        </div>
        <div className="absolute h-120 top-40 left-20 w-xl bg-card border border-border rounded-md group-hover:border-sky-300 overflow-hidden transition-colors duration-300">
          <p className="text-xs text-muted-foreground bg-secondary px-2 py-1.5 flex items-center gap-1">
            <TerminalIcon className="inline-block size-4" />
            Terminal
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
    </div>
  )
}
