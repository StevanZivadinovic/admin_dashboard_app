
import { ProductsType } from "@/src/consts/Types";
import { connectToDatabase } from "../mongoDB";
import { Product } from "../models/Product";


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
  const ITEM_PER_PAGE = 2;
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
