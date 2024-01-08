'use client'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Introduce from '@/components/pages/about/introduce'
import { usePathname } from 'next/navigation'

export default function AboutPage() {
  const pathname = usePathname()
  const src: string = "/props/about/home.webp"
  const imageStyle = {
    borderRadius: '2%',
    border: '1px solid #fff',
  }
  return (
    <div>
      <div className="grid grid-cols-5 content-center m-1">
        <div className="grid-item col-span-2">
          <div className="flex items-center justify-center">
            <Image
                src={src}
                width={400}
                height={400}
                alt="hoge"
                objectFit="contain"
                style={imageStyle}
            />
          </div>
        </div>
        <div className="grid-item col-span-3 flex items-center justify-center">
          <div>
            <div className="flex items-center justify-center">
              <p className='text-5xl text-center'>河村悠太</p>
            </div>
            <br/>
            <div className="flex items-center justify-center">
              <p className='text-sm'>名古屋大学情報学部コンピューター科学科3年知能システム系</p>
            </div>
          </div>
        </div>
      </div>
      <Introduce/>
    </div>
  )
}
