import Skill from '@/components/pages/skill/presentations/skill-item'
import { SkillProps } from '@/libs/skill/skill-props'
import { useSkill } from '@/components/pages/skill/hooks/index'

type SkillListProps = {
  wrapSize: string
}

export default function SkillList({wrapSize}: SkillListProps) {
  const {title, frontend, backend, others} = useSkill()
  
  return (
    <div>
      <div className='font-extrabold text-3xl m-4 mb-4'>
        {title}
      </div>
      <p className='font-bold text-2xl m-2'>
        - Frontend
      </p>
      <div className={`grid grid-cols-3 content-center grid-cols-[repeat(auto-fill,minmax(${wrapSize}rem,1fr))]`}>
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
      <div className={`grid grid-cols-3 content-center grid-cols-[repeat(auto-fill,minmax(${wrapSize}rem,1fr))]`}>
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
      <div className={`grid grid-cols-3 content-center grid-cols-[repeat(auto-fill,minmax(${wrapSize}rem,1fr))]`}>
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
