import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Calendar, Navigation } from 'lucide-react'
import { businessInfo } from '@/data/businessInfo'
import { Link } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix para ícone do marcador no Leaflet com Vite
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

L.Marker.prototype.options.icon = DefaultIcon

export function LocationMap() {
  const latitude = -23.00139106245931
  const longitude = -43.42108961857137
  
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${businessInfo.address.street}, ${businessInfo.address.city}, ${businessInfo.address.state}`
  )}`

  return (
    <section className="py-12 md:py-16 bg-brand">
      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] h-auto lg:h-[600px] rounded-lg overflow-hidden shadow-lg">
          {/* Mapa à esquerda - 70% */}
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-full">
            <MapContainer
              center={[latitude, longitude]}
              zoom={15}
              style={{ height: '100%', width: '100%', zIndex: 0 }}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[latitude, longitude]}>
                <Popup>
                  <strong>{businessInfo.name}</strong><br />
                  {businessInfo.address.street}, {businessInfo.address.city}
                </Popup>
              </Marker>
            </MapContainer>
          </div>

          {/* Painel de informações à direita - 30% */}
          <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center bg-card">
            <div className="space-y-6 sm:space-y-8 max-w-md">
              {/* Horário de funcionamento */}
              <div>
                <h3 className="text-subtitle font-body mb-4 text-brand">Horário de funcionamento</h3>
                <div className="space-y-2 text-foreground">
                  <div className="flex items-center text-sm sm:text-base">
                    <span className="font-medium">SEG - QUA:</span>
                    <span className="ml-1">8h - 19h</span>
                  </div>
                  <div className="flex items-center text-sm sm:text-base">
                    <span className="font-medium">QUI:</span>
                    <span className="ml-1">8h - 17h</span>
                  </div>
                  <div className="flex items-center text-sm sm:text-base">
                    <span className="font-medium">SEX:</span>
                    <span className="ml-1">8h - 17h</span>
                  </div>
                  <div className="flex items-center text-sm sm:text-base">
                    <span className="font-medium">SÁB - DOM:</span>
                    <span className="ml-1">Fechado</span>
                  </div>
                </div>
                
                {/* Agendar consulta */}
                <div className="mt-6">
                  <Button 
                    asChild
                    className="bg-foreground text-background hover:opacity-90 w-full"
                  >
                    <Link to="/contato" className="flex items-center justify-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Agendar Consulta
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Detalhes de contato */}
              <div>
                <h3 className="text-subtitle font-body mb-4 text-brand">Detalhes de contato</h3>
                <div className="space-y-4 text-foreground">
                  {/* Telefone */}
                  <div className="flex items-center gap-3 text-sm sm:text-base">
                    <Phone className="h-5 w-5 flex-shrink-0 text-brand" />
                    <a 
                      href={`tel:${businessInfo.phones.main.replace(/\D/g, '')}`}
                      className="hover:opacity-80 transition-opacity"
                    >
                      {businessInfo.phones.main}
                    </a>
                  </div>

                  {/* E-mail */}
                  <div className="flex items-center gap-3 text-sm sm:text-base">
                    <Mail className="h-5 w-5 flex-shrink-0 text-brand" />
                    <a 
                      href={`mailto:${businessInfo.email}`}
                      className="hover:opacity-80 transition-opacity break-all"
                    >
                      {businessInfo.email}
                    </a>
                  </div>

                  {/* Endereço */}
                  <div className="flex items-start gap-3 text-sm sm:text-base">
                    <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-brand" />
                    <span>
                      {businessInfo.address.street}, {businessInfo.address.city}
                    </span>
                  </div>
                </div>

                {/* Obter rotas */}
                <div className="mt-6">
                  <Button 
                    asChild
                    className="bg-foreground text-background hover:opacity-90 w-full"
                  >
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Navigation className="h-4 w-4" />
                      Obter Rotas
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
