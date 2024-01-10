"use client"
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { redirect } from 'next/navigation'
import TypingPage from '@/components/Typing'

export default function Home() {
  return(
    <div>
      <TypingPage/>
    </div>
  )
  // redirect("/about")
}
