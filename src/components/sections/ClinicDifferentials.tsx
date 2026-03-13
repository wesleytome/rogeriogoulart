import { Stethoscope, ClipboardList, Shield, Heart, CheckCircle2 } from 'lucide-react'

interface Differential {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

const differentials: Differential[] = [
  {
    id: '1',
    title: 'Avaliacao individual',
    description: 'Cada caso comeca com escuta, exame e criterio clinico',
    icon: <Stethoscope className="h-8 w-8" />
  },
  {
    id: '2',
    title: 'Planejamento cuidadoso',
    description: 'As etapas do tratamento sao definidas conforme a necessidade do paciente',
    icon: <ClipboardList className="h-8 w-8" />
  },
  {
    id: '3',
    title: 'Seguranca e biosseguranca',
    description: 'Protocolos e cuidados adotados em todas as etapas do atendimento',
    icon: <Shield className="h-8 w-8" />
  },
  {
    id: '4',
    title: 'Atendimento humanizado',
    description: 'Escuta, acolhimento e comunicacao clara do inicio ao fim',
    icon: <Heart className="h-8 w-8" />
  },
  {
    id: '5',
    title: 'Acompanhamento responsavel',
    description: 'Orientacoes e suporte apos cada procedimento',
    icon: <CheckCircle2 className="h-8 w-8" />
  }
]

export function ClinicDifferentials() {
  return (
    <section className="py-16 md:py-24 bg-gradient-white-to-card">
      <div className="container-section">
        {/* Header - Alinhado à esquerda */}
        <div className="section-header">
          <p className="section-label">
            Como conduzimos cada tratamento
          </p>
          <h2 className="section-title">
            Diferenciais do atendimento
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Criterio clinico, clareza e cuidado em cada etapa do atendimento
          </p>
        </div>

        {/* Layout: Grid 3 colunas - Imagem (1) e Conteúdo (2 mergeadas) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto items-stretch">
          {/* Coluna 1: Imagem */}
          <div className="relative lg:col-span-1 min-h-[300px] lg:min-h-0">
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <img
                src="https://amaisd.com.br/wp-content/uploads/2023/04/2_4.png"
                alt="Consultorio odontologico"
                className="w-full h-full object-cover object-[60%_center]"
              />
            </div>
          </div>

          {/* Colunas 2 e 3 mergeadas: Grid 2x3 com diferenciais */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 md:gap-x-8">
              {differentials.map((differential, index) => {
                const totalItems = differentials.length
                const isLastItem = index === totalItems - 1
                const lastCompleteRowStart = totalItems % 2 === 0 
                  ? totalItems - 2
                  : totalItems - 3
                const isInLastCompleteRow = index >= lastCompleteRowStart && index < totalItems - (totalItems % 2 === 0 ? 0 : 1)
                const hasItemBelow = isLastItem ? false : (index + 2 < totalItems)
                const shouldHaveBottomBorder = (isInLastCompleteRow && !hasItemBelow) || isLastItem
                
                return (
                  <div
                    key={differential.id}
                    className="relative"
                  >
                    {/* Borda superior */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-border"></div>
                    
                    {/* Borda inferior nos itens da última linha */}
                    {shouldHaveBottomBorder && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-border"></div>
                    )}

                    {/* Conteúdo com espaçamento adequado */}
                    <div className="p-4">
                      <div className="flex flex-col gap-2">
                        {/* Ícone */}
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-brand">
                          {differential.icon}
                        </div>

                        {/* Conteúdo */}
                        <div className="flex-1">
                          <h3 className="text-foreground font-semibold mb-2 text-base md:text-[19px] leading-snug">
                            {differential.title}
                          </h3>
                          <p className="text-foreground leading-relaxed text-sm md:text-[15px]">
                            {differential.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
