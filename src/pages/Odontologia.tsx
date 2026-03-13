import { SEO } from '@/components/SEO'
import { CategoryHero } from '@/components/sections/CategoryHero'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { CategoryResults } from '@/components/sections/CategoryResults'
import { CategoryFAQ } from '@/components/sections/CategoryFAQ'
import { CTAButton, CTAButtonLine } from '@/components/ui/cta-button'
import { TopSection } from '@/components/layout/TopSection'
import { Menu } from '@/components/layout/Menu'
import { businessInfo } from '@/data/businessInfo'

export function Odontologia() {
  return (
    <>
      <SEO
        title={`Odontologia | ${businessInfo.name}`}
        description="Tratamentos odontológicos de excelência: implantes, clareamento, lentes de contato dental e muito mais. Tecnologia de ponta para o seu sorriso."
        canonical="/odontologia"
        ogImage="/images/og-image-rogerio-goulart.png"
        ogImageWidth={1200}
        ogImageHeight={630}
        ogImageType="image/png"
        ogImageAlt={`Odontologia - ${businessInfo.doctorName}`}
      />
      
      <TopSection>
        <Menu />
      </TopSection>

      {/* Hero */}
      <CategoryHero
        title="Sorrisos que transformam vidas"
        subtitle="Odontologia avançada com tecnologia de ponta"
        description="Oferecemos tratamentos odontológicos completos, desde implantes e próteses até clareamento e lentes de contato dental. Cada procedimento é realizado com precisão e cuidado para garantir resultados excepcionais."
        image="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=800&fit=crop"
      />

      {/* Introdução */}
      <section className="py-16 md:py-20 bg-section-muted">
        <div className="container-section">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Excelência em cada detalhe
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Com mais de 15 anos de experiência, o Dr. Rogério Goulart combina conhecimento técnico avançado com as mais modernas tecnologias em odontologia. Nosso compromisso é proporcionar tratamentos personalizados que não apenas restauram a função, mas também devolvem a confiança através de um sorriso saudável e bonito.
            </p>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <ServicesGrid
        category="odontologia"
        title="Nossos Tratamentos"
        description="Conheça os tratamentos odontológicos oferecidos pelo Dr. Rogério Goulart"
      />

      {/* Resultados */}
      <CategoryResults />

      {/* FAQ */}
      <CategoryFAQ />

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Pronto para transformar seu sorriso?
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
              Agende uma avaliação e descubra qual tratamento é ideal para você.
            </p>
            <CTAButton to="/contato" size="default">
              <CTAButtonLine>Agendar</CTAButtonLine>
              <CTAButtonLine>avaliação</CTAButtonLine>
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}
