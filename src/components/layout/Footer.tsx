import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { businessInfo } from '@/data/businessInfo'
import { services } from '@/data/services'

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-section py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Coluna 1: Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background/20 text-background">
                <span className="text-xl font-bold">DA</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-body font-semibold text-background">
                  {businessInfo.name}
                </span>
                <span className="text-xs opacity-80">
                  Odontologia
                </span>
              </div>
            </div>
            <p className="text-sm opacity-90">
              {businessInfo.description}
            </p>
            <div className="flex gap-4">
              {businessInfo.socialMedia.facebook && (
                <a
                  href={businessInfo.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              {businessInfo.socialMedia.instagram && (
                <a
                  href={businessInfo.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              {businessInfo.socialMedia.linkedin && (
                <a
                  href={businessInfo.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {/* Coluna 2: Links Institucionais */}
          <div className="space-y-4">
            <h3 className="text-lg font-body font-semibold text-background">Institucional</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/sobre"
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos"
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  to="/depoimentos"
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  Contato
                </Link>
              </li>
            </ul>
            <Separator className="bg-background/20" />
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Serviços */}
          <div className="space-y-4">
            <h3 className="text-lg font-body font-semibold text-background">Serviços</h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/odontologia/${service.id}`}
                    className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Horários */}
          <div className="space-y-4">
            <h3 className="text-lg font-body font-semibold text-background">Horários</h3>
            <Table>
              <TableBody>
                <TableRow className="border-background/20">
                  <TableCell className="text-sm opacity-90">Segunda - Sexta</TableCell>
                  <TableCell className="text-sm opacity-90">8:00 - 18:00</TableCell>
                </TableRow>
                <TableRow className="border-background/20">
                  <TableCell className="text-sm opacity-90">Sábado</TableCell>
                  <TableCell className="text-sm opacity-90">9:00 - 13:00</TableCell>
                </TableRow>
                <TableRow className="border-background/20">
                  <TableCell className="text-sm opacity-90">Domingo</TableCell>
                  <TableCell className="text-sm opacity-90">Fechado</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Badge variant="secondary" className="mt-4">
              Atendimento 24h Emergências
            </Badge>
          </div>
        </div>

        <Separator className="my-8 bg-background/20" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
          <p>
            © {new Date().getFullYear()} {businessInfo.name}. Todos os direitos reservados.
          </p>
          <p>
            Desenvolvido com ❤️ para sua saúde e bem-estar
          </p>
        </div>
      </div>
    </footer>
  )
}
