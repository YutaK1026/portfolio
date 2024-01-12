/*
select * from ~~ を入力した場合
*/ 
export default function CommandHelp(): React.JSX.Element{
    return(
        <div>
            use [database名]<br/>
            show databases<br/>
            show tables<br/>
            select * from [table名]<br/>
        </div>
    )
}