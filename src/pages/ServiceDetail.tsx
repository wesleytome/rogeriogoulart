import { useParams, Link } from 'react-router-dom'
import { SEO } from '@/components/SEO'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ServiceCard } from '@/components/sections/ServiceCard'
import { services } from '@/data/services'
import { businessInfo } from '@/data/businessInfo'
import { CheckCircle2 } from 'lucide-react'

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = services.find((s) => s.id === slug)
  const relatedServices = services
    .filter((s) => s.id !== slug && s.category === service?.category)
    .slice(0, 3)

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Serviço não encontrado</h1>
        <Link to="/servicos">
          <Button>Voltar para Serviços</Button>
        </Link>
      </div>
    )
  }

  const faqs = [
    {
      question: 'Quanto tempo dura o procedimento?',
      answer: service.duration || 'O tempo varia conforme o caso específico.',
    },
    {
      question: 'Qual o tempo de recuperação?',
      answer: service.recovery || 'A recuperação depende de cada paciente.',
    },
    {
      question: 'O procedimento é doloroso?',
      answer: 'Utilizamos técnicas modernas e anestesia adequada para garantir o máximo conforto durante o procedimento.',
    },
    {
      question: 'Qual a durabilidade do resultado?',
      answer: 'Os resultados variam conforme o procedimento, mas todos são realizados com materiais de alta qualidade para máxima durabilidade.',
    },
  ]

  return (
    <>
      <SEO
        title={`${service.title} | ${businessInfo.name} - Odontologia`}
        description={service.shortDescription}
        canonical={`/odontologia/${service.id}`}
        ogImage="/images/og-image-rogerio-goulart.png"
        ogImageWidth={1200}
        ogImageHeight={630}
        ogImageType="image/png"
        ogImageAlt={`${service.title} - ${businessInfo.doctorName}`}
      />

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Início</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/servicos">Serviços</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{service.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Conteúdo Principal */}
            <div className="lg:col-span-2 space-y-8">
              {/* Imagem */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Título e Badge */}
              <div>
                <Badge variant="default" className="mb-4">
                  Odontologia
                </Badge>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                  {service.title}
                </h1>
              </div>

              {/* Descrição */}
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* Benefícios */}
              <Card>
                <CardHeader>
                  <CardTitle>Benefícios</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card>
                <CardHeader>
                  <CardTitle>Perguntas Frequentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Informações</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {service.price && (
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Investimento</p>
                      <p className="text-lg font-semibold text-foreground">{service.price}</p>
                    </div>
                  )}
                  {service.duration && (
                    <>
                      <Separator />
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Duração</p>
                        <p className="text-lg font-semibold text-foreground">{service.duration}</p>
                      </div>
                    </>
                  )}
                  {service.recovery && (
                    <>
                      <Separator />
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Recuperação</p>
                        <p className="text-lg font-semibold text-foreground">{service.recovery}</p>
                      </div>
                    </>
                  )}
                  <Separator />
                  <Button asChild className="w-full" size="lg">
                    <Link to="/contato">Agendar Avaliação</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Serviços Relacionados */}
          {relatedServices.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
                Serviços Relacionados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedServices.map((relatedService) => (
                  <ServiceCard key={relatedService.id} service={relatedService} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
