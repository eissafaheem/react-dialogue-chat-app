import { ConversationManagementService } from "./Services/conversation-management.service";
import { MessageManagementService } from "./Services/message-management.service";
import { UserManagementService } from "./Services/user-management.service";

export const userManagementService = new UserManagementService();
export const conversationManagementService = new ConversationManagementService();
export const messageManagementService = new MessageManagementService();