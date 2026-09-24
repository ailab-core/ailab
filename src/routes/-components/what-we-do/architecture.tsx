import { BlocksIcon } from 'lucide-react'
import { Card } from './card'

const MODULES = [
  { label: 'ERP', x: 16, y: 22 },
  { label: 'CRM', x: 12, y: 52 },
  { label: 'Payments', x: 18, y: 82 },
  { label: 'Banking API', x: 82, y: 22 },
  { label: 'Credit bureau', x: 88, y: 52 },
  { label: 'Mobile app', x: 82, y: 82 },
]

export function Architecture() {
  return (
    <Card
      icon={BlocksIcon}
      title="System architecture"
      lead="Modular systems that grow with you,"
      rest="integrating with what you already run so new products ship without disruption."
      className="md:col-span-2"
    >
      <div className="relative h-64 md:h-full md:min-h-60">
        <svg
          className="absolute inset-0 size-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {MODULES.map((module, index) => (
            <line
              key={module.label}
              x1="50"
              y1="52"
              x2={module.x}
              y2={module.y}
              vectorEffect="non-scaling-stroke"
              className="stroke-border"
              strokeDasharray="4 4"
              style={{
                animation: `dash 1.6s ${index * -0.25}s linear infinite`,
              }}
            />
          ))}
        </svg>
        <span className="absolute top-[52%] left-1/2 flex size-16 -translate-1/2 items-center justify-center rounded-2xl border border-brand-soft/40 bg-background shadow-[0_0_40px] shadow-brand-soft/25">
          <img src="/assets/logos/ailab-icon.svg" alt="" className="size-7" />
        </span>
        {MODULES.map((module, index) => (
          <span
            key={module.label}
            className="absolute -translate-1/2 rounded-md border border-border bg-background px-2.5 py-1 text-xs whitespace-nowrap"
            style={{
              left: `${module.x}%`,
              top: `${module.y}%`,
              animation: `glow 6s ${index}s linear infinite`,
            }}
          >
            {module.label}
          </span>
        ))}
      </div>
    </Card>
  )
}
