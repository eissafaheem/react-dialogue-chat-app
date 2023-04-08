import { Message } from "../../Classes/Message";
import { User } from "../../Classes/User";

export class MessageManagement{
    
    async addMessage(newMessage: Message){
        return new Promise((resolve,reject)=>{
            resolve(null);
        })
    }
    
    async getAllMessages(userId: string){
        return new Promise((resolve,reject)=>{
            resolve([
                new Message("24",new User("345","Pappu","5t56"),new User("102","Babloo","babloo56"),"Hii"),
                new Message("24",new User("345","Pappu","5t56"),new User("102","Babloo","babloo56"),"How are you"),
                new Message("24",new User("345","Pappu","5t56"),new User("102","Babloo","babloo56"),"I am fine"),
                new Message("24",new User("345","Pappu","5t56"),new User("102","Babloo","babloo56"),"Hope you are also fine"),
                new Message("24",new User("102","Babloo","babloo56"),new User("345","Pappu","5t56"),"Hello"),
                new Message("24",new User("345","Pappu","5t56"),new User("102","Babloo","babloo56"),"After a long time we are having a chat"),
                new Message("24",new User("102","Babloo","babloo56"),new User("345","Pappu","5t56"),"To me it is yesterday"),
                new Message("24",new User("345","Pappu","5t56"),new User("102","Babloo","babloo56"),"Ok bye"),
                new Message("24",new User("102","Babloo","babloo56"),new User("345","Pappu","5t56"),"Seeyaa!!!"),
            ]);
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