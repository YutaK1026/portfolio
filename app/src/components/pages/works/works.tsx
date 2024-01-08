import Image from 'next/image'
import Link from 'next/link'

interface WorkProps {
    name: string
    description: string
    url: string | undefined
}

export default function Work({name, description, url}: WorkProps) {
    const src:string = `/props/work/${name}.png`
    return (
        <div className="rounded-md max-w-sm overflow-hidden shadow-lg m-2">
            <div className="flex items-center justify-center">
                <Image
                    className='m-3'
                    src={src}
                    width={300}
                    height={150}
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
                {url===undefined ? <div></div> : 
                    <div className='flex justify-end'>
                        <Link className="text-sm hover:text-gray-600" href={url}>
                            <p>link to {name}</p>
                        </Link> 
                    </div>
                }
            </div>
        </div>

    )
}