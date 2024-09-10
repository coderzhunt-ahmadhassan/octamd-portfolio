'use client'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui'
import { useState } from 'react'

interface Props {
  totalItems: number
  pageLength: number
  currentPage: number
  handlePrevious: () => void
  handleNext: () => void
  handlePageClick: (pageNumber: number) => void
}

export function CustomPagination({
  totalItems,
  pageLength,
  currentPage,
  handlePrevious,
  handleNext,
  handlePageClick
}: Props) {
  const totalPages = Math.ceil(totalItems / pageLength)
  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={handlePrevious} disabled={currentPage === 1} />
        </PaginationItem>
        {totalPages < 5 &&
          pageNumbers.map(number => (
            <PaginationItem key={number}>
              <PaginationLink
                onClick={() => handlePageClick(number)}
                isActive={number === currentPage}
              >
                {number}
              </PaginationLink>
            </PaginationItem>
          ))}
        <PaginationItem>
          <PaginationNext onClick={handleNext} disabled={currentPage === totalPages} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
