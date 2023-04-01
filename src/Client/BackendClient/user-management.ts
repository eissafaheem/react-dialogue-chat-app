import { User } from "../../Classes/User";

export class UserManagement{
    async addUser(newuser: User){
        return new Promise((resolve,reject)=>{
            resolve(null);
        })
    }
    
    async getUser(userId: string){
        return new Promise((resolve,reject)=>{
            resolve(null);
        })
    }

    async checkIfUserExists(userId: string){
        return new Promise((resolve,reject)=>{
            resolve(null);
        })
    }

    async deleteUser(userId: string){
        return new Promise((resolve,reject)=>{
            resolve(null);
        })
    }

}