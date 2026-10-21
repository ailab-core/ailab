import { m } from '#/paraglide/messages'

const AGENDA = [
  m.shms_mock_agenda_1,
  m.shms_mock_agenda_2,
  m.shms_mock_agenda_3,
]

export function SetupMock() {
  return (
    <div>
      <p className="eyebrow">{m.shms_mock_agenda()}</p>
      <ol className="mt-4 flex flex-col gap-1.5">
        {AGENDA.map((label, index) => (
          <li
            key={index}
            className="rounded-sm flex items-baseline gap-4 bg-card px-3 py-2.5"
            style={{
              animation: `appear 7s ${index * 0.6}s var(--ease-out-strong) infinite both`,
            }}
          >
            <span className="heading text-lg">{label()}</span>
          </li>
        ))}
      </ol>
      <p className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
        <span className="rounded-full size-2 bg-primary" />
        {m.shms_mock_imported({ count: '12,480' })}
      </p>
    </div>
  )
}
