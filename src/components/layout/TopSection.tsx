import type { ReactNode } from 'react'

interface TopSectionProps {
  children: ReactNode
}

export function TopSection({ children }: TopSectionProps) {
  return (
    <section className="w-full bg-background">
      {children}
    </section>
  )
}
