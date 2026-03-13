import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
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

interface CategoryBlockProps {
  categoryName: string
  services: Service[]
}

function CategoryBlock({ categoryName, services }: CategoryBlockProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const basePath = '/odontologia'

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount)
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })
    }
  }

  const scrollToService = (serviceId: string) => {
    const cardElement = document.getElementById(`service-odontologia-${serviceId}`)
    if (cardElement && scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cardLeft = cardElement.offsetLeft
      const cardWidth = cardElement.offsetWidth
      const containerWidth = container.offsetWidth
      const scrollLeft = cardLeft - (containerWidth / 2) + (cardWidth / 2)
      
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="mt-10 md:mt-12">
      {/* Header com título e setas */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-brand">
          {categoryName}
        </h3>
        
        {/* Setas de navegação - apenas desktop */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 flex items-center justify-center bg-brand rounded-[7px] transition-opacity hover:opacity-80"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5 text-brand-foreground" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 flex items-center justify-center bg-brand rounded-[7px] transition-opacity hover:opacity-80"
            aria-label="Próximo"
          >
            <ChevronRight className="h-5 w-5 text-brand-foreground" />
          </button>
        </div>
      </div>

      {/* Grid: Lista à esquerda + Cards à direita */}
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 md:gap-8">
        {/* Lista vertical à esquerda - altura igual aos cards */}
        <div className="bg-foreground p-6 rounded-lg flex flex-col" style={{ maxHeight: '420px' }}>
          {/* Lista com scroll estilizado */}
          <div className="flex-grow overflow-y-auto custom-scrollbar-green mb-4">
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => scrollToService(service.id)}
                    className="text-left w-full text-background hover:text-brand transition-colors text-sm"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Botão fixo embaixo */}
          <Button 
            asChild 
            className="w-full btn-primary border-0 flex-shrink-0"
          >
            <Link to={basePath}>
              Ver todos os serviços
            </Link>
          </Button>
        </div>

        {/* Cards horizontais à direita */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory sm:snap-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-4 md:gap-6 w-max">
            {services.map((service) => (
              <div 
                key={service.id} 
                id={`service-odontologia-${service.id}`}
                className="flex-shrink-0 w-[280px] sm:w-[320px] snap-start"
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function ExploreSection() {
  const odontologiaServices = services.filter(s => s.category === 'odontologia')

  return (
    <section className="py-16 md:py-24 bg-gradient-muted-to-light-fixed">
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

        {/* Bloco Odontologia */}
        <CategoryBlock 
          categoryName="Odontologia"
          services={odontologiaServices}
        />
      </div>
    </section>
  )
}
