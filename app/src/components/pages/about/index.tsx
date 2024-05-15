"use client"

import { useCheckDeviceType } from '@/components/pages/hooks/index'
import AboutPresentation from '@/components/pages/about/presentations/index'

export default function About() {
  const {isPC, isLoading} = useCheckDeviceType()
  return (
    <>
      <AboutPresentation 
        isPC={isPC} 
        isLoading={isLoading} 
      />
    </>
  )
}
