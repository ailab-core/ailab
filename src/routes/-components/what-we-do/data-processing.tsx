import { HugeiconsIcon } from '@hugeicons/react'
import {
  BotIcon,
  FileSpreadsheetIcon,
  FileTextIcon,
  IdCardIcon,
  Image01Icon,
  ReceiptTextIcon,
} from '@hugeicons/core-free-icons'
import { Card } from './card'
import { m } from '#/paraglide/messages'

const DOCS = [
  {
    icon: FileTextIcon,
    file: 'statement.pdf',
    key: m.home_wwd_data_balance,
    value: () => '₮4,218,000',
  },
  {
    icon: IdCardIcon,
    file: 'id-front.jpg',
    key: m.home_wwd_data_doc_type,
    value: m.home_wwd_data_national_id,
  },
  {
    icon: ReceiptTextIcon,
    file: 'receipt.png',
    key: m.home_wwd_data_total,
    value: () => '₮86,400',
  },
  {
    icon: FileSpreadsheetIcon,
    file: 'payroll.xlsx',
    key: m.home_wwd_data_rows,
    value: () => '1,284',
  },
  {
    icon: Image01Icon,
    file: 'scan-03.jpg',
    key: m.home_wwd_data_issued,
    value: () => '2026-10-19',
  },
  {
    icon: FileTextIcon,
    file: 'contract.pdf',
    key: m.home_wwd_data_term,
    value: m.home_wwd_data_24_months,
  },
]

const ROWS = [
  { order: [0, 1, 2, 3, 4, 5], duration: 26 },
  { order: [3, 5, 0, 4, 2, 1], duration: 34 },
  { order: [4, 2, 5, 1, 0, 3], duration: 30 },
]

// Each row renders the same belt twice: documents clipped to the left half,
// extracted fields clipped to the right. Identical timing makes every document
// turn into its data as it crosses the scan line.
export function DataProcessing() {
  return (
    <Card
      icon={BotIcon}
      title={m.home_wwd_data()}
      lead={m.home_wwd_data_lead()}
      rest={m.home_wwd_data_rest()}
    >
      <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 flex-col gap-3 mask-x-from-75%">
        {ROWS.map((row, rowIndex) => {
          const items = [...row.order, ...row.order]
          const animation = `marquee ${row.duration}s linear infinite reverse`

          return (
            <div key={rowIndex} className="relative h-14">
              <div className="absolute inset-0 [clip-path:inset(0_50%_0_0)]">
                <div className="flex w-max gap-3 pr-3" style={{ animation }}>
                  {items.map((docIndex, index) => (
                    <span
                      key={index}
                      className="rounded-md flex h-14 w-44 shrink-0 items-center gap-3 border border-border bg-background px-3.5 text-muted-foreground"
                    >
                      <HugeiconsIcon
                        icon={DOCS[docIndex].icon}
                        className="size-5 shrink-0"
                      />
                      <span className="truncate font-mono text-xs">
                        {DOCS[docIndex].file}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 [clip-path:inset(0_0_0_50%)]">
                <div className="flex w-max gap-3 pr-3" style={{ animation }}>
                  {items.map((docIndex, index) => (
                    <span
                      key={index}
                      className="rounded-md flex h-14 w-44 shrink-0 flex-col justify-center gap-1 border border-highlight/30 bg-highlight/5 px-3.5"
                    >
                      <span className="eyebrow">{DOCS[docIndex].key()}</span>
                      <span className="text-sm tabular-nums">
                        {DOCS[docIndex].value()}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="absolute inset-y-6 left-1/2 w-px -translate-x-1/2 bg-secondary shadow-[0_0_14px_2px] shadow-secondary/50" />
      <span className="rounded-sm eyebrow absolute top-0 left-1/2 -translate-x-1/2 border border-border bg-card px-2 py-1 text-foreground">
        {m.home_wwd_data_extract()}
      </span>
    </Card>
  )
}
