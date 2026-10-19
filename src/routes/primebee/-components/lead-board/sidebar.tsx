import { HugeiconsIcon } from '@hugeicons/react'
import {
  ArrowDown01Icon,
  Book02Icon,
  Calendar03Icon,
  ChartColumnIcon,
  DashboardSquare01Icon,
  DollarCircleIcon,
  Message01Icon,
  Notification01Icon,
  PieChartIcon,
  Settings01Icon,
  Ticket01Icon,
  UnfoldMoreIcon,
  UserMultipleIcon,
} from '@hugeicons/core-free-icons'
import { cn } from 'cn'
import { m } from '#/paraglide/messages'

const NAV = [
  { icon: DashboardSquare01Icon, label: m.primebee_board_nav_dashboard },
  {
    icon: UserMultipleIcon,
    label: m.primebee_board_nav_customers,
    children: [
      m.primebee_board_nav_individuals,
      m.primebee_board_nav_organizations,
    ],
  },
  {
    icon: DollarCircleIcon,
    label: m.primebee_board_nav_sales,
    children: [
      m.primebee_board_nav_lead,
      m.primebee_board_nav_deal,
      m.primebee_board_nav_funnel,
    ],
  },
  {
    icon: Calendar03Icon,
    label: m.primebee_board_nav_activities,
    children: [m.primebee_board_nav_meetings],
  },
  { icon: Ticket01Icon, label: m.primebee_board_nav_portal_tickets },
  { icon: Message01Icon, label: m.primebee_board_nav_chat },
  { icon: ChartColumnIcon, label: m.primebee_board_nav_reports },
  { icon: PieChartIcon, label: m.primebee_board_nav_segments },
  { icon: Notification01Icon, label: m.primebee_board_nav_notifications },
  { icon: Book02Icon, label: m.primebee_board_nav_knowledge_base },
]

export function Sidebar() {
  return (
    <aside className="hidden w-44 shrink-0 flex-col gap-3 border-r border-zinc-200 bg-zinc-50 px-3 py-4 text-2xs text-zinc-700 sm:flex">
      <p className="flex items-center gap-1.5 px-1 text-xs font-semibold text-blue-700">
        <span className="size-3 border-[3px] border-blue-600" />
        {'PrimeBee'}
      </p>
      <p className="rounded-sm flex items-center gap-2 border border-zinc-200 bg-white px-2 py-1.5 font-medium text-zinc-900">
        <span className="flex size-4 items-center justify-center bg-blue-600 text-white">
          <HugeiconsIcon icon={DollarCircleIcon} className="size-2.5" />
        </span>
        {m.primebee_board_nav_sales()}
        <HugeiconsIcon
          icon={UnfoldMoreIcon}
          className="ml-auto size-3 text-zinc-400"
        />
      </p>
      <ul className="flex flex-col gap-0.5">
        {NAV.map((item, index) => (
          <li key={index}>
            <span className="flex items-center gap-2 px-1 py-1">
              <HugeiconsIcon
                icon={item.icon}
                className="size-3.5 text-zinc-500"
              />
              {item.label()}
              {item.children && (
                <HugeiconsIcon
                  icon={ArrowDown01Icon}
                  className="ml-auto size-3 text-zinc-400"
                />
              )}
            </span>
            {item.children && (
              <ul className="flex flex-col gap-0.5 py-0.5 pl-6">
                {item.children.map((child, childIndex) => (
                  <li
                    key={childIndex}
                    className={cn(
                      'px-2 py-1',
                      child === m.primebee_board_nav_lead &&
                        'bg-zinc-200/70 font-medium text-zinc-900',
                    )}
                  >
                    {child()}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <span className="mt-auto flex items-center gap-2 px-1 pt-6">
        <HugeiconsIcon
          icon={Settings01Icon}
          className="size-3.5 text-zinc-500"
        />
        {m.primebee_board_nav_settings()}
      </span>
    </aside>
  )
}
