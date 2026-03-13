import { SEO } from '@/components/SEO'
import { HeaderSection } from '@/components/sections/HeaderSection'
import { RogerioQuote } from '@/components/sections/RogerioQuote'
import { StatisticsSection } from '@/components/sections/StatisticsSection'
import { ExploreSection } from '@/components/sections/ExploreSection'
import { PatientJourney } from '@/components/sections/PatientJourney'
import { BeforeAfterSection } from '@/components/sections/BeforeAfterSection'
import { ClinicDifferentials } from '@/components/sections/ClinicDifferentials'
import { Testimonials } from '@/components/sections/Testimonials'
import { LocationMap } from '@/components/sections/LocationMap'
import { TopSection } from '@/components/layout/TopSection'
import { Menu } from '@/components/layout/Menu'
import { businessInfo } from '@/data/businessInfo'

export function Home() {
  return (
    <>
      <SEO
        title={`Início | ${businessInfo.name} - Odontologia`}
        description={businessInfo.description}
        canonical="/"
        keywords={`${businessInfo.specialties.join(', ')}, odontologia, dentista rio de janeiro, implantes dentários, clareamento dental, lentes de contato dental, prótese dentária, endodontia`}
        ogTitle={`${businessInfo.name} - Odontologia`}
        ogDescription={businessInfo.description}
        ogImage="/images/og-image-rogerio-goulart.png"
        ogImageWidth={1200}
        ogImageHeight={630}
        ogImageType="image/png"
        ogImageAlt={`${businessInfo.doctorName} - Especialista em Odontologia`}
        ogImageSquare="/images/og-image-rogerio-goulart-1x1.png"
        ogType="website"
        ogUrl="/"
        twitterCard="summary_large_image"
      />
      <TopSection>
        <Menu transparent />
        <HeaderSection />
      </TopSection>
      <RogerioQuote />
      <StatisticsSection />
      <ExploreSection />
      <BeforeAfterSection />
      <ClinicDifferentials />
      <PatientJourney />
      <Testimonials />
      <LocationMap />
    </>
  )
}
