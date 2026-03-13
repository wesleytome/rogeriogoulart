export function RogerioQuote() {
  return (
    <section className="py-12 md:py-20 bg-section-muted-fixed">
      <div className="container-section">
        <div className="max-w-3xl mx-auto">
          {/* Citação */}
          <blockquote className="text-center">
            <p className="text-base sm:text-lg font-light leading-[1.79] mb-5 text-foreground">
              "Acredito que cada sorriso conta uma história única. Minha missão é unir precisão técnica, planejamento individual e cuidado humano para devolver saúde, função e confiança em cada tratamento odontológico."
            </p>
            
            {/* Assinatura */}
            <div className="flex justify-center">
              <span className="text-brand text-2xl md:text-3xl font-bold">
                Rogério Goulart
              </span>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
