import { SEO } from '@/components/SEO'
import { TestimonialCard } from '@/components/sections/TestimonialCard'
import { testimonials } from '@/data/testimonials'
import { businessInfo } from '@/data/businessInfo'

export function TestimonialsPage() {
  return (
    <>
      <SEO
        title={`Depoimentos | ${businessInfo.name} - Odontologia`}
        description="Veja o que nossos pacientes dizem sobre nossos tratamentos e atendimento."
        canonical="/depoimentos"
        ogImage="/images/og-image-rogerio-goulart.png"
        ogImageWidth={1200}
        ogImageHeight={630}
        ogImageType="image/png"
        ogImageAlt={`Depoimentos - ${businessInfo.doctorName}`}
      />
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Depoimentos
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Veja o que nossos pacientes dizem sobre nossos tratamentos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
