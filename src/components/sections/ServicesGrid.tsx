import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import type { Service } from '@/data/services'
import { services } from '@/data/services'

interface ServiceCardProps {
  service: Service
  basePath: string
}

function ServiceCard({ service, basePath }: ServiceCardProps) {
  return (
    <div className="service-card-wrapper card-hover group h-full rounded-lg overflow-hidden flex flex-col bg-card">
      {/* Imagem */}
      <div className="relative w-full overflow-hidden">
        <AspectRatio ratio={4 / 3}>
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </AspectRatio>
      </div>
      
      {/* Conteúdo */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Título */}
        <h3 className="service-card-title card-text text-lg font-semibold mb-3">
          {service.title}
        </h3>
        
        {/* Descrição breve */}
        <p className="service-card-description card-text text-sm leading-relaxed mb-6 flex-grow text-foreground/80">
          {service.shortDescription}
        </p>
      
        {/* Botão */}
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

interface ServicesGridProps {
  category: 'odontologia'
  title?: string
  description?: string
}

export function ServicesGrid({ category, title, description }: ServicesGridProps) {
  const filteredServices = services.filter(s => s.category === category)
  const basePath = '/odontologia'

  return (
    <section className="py-16 md:py-24 bg-section-muted">
      <div className="container-section">
        {/* Header opcional */}
        {(title || description) && (
          <div className="section-header">
            {title && (
              <>
                <h2 className="section-title">{title}</h2>
                <div className="section-divider"></div>
              </>
            )}
            {description && (
              <p className="section-description">{description}</p>
            )}
          </div>
        )}

        {/* Grid de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredServices.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              basePath={basePath}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
