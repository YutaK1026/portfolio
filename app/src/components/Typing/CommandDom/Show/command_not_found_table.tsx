export default function CommandNotFoundTable(name: string): React.JSX.Element{
    const table_name = name
    return(
        <div>
            ERROR 1049 (42000): Unknown table {table_name}
        </div>
    )
}