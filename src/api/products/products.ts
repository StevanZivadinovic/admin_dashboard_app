"use server"
import { ProductsType } from "@/src/consts/Types";
import { connectToDatabase } from "../mongoDB";
import { Product } from "../models/Product";
import { handleProductsErrors } from "@/src/helperFunc/handlingErrors";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import productSchema from './../zod/ProductShema'


interface UserResponse {
  products: ProductsType[];
  count: number;
  filteredProducts: ProductsType[];
  ITEM_PER_PAGE: number;
}

export const getProducts = async (
  q: string,
  page: number
): Promise<UserResponse> => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 3;
  try {
    connectToDatabase();
    let filteredProducts: ProductsType[] = [];
    const searchQuery = q ? { title: regex } : {};
    const count = await Product.countDocuments(searchQuery);
    const skipCount = ITEM_PER_PAGE * (parseInt(String(page)) - 1);

    const products = await Product.find(searchQuery)
      .skip(skipCount)
      .limit(ITEM_PER_PAGE);

      filteredProducts = await Product.find(searchQuery);
      console.log(q)
    return { products, count, filteredProducts, ITEM_PER_PAGE };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to retrieve products");
  }
};

export const addNewProducts = async (state:any, formData: FormData)=>{
  const { title, desc, price, stock, img,color,size } =
  Object.fromEntries(formData);
  const parsedPrice = parseInt(price as string);
  const parsedStock = parseInt(stock as string);
const result = productSchema.safeParse({
  title,
  desc,
  price:parsedPrice,
  stock:parsedStock,
  img,
  color,
  size
  })
  if(result.success){
    
    try{
      connectToDatabase();
      const newProduct = new Product({
        title,
        desc,
        price:parsedPrice,
        stock:parsedStock,
        img,
        color,
        size
      });
       await newProduct.save()
       return {succesMsg:result.success}
    }
    catch(err){
      console.log(err, 'moongose error')
      const errorMessage = handleProductsErrors(err)
      return { error: errorMessage };
    }
  }
  if(result.error){
    console.log(result.error, 'zodError')
    return {error:result.error.format()}
  }
}

export const deleteProduct = async (id:number) => {

  console.log(id, 'idOf');
  try {
    connectToDatabase();
    await Product.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/dashboard/products");
};


export const fetchProduct = async (id:number) => {
  try {
    connectToDatabase();
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    throw new Error("Failed to fetch product!");
  }
};


export const updateProduct = async (state:any, formData:FormData) => {
    const {id, title, desc, price, stock, img,color,size } =
  Object.fromEntries(formData);
    const parsedPrice = parseInt(price as string);
    const parsedStock = parseInt(stock as string);
    const result = productSchema.safeParse({
      title,
        desc,
        price:parsedPrice,
        stock:parsedStock,
        img,
        color,
        size
    })
    if(result.success){
      try {
        connectToDatabase();
        const updateFields = {
          title,
          desc,
          price:parsedPrice,
          stock:parsedStock,
          img,
          color,
          size
        };
        Object.keys(updateFields).forEach(
          (key) =>
            //@ts-ignore
            (updateFields[key] === "" || undefined) && delete updateFields[key]
        );
    
        await Product.findByIdAndUpdate(id, updateFields);
        return {succesMsg:result.success}
      } catch (err) {
        const errorMessage = handleProductsErrors(err)
      return { error: errorMessage };
      }
    }
    if(result.error){
      return {error:result.error.format()}
    }
  
};