import Link from "next/link";
import Image from "next/image";
export default function Introduce() {
    const title = "自己紹介"
    const icon_style = {margin: '2px'}
    return (
        <div>
            <div className="grid grid-cols-8 m-5">
                <div className="grid-item col-span-6">
                    <div className="text-lg mb-2 font-semibold">{title}</div>
                    <p className="ml-2">
                    河村悠太といいます。<br/>
                    中学の頃から部活でC言語・unityなどを触っており、大学に入ってから本格的に勉強を始めました。<br/>
                    大学ではサークルでwebアプリの開発や、バイトでwebアプリ・機械学習の開発などを行っています。<br/>
                    最近はバックエンドの最適化やデータベースの設計などに興味があります。<br/>
                    本ポートフォリオでは、最近使っているMySQLのコンソールに近しいものを実装しています。ぜひ遊んでください
                    </p>
                </div>
                <div className="grid-item col-span-2">
                    <div>
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
