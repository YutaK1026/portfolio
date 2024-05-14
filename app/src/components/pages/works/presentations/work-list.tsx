import WorkItem from '@/components/pages/works/presentations/work-item'
import { WorkProps } from '@/libs/works/work-props'
import { useWorks } from '@/components/pages/works/hooks/index'

export default function WorkList() {
  const {title, works} = useWorks()

  return (
    <div className="grid grid-cols-2 content-center">
      {works.map((item: WorkProps, index) => {
        return( 
          <div  key={index} className="grid-item flex mx-auto">
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
