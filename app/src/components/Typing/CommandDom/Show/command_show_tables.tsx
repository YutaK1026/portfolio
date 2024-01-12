export default function CommandShowTables(table_list: string[]): React.JSX.Element{
    const table_list_lenght = table_list.length
    return(
        <div>
            +----------------+<br/>
            |  Table(w%)  |<br/>
            +----------------+<br/>
            {table_list.map((item:string,index:number) => {
                return(
                    <div key = {index}>
                        | {item} |<br/>
                    </div>
                )
            })}
            +----------------+<br/>
            {table_list_lenght} row in set(0.00 sec)<br/>
        </div>
    )
}