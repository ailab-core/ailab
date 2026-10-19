import { HugeiconsIcon } from '@hugeicons/react'
import {
  Add01Icon,
  CheckmarkCircle02Icon,
  CloudIcon,
  PackageIcon,
  RocketIcon,
  ServerStack01Icon,
  ShieldCheckIcon,
  TestTube01Icon,
} from '@hugeicons/core-free-icons'
import { Card } from './card'
import { m } from '#/paraglide/messages'

const STAGES = [
  { icon: PackageIcon, label: m.home_wwd_cloud_step_build },
  { icon: TestTube01Icon, label: m.home_wwd_cloud_step_test },
  { icon: ShieldCheckIcon, label: m.home_wwd_cloud_step_secure },
  { icon: RocketIcon, label: m.home_wwd_cloud_step_launch },
]

const SITES = ['A', 'B', 'C']

const POINTS = [
  m.home_wwd_cloud_point_1,
  m.home_wwd_cloud_point_2,
  m.home_wwd_cloud_point_3,
  m.home_wwd_cloud_point_4,
]

export function CloudDevOps() {
  return (
    <Card
      icon={CloudIcon}
      title={m.home_wwd_cloud()}
      lead={m.home_wwd_cloud_lead()}
      rest={m.home_wwd_cloud_rest()}
      tags={POINTS}
    >
      <div className="absolute top-2 right-[-2rem] left-5 overflow-hidden rounded-md border border-border bg-background text-xs md:left-8">
        <div className="flex items-center justify-between gap-4 border-b border-border px-3 py-2.5 pr-12">
          <span className="relative whitespace-nowrap text-muted-foreground">
            {m.home_wwd_cloud_status_testing()}
            <span
              className="absolute inset-y-0 left-0 min-w-full bg-background text-foreground"
              style={{ animation: 'swap 8s 1.6s linear infinite both' }}
            >
              {m.home_wwd_cloud_status_live()}
            </span>
          </span>
          <span className="flex shrink-0 items-center gap-2 text-highlight">
            <span className="size-1.5 bg-secondary shadow-[0_0_8px_1px] shadow-secondary/60" />
            {m.home_wwd_cloud_uptime()}
          </span>
        </div>

        <ol className="grid grid-cols-4 gap-px border-b border-border bg-border pr-8">
          {STAGES.map((stage, index) => (
            <li
              key={index}
              className="relative flex min-w-0 items-center gap-2 bg-background px-2 py-3 text-muted-foreground sm:px-3"
            >
              <HugeiconsIcon
                icon={stage.icon}
                className="hidden size-3.5 shrink-0 text-highlight sm:block"
              />
              <span className="truncate">{stage.label()}</span>
              <span
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-primary"
                style={{
                  animation: `fill 8s ${index * 0.4}s ease-in-out infinite both`,
                }}
              />
            </li>
          ))}
        </ol>

        <div className="flex flex-col gap-2 p-3 pr-11 md:gap-2.5 md:py-4">
          {SITES.map((site, row) => (
            <div key={site} className="flex items-center gap-2">
              <span className="w-12 shrink-0 whitespace-nowrap text-muted-foreground/70">
                {m.home_wwd_cloud_site()} {site}
              </span>
              {[0, 1, 2].map((col) => (
                <span
                  key={col}
                  className="relative flex h-7 flex-1 items-center justify-center rounded-sm border border-border bg-card text-muted-foreground md:h-10"
                >
                  <HugeiconsIcon icon={ServerStack01Icon} className="size-3.5" />
                  <span
                    className="absolute -inset-px flex items-center justify-center gap-1.5 rounded-sm bg-primary text-primary-foreground"
                    style={{
                      animation: `swap 8s ${(col * 3 + row) * 0.2}s linear infinite both`,
                    }}
                  >
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      className="size-3.5 shrink-0"
                    />
                    <span className="hidden sm:inline">
                      {m.home_wwd_cloud_updated()}
                    </span>
                  </span>
                </span>
              ))}
              {/* Site B adds capacity once the release lands; the others keep a spare slot. */}
              <span className="relative flex h-7 flex-1 items-center justify-center rounded-sm border border-dashed border-border text-muted-foreground/60 md:h-10">
                <span className="hidden sm:inline">
                  {m.home_wwd_cloud_spare()}
                </span>
                {row === 1 && (
                  <span
                    className="absolute -inset-px flex items-center justify-center gap-1 rounded-sm border border-secondary bg-background text-highlight-secondary"
                    style={{ animation: 'swap 8s 1.4s linear infinite both' }}
                  >
                    <HugeiconsIcon icon={Add01Icon} className="size-3.5" />
                    <span className="hidden sm:inline">
                      {m.home_wwd_cloud_added()}
                    </span>
                  </span>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
