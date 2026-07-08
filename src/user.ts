export type DeleteUserResult = {
  success: boolean;
  message: string;
};

export function deleteUser(userId: string): DeleteUserResult {
  if (!userId) {
    return { success: false, message: "User id is required" };
  }

  return { success: true, message: `User ${userId} deleted` };
}
