export interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  text: string
  date: string
  avatar?: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Maria Silva',
    location: 'São Paulo, SP',
    rating: 5,
    text: 'Excelente atendimento! O Dr. Rogério é muito profissional e atencioso. Meu tratamento com implantes foi perfeito, sem dor e com resultados incríveis. Recomendo muito!',
    date: '2024-01-15',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  {
    id: '2',
    name: 'João Santos',
    location: 'Rio de Janeiro, RJ',
    rating: 5,
    text: 'Fiz clareamento dental e fiquei muito satisfeito com o resultado. A equipe é muito competente e o ambiente da clínica é acolhedor. Voltarei para outros tratamentos!',
    date: '2024-02-20',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  {
    id: '3',
    name: 'Ana Costa',
    location: 'Belo Horizonte, MG',
    rating: 5,
    text: 'Fiz implantes dentários com o Dr. Rogério e voltei a mastigar com segurança. Atendimento excelente e resultado muito natural.',
    date: '2024-03-10',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  {
    id: '4',
    name: 'Carlos Oliveira',
    location: 'Curitiba, PR',
    rating: 5,
    text: 'Profissional excepcional! Fiz lentes de contato dental e o resultado foi perfeito. Meu sorriso ficou exatamente como eu queria. Muito obrigado!',
    date: '2024-03-25',
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  {
    id: '5',
    name: 'Patricia Lima',
    location: 'Porto Alegre, RS',
    rating: 5,
    text: 'O tratamento de canal foi tranquilo e resolveu minha dor rapidamente. Equipe atenciosa e muito profissional.',
    date: '2024-04-05',
    avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  }
]
