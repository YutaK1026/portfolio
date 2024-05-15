"use client"

import { useCheckDeviceType } from '@/components/pages/hooks/index'
import SkillPresentation from '@/components/pages/skill/presentations/index'

export default function Skill() {
	const {isPC, isLoading} = useCheckDeviceType()
  
	return (
		<>
			<SkillPresentation 
				isPC={isPC} 
				isLoading={isLoading}
			/>
		</>
	)
}