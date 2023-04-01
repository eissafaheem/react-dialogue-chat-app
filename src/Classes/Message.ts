export class Message {
    message_id: number;
    sender_id: number;
    receiver_id: number;
    message_text: string;
    sent_at: Date;
  
    constructor(message_id?: number, sender_id?: number, receiver_id?: number, message_text?: string, sent_at?: Date) {
      this.message_id = message_id || 0;
      this.sender_id = sender_id || 0;
      this.receiver_id = receiver_id || 0;
      this.message_text = message_text || '';
      this.sent_at = sent_at || new Date();
    }
  }

  