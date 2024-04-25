
import { connectToDatabase } from "../mongoDB"
import {User} from './../../api/models/Users'
export const getUsers = async ()=>{
  connectToDatabase()
  try{
    const users = await User.find()
    return users;
  }catch(err){
    console.log(err);
    throw new Error('Failed to retrieve users')
  }
}