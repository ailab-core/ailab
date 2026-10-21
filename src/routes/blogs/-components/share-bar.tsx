import { HugeiconsIcon } from '@hugeicons/react'
import { CheckIcon, LinkIcon } from '@hugeicons/core-free-icons'
import { useRef, useState } from 'react'
import { m } from '#/paraglide/messages'

const NETWORKS = [
  {
    name: 'facebook',
    label: m.blog_share_facebook,
    url: 'https://www.facebook.com/sharer/sharer.php?u=',
  },
  {
    name: 'linkedin',
    label: m.blog_share_linkedin,
    url: 'https://www.linkedin.com/sharing/share-offsite/?url=',
  },
]

const buttonClass =
  'rounded-full group flex size-11 cursor-pointer items-center justify-center bg-muted text-muted-foreground transition-[background-color,color,scale] duration-150 ease-out-strong hover:bg-accent hover:text-foreground active:scale-[0.97]'

const iconClass =
  'col-start-1 row-start-1 size-4 transition-[opacity,scale,filter] duration-200 ease-out-strong'
const hiddenIconClass = 'scale-[0.97] opacity-0 blur-[2px]'

export function ShareBar() {
  const [copied, setCopied] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined)

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        aria-label={copied ? m.blog_link_copied() : m.blog_copy_link()}
        onClick={async () => {
          await navigator.clipboard.writeText(window.location.href)
          setCopied(true)
          clearTimeout(timer.current)
          timer.current = setTimeout(() => setCopied(false), 2000)
        }}
        className={buttonClass}
      >
        <span aria-hidden="true" className="grid">
          <HugeiconsIcon
            icon={LinkIcon}
            className={`${iconClass} ${copied ? hiddenIconClass : ''}`}
          />
          <HugeiconsIcon
            icon={CheckIcon}
            className={`${iconClass} text-highlight ${copied ? '' : hiddenIconClass}`}
          />
        </span>
      </button>
      {NETWORKS.map((network) => (
        <button
          key={network.name}
          type="button"
          aria-label={network.label()}
          onClick={() =>
            window.open(
              network.url + encodeURIComponent(window.location.href),
              '_blank',
              'noopener,noreferrer',
            )
          }
          className={buttonClass}
        >
          <span
            aria-hidden="true"
            className="size-4 bg-current"
            style={{
              mask: `url(/assets/brands/${network.name}.svg) center / contain no-repeat`,
            }}
          />
        </button>
      ))}
      <span role="status" className="sr-only">
        {copied ? m.blog_link_copied() : ''}
      </span>
    </div>
  )
}
