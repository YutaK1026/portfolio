import Image from 'next/image'
import { useAbout } from '@/components/pages/about/hooks/index'

export default function AboutMe() {
  const {src, imageStyle, title, icon_style} = useAbout()

  return (
    <div>
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
    </div>
  )
}
