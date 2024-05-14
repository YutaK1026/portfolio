type useWorks = () => {
  title: string
  works: {
    name: string
    description: string
    url: string | undefined
  }[]
}

export const useWorks: useWorks = () => {
  const title = "Works"
  const works = [
    {name:"CODE_DUEL", description:"大学2年生のハッカソンで作成したwebアプリです。DDDを採用しバックエンド全般の開発・デプロイを行っています。", url:"https://code-duel.onrender.com/"},
    {name:"HYOKA", description:"JPHACKで作成した商品評価サイトです。Amazonのリンクを入力することで、商品の様々な情報を比較できます。Reactで動的なレーダーチャートなどを作成しました。", url:undefined},
    {name:"CYBERドロケイ", description:"大学3年生の時から開発を始めたドロケイアプリです。位置情報や確保情報などをスマホで確認しながら遊べるドロケイを目指し開発中です。", url:undefined},
    {name:"ポートフォリオ", description:"本ポートフォリオです。大学3年生の時に作成しました。", url:"/about"},
  ]
  return {
    title,
    works
  }
}