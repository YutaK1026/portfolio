import Image from 'next/image'
import { useAbout } from '@/components/pages/about/hooks/index'

type AboutMeProps = {
  isPC: boolean
}

export default function AboutMe({isPC}: AboutMeProps) {
  const {src, imageStyle, title, icon_style} = useAbout()
  // TODO: スマホ版サイトで名前を自己紹介が変な風に表示される問題を対応
  return (
    <div className="grid grid-cols-5 content-center m-1">
      <div className="grid-item col-span-2">
        <div className="flex items-center justify-center">
          <Image
              src={src}
              width={400}
              height={400}
              alt="image_name"
              objectFit="contain"
              style={imageStyle}
          />
        </div>
      </div>
      {isPC? 
      <div className="grid-item col-span-3 flex items-center justify-center m-3">
        <div>
          <div className="flex items-center justify-center">
            <p className='text-5xl text-center'>
              河村悠太
            </p>
          </div>
          <br/>
          <div className="flex items-center justify-center">
            <div className='text-sm text-center'>
              名古屋大学情報学部
              コンピューター科学科
              <br />
              4年知能システム系
            </div>
          </div>
        </div>
      </div>
      :<div className="grid-item col-span-3 flex items-center justify-center m-3">
        <div>
          <div className="flex items-center justify-center">
            <p className='text-3xl text-center'>
              河村悠太
            </p>
          </div>
          <br/>
          <div className="flex items-center justify-center">
            <div className='text-xs text-center'>
              名古屋大学情報学部
              <br />
              コンピューター科学科
              <br />
              4年知能システム系
            </div>
          </div>
        </div>
      </div>}
      
    </div>
  )
}
