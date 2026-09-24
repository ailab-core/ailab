import { useState } from 'react'
import { CheckIcon, LinkIcon } from 'lucide-react'

const NETWORKS = [
  {
    name: 'facebook',
    label: 'Share on Facebook',
    url: 'https://www.facebook.com/sharer/sharer.php?u=',
  },
  {
    name: 'linkedin',
    label: 'Share on LinkedIn',
    url: 'https://www.linkedin.com/sharing/share-offsite/?url=',
  },
]

const buttonClass =
  'flex size-10 cursor-pointer items-center justify-center rounded-full text-graphite transition-colors hover:bg-mist hover:text-ink'

export function ShareBar() {
  const [copied, setCopied] = useState(false)

  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        aria-label={copied ? 'Link copied' : 'Copy link'}
        onClick={async () => {
          await navigator.clipboard.writeText(window.location.href)
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        }}
        className={buttonClass}
      >
        {copied ? (
          <CheckIcon className="size-5 text-brand" />
        ) : (
          <LinkIcon className="size-5" />
        )}
      </button>
      {NETWORKS.map((network) => (
        <button
          key={network.name}
          type="button"
          aria-label={network.label}
          onClick={() =>
            window.open(
              network.url + encodeURIComponent(window.location.href),
              '_blank',
              'noopener,noreferrer',
            )
          }
          className={buttonClass}
        >
          <img
            src={`/assets/brands/${network.name}.svg`}
            alt=""
            className="size-[1.125rem] opacity-60"
          />
        </button>
      ))}
      <span role="status" className="sr-only">
        {copied ? 'Link copied' : ''}
      </span>
    </div>
  )
}
