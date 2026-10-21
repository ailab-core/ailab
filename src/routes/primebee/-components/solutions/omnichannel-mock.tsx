import { cn } from 'cn'
import { m } from '#/paraglide/messages'

const MESSAGES = [
  {
    from: 'customer',
    label: m.primebee_mock_omni_customer,
    text: m.primebee_mock_omni_msg_1,
  },
  {
    from: 'bot',
    label: m.primebee_mock_omni_bot,
    text: m.primebee_mock_omni_msg_2,
  },
  {
    from: 'agent',
    label: m.primebee_mock_omni_agent,
    text: m.primebee_mock_omni_msg_3,
  },
]

export function OmnichannelMock() {
  return (
    <ol className="flex flex-col gap-3 text-sm">
      {MESSAGES.map((message, index) => {
        const customer = message.from === 'customer'
        return (
          <li
            key={message.from}
            className={cn(
              'flex max-w-[80%] flex-col gap-1.5',
              customer ? 'self-start' : 'items-end self-end',
            )}
            style={{
              animation: `appear 7s ${index * 0.8}s var(--ease-out-strong) infinite both`,
            }}
          >
            <span className="text-2xs font-medium tracking-wide text-muted-foreground uppercase">
              {message.label()}
            </span>
            <span
              className={cn(
                'rounded-lg px-3.5 py-2.5',
                customer ? 'bg-card' : 'bg-primary text-primary-foreground',
              )}
            >
              {message.text()}
            </span>
          </li>
        )
      })}
    </ol>
  )
}
