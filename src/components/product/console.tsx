import { HugeiconsIcon } from '@hugeicons/react'
import type { IconSvgElement } from '@hugeicons/react'
import {
  ChartColumnIcon,
  DashboardSquare01Icon,
  Folder01Icon,
  Notification01Icon,
  Search01Icon,
  Settings01Icon,
  UserMultipleIcon,
} from '@hugeicons/core-free-icons'
import type { ReactNode } from 'react'
import { cn } from 'cn'
import { m } from '#/paraglide/messages'

const RAIL = [
  DashboardSquare01Icon,
  UserMultipleIcon,
  ChartColumnIcon,
  Folder01Icon,
  Settings01Icon,
]

type ConsoleProps = {
  title: string
  notifications: Array<{ icon: IconSvgElement; text: string }>
  children: ReactNode
}

// App window shared by the product hero dashboards: rail, top bar, and live toasts.
export function Console({ title, notifications, children }: ConsoleProps) {
  return (
    <div className="dark relative text-foreground" aria-hidden="true">
      <div className="flex overflow-hidden rounded-lg bg-card shadow-[0_60px_120px_-40px_rgb(0_0_0/0.8)]">
        <div className="hidden w-14 shrink-0 flex-col items-center gap-2 bg-background/60 py-4 sm:flex">
          <span className="brand-mark mb-4 w-5 bg-foreground" />
          {RAIL.map((icon, index) => (
            <span
              key={index}
              className={cn(
                'flex size-9 items-center justify-center rounded-md',
                index
                  ? 'text-muted-foreground'
                  : 'bg-primary text-primary-foreground',
              )}
            >
              <HugeiconsIcon icon={icon} className="size-4" />
            </span>
          ))}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-4 px-5 pt-4 pb-1 md:px-6">
            <p className="eyebrow flex items-center gap-2 text-foreground">
              <span className="rounded-full size-2 animate-pulse bg-primary" />
              {title}
            </p>
            <div className="flex items-center gap-2">
              <span className="hidden h-8 w-52 items-center gap-2 rounded-full bg-muted px-3 text-xs text-muted-foreground md:flex">
                <HugeiconsIcon icon={Search01Icon} className="size-3.5" />
                {m.product_console_search()}
              </span>
              <span className="flex size-8 items-center justify-center rounded-full bg-muted text-muted-foreground">
                <HugeiconsIcon icon={Notification01Icon} className="size-3.5" />
              </span>
            </div>
          </div>
          <div className="p-4 md:p-6">{children}</div>
        </div>
      </div>
      <ul className="absolute -bottom-8 left-3 hidden flex-col gap-2 sm:flex md:-left-10 md:bottom-12">
        {notifications.map((notification, index) => (
          <li
            key={notification.text}
            className="flex w-fit items-center gap-3 rounded-full bg-accent py-2.5 pr-4 pl-2.5 text-sm shadow-2xl shadow-black/40"
            style={{
              animation: `appear 8s ${index * 0.9}s var(--ease-out-strong) infinite both`,
            }}
          >
            <span className="flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <HugeiconsIcon icon={notification.icon} className="size-3.5" />
            </span>
            {notification.text}
          </li>
        ))}
      </ul>
    </div>
  )
}
