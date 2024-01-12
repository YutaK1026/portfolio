export default function CommandNotFound(command: string): React.JSX.Element{
    return(
        <div>
            ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near {command} at line 1
        </div>
    )
}