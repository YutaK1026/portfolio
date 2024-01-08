import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default function ContactPage() {
  const title = "Contact"
  return (
    <div>
      <div className='font-extrabold text-3xl m-4 mb-4'>
        {title}
      </div>
      <div className="flex items-center justify-center">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf8W9oNnVZnIUaT38bXXp08QAsQsnBxY9z2EEUNB2TlUWRx3A/viewform?embedded=true" width="640" height="450">読み込んでいます…</iframe>
      </div>
    </div>
  )
}
