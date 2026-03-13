import { useImage } from '@/contexts/ImageContext'
import { CTAButton, CTAButtonLine } from '@/components/ui/cta-button'

export function HeaderSection() {
  const { currentImage } = useImage()

  return (
    <section className="relative w-full overflow-hidden">
      {/* Container com duas "linhas" */}
      <div className="flex flex-col">
        
        {/* Linha de cima - Header (fundo verde) */}
        <div className="hero-section relative flex items-center bg-brand min-h-[58vh]">
          <div className="w-full relative z-10 pt-4">
            <div className="container-section">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 xl:gap-12 items-center min-h-[40vh]">
                {/* Left Content */}
                <div className="space-y-8 justify-center">
                  {/* Nome - Dividido em 3 linhas */}
                  <div className="mb-5">
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
                    <CTAButton to="/contato" size="sm">
                      <CTAButtonLine className="whitespace-nowrap">Quero me</CTAButtonLine>
                      <CTAButtonLine className="whitespace-nowrap">consultar</CTAButtonLine>
                    </CTAButton>
                  </div>
                </div>

                {/* Espaço reservado para imagem no grid */}
                <div className="relative h-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Linha de baixo - Transform (fundo branco) */}
        <div className="transform-section relative py-12 md:py-16 xl:py-15 bg-card">
          <div className="container-section">
            <div className="flex flex-col lg:flex-row items-start">
              {/* Área de conteúdo - full width abaixo de 1024px, metade acima */}
              <div className="w-full lg:w-2/5 xl:w-1/2 lg:pr-6 xl:pr-8">
                <h2 className="mb-6 leading-tight text-foreground font-normal" style={{ lineHeight: '1.1' }}>
                  <span className="text-2xl sm:text-3xl xl:text-4xl">Transforme-se na <br /> sua melhor versão</span>
                </h2>
                <p className="leading-relaxed text-foreground w-full lg:max-w-md" style={{ lineHeight: '1.4' }}>
                  <span className="text-base sm:text-lg font-light xl:text-xl">
                    Tratamentos odontológicos personalizados para recuperar saúde, função e confiança. Cuidamos do seu sorriso com técnica, planejamento e foco em resultados naturais.
                  </span>
                </p>
              </div>
              {/* Espaço reservado para a imagem - metade da largura (apenas acima de 1024px) */}
              <div className="hidden lg:block w-1/2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* IMAGEM ÚNICA - Posicionamento controlado via CSS */}
      <img
        src={currentImage.src}
        alt="Dr. Rogério Goulart"
        className="doctor-image"
      />
    </section>
  )
}
