import {
  CloudIcon,
  GitCommitHorizontalIcon,
  PackageIcon,
  RocketIcon,
  ShieldCheckIcon,
} from 'lucide-react'
import { Card } from './card'

const STAGES = [
  GitCommitHorizontalIcon,
  PackageIcon,
  ShieldCheckIcon,
  RocketIcon,
]

const POINTS = [
  'Cloud implementation',
  'CI/CD automation',
  'Data scalability',
  'Data management and quality assurance',
  'High-availability infrastructure',
]

export function CloudDevOps() {
  return (
    <Card
      icon={CloudIcon}
      title="Cloud & DevOps"
      lead="Infrastructure that stays up"
      rest="and ships changes safely, many times a day."
    >
      <div className="relative mx-6 mt-8 flex items-center justify-between">
        <div className="absolute inset-x-5 top-1/2 border-t border-dashed border-border" />
        <div className="absolute inset-x-5 top-1/2 animate-[slide_4s_linear_infinite]">
          <span className="block size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-soft shadow-[0_0_12px_2px] shadow-brand-soft/60" />
        </div>
        {STAGES.map((Icon, index) => (
          <span
            key={index}
            className="relative flex size-10 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground"
            style={{
              animation: `glow 4s ${index * 1.33 - 0.7}s linear infinite`,
            }}
          >
            <Icon className="size-4" />
          </span>
        ))}
      </div>
      <ul className="flex flex-col gap-1.5 p-6 text-sm text-muted-foreground">
        {POINTS.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </Card>
  )
}
