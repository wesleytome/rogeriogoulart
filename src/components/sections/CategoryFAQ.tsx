import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

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
  },
  {
    id: '5',
    question: 'Como saber qual tratamento odontológico é ideal para mim?',
    answer: 'A indicação é feita após avaliação clínica completa, com análise da sua saúde bucal, queixa principal e objetivos do tratamento.'
  },
  {
    id: '6',
    question: 'Os tratamentos são personalizados?',
    answer: 'Sim. Cada plano é individualizado, com etapas definidas para garantir segurança, previsibilidade e resultado funcional e estético.'
  }
]

export function CategoryFAQ() {
  const faqs = odontologiaFAQs
  const title = 'Dúvidas sobre Odontologia'

  return (
    <section className="py-16 md:py-24 bg-gradient-light-to-muted">
      <div className="container-section">
        {/* Header */}
        <div className="section-header">
          <p className="section-label">
            Tire suas dúvidas
          </p>
          <h2 className="section-title">
            Perguntas Frequentes
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            {title}
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
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
        </div>
      </div>
    </section>
  )
}
