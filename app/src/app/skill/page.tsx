import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Skill from '@/components/pages/skill/skill'
import '../globals.css'

export default function SkillPage() {
  interface SkillProps {
    name: string
    description: string
  }
  const title = "Skill"
  const frontend = [
    {name:"TypeScript", description:"webページのフロントエンド開発に使用しています。\n静的型付けが出来るのが気に入っています。"},
    {name:"NextJS", description:"フロントエンド開発で最も使用しているフレームワークです。\n本サイトもこれを使用しています。"},
  ]
  const backend = [
    {name:"Python", description:"学校の授業で触りました。\n主に競技プログラミングや機械学習、webページのバックエンドで使っています。"},
    {name:"fastAPI", description:"pythonでバックエンドを作る場合最も使用しているフレームワークです。\n小規模なアプリ開発では特に愛用しています。"},
    {name:"MySQL", description:"DBを使いたい時は主にこれを使用しています。\n使用技術・デプロイ先によってはPostgreSQLを使うこともあります。"},
    {name:"Azure", description:"Active Directory, SQL Databaseなどを使用してアプリをデプロイしたことがあります。"}
  ]
  const others = [
    {name:"Docker",description:"開発環境をチームメンバーと共有したい場合やローカルを汚したくない時に使用しています。"},
    {name:"GitHub",description:"開発のソースコード、授業ノート、課題など色々な用途で使用しています。"},
  ]
  return (
    <div>
      <div className='font-extrabold text-3xl m-4 mb-4'>
        {title}
      </div>
      <p className='font-bold text-2xl m-2'>
        - Frontend
      </p>
      <div className="grid grid-cols-3 content-center">
        {frontend.map((item:SkillProps, index) => {
          return( 
            <div  key={index} className="grid-item">
              <Skill  name={item.name} 
                      description={item.description}
              />
            </div>
          )
        })}
      </div>
      <p className='font-bold text-2xl m-2'>
        - Backend
      </p>
      <div className="grid grid-cols-3 content-center">
        {backend.map((item:SkillProps, index) => {
          return( 
            <div  key={index} className="grid-item">
              <Skill  name={item.name} 
                      description={item.description}
              />
            </div>
          )
        })}
      </div>
      <p className='font-bold text-2xl m-2'>
        - Others
      </p>
      <div className="grid grid-cols-3 content-center">
        {others.map((item:SkillProps, index) => {
          return( 
            <div  key={index} className="grid-item">
              <Skill  name={item.name} 
                      description={item.description}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
