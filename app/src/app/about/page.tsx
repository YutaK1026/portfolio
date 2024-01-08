import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default function Home() {
  return (
    <div>
      <div className="h-96 grid grid-cols-5 content-center">
        <div className="grid-item col-span-2">
          黒い画像とか置いておく？
        </div>
        <div className="grid-item col-span-3">
          <div className="flex items-center justify-center">
            <p className='text-5xl text-center'>河村悠太</p>
          </div>
          <br/>
          <div className="flex items-center justify-center">
            <p className='text-sm'>名古屋大学情報学部コンピューター科学科3年知能システム系</p>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  )
}
