export default function CommandShowDatabase(database_list: string[]): React.JSX.Element{
    return(
        <div>
            +----------------+<br/>
            |  &nbsp;Database(w%)&nbsp;  |<br/>
            +----------------+<br/>
            {database_list.map((item:string,index:number) => {
                return(
                    <div>
                        | &nbsp;&nbsp;&nbsp;{item}&nbsp;&nbsp;&nbsp; |<br/>
                    </div>
                )
            })}
            1 row in set(0.00 sec)<br/>
        </div>
    )
}