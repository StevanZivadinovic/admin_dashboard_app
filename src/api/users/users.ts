import { UserType } from "@/src/consts/userTypes";
import { connectToDatabase } from "../mongoDB";
import { User } from './../../api/models/Users';

interface UserResponse {
  users: UserType[];
  count: number;
}

export const getUsers = async (q: string, page: number): Promise<UserResponse> => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 2;
  try {
    connectToDatabase();

    const count = await User.find({ username: regex }).count();

    const users = await User.find({ username: regex })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));

    console.log(users, count, q, ITEM_PER_PAGE * (page - 1));
    return { users, count };
  } catch (err) {
    console.log(err);
    throw new Error('Failed to retrieve users');
  }
};
