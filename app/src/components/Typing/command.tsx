import CommandNotFoundUse from "./CommandDom/Use/command_not_found_use"
import CommandUse from "./CommandDom/Use/command_use"
import CommandNotFound from "./CommandDom/command_not_found"
import CommandShowDatabase from "./CommandDom/Show/command_show_databases"
import CommandShowTables from "./CommandDom/Show/command_show_tables"
import CommandNotFoundTable from "./CommandDom/Show/command_not_found_table"
import CommandRedirect from "./CommandDom/Select/command_redirect"
import CommandHelp from "./CommandDom/Help/command_help"
import CommandClear from "./CommandDom/Clear/command_clear"

import { redirect } from 'next/navigation'

const database: Database = require("./database.json")

interface Database{
    table:{
        kawachann: {
            about: {
                name: string
                created_at: string
                updated_at: string
            }
            work: {
                name: string
                created_at: string
                updated_at: string
            }
            skill: {
                name: string
                created_at: string
                updated_at: string
            }
            contact: {
                name: string
                created_at: string
                updated_at: string
            }
        }
    }
}

export default class Command {
    command: string
    constructor(command: string){
        this.command = command
    }
    action(): string{

        //TODO: this.commandに<>[]のいずれかが入っている場合強制的に退避
        //TODO: 日本語入力された場合退避

        const word_split = this.command.split(" ")

        if (word_split[0] == ("use" || "USE") && word_split.length == 2) {
            const new_dom = this.command_use()
            return new_dom
        }

        if (word_split[0] == ("show" || "SHOW")  && word_split.length == 2) {
            if (word_split[1] == ("databases" || "DATABASES")) {
                const new_dom = this.command_show_databases()
                return new_dom
            }
            if (word_split[1] == ("tables" || "TABLES")) {
                const new_dom = this.command_show_tables()
                return new_dom
            }
            const new_dom = this.command_not_found(word_split[1])
            return new_dom
        }

        if (word_split[0] == ("select" || "SELECT")) {
            const new_dom = this.command_select()
            return new_dom
        }

        if (word_split[0] == ("help" || "HELP") && word_split.length == 1) {
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
            return CommandNotFound(this.command)
        }
        if (word_split[1] == "*") {
            //ページリダイレクト
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