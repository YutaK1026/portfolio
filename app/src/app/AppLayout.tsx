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
        <div className='m-5'>
          {children}
        </div>
      </body>
    </html>
  )
}
