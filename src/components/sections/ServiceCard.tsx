import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { ArrowRight } from 'lucide-react'
import type { Service } from '@/data/services'

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="service-card-wrapper card-hover group bg-transparent border-0 shadow-none h-full flex flex-col">
      <div className="relative overflow-hidden rounded-t-xl">
        <AspectRatio ratio={4 / 3}>
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </AspectRatio>
        <div className="absolute top-4 right-4">
          <Badge variant="default">
            Odontologia
          </Badge>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="service-card-title card-text text-xl">
          {service.title}
        </CardTitle>
        <CardDescription className="service-card-description card-text text-base">
          {service.shortDescription}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {service.price && (
          <p className="service-card-price card-text text-sm mb-2">
            <strong>Investimento:</strong> {service.price}
          </p>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-foreground text-background hover:opacity-90 group/btn">
          <Link to={`/servicos/${service.id}`}>
            Saiba Mais
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
