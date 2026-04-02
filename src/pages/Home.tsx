import { SEO } from '@/components/SEO'
import { HeaderSection } from '@/components/sections/HeaderSection'
import { RogerioQuote } from '@/components/sections/RogerioQuote'
import { StatisticsSection } from '@/components/sections/StatisticsSection'
import { ExploreSection } from '@/components/sections/ExploreSection'
import { BeforeAfterSection } from '@/components/sections/BeforeAfterSection'
import { Testimonials } from '@/components/sections/Testimonials'
import { LocationMap } from '@/components/sections/LocationMap'
import { TopSection } from '@/components/layout/TopSection'
import { Menu } from '@/components/layout/Menu'
import { businessInfo } from '@/data/businessInfo'

export function Home() {
  const socialTitle = 'Dr. Rogério Goulart | Santos & Goulart Odontologia'
  const socialDescription =
    'Odontologia reabilitadora e estética na Praça Seca, com atendimento individualizado para recuperar saúde, função e confiança.'

  return (
    <>
      <SEO
        title={`Início | ${businessInfo.name} - Odontologia`}
        description={socialDescription}
        canonical="/"
        keywords={`${businessInfo.specialties.join(', ')}, odontologia, dentista rio de janeiro, implantes dentários, clareamento dental, lentes de contato dental, prótese dentária, endodontia`}
        ogTitle={socialTitle}
        ogDescription={socialDescription}
        ogImage="/images/og-image-rogerio-goulart.png"
        ogImageWidth={1200}
        ogImageHeight={630}
        ogImageType="image/png"
        ogImageAlt={`${businessInfo.doctorName} - Odontologia reabilitadora e estética`}
        ogImageSquare="/images/og-image-rogerio-goulart-1x1.png"
        ogType="website"
        ogUrl="/"
        twitterCard="summary_large_image"
        twitterTitle={socialTitle}
        twitterDescription={socialDescription}
        ogSiteName="Clínica Santos & Goulart Odontologia"
      />
      <TopSection>
        <Menu transparent />
        <HeaderSection />
      </TopSection>
      <RogerioQuote />
      <StatisticsSection />
      <ExploreSection />
      <BeforeAfterSection />
      {/* Seções ocultas temporariamente a pedido do usuário:
          <ClinicDifferentials />
          <PatientJourney />
      */}
      <Testimonials />
      <LocationMap />
    </>
  )
}
