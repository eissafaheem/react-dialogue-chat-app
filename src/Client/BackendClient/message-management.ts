import { Message } from "../../Classes/Message";

export class MessageManagement{
    
    async addMessage(newMessage: Message){
        return new Promise((resolve,reject)=>{
            resolve(null);
        })
    }
    
    async getAllMessages(userId: string){
        return new Promise((resolve,reject)=>{
            resolve(null);
        })
    }
    
    async deleteMessage(messageId: string){
        return new Promise((resolve,reject)=>{
            resolve(null);
        })
    }
    
    async checkIfNewMessage(userId: string){
        return new Promise((resolve,reject)=>{
            resolve(null);
        })
    }
    
}