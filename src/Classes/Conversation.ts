import { User } from "./User";

export class Conversation {
    conversationId: string;
    user1: User;
    user2: User;
  
    constructor(conversationId: string, user1: User, user2: User) {
      this.conversationId = conversationId;
      this.user1 = user1;
      this.user2 = user2;
    }
  }