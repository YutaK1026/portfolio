import { Loading } from '@/components/loading'
import SkillList from '@/components/pages/skill/presentations/skill-list'
import SkillListForMobile from '@/components/pages/skill/presentations/skill-list-for-mobile'

type SkillPresentationProps = {
  isPC: boolean,
  isLoading: boolean
}


export default function SkillPresentation({isPC, isLoading}: SkillPresentationProps) {
	return (
		<>
      {isLoading? <Loading/>:
        isPC? <SkillList />:<SkillListForMobile />
      }
    </>
	)
}