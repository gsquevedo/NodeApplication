import {Entity, PrimaryColumn, Column, CreateColumnDate, UpdateColumnDate} from "typeorm";
import { v4 as uuid} from "uuid"

@Entity("users")
class User {
    @PrimaryColumn()
    readonly id: string
    @Column()
    name: string
    @Column()
    email: string
    @Column()
    admin: boolean
    @CreateColumnDate()
    created_at: Date
    @UpdateColumnDate()
    updated_at: Date

    constructor(){
        if(!this.id){
            this.id =  uuid()
        }
    }
}

export { User }