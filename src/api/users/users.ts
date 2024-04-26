
import { connectToDatabase } from "../mongoDB"
import {User} from './../../api/models/Users'
export const getUsers = async (q: string)=>{
  const regex = new RegExp(q, "i");
  try{
    connectToDatabase()
    const users = await User.find({ username: regex })
    return users;
  }catch(err){
    console.log(err);
    throw new Error('Failed to retrieve users')
  }
}