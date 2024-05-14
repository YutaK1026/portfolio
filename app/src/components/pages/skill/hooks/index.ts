type useSkillProps = () => {
  title: string
  frontend: {
    name: string
    description: string
  }[]
  backend: {
    name: string
    description: string
  }[]
  others: {
    name: string
    description: string
  }[]
}

export const useSkill: useSkillProps = () => {
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
  
  return {
    title,
    frontend,
    backend,
    others
  }
} 