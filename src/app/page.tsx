import { LandingPageHeader } from '@/components/Headers'
import { AboutUsSection } from '@/components/AboutUs'
import { Services } from '@/components/Services'
import Image from 'next/image'
import { WhyChoseUs } from '@/components/LandingPage'

export default function Home() {
  return (
    <main className=''>
      {/* <LandingPageHeader /> */}
      <Services />
      <AboutUsSection />
      <WhyChoseUs />
    </main>
  )
}
