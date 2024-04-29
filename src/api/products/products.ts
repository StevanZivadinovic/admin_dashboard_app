"use server"
import { ProductsType, productFormErrorType } from "@/src/consts/Types";
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
    throw new Error("Failed to retrieve users");
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
      // return{data:result.data}
    }
    catch(err){
      console.log(err, 'moongose error')
      const errorMessage = handleProductsErrors(err)
      return { error: errorMessage };
    }
    revalidatePath("/dashboard/products");
       redirect("/dashboard/products");
  }
  if(result.error){
    console.log(result.error, 'zodError')
    return {error:result.error.format()}
  }
}
