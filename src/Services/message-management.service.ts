import { Message } from "../Classes/Message";
import { MessageManagement } from "../Client/BackendClient/message-management";

export class MessageManagementService{
    async addMessage(newMessage: Message){
        return new MessageManagement().addMessage(newMessage);
    }
    
    async getAllMessages(userId: string){
       return new MessageManagement().getAllMessages(userId);
    }
    
    async deleteMessage(messageId: string){
       return new MessageManagement().deleteMessage(messageId);
    }
    
    async checkIfNewMessage(userId: string){
       return new MessageManagement().checkIfNewMessage(userId);
    }
}