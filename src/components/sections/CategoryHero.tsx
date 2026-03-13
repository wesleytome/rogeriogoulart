import { CTAButton, CTAButtonLine } from '@/components/ui/cta-button'

interface CategoryHeroProps {
  title: string
  subtitle: string
  description: string
  image: string
}

export function CategoryHero({ title, subtitle, description, image }: CategoryHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden">
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 w-full py-16 md:py-24">
        <div className="container-section">
          <div className="max-w-2xl">
            {/* Badge da categoria */}
            <span className="inline-block px-4 py-2 rounded-full bg-brand text-brand-foreground text-sm font-medium mb-6">
              Odontologia
            </span>

            {/* Título */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-4 leading-tight">
              {title}
            </h1>

            {/* Subtítulo */}
            <p className="text-xl md:text-2xl text-brand mb-6">
              {subtitle}
            </p>

            {/* Descrição */}
            <p className="text-lg text-background/90 leading-relaxed mb-8 max-w-xl">
              {description}
            </p>

            {/* CTA */}
            <CTAButton to="/contato" size="default">
              <CTAButtonLine>Agendar</CTAButtonLine>
              <CTAButtonLine>avaliação</CTAButtonLine>
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
