import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { ImageProvider } from './contexts/ImageContext'
import { Menu } from './components/layout/Menu'
import { Footer } from './components/layout/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Odontologia } from './pages/Odontologia'
import { EsteticaFacial } from './pages/EsteticaFacial'
import { Services } from './pages/Services'
import { ServiceDetail } from './pages/ServiceDetail'
import { Contact } from './pages/Contact'
import { TestimonialsPage } from './pages/TestimonialsPage'

function AppContent() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="min-h-screen flex flex-col bg-foreground">
      {!isHome && (
        <div className="w-full mx-auto px-0 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-card">
          <Menu />
        </div>
      )}
      {/* Container global com margens laterais - fundo escuro nas margens */}
      <div className="w-full mx-auto px-0 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex-grow bg-foreground">
        <div className="w-full bg-card">
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/odontologia" element={<Odontologia />} />
              <Route path="/odontologia/:slug" element={<ServiceDetail />} />
              <Route path="/estetica-facial" element={<EsteticaFacial />} />
              <Route path="/estetica-facial/:slug" element={<EsteticaFacial />} />
              <Route path="/servicos" element={<Services />} />
              <Route path="/servicos/:slug" element={<ServiceDetail />} />
              <Route path="/depoimentos" element={<TestimonialsPage />} />
              <Route path="/contato" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}

function App() {
  // Permite rodar em subdiretório quando BASE_URL estiver definido
  const basePath = import.meta.env.BASE_URL || '/'
  
  return (
    <BrowserRouter basename={basePath}>
      <ThemeProvider>
        <ImageProvider>
          <AppContent />
        </ImageProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
