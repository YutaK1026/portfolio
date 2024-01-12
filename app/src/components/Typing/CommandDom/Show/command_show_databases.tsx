export default function CommandShowDatabase(database_list: string[]): string{
    return(`+----------------+\n|  Database(w%)  |\n+----------------+\n${database_list.map((item:string,index:number) => {return(`${item}\n`)})}+----------------+\n1 row in set(0.00 sec)\n`)
}