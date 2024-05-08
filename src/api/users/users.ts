"use server";
import { UserType } from "@/src/consts/Types";
import { connectToDatabase } from "../mongoDB";
import { User } from "./../../api/models/Users";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";
import userSchema from "./../../api/zod/UserShema";
import { handleUsersErrors } from "./../../helperFunc/handlingErrors";
import { signIn, signOut } from "@/auth";
import {v2 as cloudinary} from 'cloudinary'
import { resolve } from "path";

cloudinary.config({
  cloud_name: 'dvayrzzpb',
  api_key: '927278486157215',
  api_secret: 'RHG04yrEov7ItQVcypAfeN9OpSg'
});


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

export const addNewusers = async (state: any, formData: FormData) => {
  const {
    username,
    email,
    password,
    phone,
    address,
    isAdmin,
    isActive,
    image,
  } = Object.fromEntries(formData);
  const parsedPhone = parseInt(phone as string);
  //@ts-ignore
  const Image = image as File;
  let imageUrl=''
  const arrayBuffer = await Image.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer)
  try {
    const resultForImage = await new Promise((resolve, reject) => {
      // Upload image to Cloudinary
      cloudinary.uploader.upload_stream({}, (error: any, resultIMG: any) => {
        if (error) {
          reject(error);
        } else {
          imageUrl=resultIMG.secure_url
          resolve(resultIMG);
        }
      }).end(buffer);
    });
  }
    catch(error){
      console.log(error);
      }
 
  console.log(image, 'MYIMAGE')
  const result = userSchema.safeParse({
    username,
    email,
    password,
    phone: parsedPhone,
    address,
    isAdmin,
    isActive,
    img: imageUrl,
  });
  if (result.success) {
    try {
      connectToDatabase();

      const salt = await bcrypt.genSalt(10);
      //@ts-ignore
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        phone: parsedPhone,
        address,
        isAdmin: Boolean(isAdmin),
        isActive: Boolean(isActive),
        img: imageUrl,
      });
      await newUser.save();
      return { succesMsg: result.success };
    } catch (err) {
      console.log(err);
      const errorMessage = handleUsersErrors(err);
      return { error: errorMessage };
    }
  }
  if (result.error) {
    console.log(result.error);
    return { error: result.error.format() };
  } 

};

export const deleteUser = async (id: number) => {
  try {
    connectToDatabase();
    await User.findByIdAndDelete(id);
  } catch (err) {
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/users");
};

export const fetchUser = async (id: number) => {
  try {
    connectToDatabase();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    throw new Error("Failed to fetch user!");
  }
};

export const updateUser = async (state: any, formData: FormData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);
  const parsedPhone = parseInt(phone as string);
  const result = userSchema.safeParse({
    username,
    email,
    password,
    phone: parsedPhone,
    address,
    isAdmin,
    isActive,
  });
  if (result.success) {
    try {
      connectToDatabase();
      console.log("ovde sam");
      const salt = await bcrypt.genSalt(10);
      //@ts-ignore
      const hashedPassword = await bcrypt.hash(password, salt);
      const updateFields = {
        username,
        email,
        password:hashedPassword,
        phone,
        address,
        isAdmin,
        isActive,
      };
      Object.keys(updateFields).forEach(
        (key) =>
          //@ts-ignore
          (updateFields[key] === "" || undefined) && delete updateFields[key]
      );

      await User.findByIdAndUpdate(id, updateFields);

      return { succesMsg: result.success };
    } catch (err) {
      console.log(err);
      const errorMessage = handleUsersErrors(err);
      return { error: errorMessage };
    }
  }
  if (result.error) {
    return { error: result.error.format() };
  }
};

export const handleCredentials = async (formData: {
  get: (arg0: string) => any;
}) => {
  try {
    const response = await signIn("credentials", {
      username: formData.get("username"),
      password: formData.get("password"),
      redirect: false,
    });

    // Extract necessary information and return as plain object
    const user = {
      username: response.username,
      // Add other necessary fields
    };

    return { user };
  } catch (error) {
    // Extract error information and return as plain object
    const errorMessage = error || 'Failed to login'; // Fallback message if error doesn't have message
    return { error: errorMessage };
  }
};

export const handleLogout = async () => {
  try {
    await signOut();
  } catch (err) {
    console.log(err);
  }
};
