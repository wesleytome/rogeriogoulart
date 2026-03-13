export function StatisticsSection() {
  const statistics = [
    {
      title: '+25',
      text: 'Anos de experiência'
    },
    {
      title: '+5000',
      text: 'Pacientes Atendidos'
    },
    {
      title: '32',
      text: 'Turmas de alunos formados'
    }
  ]

  return (
    <section className="py-12 md:py-20 bg-foreground">
      <div className="container-section">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-12 max-w-5xl mx-auto">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="font-bold text-brand text-4xl sm:text-5xl md:text-[2.7em]">
                {stat.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-background mt-2">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
