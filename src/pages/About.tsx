import { SEO } from '@/components/SEO'
import { CTAButton, CTAButtonLine } from '@/components/ui/cta-button'
import { GraduationCap, Award, Heart, Target, Clock, Users, CheckCircle2 } from 'lucide-react'
import { businessInfo } from '@/data/businessInfo'
import rogerioImage from '@/images/rogerio-goulart.png'

export function About() {
  return (
    <>
      <SEO
        title={`Sobre | ${businessInfo.name} - Odontologia`}
        description="Conheça a história e experiência do Dr. Rogério Goulart na odontologia. Mais de 25 anos promovendo saúde bucal, função e estética do sorriso."
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
          <img
            src={rogerioImage}
            alt="Dr. Rogério Goulart - Especialista em Odontologia"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradiente escuro da esquerda para direita */}
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
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
                Mais de 25 anos de dedicação à excelência
              </p>

              {/* Descrição */}
              <p className="text-lg text-background/90 leading-relaxed max-w-xl">
                Há mais de 25 anos dedicados à odontologia, com o compromisso de oferecer
                tratamentos seguros, personalizados e centrados no bem-estar de cada paciente.
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
              <p className="text-3xl md:text-4xl font-bold text-foreground">+25</p>
              <p className="text-muted-foreground mt-1">anos de experiência</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-brand" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-foreground">+5.000</p>
              <p className="text-muted-foreground mt-1">pacientes atendidos</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand/10 flex items-center justify-center">
                <Heart className="w-8 h-8 text-brand" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-foreground">98%</p>
              <p className="text-muted-foreground mt-1">de satisfação</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand/10 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-brand" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-foreground">+20</p>
              <p className="text-muted-foreground mt-1">especializações</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formação e Especializações */}
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
                  Formação Acadêmica
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-brand/20">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-brand" />
                  <h3 className="font-semibold text-foreground">Graduação em Odontologia</h3>
                  <p className="text-muted-foreground">Universidade Federal do Rio de Janeiro (UFRJ)</p>
                  <p className="text-sm text-muted-foreground">2005 - 2010</p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-brand/20">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-brand" />
                  <h3 className="font-semibold text-foreground">Especialização em Implantodontia</h3>
                  <p className="text-muted-foreground">Associação Brasileira de Odontologia (ABO)</p>
                  <p className="text-sm text-muted-foreground">2011 - 2013</p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-brand/20">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-brand" />
                  <h3 className="font-semibold text-foreground">Especialização em Prótese Dentária</h3>
                  <p className="text-muted-foreground">Conselho Federal de Odontologia (CFO)</p>
                  <p className="text-sm text-muted-foreground">2018 - 2020</p>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-brand" />
                  <h3 className="font-semibold text-foreground">Mestrado em Odontologia Estética</h3>
                  <p className="text-muted-foreground">Universidade de São Paulo (USP)</p>
                  <p className="text-sm text-muted-foreground">2020 - 2022</p>
                </div>
              </div>
            </div>

            {/* Especializações */}
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
                  'Ortodontia',
                  'Prótese Dentária',
                  'Endodontia',
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
