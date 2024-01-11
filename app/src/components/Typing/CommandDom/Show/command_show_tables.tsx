export default function CommandShowTables(table_list: string[]): React.JSX.Element{
    const table_list_lenght = table_list.length
    return(
        <div>
            +----------------+<br/>
            |  &nbsp;&nbsp;Table(w%)&nbsp;&nbsp;  |<br/>
            +----------------+<br/>
            {table_list.map((item:string,index:number) => {
                return(
                    <div>
                        | &nbsp;&nbsp;&nbsp;{item}&nbsp;&nbsp;&nbsp; |<br/>
                    </div>
                )
            })}
            {table_list_lenght} row in set(0.00 sec)<br/>
        </div>
    )
}