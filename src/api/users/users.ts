"use server"
import { UserType } from "@/src/consts/Types";
import { connectToDatabase } from "../mongoDB";
import { User } from "./../../api/models/Users";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import userSchema from './../../api/zod/UserShema'
import {handleUsersErrors} from './../../helperFunc/handlingErrors'

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

export const addNewusers = async (state:any, formData: FormData)=>{
  const { username, email, password, phone, address, isAdmin, isActive } =
  Object.fromEntries(formData);
  const parsedPhone = parseInt(phone as string);
const result = userSchema.safeParse({
    username,
      email,
      password,
      phone:parsedPhone,
      address,
      isAdmin,
      isActive
  })
  
  if(result.success){
    
    try{
      connectToDatabase();

      const salt = await bcrypt.genSalt(10);
      //@ts-ignore
      const hashedPassword =await bcrypt.hash(password, salt);
  
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        phone:parsedPhone,
        address,
        isAdmin:Boolean(isAdmin),
        isActive:Boolean(isActive),
      });
       await newUser.save()
      // return{data:result.data}
    }
    catch(err){
      const errorMessage = handleUsersErrors(err)
      return { error: errorMessage };
    }
    revalidatePath("/dashboard/users");
       redirect("/dashboard/users");
  }
  if(result.error){
    return {error:result.error.format()}
  }
}

export const deleteUser = async (id:number) => {
  try {
    connectToDatabase();
    await User.findByIdAndDelete(id);
  } catch (err) {
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/users");
};


export const fetchUser = async (id:number) => {
  try {
    connectToDatabase();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    throw new Error("Failed to fetch user!");
  }
};

export const updateUser = async (state:any, formData:FormData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);
    const parsedPhone = parseInt(phone as string);
    const result = userSchema.safeParse({
      username,
        email,
        password,
        phone:parsedPhone,
        address,
        isAdmin,
        isActive
    })
    if(result.success){
      try {
        connectToDatabase();
        console.log('ovde sam')
        const updateFields = {
          username,
          email,
          password,
          phone,
          address,
          isAdmin,
          isActive,
        };
        console.log(Object.keys(updateFields))
        Object.keys(updateFields).forEach(
          (key) =>
            //@ts-ignore
            (updateFields[key] === "" || undefined) && delete updateFields[key]
        );
    
        await User.findByIdAndUpdate(id, updateFields);
      } catch (err) {
        console.log(err);
        const errorMessage = handleUsersErrors(err)
      return { error: errorMessage };
      }
      
      revalidatePath("/dashboard/users");
      redirect("/dashboard/users");
    }
    if(result.error){
      return {error:result.error.format()}
    }
  
};