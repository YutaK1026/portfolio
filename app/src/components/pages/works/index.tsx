"use client"

import Title from '@/components/title'
import { useWorks } from '@/components/pages/works/hooks/index'
import WorkList from '@/components/pages/works/presentations/work-list'
import WorkPresentation from '@/components/pages/works/presentations/index'
import { useCheckDeviceType } from '@/components/pages/hooks/index'

export default function Work() {
  const {title, works} = useWorks()
  const {isPC, isLoading} = useCheckDeviceType()
  
  return (
    <div>
      <Title name={title}/>
      <WorkPresentation 
        isPC={isPC} 
				isLoading={isLoading}
			/>
    </div>
  )
}
