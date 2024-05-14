export default function CommandNotFoundTable(name: string): string{
    const table_name: string = name
    return(`ERROR 1049 (42000): Unknown table ${table_name}`)
}