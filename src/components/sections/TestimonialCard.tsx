import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import type { Testimonial } from '@/data/testimonials'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="h-full bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-start gap-4">
        {/* Avatar circular à esquerda */}
        <Avatar className="h-16 w-16 flex-shrink-0">
          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
          <AvatarFallback className="bg-natural-beige text-foreground">
            {testimonial.name
              .split(' ')
              .map((n) => n[0])
              .join('')
              .toUpperCase()}
          </AvatarFallback>
        </Avatar>
        
        {/* Conteúdo do depoimento */}
        <div className="flex-1">
          {/* Aspas grandes no topo */}
          <div className="text-6xl text-sage-green/30 leading-none mb-2 -mt-2">
            "
          </div>
          
          {/* Texto do depoimento */}
          <p className="text-foreground/80 leading-relaxed text-sm mb-4">
            {testimonial.text}
          </p>
          
          {/* Nome em negrito */}
          <div className="font-bold text-foreground text-sm">
            {testimonial.name}
          </div>
        </div>
      </div>
    </div>
  )
}

