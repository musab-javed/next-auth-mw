import { findOne } from "@/helpers/dbHelper";
import { User, UserData } from "@/types/users";

export const userValidation = (
  userDataFromToken: UserData
): UserData | never | string => {
  try {
    const user: User | undefined = findOne(userDataFromToken);
    if (!user) {
      return "User is undefined";
    }
    if (user.isBlocked) {
      return "User is blocked";
    }
    const { password, ...data } = user;
    return data;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
