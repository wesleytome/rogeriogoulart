import { SEO } from '@/components/SEO'
import { CTAButton, CTAButtonLine } from '@/components/ui/cta-button'
import { TopSection } from '@/components/layout/TopSection'
import { Menu } from '@/components/layout/Menu'
import { businessInfo } from '@/data/businessInfo'

export function EsteticaFacial() {
  return (
    <>
      <SEO
        title={`Atendimento Odontológico Exclusivo | ${businessInfo.name}`}
        description="Atualmente, a clínica não realiza procedimentos de estética facial. Conheça nossos tratamentos odontológicos."
        canonical="/estetica-facial"
        ogImage="/images/og-image-rogerio-goulart.png"
        ogImageWidth={1200}
        ogImageHeight={630}
        ogImageType="image/png"
        ogImageAlt={`Atendimento odontológico exclusivo - ${businessInfo.doctorName}`}
      />
      
      <TopSection>
        <Menu />
      </TopSection>

      <section className="py-16 md:py-24 bg-section-muted">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Atendimento odontológico exclusivo
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              O Dr. Rogério Goulart atua exclusivamente na odontologia.
              No momento, a clínica não realiza procedimentos de estética facial.
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Conheça nossos tratamentos odontológicos
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Implantes dentários, clareamento dental, lentes de contato dental, ortodontia,
              prótese dentária e endodontia com planejamento personalizado.
            </p>
            <CTAButton to="/odontologia" size="default">
              <CTAButtonLine>Ver tratamentos</CTAButtonLine>
              <CTAButtonLine>odontológicos</CTAButtonLine>
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}
