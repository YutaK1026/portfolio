export default function CommandShowTables(table_list: string[]): string{
    const table_list_lenght = table_list.length
    return(`+----------------+\n|   Table(w%)    |\n+----------------+\n|     ${table_list.join("      |\n|     ")}    |\n+----------------+\n${table_list_lenght} row in set(0.00 sec)`)
    // return(`+----------------+\n|   Table(w%)    |\n+----------------+\n${table_list.map((item:string,index:number) => {console.log(item); return(`${item}\n`)})}+----------------+\n${table_list_lenght} row in set(0.00 sec)`)
}