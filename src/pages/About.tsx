import { SEO } from '@/components/SEO'
import { CTAButton, CTAButtonLine } from '@/components/ui/cta-button'
import { GraduationCap, Award, Heart, Target, Clock, Users, CheckCircle2 } from 'lucide-react'
import { businessInfo } from '@/data/businessInfo'
import rogerioImage from '@/images/dr-rogerio-goulart-sobre-o-dr.jpg'

export function About() {
  return (
    <>
      <SEO
        title={`Sobre | ${businessInfo.name} - Odontologia`}
        description="Conheça a trajetória do Dr. Rogério Goulart na odontologia, com foco em saúde bucal, função e estética do sorriso."
        canonical="/sobre"
        ogImage="/images/og-image-rogerio-goulart.png"
        ogImageWidth={1200}
        ogImageHeight={630}
        ogImageType="image/png"
        ogImageAlt={`${businessInfo.doctorName} - Especialista em Odontologia`}
      />

      {/* Hero Section - Imagem de fundo */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Imagem de fundo */}
        <div className="absolute inset-0">
          <div className="absolute inset-x-0 bottom-0 top-[10px] md:top-0">
          <img
            src={rogerioImage}
            alt="Dr. Rogério Goulart - Especialista em Odontologia"
            className="w-full h-full object-cover object-[68%_center] md:object-[74%_18%] lg:object-[76%_20%] xl:object-[74%_18%]"
          />
          </div>
          {/* Overlay do hero: sólido no mobile, gradiente lateral no desktop */}
          <div className="hero-image-overlay absolute inset-0" />
        </div>

        {/* Conteúdo */}
        <div className="relative z-10 w-full py-16 md:py-24">
          <div className="container-section">
            <div className="max-w-2xl">
              {/* Badge */}
              <span className="inline-block px-4 py-2 rounded-full bg-brand text-brand-foreground text-sm font-medium mb-6">
                Conheça o Dr. Rogério
              </span>

              {/* Título */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-4 leading-tight">
                Transformando sorrisos,
                <span className="block">elevando vidas</span>
              </h1>

              {/* Subtítulo */}
              <p className="text-xl md:text-2xl text-brand mb-6">
                Atenção dedicada a cada sorriso
              </p>

              {/* Descrição */}
              <p className="text-lg text-background/90 leading-relaxed max-w-xl">
                Atuação dedicada à odontologia, com o compromisso de oferecer tratamentos
                seguros, personalizados e centrados no bem-estar de cada paciente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* História e Motivação */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container-section">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Uma jornada dedicada ao seu sorriso
              </h2>
              <div className="w-24 h-1 bg-brand mx-auto rounded-full" />
            </div>

            <div className="space-y-8 text-lg text-foreground/80 leading-relaxed">
              <p>
                Desde o início da minha carreira, sempre acreditei que um sorriso saudável
                impacta autoestima, qualidade de vida e confiança. Por isso, dedico minha
                atuação ao aperfeiçoamento contínuo em odontologia clínica e reabilitadora.
              </p>
              <p>
                Cada paciente que entra em minha clínica traz uma história única, com suas 
                expectativas e sonhos. Meu compromisso é entender profundamente essas necessidades 
                e criar um plano de tratamento personalizado que entregue resultados naturais 
                e duradouros.
              </p>
              <p className="text-foreground font-medium">
                "Meu maior objetivo é ver a transformação que acontece quando um paciente 
                se olha no espelho e finalmente se reconhece na sua melhor versão."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Números e Conquistas */}
      <section className="py-16 md:py-20 bg-section-muted">
        <div className="container-section">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand/10 flex items-center justify-center">
                <Clock className="w-8 h-8 text-brand" />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-foreground">Escuta</p>
              <p className="text-muted-foreground mt-1">Atendimento com tempo para entender seu caso</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-brand" />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-foreground">Proximidade</p>
              <p className="text-muted-foreground mt-1">Relação baseada em confiança e clareza</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand/10 flex items-center justify-center">
                <Heart className="w-8 h-8 text-brand" />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-foreground">Cuidado</p>
              <p className="text-muted-foreground mt-1">Conforto e atenção ao longo do tratamento</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand/10 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-brand" />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-foreground">Atualização</p>
              <p className="text-muted-foreground mt-1">Aperfeiçoamento técnico contínuo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formação e áreas de atuação */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Formação */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-brand" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Formação e aperfeiçoamento
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-brand/20">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-brand" />
                  <h3 className="font-semibold text-foreground">Graduação em Odontologia</h3>
                  <p className="text-muted-foreground">Base técnica para uma atuação clínica cuidadosa e individualizada.</p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-brand/20">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-brand" />
                  <h3 className="font-semibold text-foreground">Aperfeiçoamento em reabilitação oral</h3>
                  <p className="text-muted-foreground">Foco em planejamento funcional, mastigação e recuperação do sorriso.</p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-brand/20">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-brand" />
                  <h3 className="font-semibold text-foreground">Atualização em implantodontia e prótese</h3>
                  <p className="text-muted-foreground">Condutas pensadas para devolver segurança, função e estabilidade.</p>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-brand" />
                  <h3 className="font-semibold text-foreground">Educação continuada</h3>
                  <p className="text-muted-foreground">Atualização permanente em técnicas, materiais e planejamento odontológico.</p>
                </div>
              </div>
            </div>

            {/* Áreas de atuação */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-brand" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Áreas de Atuação
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Implantes Dentários',
                  'Lentes de Contato Dental',
                  'Clareamento Dental',
                  'Prótese Dentária',
                  'Dentística Restauradora',
                ].map((area) => (
                  <div 
                    key={area}
                    className="flex items-center gap-3 p-4 bg-section-muted rounded-lg"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0" />
                    <span className="text-foreground font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofia de Trabalho */}
      <section className="py-16 md:py-24 bg-section-muted">
        <div className="container-section">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Minha filosofia de trabalho
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Princípios que guiam cada tratamento e cada decisão
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-brand/10 flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-brand" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Atendimento Humanizado
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Cada paciente é único. Dedico tempo para ouvir suas necessidades, 
                entender suas expectativas e criar uma relação de confiança que 
                vai além do consultório.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-brand/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-brand" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Resultados Naturais
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Meu objetivo é realçar sua beleza natural, não transformá-la. 
                Cada procedimento é planejado para entregar resultados harmoniosos 
                que respeitam suas características únicas.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-brand/10 flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-brand" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Excelência Técnica
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Invisto constantemente em formação e nas mais modernas tecnologias 
                para oferecer tratamentos seguros, eficientes e com os melhores 
                resultados possíveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Pronto para transformar seu sorriso?
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
              Agende uma consulta e descubra como posso ajudá-lo a alcançar 
              a sua melhor versão.
            </p>
            <CTAButton to="/contato" size="default">
              <CTAButtonLine>Agendar</CTAButtonLine>
              <CTAButtonLine>consulta</CTAButtonLine>
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}
