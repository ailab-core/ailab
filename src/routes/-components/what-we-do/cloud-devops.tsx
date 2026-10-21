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
import { cn } from 'cn'
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
      {/* One 10s loop: the pipeline runs stage by stage, the release rolls across every
          server, Site B scales up, and the status flips to live before resetting. */}
      <div
        data-loop
        className="absolute inset-x-5 top-2 overflow-hidden rounded-md bg-muted text-xs md:inset-x-8"
      >
        <div className="flex items-center justify-between gap-4 px-3 py-2.5">
          <span className="grid overflow-hidden whitespace-nowrap">
            <span
              className="col-start-1 row-start-1 text-muted-foreground"
              style={{
                animation: 'roll-out 10s var(--ease-out-strong) infinite both',
              }}
            >
              {m.home_wwd_cloud_status_testing()}
            </span>
            <span
              className="col-start-1 row-start-1 bg-muted text-foreground"
              style={{
                animation: 'roll-in 10s var(--ease-out-strong) infinite both',
              }}
            >
              {m.home_wwd_cloud_status_live()}
            </span>
          </span>
          <span className="flex shrink-0 items-center gap-2 text-highlight">
            <span className="relative flex size-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-primary/60" />
              <span className="rounded-full relative size-2 bg-primary" />
            </span>
            {m.home_wwd_cloud_uptime()}
          </span>
        </div>

        <ol className="grid grid-cols-4 gap-1.5 px-3">
          {STAGES.map((stage, index) => (
            <li
              key={index}
              className="rounded-sm relative min-w-0 overflow-hidden bg-card text-muted-foreground"
            >
              {/* The done copy is clipped open over the idle one, so text and fill change color together. */}
              {[false, true].map((done) => (
                <span
                  key={String(done)}
                  className={cn(
                    'flex items-center gap-2 px-2 py-3 sm:px-3',
                    done &&
                      'absolute inset-0 bg-primary text-primary-foreground',
                  )}
                  style={
                    done
                      ? {
                          animation: `segment 10s ${index * 0.8}s var(--ease-in-out-strong) infinite both`,
                        }
                      : undefined
                  }
                >
                  <HugeiconsIcon
                    icon={stage.icon}
                    className={cn(
                      'hidden size-3.5 shrink-0 sm:block',
                      !done && 'text-highlight',
                    )}
                  />
                  <span className="truncate">{stage.label()}</span>
                </span>
              ))}
            </li>
          ))}
        </ol>

        <div className="flex flex-col gap-2 p-3 md:gap-2.5 md:py-4">
          {SITES.map((site, row) => (
            <div key={site} className="flex items-center gap-2">
              <span className="w-12 shrink-0 whitespace-nowrap text-muted-foreground/70">
                {m.home_wwd_cloud_site()} {site}
              </span>
              {[0, 1, 2].map((col) => (
                <span
                  key={col}
                  className="relative flex h-7 flex-1 items-center justify-center rounded-sm bg-card text-muted-foreground md:h-10"
                >
                  <HugeiconsIcon
                    icon={ServerStack01Icon}
                    className="size-3.5"
                  />
                  {/* Rolling update: one server at a time, column by column, so every site keeps serving. */}
                  <span
                    className="absolute inset-0 flex items-center justify-center gap-1.5 rounded-sm bg-primary text-primary-foreground"
                    style={{
                      animation: `settle 10s ${4.4 + (col * 3 + row) * 0.2}s var(--ease-out-strong) infinite both`,
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
              <span className="relative flex h-7 flex-1 items-center justify-center rounded-sm border border-dashed border-muted-foreground/30 text-muted-foreground/70 md:h-10">
                <span className="hidden sm:inline">
                  {m.home_wwd_cloud_spare()}
                </span>
                {row === 1 && (
                  <span
                    className="absolute -inset-px flex items-center justify-center gap-1 rounded-sm bg-[color-mix(in_oklab,var(--primary)_20%,var(--card))] text-highlight"
                    style={{
                      animation:
                        'settle 10s 6.1s var(--ease-out-strong) infinite both',
                    }}
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
