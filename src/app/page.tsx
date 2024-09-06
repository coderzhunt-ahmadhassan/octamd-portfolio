import { AboutUsSection } from '@/components/AboutUs'
import { CommonFooter } from '@/components/Footers'
import {
  Appointments,
  Blogs,
  Cta,
  ExtraServices,
  FAQs,
  Testimonials,
  WhyChoseUs,
  WorkProcess
} from '@/components/LandingPage'
import { Services } from '@/components/Services'

export default function Home() {
  return (
    <main className=''>
      {/* <LandingPageHeader /> */}
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
    </main>
  )
}
