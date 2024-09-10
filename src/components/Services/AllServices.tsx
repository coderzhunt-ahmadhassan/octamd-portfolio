'use client'

import React, { useState } from 'react'
import {
  es_audiology,
  es_cardiology,
  es_dentalCare,
  es_gynecologists,
  es_hematology,
  es_internalMedicine,
  es_neurologyCare,
  es_ophthalmology,
  es_orthopedics,
  es_pulmonology,
  es_surgerycenter,
  es_urologyCare
} from '@/assets'
import { ServiceCard } from '../LandingPage'
import { CustomPagination } from '../common'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

type Props = {}

interface Service {
  title: string
  doctorsCount: number
  image: string | StaticImport
  slug: string
}

const allServices: Service[] = [
  {
    title: 'Internal Medicine',
    doctorsCount: 32,
    image: es_internalMedicine,
    slug: 'internalMedicine'
  },
  {
    title: 'Dental Care',
    doctorsCount: 22,
    image: es_dentalCare,
    slug: 'dentalCare'
  },
  {
    title: 'Urology Care',
    doctorsCount: 42,
    image: es_urologyCare,
    slug: 'urologyCare'
  },
  {
    title: 'Neurology Care',
    doctorsCount: 32,
    image: es_neurologyCare,
    slug: 'neurologyCare'
  },
  {
    title: 'Gynecologists',
    doctorsCount: 32,
    image: es_gynecologists,
    slug: 'gynecologist'
  },
  {
    title: 'Ophthalmology',
    doctorsCount: 32,
    image: es_ophthalmology,
    slug: 'ophthalmology'
  },
  {
    title: 'Orthopedics',
    doctorsCount: 30,
    image: es_orthopedics,
    slug: 'orthopedics'
  },
  {
    title: 'Cardiology',
    doctorsCount: 32,
    image: es_cardiology,
    slug: 'cardiology'
  },
  //fdsfsdfs
  {
    title: 'Surgery Center',
    doctorsCount: 32,
    image: es_surgerycenter,
    slug: 'surgeryCenter'
  },
  {
    title: 'Hematology',
    doctorsCount: 32,
    image: es_hematology,
    slug: 'hematology'
  },
  {
    title: 'Pulmonology',
    doctorsCount: 32,
    image: es_pulmonology,
    slug: 'pulmonology'
  },
  {
    title: 'Audiology Care',
    doctorsCount: 32,
    image: es_audiology,
    slug: 'audiology'
  },
  ////fdsfsdfs
  {
    title: 'Surgery Center01',
    doctorsCount: 32,
    image: es_surgerycenter,
    slug: 'surgeryCenter01'
  },
  {
    title: 'Hematology01',
    doctorsCount: 32,
    image: es_hematology,
    slug: 'hematology01'
  },
  {
    title: 'Pulmonology01',
    doctorsCount: 32,
    image: es_pulmonology,
    slug: 'pulmonology01'
  },
  {
    title: 'Audiology Care01',
    doctorsCount: 32,
    image: es_audiology,
    slug: 'audiology01'
  }
]

const servicesPageLength: number = 12
const totalItems: number = allServices.length

export function AllServices({}: Props) {
  const [currentPage, setCurrentPage] = useState<number>(1)

  function handlePrevious() {
    setCurrentPage(prev => (prev === 1 ? prev : prev - 1))
  }

  function handleNext() {
    setCurrentPage(prev => (prev === totalItems ? prev : prev + 1))
  }

  function handlePageClick(pageNumber: number) {
    setCurrentPage(pageNumber)
  }

  return (
    <>
      <div className='mt-[60px] grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {allServices.slice(0, servicesPageLength).map(service => {
          return <ServiceCard key={service.title} service={service} />
        })}
      </div>
      <div className='mt-[60px]'>
        <CustomPagination
          currentPage={currentPage}
          totalItems={totalItems}
          pageLength={servicesPageLength}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          handlePageClick={handlePageClick}
        />
      </div>
    </>
  )
}
