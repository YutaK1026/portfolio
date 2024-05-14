import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Skill from '@/components/pages/skill/presentations/skill-item'
import { SkillProps } from '@/libs/skill/skill-props'
import { useSkill } from '@/components/pages/skill/hooks/index'

export default function SkillList() {
  const {title, frontend, backend, others} = useSkill()
  
  return (
    <div>
      <div className='font-extrabold text-3xl m-4 mb-4'>
        {title}
      </div>
      <p className='font-bold text-2xl m-2'>
        - Frontend
      </p>
      <div className="grid grid-cols-3 content-center">
        {frontend.map((item:SkillProps, index) => {
          return( 
            <div  key={index} className="grid-item">
              <Skill  name={item.name} 
                      description={item.description}
              />
            </div>
          )
        })}
      </div>
      <p className='font-bold text-2xl m-2'>
        - Backend
      </p>
      <div className="grid grid-cols-3 content-center">
        {backend.map((item:SkillProps, index) => {
          return( 
            <div  key={index} className="grid-item">
              <Skill  name={item.name} 
                      description={item.description}
              />
            </div>
          )
        })}
      </div>
      <p className='font-bold text-2xl m-2'>
        - Others
      </p>
      <div className="grid grid-cols-3 content-center">
        {others.map((item:SkillProps, index) => {
          return( 
            <div  key={index} className="grid-item">
              <Skill  name={item.name} 
                      description={item.description}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
