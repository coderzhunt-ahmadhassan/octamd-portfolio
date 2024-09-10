import { ServicesIcon } from '@/assets'
import { SectionTitle, SectionWrapper } from '@/components/common'
import { Appointments, Cta } from '@/components/LandingPage'
import { AllServices } from '@/components/Services'

type Props = {}

const page = (props: Props) => {
  return (
    <SectionWrapper className='py-[60px]'>
      <div className='flex flex-col items-center'>
        <SectionTitle
          image={ServicesIcon}
          className='!mx-auto'
          title='our services'
          heading={{
            title: 'Our Mediax Specialties Technical Service',
            className: 'w-full max-w-[47rem] !text-center'
          }}
        />
      </div>
      <AllServices />
      <Cta className='mt-[120px]' />
      <div className='mt-[90px]'>
        <Appointments />
      </div>
    </SectionWrapper>
  )
}

export default page
