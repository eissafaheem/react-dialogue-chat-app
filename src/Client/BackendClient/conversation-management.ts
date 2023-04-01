import { Conversation } from "../../Classes/Conversation";

export class ConversationManagement{
    async addConversation(newConversation: Conversation){
        return new Promise((resolve,reject)=>{
            resolve(null);
        })
    }

    async getAllConversations(conversationId: string){
        return new Promise((resolve,reject)=>{
            resolve(null);
        })
    }

    async deleteConversation(conversationId: string){
        return new Promise((resolve,reject)=>{
            resolve(null);
        })
    }

}