import { UserType } from "@/src/consts/userTypes";
import { connectToDatabase } from "../mongoDB";
import { User } from "./../../api/models/Users";

interface UserResponse {
  users: UserType[];
  count: number;
  filteredUsers: UserType[];
  ITEM_PER_PAGE: number;
}

export const getUsers = async (
  q: string,
  page: number
): Promise<UserResponse> => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 3;
  try {
    connectToDatabase();
    let filteredUsers: UserType[] = [];
    const searchQuery = q ? { username: regex } : {};
    const count = await User.countDocuments(searchQuery);
    const skipCount = ITEM_PER_PAGE * (parseInt(String(page)) - 1);

    const users = await User.find(searchQuery)
      .skip(skipCount)
      .limit(ITEM_PER_PAGE);

    filteredUsers = await User.find(searchQuery);
    return { users, count, filteredUsers, ITEM_PER_PAGE };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to retrieve users");
  }
};
