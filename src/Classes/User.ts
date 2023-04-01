export class User {
    user_id: number;
    username: string;
    password_hash: string;
  
    constructor(user_id?: number, username?: string, password_hash?: string) {
      this.user_id = user_id || 0;
      this.username = username || '';
      this.password_hash = password_hash || '';
    }
  }
  