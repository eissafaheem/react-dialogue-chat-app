import { Conversation } from "../Classes/Conversation";
import { ConversationManagement } from "../Client/BackendClient/conversation-management";

export class ConversationManagementService{
    async addConversation(newConversation: Conversation){
        return new ConversationManagement().addConversation(newConversation);
    }

    async getAllConversations(userId: string): Promise<Conversation[]>{
        return new ConversationManagement().getAllConversations(userId);
    }
    
    async deleteConversation(conversationId: string){
        return new ConversationManagement().deleteConversation(conversationId);
    }
}