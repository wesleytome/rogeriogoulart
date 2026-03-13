import rogerioPhoto from '@/images/rogerio-goulart.png'

interface Statistic {
  number: string
  label: string
  suffix?: string
}

const statistics: Statistic[] = [
  {
    number: '15',
    label: 'Anos de Experiência',
    suffix: '+'
  },
  {
    number: '5000',
    label: 'Pacientes Atendidos',
    suffix: '+'
  },
  {
    number: '98',
    label: 'Satisfação dos Pacientes',
    suffix: '%'
  }
]

// Especialidades para as tags ao redor da foto
const specialties = [
  { name: 'Odontologia Estética', variant: 'brand' as const, position: 'left-[-8%] top-[57%]' },
  { name: 'Implantes Dentários', variant: 'dark' as const, position: 'left-[93%] top-[57%] -translate-x-1/2' },
  { name: 'Ortodontia', variant: 'brand' as const, position: 'top-[70%] right-[-1%]' },
  { name: 'Prótese Dentária', variant: 'dark' as const, position: 'bottom-[15%] right-[8%]' },
  { name: 'Endodontia', variant: 'brand' as const, position: 'bottom-[8%] left-1/2 -translate-x-1/2' },
  { name: 'Lentes de Contato', variant: 'dark' as const, position: 'bottom-[12%] left-[8%]' },
  { name: 'Clareamento Dental', variant: 'brand' as const, position: 'top-[73%] left-[-2%] -translate-y-1/2' },
]

export function AboutRogerio() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="flex flex-col lg:flex-row min-h-[600px] lg:min-h-[700px]">
        {/* Lado esquerdo - Foto com círculo e tags */}
        <div className="w-full lg:w-1/2 flex items-center justify-center py-12 lg:py-16 px-4 md:px-12 lg:px-20">
          <div className="relative w-full max-w-[400px] sm:max-w-[500px] aspect-square">
            {/* Círculo grande de fundo */}
            <div className="absolute inset-0 rounded-full flex items-center justify-center overflow-hidden bg-muted">
              {/* Foto do Dr. Rogério */}
              <img
                src={rogerioPhoto}
                alt="Dr. Rogério Goulart"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Tags/Badges ao redor da foto - escondidas em mobile pequeno */}
            {specialties.map((specialty, index) => (
              <div
                key={index}
                className={`absolute px-2 py-1 md:px-3 md:py-1.5 rounded-full text-[10px] md:text-xs font-medium whitespace-nowrap z-10 shadow-sm hidden sm:block ${specialty.position} ${
                  specialty.variant === 'brand' 
                    ? 'bg-brand text-brand-foreground' 
                    : 'bg-foreground text-brand'
                }`}
              >
                {specialty.name}
              </div>
            ))}
          </div>
        </div>

        {/* Lado direito - Conteúdo */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-foreground">
          <div className="space-y-4 sm:space-y-6 relative w-full max-w-2xl px-4 sm:px-6 md:px-12 lg:px-8 py-8 lg:py-0">
            {/* Badge pequeno */}
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium text-brand">
                — Sobre o Dr. Rogério
              </span>
            </div>

            {/* Título principal */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-semibold leading-tight">
              <span className="text-background">Quem é </span>
              <span className="italic text-brand">Dr. Rogério Goulart?</span>
            </h2>

            {/* Texto descritivo */}
            <p className="text-sm sm:text-base leading-relaxed text-background/90">
              Com mais de 15 anos de experiência em odontologia estética e reabilitadora,
              o Dr. Rogério Goulart é especialista certificado pelo IOA (Instituto de Odontologia Avançada) 
              e pelo CFO (Conselho Federal de Odontologia). Sua abordagem integrada combina técnicas 
              avançadas de odontologia para oferecer resultados naturais e funcionais que elevam a autoestima dos pacientes.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-background/90">
              Comprometido com a excelência e atualização constante, o Dr. Rogério investe 
              continuamente em educação e tecnologia de ponta para oferecer o melhor tratamento 
              personalizado a cada paciente.
            </p>

            {/* Estatísticas */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 pt-4 sm:pt-6">
              {statistics.map((stat, index) => (
                <div key={index}>
                  <div className="flex items-baseline gap-0.5 sm:gap-1 mb-1 flex-wrap">
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand">
                      {stat.number}
                    </span>
                    {stat.suffix && (
                      <span className="text-base sm:text-lg md:text-xl font-semibold text-brand">
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] sm:text-xs md:text-sm font-medium text-background">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
