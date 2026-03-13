import { useState } from 'react'
import { BeforeAfterSlider } from './BeforeAfterSlider'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export interface BeforeAfterCase {
  id: string
  category: 'odontologia'
  treatmentType: string
  beforeImage: string
  afterImage: string
  treatmentTime?: string
  patientAge?: string
}

// Dados de exemplo - substituir por dados reais
const beforeAfterCases: BeforeAfterCase[] = [
  {
    id: '1',
    category: 'odontologia',
    treatmentType: 'Lentes de Contato Dental',
    beforeImage: 'https://images.pexels.com/photos/3845557/pexels-photo-3845557.jpeg?auto=compress&cs=tinysrgb&w=800',
    afterImage: 'https://images.pexels.com/photos/3779708/pexels-photo-3779708.jpeg?auto=compress&cs=tinysrgb&w=800',
    treatmentTime: '2-3 sessões',
    patientAge: '32'
  },
  {
    id: '2',
    category: 'odontologia',
    treatmentType: 'Clareamento Dental',
    beforeImage: 'https://images.pexels.com/photos/3845557/pexels-photo-3845557.jpeg?auto=compress&cs=tinysrgb&w=800',
    afterImage: 'https://images.pexels.com/photos/3845556/pexels-photo-3845556.jpeg?auto=compress&cs=tinysrgb&w=800',
    treatmentTime: '2 sessões',
    patientAge: '29'
  }
]

export function BeforeAfterSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextCase = () => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfterCases.length)
  }

  const prevCase = () => {
    setCurrentIndex((prev) => (prev - 1 + beforeAfterCases.length) % beforeAfterCases.length)
  }

  const currentCase = beforeAfterCases[currentIndex]

  return (
    <section className="py-16 md:py-24 bg-gradient-light-to-muted-fixed">
      <div className="container-section">
        {/* Header - Alinhado à esquerda */}
        <div className="section-header">
          <p className="section-label">
            Antes e Depois
          </p>
          <h2 className="section-title">
            Resultados
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Resultados reais de nossos tratamentos. Veja a transformação de nossos pacientes.
          </p>
        </div>

        {/* Seção de imagem grande com navegação */}
        <div className="relative max-w-5xl mx-auto">
          {/* Seta esquerda - escondida em mobile pequeno */}
          <button
            onClick={prevCase}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-14 z-20 w-10 h-10 md:w-12 md:h-12 hidden sm:flex items-center justify-center transition-opacity hover:opacity-80 bg-brand rounded-[7px]"
            aria-label="Caso anterior"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-brand-foreground" />
          </button>

          {/* Container da imagem */}
          <div className="bg-section-light relative rounded-t-2xl overflow-hidden">
            {/* Label no topo */}
            <div className="px-4 sm:px-6 py-3 sm:py-4 bg-brand">
              <span className="text-base sm:text-lg font-normal text-brand-foreground">
                Odontologia
              </span>
            </div>

            {/* Slider de antes/depois */}
            <div className="relative">
              <BeforeAfterSlider
                beforeImage={currentCase.beforeImage}
                afterImage={currentCase.afterImage}
              />
            </div>
          </div>

          {/* Seta direita - escondida em mobile pequeno */}
          <button
            onClick={nextCase}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-14 z-20 w-10 h-10 md:w-12 md:h-12 hidden sm:flex items-center justify-center transition-opacity hover:opacity-80 bg-brand rounded-[7px]"
            aria-label="Próximo caso"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-brand-foreground" />
          </button>

          {/* Navegação mobile - pontos de paginação */}
          <div className="flex sm:hidden justify-center items-center gap-2 mt-4">
            {beforeAfterCases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all rounded-full ${
                  index === currentIndex 
                    ? 'bg-brand w-6 h-2 rounded' 
                    : 'bg-border w-2 h-2'
                }`}
                aria-label={`Ir para caso ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
