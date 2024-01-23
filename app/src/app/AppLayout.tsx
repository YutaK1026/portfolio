"use client";
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <div className='mt-6 ml-28 mr-28 mb-6'>
          {children}
        </div>
      </body>
    </html>
  )
}
