import { User } from "../Classes/User";
import { UserManagementClient } from "../Client/BackendClient/user-management";

export class UserManagementService {
    
    async addUser(newUser: User) {
        return new UserManagementClient().addUser(newUser);
    }

    async getUser(userId: string) {
        return new UserManagementClient().getUser(userId);
    }

    async checkIfUserExists(userId: string) {
        return new UserManagementClient().checkIfUserExists(userId);
    }

    async deleteUser(userId: string) {
        return new UserManagementClient().deleteUser(userId);
    }
}