import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Skill from '@/components/pages/skill/skill'
export default function Home() {
  return (
    <div>
      <p className='font-bold text-2xl m-2'>
        - Language
      </p>
      <div className="grid grid-cols-3 content-center">
        <div className="grid-item">
          <Skill  name="Python" 
                  description="学校の授業で触りました。
                    主に競技プログラミングや機械学習で使っています。"
          />
        </div>
        <div className="grid-item">
          <Skill  name="Python" 
                  description="学校の授業で触りました。
                    主に競技プログラミングや機械学習で使っています。"
          />
        </div>
        
      </div>
      <p className='font-bold text-2xl m-2'>
        - Framework
      </p>
      <div className="grid grid-cols-3 content-center">
        <div className="grid-item">
          <Skill  name="Python" 
                  description="学校の授業で触りました。
                    主に競技プログラミングや機械学習で使っています。"
          />
        </div>
        <div className="grid-item">
          <Skill  name="Python" 
                  description="学校の授業で触りました。
                    主に競技プログラミングや機械学習で使っています。"
          />
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  )
}
