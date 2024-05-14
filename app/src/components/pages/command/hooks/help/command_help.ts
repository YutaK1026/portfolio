/*
select * from ~~ を入力した場合
*/ 
export default function CommandHelp(): string{
    return(`use [database名]\nshow databases\nshow tables\nselect * from [table名]`)
}