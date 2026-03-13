# Site Dr. Rogério Goulart - Odontologia

Site institucional do Dr. Rogério Goulart, especialista em Odontologia Avançada.

## 🚀 Tecnologias

- **React 19** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis (shadcn/ui)
- **React Router** - Roteamento SPA

## 📦 Instalação

```bash
# (Opcional) habilitar pnpm via corepack
corepack enable
corepack prepare pnpm@10.32.1 --activate

# Instalar dependências
pnpm install

# Executar em desenvolvimento
pnpm run dev

# Build para produção
pnpm run build

# Preview do build
pnpm run preview
```

## ⚙️ Comandos via Make

```bash
make help
make install
make dev
make build
make preview
make lint
make docker-up
make docker-down
make status
```

## 📁 Estrutura do Projeto

```
/app
├── src/
│   ├── components/     # Componentes React
│   │   ├── layout/    # Header, Footer, etc
│   │   ├── sections/  # Seções da homepage
│   │   └── ui/        # Componentes UI (shadcn/ui)
│   ├── pages/         # Páginas/rotas
│   ├── data/          # Dados estáticos (serviços, depoimentos)
│   └── images/        # Imagens do projeto
└── public/            # Arquivos estáticos
```

## 🛠️ Scripts Disponíveis

- `pnpm run dev` - Inicia servidor de desenvolvimento
- `pnpm run build` - Gera build de produção
- `pnpm run preview` - Preview do build local
- `pnpm run lint` - Executa ESLint

## 📝 Notas de Desenvolvimento

- O projeto usa React Router com `BrowserRouter` e suporte a `basename` via `BASE_URL`
- Imagens devem ser colocadas em `src/images/` e referenciadas com caminhos relativos
- Componentes UI seguem o padrão shadcn/ui

## 📄 Licença

Este projeto é privado e de uso exclusivo do Dr. Rogério Goulart.
