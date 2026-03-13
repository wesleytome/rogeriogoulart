import rogerioImage from '@/images/rogerio-goulart.png'
import { CTAButton, CTAButtonLine } from '@/components/ui/cta-button'

export function HeroWithTransform() {
  return (
    <div className="relative">
      {/* Seção Hero - Fundo verde */}
      <section className="relative flex items-center w-full overflow-hidden bg-brand">
        <div className="w-full relative z-10 pt-10">
          <div className="container-section">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 xl:gap-12 items-center min-h-[58vh] max-h-[58vh]">
              {/* Left Content */}
              <div className="space-y-6 md:space-y-8 justify-center">
                {/* Nome - Dividido em 3 linhas */}
                <div className="mb-5 mt-8">
                  <h1 className="font-bold leading-none text-brand-foreground">
                    <span className="block text-4xl sm:text-5xl md:text-6xl">Dr.</span>
                    <span className="block text-4xl sm:text-5xl md:text-6xl leading-[0.8]">Rogério</span>
                    <span className="block text-4xl sm:text-5xl md:text-6xl">Goulart</span>
                  </h1>
                </div>

                {/* Especialização */}
                <div className="mb-5">
                  <p className="leading-relaxed text-brand-foreground font-extralight" style={{ lineHeight: '1.2' }}>
                    <span className="text-lg md:text-xl">Odontologia</span><br />
                    <span className="text-lg md:text-xl">reabilitadora e</span><br />
                    <span className="text-lg md:text-xl">estética do sorriso</span>
                  </p>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <CTAButton to="/contato" size="default">
                    <CTAButtonLine>Quero me</CTAButtonLine>
                    <CTAButtonLine>consultar</CTAButtonLine>
                  </CTAButton>
                </div>
              </div>

              {/* Right Content - Imagem ao lado do Hero (< 1024px) */}
              <div className="block lg:hidden relative h-full flex items-end justify-end overflow-visible -mr-3">
                <div className="relative flex items-end justify-end w-full h-full">
                  <img
                    src={rogerioImage}
                    alt="Dr. Rogério Goulart"
                    className="object-contain h-full max-h-[90%] w-auto max-w-[calc(100%+12px)] object-right-bottom drop-shadow-xl"
                  />
                </div>
              </div>
              
              {/* Espaço reservado para imagem absoluta (>= 1024px) */}
              <div className="hidden lg:block relative h-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Transform - Fundo branco */}
      <section className="relative py-12 md:py-16 xl:py-20 bg-card">
        <div className="container-section">
          <div className="flex flex-col md:flex-row items-start">
            {/* Área de conteúdo - metade da página */}
            <div className="w-full md:w-2/5 xl:w-1/2 md:pr-6 xl:pr-8">
              <h2 className="mb-4 md:mb-6 leading-tight text-foreground font-normal" style={{ lineHeight: '1.1' }}>
                <span className="text-2xl sm:text-3xl xl:text-4xl">Transforme-se na <br /> sua melhor versão</span>
              </h2>
              <p className="leading-relaxed text-foreground w-full md:max-w-md" style={{ lineHeight: '1.4' }}>
                <span className="text-base sm:text-lg font-light xl:text-xl">
                  Tratamentos odontológicos personalizados para recuperar saúde, função e confiança. Cuidamos do seu sorriso com técnica, planejamento e foco em resultados naturais.
                </span>
              </p>
            </div>
            {/* Espaço reservado para a imagem - metade da largura */}
            <div className="hidden md:block w-1/2"></div>
          </div>
        </div>
      </section>

      {/* Imagem ÚNICA - Posicionamento responsivo */}
      {/* Tablet: Absoluta cobrindo ambas as seções (1024px - 1280px) */}
      <div 
        className="hidden lg:flex xl:hidden absolute top-0 right-0 bottom-0 z-20 pointer-events-none items-start justify-end pt-[62px]"
        style={{ width: 'calc(100% - 40px)' }}
      >
        <div className="relative w-full max-w-[700px]">
          <img
            src={rogerioImage}
            alt="Dr. Rogério Goulart"
            className="w-full h-auto object-contain max-h-[98vh] drop-shadow-xl"
          />
        </div>
      </div>

      {/* Desktop: Absoluta cobrindo ambas as seções (>= 1280px) */}
      <div 
        className="hidden xl:flex absolute top-0 right-0 bottom-0 z-20 pointer-events-none items-start justify-end pr-[60px] pt-16"
        style={{ width: 'calc(100% - 40px)' }}
      >
        <div className="relative w-full max-w-[740px]">
          <img
            src={rogerioImage}
            alt="Dr. Rogério Goulart"
            className="w-full h-auto object-contain max-h-[105vh] drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  )
}
