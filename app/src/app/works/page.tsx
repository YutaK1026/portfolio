import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Work from '@/components/pages/works/works'
export default function WorkPage() {
  interface WorkProps {
    name: string
    description: string
    url: string | undefined
  }
  const title = "Works"
  const works = [
    {name:"CODE_DUEL", description:"大学2年生のハッカソンで作成したwebアプリです。DDDを採用しバックエンド全般の開発・デプロイを行っています。", url:"https://code-duel.onrender.com/"},
    {name:"HYOKA", description:"JPHACKで作成した商品評価サイトです。Amazonのリンクを入力することで、商品の様々な情報を比較できます。Reactで動的なレーダーチャートなどを作成しました。", url:undefined},
    {name:"CYBERドロケイ", description:"大学3年生の時から開発を始めたドロケイアプリです。位置情報や確保情報などをスマホで確認しながら遊べるドロケイを目指し開発中です。", url:undefined},
    {name:"ポートフォリオ", description:"本ポートフォリオです。大学3年生の時に作成しました。", url:"/about"},
  ]
  return (
    <div>
      <div className='font-extrabold text-3xl m-4 mb-4'>
        {title}
      </div>
      <div className="grid grid-cols-2 content-center">
        {works.map((item:WorkProps) => {
          return( 
            <div className="grid-item flex mx-auto">
              <Work 
                name={item.name} 
                description={item.description}
                url={item.url}
              />
            </div>
          )
        })}
      </div>
      
    </div>
  )
}
