import {
  BotIcon,
  FileSpreadsheetIcon,
  FileTextIcon,
  IdCardIcon,
  ImageIcon,
  ReceiptTextIcon,
} from 'lucide-react'
import { Card } from './card'

const ROWS = [
  [FileTextIcon, IdCardIcon, ReceiptTextIcon, ImageIcon, FileSpreadsheetIcon],
  [ReceiptTextIcon, FileSpreadsheetIcon, FileTextIcon, IdCardIcon, ImageIcon],
  [ImageIcon, FileTextIcon, FileSpreadsheetIcon, ReceiptTextIcon, IdCardIcon],
]

export function DataProcessing() {
  return (
    <Card
      icon={BotIcon}
      title="AI data processing"
      lead="Turn statements, IDs, and receipts"
      rest="into structured data your teams can act on."
    >
      <div className="flex flex-col gap-3 overflow-hidden py-8 [mask-image:linear-gradient(90deg,transparent,black_20%,black_80%,transparent)]">
        {ROWS.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex w-max gap-3 pr-3"
            style={{
              animation: `marquee ${22 + rowIndex * 6}s linear infinite`,
              animationDirection: rowIndex % 2 ? 'reverse' : 'normal',
            }}
          >
            {[...row, ...row].map((Icon, index) => (
              <span
                key={index}
                className="flex size-14 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground"
              >
                <Icon className="size-5" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </Card>
  )
}
