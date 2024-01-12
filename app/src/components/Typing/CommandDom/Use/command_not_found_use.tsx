export default function CommandNotFoundUse(name: string): React.JSX.Element{
    const database_name = name
    return(
        <div>
            ERROR 1049 (42000): Unknown database {database_name}
        </div>
    )
}