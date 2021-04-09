import { v4 as uuid } from 'uuid'
import { User } from '../models/User'

export class UserService{
    private users: User[] = []

    constructor(){ }

    getUsers(){
        return this.users 
    }

    addUser(newName: string, newEmail: string){
        const newUser = {id: uuid(), name: newName, email: newEmail}
        this.users.push(newUser)
        return newUser
    }
    deleteUser(id: string){
        this.users = this.users.filter(user => user.id != id)
    }
    modifyUser(id: string, newName: string, newEmail: string){
        this.users = this.users.map(user => {
            if (user.id==id){
                return {id, name: newName, email: newEmail}
            }
            return user
        })
    }

}