import { TitleProps } from "@/libs/command/command-props"

export default function Title({name}: TitleProps){
	return(
		<div className='font-extrabold text-3xl m-4 mb-4'>
			{name}
		</div>
	)
}