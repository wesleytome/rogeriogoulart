import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface FAQItem {
  id: string
  question: string
  answer: string
}

const odontologiaFAQs: FAQItem[] = [
  {
    id: '1',
    question: 'Implantes doem?',
    answer: 'O procedimento de implante é realizado com anestesia local, então você não sentirá dor durante o processo. Após o procedimento, pode haver um desconforto leve que é facilmente controlado com medicação prescrita. A maioria dos pacientes relata que a dor é muito menor do que esperavam.'
  },
  {
    id: '2',
    question: 'Quanto tempo dura o clareamento?',
    answer: 'O clareamento dental profissional pode durar de 1 a 2 anos, dependendo dos cuidados do paciente. Para manter os resultados por mais tempo, é importante evitar alimentos e bebidas que mancham os dentes, como café, chá, vinho tinto e fumo. Também recomendamos manutenções periódicas.'
  },
  {
    id: '3',
    question: 'Lentes danificam os dentes?',
    answer: 'Não, as lentes de contato dental são extremamente finas e o procedimento é minimamente invasivo. Apenas uma pequena camada do esmalte dental é removida (menos de 0,5mm), o que é necessário para a adesão das lentes. Quando realizadas por um profissional experiente, as lentes não danificam os dentes e podem durar mais de 15 anos.'
  },
  {
    id: '4',
    question: 'Vocês realizam harmonização facial, botox ou preenchimento?',
    answer: 'Não. O atendimento do Dr. Rogério Goulart é exclusivamente odontológico.'
  }
]

const geralFAQs: FAQItem[] = [
  {
    id: '1',
    question: 'Aceita convênio?',
    answer: 'Atualmente trabalhamos com alguns planos odontológicos selecionados. Para verificar se seu convênio é aceito, entre em contato conosco pelo telefone ou WhatsApp. Também oferecemos opções de parcelamento e financiamento para facilitar o acesso aos tratamentos.'
  },
  {
    id: '2',
    question: 'Tem estacionamento?',
    answer: 'Sim, nossa clínica possui estacionamento próprio e gratuito para nossos pacientes. O estacionamento está localizado nas dependências da clínica, oferecendo comodidade e segurança durante sua visita.'
  },
  {
    id: '3',
    question: 'Como agendar?',
    answer: 'Você pode agendar sua consulta de várias formas: pelo telefone durante nosso horário de funcionamento, através do WhatsApp para maior comodidade, ou preenchendo o formulário de contato em nosso site. Nossa equipe entrará em contato para confirmar o melhor horário disponível para você.'
  }
]

export function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-light-to-muted">
      <div className="container-section">
        {/* Header - Alinhado à esquerda */}
        <div className="section-header">
          <p className="section-label">
            Tire suas dúvidas
          </p>
          <h2 className="section-title">
            Perguntas Frequentes
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Tire suas dúvidas sobre nossos tratamentos e procedimentos
          </p>
        </div>

        {/* Tabs com Accordion */}
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="odontologia" className="w-full">
            <TabsList className="services-tabs-list mb-6 md:mb-8 flex-wrap h-auto gap-1">
              <TabsTrigger
                value="odontologia"
                className="services-tabs-trigger"
              >
                Odontologia
              </TabsTrigger>
              <TabsTrigger
                value="geral"
                className="services-tabs-trigger"
              >
                Geral
              </TabsTrigger>
            </TabsList>

            {/* Tab Odontologia */}
            <TabsContent value="odontologia" className="mt-0">
              <Accordion type="single" collapsible className="w-full">
                {odontologiaFAQs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id} className="border-border">
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-brand">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            {/* Tab Geral */}
            <TabsContent value="geral" className="mt-0">
              <Accordion type="single" collapsible className="w-full">
                {geralFAQs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id} className="border-border">
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-brand">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
