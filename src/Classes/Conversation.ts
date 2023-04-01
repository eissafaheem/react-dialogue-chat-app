import { User } from "./User";

export class Conversation {
    conversation_id: string;
    user1: User;
    user2: User;
  
    constructor(conversation_id: string, user1: User, user2: User) {
      this.conversation_id = conversation_id;
      this.user1 = user1;
      this.user2 = user2;
    }
  }