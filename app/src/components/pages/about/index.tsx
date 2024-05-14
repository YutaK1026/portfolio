'use client'
import Image from 'next/image'
import { useEffect } from 'react'
import Introduce from '@/components/pages/about/presentations/introduce'
import AboutMe from '@/components/pages/about/presentations/about-me'

export default function AboutPage() {

  return (
    <>
      <AboutMe />
      <Introduce />
    </>
  )
}
