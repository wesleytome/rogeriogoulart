import { Link, useLocation } from 'react-router-dom'
import { Menu as MenuIcon, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { ImageSwitcher } from '@/components/ImageSwitcher'
import { businessInfo } from '@/data/businessInfo'
import { cn } from '@/lib/utils'

interface MenuProps {
  transparent?: boolean
}

export function Menu({ transparent = false }: MenuProps) {
  const location = useLocation()
  
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
              <Link
                to="/"
                className={cn(
                  "font-medium transition-colors",
                  isActive('/')
                    ? "px-4 py-2 rounded-md bg-brand text-brand-foreground hover:opacity-90"
                    : "text-foreground hover:text-brand"
                )}
              >
                Início
              </Link>
              <Link
                to="/sobre"
                className={cn(
                  "font-medium transition-colors",
                  isActive('/sobre')
                    ? "px-4 py-2 rounded-md bg-brand text-brand-foreground hover:opacity-90"
                    : "text-foreground hover:text-brand"
                )}
              >
                Sobre o Dr.
              </Link>
              <Link
                to="/odontologia"
                className={cn(
                  "font-medium transition-colors",
                  isActive('/odontologia')
                    ? "px-4 py-2 rounded-md bg-brand text-brand-foreground hover:opacity-90"
                    : "text-foreground hover:text-brand"
                )}
              >
                Odontologia
              </Link>
              <Link
                to="/depoimentos"
                className={cn(
                  "font-medium transition-colors",
                  isActive('/depoimentos')
                    ? "px-4 py-2 rounded-md bg-brand text-brand-foreground hover:opacity-90"
                    : "text-foreground hover:text-brand"
                )}
              >
                Depoimentos
              </Link>
              <Link
                to="/contato"
                className={cn(
                  "font-medium transition-colors",
                  isActive('/contato')
                    ? "px-4 py-2 rounded-md bg-brand text-brand-foreground hover:opacity-90"
                    : "text-foreground hover:text-brand"
                )}
              >
                Contato
              </Link>
            </nav>

            {/* Right: Theme Switcher + Image Switcher + Phone */}
            <div className="flex items-center gap-4">
              <ThemeSwitcher />
              <ImageSwitcher />
              <a 
                href={`https://wa.me/${businessInfo.phones.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#25D366] hover:bg-[#20BA5A] text-white font-medium transition-colors"
              >
                <Phone className="h-4 w-4" />
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
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  <Link
                    to="/"
                    className={cn(
                      "text-lg font-medium transition-colors",
                      isActive('/')
                        ? "text-brand font-semibold"
                        : "hover:text-brand"
                    )}
                  >
                    Início
                  </Link>
                  <Link
                    to="/sobre"
                    className={cn(
                      "text-lg font-medium transition-colors",
                      isActive('/sobre')
                        ? "text-brand font-semibold"
                        : "hover:text-brand"
                    )}
                  >
                    Sobre o Dr.
                  </Link>
                  <Link
                    to="/odontologia"
                    className={cn(
                      "text-lg font-medium transition-colors",
                      isActive('/odontologia')
                        ? "text-brand font-semibold"
                        : "hover:text-brand"
                    )}
                  >
                    Odontologia
                  </Link>
                  <Link
                    to="/depoimentos"
                    className={cn(
                      "text-lg font-medium transition-colors",
                      isActive('/depoimentos')
                        ? "text-brand font-semibold"
                        : "hover:text-brand"
                    )}
                  >
                    Depoimentos
                  </Link>
                  <Link
                    to="/contato"
                    className={cn(
                      "text-lg font-medium transition-colors",
                      isActive('/contato')
                        ? "text-brand font-semibold"
                        : "hover:text-brand"
                    )}
                  >
                    Contato
                  </Link>
                  <div className="pt-2 border-t border-border">
                    <ThemeSwitcher />
                  </div>
                  <a 
                    href={`https://wa.me/${businessInfo.phones.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#25D366] hover:bg-[#20BA5A] text-white font-medium transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    {businessInfo.phones.main}
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
