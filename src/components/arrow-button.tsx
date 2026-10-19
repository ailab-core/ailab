import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight02Icon } from '@hugeicons/core-free-icons'
import type { ComponentProps } from 'react'
import { cn } from 'cn'

const VARIANTS = {
  accent: [
    'bg-primary text-primary-foreground hover:bg-primary/90',
    'bg-primary-foreground text-primary',
  ],
  solid: [
    'bg-foreground text-background hover:bg-foreground/90',
    'bg-background text-foreground',
  ],
  onPrimary: [
    'bg-primary-foreground text-primary hover:bg-primary-foreground/90',
    'bg-primary text-primary-foreground',
  ],
  inverse: [
    'bg-background text-foreground hover:bg-background/90',
    'bg-foreground text-background',
  ],
}

type ArrowButtonProps = ComponentProps<'a'> & {
  variant?: keyof typeof VARIANTS
}

export function ArrowButton({
  variant = 'accent',
  className,
  children,
  ...props
}: ArrowButtonProps) {
  const [button, square] = VARIANTS[variant]

  return (
    <a
      className={cn(
        'rounded-md group inline-flex h-11 w-fit shrink-0 items-center gap-4 pr-1.5 pl-4 text-sm font-medium transition-colors',
        button,
        className,
      )}
      {...props}
    >
      {children}
      <span
        className={cn(
          'rounded-sm flex size-8 items-center justify-center overflow-hidden',
          square,
        )}
      >
        <HugeiconsIcon
          icon={ArrowRight02Icon}
          className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </a>
  )
}
