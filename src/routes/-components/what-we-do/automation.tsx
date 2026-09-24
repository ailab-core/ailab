import { CheckIcon, MousePointer2Icon, WorkflowIcon } from 'lucide-react'
import { Card } from './card'

const STEPS = [
  'Application received',
  'Documents verified',
  'Loan approved',
  'Funds disbursed',
]

export function Automation() {
  return (
    <Card
      icon={WorkflowIcon}
      title="Process automation"
      lead="Workflows that run themselves,"
      rest="with fewer manual hand-offs between departments."
    >
      <div className="absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:linear-gradient(to_bottom,transparent,black_30%)]" />
      <ol className="relative flex flex-col gap-2.5 p-6 pt-8">
        {STEPS.map((step, index) => (
          <li
            key={step}
            className="flex w-fit items-center gap-2 rounded-full border border-border bg-background py-1.5 pr-3.5 pl-2 text-xs text-foreground"
            style={{
              animation: `appear 7s ${index * 0.8}s ease-out infinite both`,
            }}
          >
            <span className="flex size-4 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
              <CheckIcon className="size-3" />
            </span>
            {step}
          </li>
        ))}
      </ol>
      <MousePointer2Icon className="absolute right-[22%] bottom-10 size-5 animate-[wander_9s_ease-in-out_infinite] fill-background text-muted-foreground" />
    </Card>
  )
}
