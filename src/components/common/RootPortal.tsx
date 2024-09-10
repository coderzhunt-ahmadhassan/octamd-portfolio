'use client'

import React, { ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

type Props = {
  children: ReactNode
  level?: 1 | 2 | 3 | 4 | 5
}

export function RootPortal({ children, level = 1 }: Props) {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null)

  useEffect(() => {
    const id = `modal-level-${level}`
    const existingRoot = document.getElementById(id)
    if (!existingRoot) {
      const root = document.createElement('div')
      root.id = id
      document.body.appendChild(root)
      setPortalRoot(root)
    } else {
      setPortalRoot(existingRoot)
    }
  }, [])

  return <>{portalRoot && createPortal(<>{children}</>, portalRoot)}</>
}
