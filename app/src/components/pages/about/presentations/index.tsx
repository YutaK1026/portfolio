import Introduce from '@/components/pages/about/presentations/introduce'
import AboutMe from '@/components/pages/about/presentations/about-me'
import { Loading } from '@/components/loading/index'

type AboutPresentationProps = {
  isPC: boolean,
  isLoading: boolean
}

export default function AboutPresentation({isPC, isLoading}: AboutPresentationProps) {
  return(
    <>
      {isLoading? <Loading/>:
        isPC? 
        <div>
          <AboutMe />
          <Introduce wrapSize="30"/>
        </div>:
        <div>
          <AboutMe />
          <Introduce wrapSize="12"/>
        </div>
      }
    </>
  )
}