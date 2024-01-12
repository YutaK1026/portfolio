export default function CommandShowDatabase(database_list: string[]): React.JSX.Element{
    return(
        <div>
            +----------------+<br/>
            |  Database(w%)  |<br/>
            +----------------+<br/>
            {database_list.map((item:string,index:number) => {
                return(
                    <div key = {index}>
                        | {item} |<br/>
                    </div>
                )
            })}
            +----------------+<br/>
            1 row in set(0.00 sec)<br/>
        </div>
    )
}