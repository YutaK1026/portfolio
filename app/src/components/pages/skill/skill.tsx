import Image from 'next/image'

interface SkillProps {
    name: string
    description: string
}

export default function Skill({name, description}: SkillProps) {
    const src:string = `/props/skill/${name}.webp`
    return (
        <div className="rounded-md max-w-sm overflow-hidden shadow-lg m-2">
            <div className="flex items-center justify-center">
                <Image
                    className='m-3'
                    src={src}
                    width={100}
                    height={100}
                    alt="hoge"
                />
            </div>
            <div className="px-6 py-4">
                <div className="flex items-center justify-center font-bold text-xl mb-2">
                    {name}
                </div>
                <p className="text-center">
                    {description}
                </p>
            </div>
        </div>

    )
}