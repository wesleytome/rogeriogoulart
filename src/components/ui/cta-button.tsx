import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface CTAButtonProps {
  to: string
  children: React.ReactNode
  className?: string
  size?: 'default' | 'sm' | 'lg'
  variant?: 'default' | 'dark'
}

function SVGLines() {
  return (
    <svg 
      className="absolute bottom-3 right-3 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 pointer-events-none"
      viewBox="0 0 60 60" 
      fill="none"
    >
      <line x1="0" y1="60" x2="60" y2="60" stroke="currentColor" strokeWidth="1" />
      <line x1="60" y1="0" x2="60" y2="60" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

export function CTAButton({ to, children, className, size = 'default', variant = 'default' }: CTAButtonProps) {
  const sizeClasses = {
    sm: 'min-h-[90px] px-4 text-xl sm:text-2xl',
    default: 'min-h-[110px] sm:min-h-[125px] px-5 sm:px-6 text-2xl sm:text-3xl md:text-4xl',
    lg: 'min-h-[125px] sm:min-h-[140px] px-6 sm:px-8 text-3xl sm:text-4xl md:text-5xl',
  }

  const variantClasses = {
    default: 'bg-accent text-accent-foreground',
    dark: 'bg-brand text-brand-foreground',
  }

  return (
    <Link
      to={to}
      className={cn(
        'relative inline-flex items-center justify-between transition-all hover:opacity-90 overflow-hidden',
        variantClasses[variant],
        'rounded-lg',
        sizeClasses[size],
        className
      )}
    >
      <div className="flex flex-col pr-12 sm:pr-16 md:pr-20">
        {children}
      </div>
      <SVGLines />
    </Link>
  )
}

interface CTAButtonLineProps {
  children: React.ReactNode
  className?: string
}

export function CTAButtonLine({ children, className }: CTAButtonLineProps) {
  return (
    <span className={cn('leading-tight font-normal', className)}>
      {children}
    </span>
  )
}
