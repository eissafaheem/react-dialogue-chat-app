import { Conversation } from "../../Classes/Conversation";
import { User } from "../../Classes/User";

export class ConversationManagement{
    async addConversation(newConversation: Conversation){
        return new Promise((resolve,reject)=>{
            resolve(newConversation);
        })
    }

    async getAllConversations(userId: string): Promise<Conversation[]>{
        return new Promise((resolve,reject)=>{
            resolve(
                [
                    new Conversation("1",new User("101","Raj","raj64"), new User("102","Babloo","babloo56")),
                    new Conversation("2",new User("103","Chintu","chintu651"), new User("102","Babloo","babloo56")),
                    new Conversation("2",new User("102","Babloo","babloo56"), new User("102","Babloo","babloo56")),
                    new Conversation("2",new User("102","Pappu","Pappu56"), new User("102","Babloo","babloo56")),
                ]
            );
        })
    }

    async deleteConversation(conversationId: string){
        return new Promise((resolve,reject)=>{
            resolve(null);
        })
    }

}