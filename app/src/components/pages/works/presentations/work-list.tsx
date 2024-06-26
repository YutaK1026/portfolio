import WorkItem from '@/components/pages/works/presentations/work-item'
import { WorkProps } from '@/libs/works/work-props'
import { useWorks } from '@/components/pages/works/hooks/index'

type WorkListProps = {
  wrapSize: string
}

export default function WorkList({wrapSize}: WorkListProps) {
  const {title, works} = useWorks()

  return (
    <div className={`grid grid-cols-2 content-center grid-cols-[repeat(auto-fill,minmax(${wrapSize}rem,1fr))]`}>
      {works.map((item: WorkProps, index) => {
        return( 
          <div  key={index} className="grid-item mx-auto">
            <WorkItem
              name={item.name} 
              description={item.description}
              url={item.url}
            />
          </div>
        )
      })}
    </div>
  )
}
