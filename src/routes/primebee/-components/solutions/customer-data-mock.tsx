import { HugeiconsIcon } from '@hugeicons/react'
import {
  Mail01Icon,
  MessageCircleIcon,
  PhoneIcon,
  UsersRoundIcon,
} from '@hugeicons/core-free-icons'
import { m } from '#/paraglide/messages'

const EVENTS = [
  { icon: Mail01Icon, time: '09:12', text: m.primebee_mock_cdp_proposal },
  { icon: UsersRoundIcon, time: '11:30', text: m.primebee_mock_cdp_demo },
  { icon: MessageCircleIcon, time: '14:05', text: m.primebee_mock_cdp_pricing },
  { icon: PhoneIcon, time: '16:40', text: m.primebee_mock_cdp_follow_up },
]

export function CustomerDataMock() {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-6">
      <div className="rounded-md flex w-36 flex-col bg-card p-4">
        <span className="rounded-full flex size-11 items-center justify-center bg-primary text-sm text-primary-foreground">
          {'BE'}
        </span>
        <p className="heading mt-4 text-lg">{'Bat-Erdene'}</p>
        <p className="eyebrow mt-1">{m.primebee_mock_cdp_role()}</p>
        <p className="heading mt-auto pt-4 text-2xl tabular-nums">{'₮38.5M'}</p>
      </div>
      <ol className="flex flex-col gap-1 text-sm">
        {EVENTS.map((event, index) => (
          <li
            key={event.time}
            className="rounded-sm flex items-center gap-3 bg-card/60 px-3 py-2"
            style={{
              animation: `appear 7s ${index * 0.6}s var(--ease-out-strong) infinite both`,
            }}
          >
            <HugeiconsIcon
              icon={event.icon}
              className="size-4 text-highlight"
            />
            {event.text()}
            <span className="ml-auto font-mono text-xs text-muted-foreground">
              {event.time}
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}
