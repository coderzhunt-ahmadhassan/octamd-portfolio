import { AboutUsSection } from '@/components/AboutUs'
import { CommonFooter } from '@/components/Footers'
import { LandingPageHeader } from '@/components/Headers'
import {
  Appointments,
  Blogs,
  Cta,
  ExtraServices,
  FAQs,
  HeroSection,
  Testimonials,
  WhyChoseUs,
  WorkProcess
} from '@/components/LandingPage'
import { Services } from '@/components/Services'

export default function Home() {
  return (
    <>
      <LandingPageHeader />
      <HeroSection />
      <Services />
      <AboutUsSection />
      <WhyChoseUs />
      <ExtraServices />
      <WorkProcess />
      <Appointments />
      <Testimonials />
      <FAQs />
      <Cta />
      <Blogs />
      <CommonFooter />
    </>
  )
}
