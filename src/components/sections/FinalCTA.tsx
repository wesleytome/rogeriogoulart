import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MessageCircle, FileText } from 'lucide-react'
import { businessInfo } from '@/data/businessInfo'

export function FinalCTA() {
  const whatsappNumber = businessInfo.phones.whatsapp.replace(/\D/g, '')
  const whatsappUrl = `https://wa.me/55${whatsappNumber}`

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-foreground">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-10 bg-brand"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-10 bg-brand"></div>
      </div>

      <div className="container-section relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-6 md:mb-8">
            <Badge className="badge-destaque px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium">
              Primeira consulta com 50% de desconto
            </Badge>
          </div>

          {/* Título */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-background">
            Pronto para Transformar seu Sorriso e Realçar sua Beleza?
          </h2>

          {/* Subtítulo */}
          <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 max-w-2xl mx-auto text-background/90">
            Agende sua avaliação sem compromisso
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              asChild
              className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 font-medium shadow-lg w-full sm:w-auto"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              asChild
              className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 font-medium shadow-lg w-full sm:w-auto"
            >
              <Link to="/contato">
                <FileText className="h-5 w-5 mr-2" />
                Formulário Online
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
