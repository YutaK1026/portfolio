"use client";
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { useRouter } from "next/navigation";
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isPcType, setIsPcType] = useState(false)
  useEffect(() => {
    const mobileTypeList = ["iPhone", "iPad", "iPod", "Android"];
    const machineType = navigator.userAgent;
    const mobileTypeCheck = mobileTypeList.filter((item) => {
      return machineType.search(item) != -1
    })
    if(mobileTypeCheck.length > 0){
      setIsPcType(false)
    }else{
      setIsPcType(true)
    }
    console.log(machineType)
  })
  return (
    <html lang="en">
      <body className={inter.className}>
        {
          isPcType?
          <div>
            <Header/>
            <div className='mt-6 ml-28 mr-28 mb-6'>
              {children}
            </div>
          </div>:
          <div>a</div>
        }
        
      </body>
    </html>
  )
}
