export default function CommandNotFoundUse(name: string): string{
    const database_name: string = name
    return(`ERROR 1049 (42000): Unknown database ${database_name}`)
}