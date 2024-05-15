import Image from "next/image";
import { useAbout } from '@/components/pages/about/hooks/index'

type IntroduceProps = {
  wrapSize: string
}

export default function Introduce({wrapSize}: IntroduceProps) {
  const {src, imageStyle, title, icon_style} = useAbout()

  return (
    <div className={`grid grid-cols-[repeat(auto-fill,minmax(${wrapSize}rem,1fr))] m-5`}>

      <div className="m-3">
        <div className="text-lg mb-2 font-semibold">
          {title}
        </div>
        <p className="ml-2">
          河村悠太といいます。<br/>
          中学の頃から部活でC言語・Unityなどを触っており、大学に入ってから本格的に勉強を始めました。<br/>
          大学ではサークルでwebアプリの開発や、バイトでwebアプリ・機械学習の開発などを行っています。<br/>
          最近はバックエンドの最適化やデータベースの設計などに興味があります。<br/>
          本ポートフォリオでは、最近使っているMySQLのコンソールに近しいものを実装しています。ぜひ遊んでください
        </p>
      </div>
      
      <div className="m-3">
        <div className={`grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))]`}>
          <div className="grid-item col-span-2">
            <div className="text-lg mb-2 font-semibold">
              Contact to me
            </div>
            <div className="flex m-1">
              <Image
                src="/props/about/github.webp"
                alt="github"
                width={25}
                height={25}
                style={icon_style}
              />
              <div className="flex items-center justify-center ml-1">
                <a href="https://github.com/YutaK1026" className="btn" >
                  GitHub
                </a>
              </div>
            </div>
            <div className="flex m-1">
              <Image
                src="/props/about/qiita.webp"
                alt="qiita"
                width={25}
                height={25}
                style={icon_style}
              />
              <div className="flex items-center justify-center ml-1">
                <a href="https://qiita.com/YutaK1026" className="btn" >
                    Qiita
                </a>
              </div>
            </div>
            <div className="flex m-1">
              <Image
                src="/props/about/twitter.webp"
                alt="twitter"
                width={25}
                height={25}
                style={icon_style}
              />
              <div className="flex items-center justify-center ml-1">
                <a href="https://twitter.com/inheritans1904" className="btn" >
                  Twitter
                </a>
              </div>
            </div>
            <div className="flex m-1">
              <Image
                src="/props/about/jack.webp"
                alt="jack"
                width={25}
                height={25}
                style={icon_style}
              />
              <div className="flex items-center justify-center ml-1">
                <a href="https://jack-website.netlify.app/" className="btn" >
                  アプリ開発団体jack
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
