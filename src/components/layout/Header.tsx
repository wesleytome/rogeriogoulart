import { Link } from 'react-router-dom'
import { Menu, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { businessInfo } from '@/data/businessInfo'
import { cn } from '@/lib/utils'

interface HeaderProps {
  transparent?: boolean
}

export function Header({ transparent = false }: HeaderProps) {
  return (
    <header className={cn("w-full", transparent ? "bg-transparent absolute top-0 left-0 right-0 z-50" : "bg-card")}>
      {/* Top Navigation Bar */}
      <div className="w-full py-4 bg-background">
        <div className="container-section">
          <div className="flex justify-between items-center">
            {/* Left Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link
                to="/sobre"
                className="px-4 py-2 rounded-md font-medium transition-colors bg-brand text-brand-foreground hover:opacity-90"
              >
                Conheça
              </Link>
              <Link
                to="/servicos"
                className="font-medium transition-colors text-foreground hover:text-brand"
              >
                Serviços
              </Link>
              <Link
                to="/depoimentos"
                className="font-medium transition-colors text-foreground hover:text-brand"
              >
                Depoimentos
              </Link>
              <Link
                to="/contato"
                className="font-medium transition-colors text-foreground hover:text-brand"
              >
                Marque sua consulta
              </Link>
            </nav>

            {/* Right Phone */}
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-foreground" />
              <a 
                href={`tel:${businessInfo.phones.main.replace(/\D/g, '')}`}
                className="font-medium transition-colors text-foreground hover:text-brand"
              >
                {businessInfo.phones.main}
              </a>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  <Link
                    to="/sobre"
                    className="text-lg font-medium transition-colors hover:text-brand"
                  >
                    Conheça
                  </Link>
                  <Link
                    to="/servicos"
                    className="text-lg font-medium transition-colors hover:text-brand"
                  >
                    Serviços
                  </Link>
                  <Link
                    to="/depoimentos"
                    className="text-lg font-medium transition-colors hover:text-brand"
                  >
                    Depoimentos
                  </Link>
                  <Link
                    to="/contato"
                    className="text-lg font-medium transition-colors hover:text-brand"
                  >
                    Marque sua consulta
                  </Link>
                  <a 
                    href={`tel:${businessInfo.phones.main.replace(/\D/g, '')}`}
                    className="flex items-center gap-2 text-lg font-medium"
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
    </header>
  )
}
