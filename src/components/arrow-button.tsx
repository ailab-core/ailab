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
        'group inline-flex h-12 w-fit shrink-0 items-center gap-4 rounded-full pr-1.5 pl-6 text-base font-semibold transition-[background-color,scale] duration-150 ease-out-strong active:scale-[0.97]',
        button,
        className,
      )}
      {...props}
    >
      {children}
      <span
        className={cn(
          'flex size-9 items-center justify-center overflow-hidden rounded-full',
          square,
        )}
      >
        <HugeiconsIcon
          icon={ArrowRight02Icon}
          className="size-4 transition-[translate] duration-200 ease-out-strong group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </a>
  )
}
