import Introduce from '@/components/pages/about/presentations/introduce'
import AboutMe from '@/components/pages/about/presentations/about-me'
import IntroduceForPhone from '@/components/pages/about/presentations/introduce-for-phone'
import { Loading } from '@/components/loading'

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
          <Introduce />
        </div>:
        <div>
          <AboutMe />
          <IntroduceForPhone />
        </div>
      }
    </>
  )
}