import { CheckCircle2, Calendar, ClipboardList, Stethoscope, Heart } from 'lucide-react'

interface JourneyStep {
  number: number
  title: string
  description: string
  icon: React.ReactNode
}

const journeySteps: JourneyStep[] = [
  {
    number: 1,
    title: 'Avaliacao clinica',
    description: 'Escuta, exame e entendimento da sua queixa principal',
    icon: <Stethoscope className="h-6 w-6" />
  },
  {
    number: 2,
    title: 'Diagnostico e planejamento',
    description: 'Definicao do tratamento indicado para o seu caso',
    icon: <ClipboardList className="h-6 w-6" />
  },
  {
    number: 3,
    title: 'Execucao do tratamento',
    description: 'Procedimentos realizados com tecnica e previsibilidade',
    icon: <Calendar className="h-6 w-6" />
  },
  {
    number: 4,
    title: 'Acompanhamento',
    description: 'Orientacoes e acompanhamento apos cada etapa',
    icon: <Heart className="h-6 w-6" />
  }
]

export function PatientJourney() {
  return (
    <section className="py-16 md:py-24 bg-gradient-light-to-muted-fixed">
      <div className="container-section">
        {/* Header - Alinhado à esquerda */}
        <div className="section-header">
          <p className="section-label">
            Do primeiro contato ao acompanhamento
          </p>
          <h2 className="section-title">
            Como funciona seu atendimento
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Cada etapa e explicada com clareza para que voce saiba o que esperar do diagnostico ao pos-tratamento
          </p>
        </div>

        {/* Grid: Resumo à esquerda e Timeline à direita */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Coluna Esquerda: Resumo */}
          <div className="flex flex-col justify-center">
            <div className="space-y-4 md:space-y-6">
              <h3 className="font-semibold text-brand text-2xl md:text-[30px] leading-tight">
                Seu atendimento, passo a passo
              </h3>
              <p className="leading-relaxed text-foreground text-base md:text-lg">
                Cada caso exige avaliacao cuidadosa. Por isso, o atendimento e conduzido de forma organizada, com explicacao clara das possibilidades, etapas e cuidados.
              </p>
              <p className="leading-relaxed text-foreground text-base md:text-lg">
                Da primeira consulta ao acompanhamento final, o objetivo e que voce tenha seguranca para entender o tratamento e tranquilidade para seguir cada fase.
              </p>
              <div className="pt-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand" />
                  <span className="font-medium text-brand text-sm md:text-[15px]">
                    Processo claro, explicado e individualizado
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Timeline Vertical */}
          <div className="relative">
            {/* Linha vertical conectora */}
            <div 
              className="absolute left-8 top-0 bottom-0 w-0.5"
              style={{
                background: 'linear-gradient(to bottom, color-mix(in srgb, var(--color-brand) 30%, transparent), color-mix(in srgb, var(--color-brand) 50%, transparent), color-mix(in srgb, var(--color-brand) 30%, transparent))'
              }}
            ></div>

            {/* Etapas da timeline */}
            <div className="space-y-8 md:space-y-12">
              {journeySteps.map((step) => (
                <div key={step.number} className="relative flex items-start gap-4 md:gap-6">
                  {/* Círculo com ícone */}
                  <div className="relative flex-shrink-0 z-10">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-4 border-brand shadow-lg flex items-center justify-center bg-background">
                      <div className="text-brand">
                        {step.icon}
                      </div>
                    </div>
                    {/* Número da etapa */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center font-bold text-xs shadow-md bg-brand text-brand-foreground">
                      {step.number}
                    </div>
                  </div>

                  {/* Conteúdo da etapa */}
                  <div className="flex-1 pt-2">
                    <h3 className="font-semibold mb-1 md:mb-2 text-brand text-base md:text-[19px] leading-snug">
                      {step.title}
                    </h3>
                    <p className="leading-relaxed text-foreground text-sm md:text-[17px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
