import { HugeiconsIcon } from '@hugeicons/react'
import {
  ArrowDown01Icon,
  Clock01Icon,
  Download04Icon,
  Notification01Icon,
  PlusSignIcon,
  Search01Icon,
  SidebarLeftIcon,
  UserIcon,
} from '@hugeicons/core-free-icons'
import type { CSSProperties } from 'react'
import { cn } from 'cn'
import { m } from '#/paraglide/messages'
import { Sidebar } from './sidebar'

type Lead = {
  source: () => string
  name: string
  date: string
  owner: string
  priority?: boolean
}

// Mirrors the real PrimeBee lead board. Raw palette colors on purpose: the
// window stays a light product screenshot inside the dark-scoped hero.
const COLUMNS: Array<{
  stage: () => string
  tint: string
  count: string
  leads: Array<Lead>
  hop?: number
}> = [
  {
    stage: m.primebee_board_stage_new,
    tint: 'bg-blue-100/80',
    count: 'text-blue-600',
    hop: 0,
    leads: [
      {
        source: m.primebee_board_source_referral,
        name: 'Khulan G.',
        date: '2026-10-03',
        owner: 'Ariunaa',
        priority: true,
      },
      {
        source: m.primebee_board_source_chat,
        name: 'Anar T.',
        date: '2026-09-25',
        owner: 'Dulguun',
      },
    ],
  },
  {
    stage: m.primebee_board_stage_attempted,
    tint: 'bg-orange-100/80',
    count: 'text-orange-500',
    leads: [],
  },
  {
    stage: m.primebee_board_stage_connected,
    tint: 'bg-violet-100/80',
    count: 'text-violet-600',
    hop: 1,
    leads: [
      {
        source: m.primebee_board_source_call,
        name: 'Munkhzul B.',
        date: '2026-09-16',
        owner: 'Tergel',
      },
    ],
  },
  {
    stage: m.primebee_board_stage_open_deal,
    tint: 'bg-emerald-100/80',
    count: 'text-emerald-600',
    hop: 2,
    leads: [],
  },
  {
    stage: m.primebee_board_stage_unqualified,
    tint: 'bg-zinc-200/70',
    count: 'text-zinc-500',
    leads: [],
  },
]

const HOPPER: Lead = {
  source: () => 'Facebook',
  name: 'Oyunbileg S.',
  date: '2026-10-18',
  owner: 'Gerel',
}

function LeadCard({ lead, style }: { lead: Lead; style?: CSSProperties }) {
  return (
    <div
      className="rounded-md border border-zinc-200 bg-white p-2.5 shadow-sm"
      style={style}
    >
      <p className="flex justify-between text-3xs text-zinc-400">
        {lead.source()}
        <span className="tabular-nums">{lead.date}</span>
      </p>
      <p className="mt-0.5 text-2xs font-semibold text-zinc-900">{lead.name}</p>
      {lead.priority && (
        <p className="mt-1.5 flex items-center gap-1 text-3xs text-zinc-600">
          <span className="size-1.5 bg-red-500" />
          {m.primebee_board_priority_high()}
        </p>
      )}
      <p className="mt-1.5 flex items-center gap-1 text-3xs text-zinc-400">
        <HugeiconsIcon icon={UserIcon} className="size-2.5" />
        {lead.owner}
      </p>
    </div>
  )
}

export function LeadBoard() {
  return (
    <div
      aria-hidden="true"
      className="rounded-lg overflow-hidden border border-white/10 bg-white text-zinc-900 shadow-[0_60px_120px_-40px_rgb(0_0_0/0.8)]"
    >
      <div className="flex items-center gap-3 border-b border-zinc-200 bg-zinc-100 px-4 py-2.5">
        <span className="flex gap-1.5">
          <span className="size-2.5 bg-orange-400" />
          <span className="size-2.5 bg-zinc-300" />
          <span className="size-2.5 bg-zinc-300" />
        </span>
        <span className="bg-white px-3 py-1 text-2xs text-zinc-500">
          {'crm.ailab.mn'}
        </span>
      </div>

      <div className="flex">
        <Sidebar />
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between border-b border-zinc-100 px-4 py-2 text-zinc-500">
            <HugeiconsIcon icon={SidebarLeftIcon} className="size-3.5" />
            <span className="flex items-center gap-3">
              <HugeiconsIcon icon={Notification01Icon} className="size-3.5" />
              <HugeiconsIcon icon={UserIcon} className="size-3.5" />
            </span>
          </div>

          <div className="flex flex-col gap-3 p-4">
            <p className="text-sm font-semibold">
              {m.primebee_board_nav_lead()}
            </p>
            <p className="flex w-fit bg-zinc-100 p-0.5 text-3xs">
              <span className="bg-white px-2 py-0.5 font-medium shadow-sm">
                {m.primebee_board_view_board()}
              </span>
              <span className="px-2 py-0.5 text-zinc-500">
                {m.primebee_board_view_list()}
              </span>
            </p>
            <div className="flex items-center gap-2 text-3xs text-zinc-500">
              <span className="rounded-sm hidden w-40 border border-zinc-200 px-2 py-1 md:block">
                {m.primebee_board_search()}
              </span>
              {[
                m.primebee_board_filter_priorities(),
                m.primebee_board_filter_sources(),
                m.primebee_board_filter_owners(),
              ].map((filter, index) => (
                <span
                  key={index}
                  className="rounded-sm hidden items-center gap-1 border border-zinc-200 px-2 py-1 lg:flex"
                >
                  {filter}
                  <HugeiconsIcon icon={ArrowDown01Icon} className="size-2.5" />
                </span>
              ))}
              <HugeiconsIcon icon={Search01Icon} className="size-3.5" />
              <span className="rounded-sm ml-auto flex items-center gap-1 border border-zinc-200 px-2 py-1">
                <HugeiconsIcon icon={Download04Icon} className="size-3" />
                {m.primebee_board_export()}
              </span>
              <HugeiconsIcon icon={Clock01Icon} className="size-3.5" />
              <span className="flex items-center gap-1 bg-blue-600 px-2 py-1 font-medium text-white">
                <HugeiconsIcon icon={PlusSignIcon} className="size-3" />
                {m.primebee_board_add_lead()}
              </span>
            </div>

            <div className="flex gap-2.5 overflow-hidden">
              {COLUMNS.map((column) => (
                <div
                  key={column.tint}
                  className={cn(
                    'flex h-72 w-40 shrink-0 flex-col gap-2  p-2 md:h-80',
                    column.tint,
                  )}
                >
                  <p className="flex items-center gap-1.5 px-0.5 text-3xs font-semibold whitespace-nowrap">
                    {column.stage()}
                    <span className={column.count}>{column.leads.length}</span>
                  </p>
                  <p className="rounded-sm flex items-center gap-1 border border-zinc-900/10 px-2 py-1 text-3xs text-zinc-500">
                    <HugeiconsIcon icon={PlusSignIcon} className="size-2.5" />
                    {m.primebee_board_add_lead()}
                  </p>
                  {column.leads.map((lead) => (
                    <LeadCard key={lead.name} lead={lead} />
                  ))}
                  {/* The moving card and the empty label share one grid cell, so a hidden card leaves no gap. */}
                  <div className="grid">
                    {!column.leads.length && (
                      <p className="[grid-area:1/1] pt-4 text-center text-3xs text-zinc-400">
                        {m.primebee_board_no_leads()}
                      </p>
                    )}
                    {column.hop !== undefined && (
                      <LeadCard
                        lead={HOPPER}
                        style={{
                          gridArea: '1 / 1',
                          animation: `hop 9s ${column.hop * 3}s ease-out infinite both`,
                        }}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
