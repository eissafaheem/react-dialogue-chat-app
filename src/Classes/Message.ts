import { User } from "./User";

export class Message {
    messageId: string | undefined;
    sender: User | undefined;
    receiver: User | undefined;
    messageText: string;
    sentAt: Date;
  
    constructor(messageId?: string, sender?: User, receiver?: User, messageText?: string, sentAt?: Date) {
      this.messageId = messageId || undefined;
      this.sender = sender || undefined;
      this.receiver = receiver || undefined 
      this.messageText = messageText || '';
      this.sentAt = sentAt || new Date();
    }
  }

  