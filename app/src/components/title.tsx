interface TitleProps {
    name: string
}

export default function Title({name}: TitleProps){
    return(
        <div className='font-extrabold text-3xl m-4 mb-4'>
            {name}
        </div>
    )
}