import { SEO } from '@/components/SEO'
import { businessInfo } from '@/data/businessInfo'

export function Services() {
  return (
    <>
      <SEO
        title={`Serviços | ${businessInfo.name} - Odontologia`}
        description="Conheça nossos tratamentos odontológicos: implantes, clareamento, lentes de contato dental, ortodontia, próteses e endodontia."
        canonical="/servicos"
        ogImage="/images/og-image-rogerio-goulart.png"
        ogImageWidth={1200}
        ogImageHeight={630}
        ogImageType="image/png"
        ogImageAlt={`Serviços - ${businessInfo.doctorName}`}
      />
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Nossos Serviços
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oferecemos uma linha completa de tratamentos odontológicos para diferentes necessidades clínicas e estéticas do sorriso.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
