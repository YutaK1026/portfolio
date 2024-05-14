import CommandNotFoundUse from "@/components/pages/command/hooks/use/command_not_found_use"
import CommandUse from "@/components/pages/command/hooks/use/command_use"
import CommandNotFound from "@/components/pages/command/hooks/not-found/command_not_found"
import CommandShowDatabase from "@/components/pages/command/hooks/show/command_show_databases"
import CommandShowTables from "@/components/pages/command/hooks/show/command_show_tables"
import CommandNotFoundTable from "@/components/pages/command/hooks/show/command_not_found_table"
import CommandRedirect from "@/components/pages/command/hooks/select/command_redirect"
import CommandHelp from "@/components/pages/command/hooks/help/command_help"
import CommandClear from "@/components/pages/command/hooks/clear/command_clear"
import { DatabaseProps } from "@/libs/command/command-props"
import { redirect } from 'next/navigation'

const database: DatabaseProps = require("@/components/pages/command/libs/database.json")

export default class CommandList {
    command: string
    constructor(command: string){
        this.command = command
    }
    action(): string{

        //TODO: this.commandに<>[]のいずれかが入っている場合強制的に退避
        //TODO: 日本語入力された場合退避
        
        if(this.command[this.command.length - 1] === ";"){
            this.command = this.command.slice(0,-1)
        }
        const word_split = this.command.split(" ")

        if (((word_split[0] == "use") || (word_split[0] == "USE")) && word_split.length == 2) {
            const new_dom = this.command_use()
            return new_dom
        }

        if ((word_split[0] == ("show") || word_split[0] == ("SHOW"))  && word_split.length == 2) {
            if ((word_split[1] == ("databases") || word_split[1] == ("DATABASES"))) {
                const new_dom = this.command_show_databases()
                return new_dom
            }
            if ((word_split[1] == ("tables") || word_split[1] == ("TABLES"))) {
                const new_dom = this.command_show_tables()
                return new_dom
            }
            const new_dom = this.command_not_found(word_split[1])
            return new_dom
        }

        if ((word_split[0] == ("select") || word_split[0] == ("SELECT"))) {
            const new_dom = this.command_select()
            return new_dom
        }

        if (word_split[0] == ("help") && word_split.length == 1) {
            const new_dom = this.command_help()
            return new_dom
        }

        if (word_split[0] == "clear" && word_split.length == 1){
            const new_dom = this.command_clear()
            return new_dom
        }
        
        // いずれにも該当しない場合
        const new_dom = this.command_not_found(this.command)
        return new_dom
        
    }
    command_not_found(command: string): string{
        return CommandNotFound(command)
    }
    command_use(): string{
        const word_split: string[] = this.command.split(" ")
        const database_name: string = word_split[1]
        const is_exist: boolean = database_name in database.table
        if (!is_exist) {
            return CommandNotFoundUse(database_name)
        }
        return CommandUse()
    }
    command_show_databases(): string{
        const database_name:string[] = Object.keys(database.table)
        return CommandShowDatabase(database_name)
    }
    command_show_tables(): string{
        const table_name:string[] = Object.keys(database.table.kawachann)
        return CommandShowTables(table_name)
    }
    command_select(): string{
        const word_split: string[] = this.command.split(" ")
        if (word_split[word_split.length - 2] != "from") {
            // select から始まるのに[-2]がfromではなかった場合。
            return CommandNotFound(word_split[word_split.length - 2])
        }
        if (word_split[1] == "*") {
            //　ページリダイレクト
            const address = word_split[3]
            const is_exist: boolean = address in database.table.kawachann
            if(is_exist) { 
                return address
            }
            return CommandNotFoundTable(address)
        }
        return CommandNotFound(word_split[1])
    }
    command_help(): string{
        return CommandHelp()
    }
    command_clear(): string{
        return CommandClear()
    }
}