import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { redirect } from 'next/navigation'
export default function Home() {
  redirect("/about")
}
