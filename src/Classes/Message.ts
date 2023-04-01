import { User } from "./User";

export class Message {
    messageId: string | undefined;
    sender: User | undefined;
    receiver: User | undefined;
    messageText: string;
    sentAt: Date;
  
    constructor(messageId?: string, senderId?: User, receiver?: User, message_text?: string, sent_at?: Date) {
      this.messageId = messageId || undefined;
      this.sender = senderId || undefined;
      this.receiver = receiver || undefined 
      this.messageText = message_text || '';
      this.sentAt = sent_at || new Date();
    }
  }

  