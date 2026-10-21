import { m } from '#/paraglide/messages'

const segment =
  'rounded-full flex h-8 items-center px-3 text-xs text-muted-foreground first:bg-primary first:text-primary-foreground'

export function SettingsMock() {
  return (
    <div className="flex items-center gap-6">
      <div className="rounded-md flex size-24 shrink-0 flex-col items-center justify-center gap-2 bg-card">
        <span className="brand-mark w-8 bg-primary" />
        <span className="text-2xs font-medium tracking-wide text-muted-foreground uppercase">
          {m.shms_mock_your_logo()}
        </span>
      </div>
      <dl className="flex flex-1 flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <dt className="eyebrow">{m.shms_mock_language()}</dt>
          <dd className="rounded-full flex bg-muted p-0.5">
            <span className={segment}>{'EN'}</span>
            <span className={segment}>{'MN'}</span>
          </dd>
        </div>
        <div className="flex items-center justify-between gap-4">
          <dt className="eyebrow">{m.shms_mock_theme()}</dt>
          <dd className="rounded-full flex bg-muted p-0.5">
            <span className={segment}>{m.shms_mock_light()}</span>
            <span className={segment}>{m.shms_mock_dark()}</span>
          </dd>
        </div>
        <div className="flex flex-col gap-2 pt-2">
          <dt className="eyebrow">{m.shms_mock_instructions()}</dt>
          <dd className="flex flex-col gap-1.5" aria-hidden="true">
            <span className="rounded-full h-1.5 w-full bg-foreground/15" />
            <span className="rounded-full h-1.5 w-4/5 bg-foreground/15" />
            <span className="rounded-full h-1.5 w-3/5 bg-foreground/15" />
          </dd>
        </div>
      </dl>
    </div>
  )
}
