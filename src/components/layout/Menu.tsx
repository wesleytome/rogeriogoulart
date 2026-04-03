import { Link, useLocation } from 'react-router-dom'
import { Menu as MenuIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { businessInfo } from '@/data/businessInfo'
import { cn } from '@/lib/utils'

interface MenuProps {
  transparent?: boolean
}

const navigationItems = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre o Dr.' },
  { to: '/odontologia', label: 'Odontologia' },
  { to: '/depoimentos', label: 'Depoimentos' },
  { to: '/contato', label: 'Contato' },
]

const mobileMenuOpacities = [1, 0.82, 0.64, 0.46, 0.28]

export function Menu({ transparent = false }: MenuProps) {
  const location = useLocation()
  const whatsappNumber = businessInfo.phones.whatsapp.replace(/\D/g, '')
  const whatsappMessage = encodeURIComponent(
    'Olá, equipe da Clínica Santos & Goulart Odontologia. Vim pelo site e gostaria de agendar uma consulta com o Dr. Rogério Goulart. Podem me informar os próximos horários disponíveis?'
  )
  const whatsappUrl = `https://wa.me/55${whatsappNumber}?text=${whatsappMessage}`
  
  // Função para verificar se uma rota está ativa
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }
  return (
    <nav className={cn("w-full fixed top-0 left-0 right-0 z-50", transparent ? "bg-transparent" : "bg-card")}>
      {/* Top Navigation Bar */}
      <div className="w-full py-4 bg-background">
        <div className="container-section">
          <div className="flex justify-between items-center">
            {/* Left Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "font-medium transition-colors",
                    isActive(item.to)
                      ? "px-4 py-2 rounded-md bg-brand text-brand-foreground hover:opacity-90"
                      : "text-foreground hover:text-brand"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right: Theme Switcher + Phone */}
            <div className="flex items-center gap-4">
              <ThemeSwitcher />
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-accent hover:brightness-105 text-accent-foreground font-medium transition-[filter]"
                aria-label="Abrir WhatsApp para agendar consulta"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {businessInfo.phones.main}
              </a>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-foreground">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[84vw] max-w-[320px] border-l border-border/60 bg-card/98 p-0 shadow-[0_24px_80px_rgba(25,23,39,0.22)] backdrop-blur-md [&_[data-slot=sheet-close]]:right-5 [&_[data-slot=sheet-close]]:top-5 [&_[data-slot=sheet-close]]:rounded-full [&_[data-slot=sheet-close]]:border [&_[data-slot=sheet-close]]:border-border/70 [&_[data-slot=sheet-close]]:bg-background/95 [&_[data-slot=sheet-close]]:p-2 [&_[data-slot=sheet-close]]:text-muted-foreground [&_[data-slot=sheet-close]]:opacity-100"
              >
                <SheetHeader className="px-6 pb-0 pt-6">
                  <SheetTitle className="text-xl font-semibold tracking-[-0.02em] text-foreground">
                    Menu
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-1 flex-col overflow-y-auto">
                  <nav className="flex flex-1 flex-col justify-center gap-3 px-6 py-8">
                    {navigationItems.map((item, index) => (
                      <SheetClose asChild key={item.to}>
                        <Link
                          to={item.to}
                          className={cn(
                            "block w-full rounded-md text-left text-lg font-medium leading-none tracking-[-0.02em] transition-all",
                            isActive(item.to)
                              ? "text-brand shadow-sm"
                              : "text-foreground/90 hover:text-brand"
                          )}
                          style={{
                            backgroundColor: `rgb(215 194 161 / ${mobileMenuOpacities[index] ?? 0.22})`,
                            padding: '20px',
                            paddingLeft: '30px',
                          }}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                </div>

                <div className="border-t border-border/60 bg-background/80 px-4 py-4">
                  <div className="rounded-2xl border border-accent/40 bg-accent/25 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-foreground/70">
                      Agendamento rápido
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-accent-foreground">
                      Fale com a clínica pelo WhatsApp para consultar horários disponíveis.
                    </p>
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-card-button px-4 py-3 text-sm font-semibold text-card-button-foreground transition-[filter] hover:brightness-105"
                      aria-label="Abrir WhatsApp para agendar consulta"
                    >
                      <WhatsAppIcon className="h-5 w-5" />
                      Agendar pelo WhatsApp
                    </a>
                    <p className="mt-3 text-center text-sm text-muted-foreground">
                      {businessInfo.phones.main}
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M19.05 4.94A9.9 9.9 0 0 0 12 2a9.94 9.94 0 0 0-8.61 14.91L2 22l5.25-1.37A9.94 9.94 0 1 0 19.05 4.94ZM12 20.1a8.26 8.26 0 0 1-4.21-1.15l-.3-.17-3.11.81.83-3.03-.2-.31A8.26 8.26 0 1 1 12 20.1Zm4.54-6.2c-.25-.12-1.46-.72-1.69-.8-.23-.08-.4-.12-.57.12-.17.25-.65.8-.8.96-.15.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.46-1.36-1.71-.14-.25-.02-.38.11-.5.12-.12.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.57-1.38-.78-1.9-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.12.17 1.76 2.68 4.25 3.76.59.25 1.06.4 1.42.51.6.19 1.15.16 1.58.1.48-.07 1.46-.6 1.67-1.17.21-.58.21-1.07.15-1.17-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  )
}
