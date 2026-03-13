export function TransformSection() {
  return (
    <section 
      className="relative py-12 lg:py-16 xl:py-20"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="container mx-auto px-4 md:px-8 xl:px-20">
        <div className="flex flex-col lg:flex-row items-start">
          {/* Área de conteúdo - metade da página */}
          <div className="w-full lg:w-1/2 lg:pr-6 xl:pr-8">
            <h2 className="mb-4 lg:mb-6 leading-tight text-primary" style={{ fontWeight: 'normal', lineHeight: '1.1' }}>
              <span className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">Transforme-se na sua melhor versão</span>
            </h2>
            <p className="leading-relaxed text-primary" style={{ lineHeight: '1.4' }}>
              <span className="text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                Tratamentos odontológicos e estéticos que elevam sua autoestima, transformam sua autoimagem e refletem diretamente na sua qualidade de vida. Sinta-se muito melhor, por dentro e por fora.
              </span>
            </p>
          </div>
          {/* Espaço reservado para a imagem - metade da largura */}
          <div className="w-full lg:w-1/2"></div>
        </div>
      </div>
    </section>
  )
}

