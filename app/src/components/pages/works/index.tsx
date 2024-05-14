import Title from '@/components/title'
import { useWorks } from '@/components/pages/works/hooks/index'
import WorkList from '@/components/pages/works/presentations/work-list'

export default function Work() {
  const {title, works} = useWorks()

  return (
    <div>
      <Title name={title}/>
      <WorkList />
    </div>
  )
}
