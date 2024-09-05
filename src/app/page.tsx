import { AboutUsSection } from '@/components/AboutUs'
import { Appointments, ExtraServices, WhyChoseUs, WorkProcess } from '@/components/LandingPage'
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
    </main>
  )
}
