import { Loading } from '@/components/loading'
import SkillList from '@/components/pages/skill/presentations/skill-list'

type SkillPresentationProps = {
  isPC: boolean,
  isLoading: boolean
}

export default function SkillPresentation({isPC, isLoading}: SkillPresentationProps) {
	return (
		<>
      {isLoading? <Loading/>:
        isPC? <SkillList wrapSize='20'/>:<SkillList wrapSize='12'/>
      }
    </>
	)
}