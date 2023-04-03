export class User {
    userId: string | undefined;
    userName: string;
    passwordHash: string;
  
    constructor(userId?: string, userName?: string, passwordHash?: string) {
      this.userId = userId || undefined;
      this.userName = userName || '';
      this.passwordHash = passwordHash || '';
    }
  }
  