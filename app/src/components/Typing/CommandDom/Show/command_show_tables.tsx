export default function CommandShowTables(table_list: string[]): string{
    const table_list_length: number = table_list.length
    return(`+----------------+\n|   Table(w%)    |\n+----------------+\n|     ${table_list.join("      |\n|     ")}    |\n+----------------+\n${table_list_length} row in set(0.00 sec)`)
}