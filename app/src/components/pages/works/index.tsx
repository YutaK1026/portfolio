import Title from '@/components/title'
import Works from '@/components/pages/works/works'
interface WorkProps {
    name: string
    description: string
    url: string | undefined
}

export default function Work() {
  const title = "Works"
  const works = [
    {name:"CODE_DUEL", description:"大学2年生のハッカソンで作成したwebアプリです。DDDを採用しバックエンド全般の開発・デプロイを行っています。", url:"https://code-duel.onrender.com/"},
    {name:"HYOKA", description:"JPHACKで作成した商品評価サイトです。Amazonのリンクを入力することで、商品の様々な情報を比較できます。Reactで動的なレーダーチャートなどを作成しました。", url:undefined},
    {name:"CYBERドロケイ", description:"大学3年生の時から開発を始めたドロケイアプリです。位置情報や確保情報などをスマホで確認しながら遊べるドロケイを目指し開発中です。", url:undefined},
    {name:"ポートフォリオ", description:"本ポートフォリオです。大学3年生の時に作成しました。", url:"/about"},
  ]
  return (
    <div>
      <Title name={title}/>
      <div className="grid grid-cols-2 content-center">
        {works.map((item:WorkProps, index) => {
          return( 
            <div  key={index} className="grid-item flex mx-auto">
              <Works 
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
