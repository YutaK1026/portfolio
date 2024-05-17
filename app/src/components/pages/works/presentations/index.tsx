import { Loading } from '@/components/loading/index'
import WorkList from '@/components/pages/works/presentations/work-list'

type WorkPresentationProps = {
  isPC: boolean,
  isLoading: boolean
}

export default function WorkPresentation({isPC, isLoading}: WorkPresentationProps) {
	return (
		<>
      {isLoading? <Loading/>:
        isPC? <WorkList wrapSize="30" />:<WorkList wrapSize="12" />
      }
    </>
	)
}