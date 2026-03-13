import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CTAButton, CTAButtonLine } from '@/components/ui/cta-button'
import { services, type Service } from '@/data/services'

interface ServiceCardProps {
  service: Service
}

function ServiceCard({ service }: ServiceCardProps) {
  const basePath = '/odontologia'
  
  return (
    <div className="service-card-wrapper card-hover group h-full rounded-lg overflow-hidden flex flex-col bg-card">
      {/* Imagem com badge sobreposta */}
      <div className="relative w-full overflow-hidden">
        <AspectRatio ratio={4 / 3}>
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </AspectRatio>
        {/* Badge sobre a imagem */}
        <div className="absolute top-4 right-4 z-10">
          <Badge className="badge-odontologia">
            Odontologia
          </Badge>
        </div>
      </div>
      
      {/* Conteúdo */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Título */}
        <h3 className="service-card-title card-text text-lg font-semibold mb-3">
          {service.title}
        </h3>
        
        {/* Descrição breve */}
        <p className="service-card-description card-text text-sm leading-relaxed mb-6 flex-grow">
          {service.shortDescription}
        </p>
      
        {/* Botão com ícone */}
        <Button
          asChild
          className="w-full btn-primary border-0 group/btn"
        >
          <Link to={`${basePath}/${service.id}`}>
            Saiba Mais
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

export function ExploreSection() {
  const odontologiaServices = services
    .filter((service) => service.category === 'odontologia')
    .slice(0, 6)

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container-section">
        {/* Header */}
        <div className="section-header">
          <p className="section-label">
            Nossos serviços
          </p>
          <h2 className="section-title">
            Tratamentos odontológicos
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Uma odontologia completa, do preventivo à reabilitação oral, com foco em conforto, previsibilidade e resultados duradouros.
          </p>
        </div>

        <div className="mt-10 md:mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {odontologiaServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="flex justify-center mt-8 md:mt-10">
            <CTAButton to="/odontologia" size="sm" className="w-full sm:w-auto sm:min-w-[350px]">
              <CTAButtonLine>Ver todos os</CTAButtonLine>
              <CTAButtonLine>serviços</CTAButtonLine>
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
