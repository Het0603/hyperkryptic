export type UserServiceResult = {
  success: boolean;
};

export class UserService {
  validate(): UserServiceResult {
    return { success: true };
  }
}
