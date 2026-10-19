import { HugeiconsIcon } from '@hugeicons/react'
import { CheckIcon, LinkIcon } from '@hugeicons/core-free-icons'
import { useState } from 'react'
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
  'rounded-md group flex size-11 cursor-pointer items-center justify-center border border-border text-muted-foreground transition-colors hover:border-highlight hover:text-highlight'

export function ShareBar() {
  const [copied, setCopied] = useState(false)

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        aria-label={copied ? m.blog_link_copied() : m.blog_copy_link()}
        onClick={async () => {
          await navigator.clipboard.writeText(window.location.href)
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        }}
        className={buttonClass}
      >
        {copied ? (
          <HugeiconsIcon icon={CheckIcon} className="size-4 text-highlight" />
        ) : (
          <HugeiconsIcon icon={LinkIcon} className="size-4" />
        )}
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
