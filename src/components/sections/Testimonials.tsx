import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CTAButton, CTAButtonLine } from '@/components/ui/cta-button'
import { testimonials } from '@/data/testimonials'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-16 md:py-24 bg-gradient-white-to-card">
      <div className="container-section">
        {/* Header - Alinhado à esquerda */}
        <div className="section-header">
          <p className="section-label">
            Uma boa palavra vale muito
          </p>
          <h2 className="section-title">
            Depoimentos de clientes
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Sempre é o boca a boca que traz o melhor conselho. Aqui estão alguns depoimentos dos nossos clientes.
          </p>
        </div>

        {/* Área de depoimento centralizada */}
        <div className="relative max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center px-4 sm:px-8 md:px-16 py-8 md:py-12">
            {/* Foto do depoente */}
            {currentTestimonial.avatar && (
              <div className="mb-6">
                <Avatar className="h-20 w-20 md:h-24 md:w-24">
                  <AvatarImage src={currentTestimonial.avatar} alt={currentTestimonial.name} />
                  <AvatarFallback className="text-xl bg-muted text-foreground">
                    {currentTestimonial.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>
            )}

            {/* Nome em teal */}
            <p className="mb-6 md:mb-8 text-brand text-lg font-normal">
              - {currentTestimonial.name} -
            </p>

            {/* Citação */}
            <blockquote className="max-w-3xl leading-relaxed text-foreground text-lg md:text-xl">
              "{currentTestimonial.text}"
            </blockquote>
          </div>

          {/* Seta esquerda - escondida em mobile pequeno */}
          <button
            onClick={prevTestimonial}
            className="btn-nav absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-14 z-20 w-10 h-10 md:w-12 md:h-12 hidden sm:flex items-center justify-center transition-opacity hover:opacity-80 rounded-[7px]"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-brand-foreground" />
          </button>

          {/* Seta direita - escondida em mobile pequeno */}
          <button
            onClick={nextTestimonial}
            className="btn-nav absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-14 z-20 w-10 h-10 md:w-12 md:h-12 hidden sm:flex items-center justify-center transition-opacity hover:opacity-80 rounded-[7px]"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-brand-foreground" />
          </button>

          {/* Pontos de paginação */}
          <div className="flex justify-center items-center gap-2 mt-6 md:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`transition-all rounded-full ${
                  index === currentIndex 
                    ? 'bg-foreground w-6 h-2 rounded' 
                    : 'bg-border w-2 h-2'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Botão CTA - Estilo do Hero */}
        <div className="text-center mt-10 md:mt-12">
          <CTAButton to="/depoimentos" size="default">
            <CTAButtonLine>Ver todos os</CTAButtonLine>
            <CTAButtonLine>Depoimentos</CTAButtonLine>
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
