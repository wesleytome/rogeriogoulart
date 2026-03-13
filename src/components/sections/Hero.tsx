import { CTAButton, CTAButtonLine } from '@/components/ui/cta-button'

export function Hero() {
  return (
    <section className="relative flex items-center bg-brand">
      <div className="container-section relative z-10 w-full pt-8 lg:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-center min-h-[60vh] lg:min-h-[65vh] xl:min-h-[70vh]">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 flex flex-col justify-center">
            {/* Nome - Dividido em 3 linhas */}
            <div className="mb-4 lg:mb-5">
              <h1 className="font-bold leading-none text-brand-foreground">
                <span className="block text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">Dr.</span>
                <span className="block text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">Rogério</span>
                <span className="block text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">Goulart</span>
              </h1>
            </div>

            {/* Especialização */}
            <div className="mb-4 lg:mb-5">
              <p className="leading-relaxed text-brand-foreground font-extralight" style={{ lineHeight: '1.2' }}>
                <span className="text-base lg:text-lg xl:text-xl 2xl:text-2xl">Odontologia</span><br />
                <span className="text-base lg:text-lg xl:text-xl 2xl:text-2xl">reabilitadora e</span><br />
                <span className="text-base lg:text-lg xl:text-xl 2xl:text-2xl">estética do sorriso</span>
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2 lg:pt-4">
              <CTAButton to="/contato" size="default">
                <CTAButtonLine>Quero me</CTAButtonLine>
                <CTAButtonLine>consultar</CTAButtonLine>
              </CTAButton>
            </div>
          </div>

          {/* Right Content - Espaço reservado para imagem (será posicionada absolutamente no wrapper) */}
          <div className="hidden lg:block relative h-full"></div>
        </div>
        
        {/* Imagem na base do Hero - apenas em telas < 1024px (mobile) */}
        <div className="block lg:hidden mt-8 pb-6">
          <div className="flex justify-center items-end">
            <div className="relative w-full max-w-sm">
              {/* Placeholder para imagem mobile */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
