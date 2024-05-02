import Pagination from "@/app/components/dashboard/pagination/pagination";
import SearchBar from "@/app/components/dashboard/searchBar/searchBar";
import DeleteProductBtn from "@/app/components/global/DeleteProductBtn";
import DeleteUserProductMsg from "@/app/components/global/DeleteUserProductMsg";
import { getProducts } from "@/src/api/products/products";
import { ProductsType } from "@/src/consts/Types";
import { truncateText } from "@/src/helperFunc/globalFunc";
import {Tooltip} from "@nextui-org/tooltip";
import Image from "next/image";
import Link from "next/link";

interface productsDataType {
  products: ProductsType[];
  count: number;
  filteredProducts: ProductsType[];
  ITEM_PER_PAGE: number;
}

//@ts-ignore
const Products = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { products, count, filteredProducts, ITEM_PER_PAGE }: productsDataType =
    await getProducts(q, page);
    const pickedProducts =
    filteredProducts.length <= ITEM_PER_PAGE ? filteredProducts : products;

  return (
    <div className="bg-bgSoft mt-4 p-4">
      <div className="flex justify-between">
      <SearchBar/>
        <Link href="/dashboard/products/add">
          <button className="flex bg-purpleBtn px-4 py-2 rounded-md cursor-pointer hover:bg-lightPurpleBtn">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-[90%]">
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created at</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {pickedProducts?.map((product) => (
            <tr key={product.id}>
              <td className="pt-4 pb-4">
                <div className="flex">
                  <Image
                    src={product.img || "/images/noproduct.jpg"}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-[50%] mr-4"
                  />
                  <Tooltip  placement={"top-start"}  offset={-1} content={product.title} className="bg-bgMoreSoft px-4 py-2 rounded-md max-w-[100px] break-words">
                  <p className="flex self-center">{truncateText(product.title)}</p>
                  </Tooltip>
                </div>
              </td>
              <Tooltip  placement={"top-start"}  offset={-25} content={product.desc} className="bg-bgMoreSoft px-4 py-2 rounded-md max-w-[500px]  break-words">
              <td className="">{truncateText(product.desc)}</td>
              </Tooltip>
              <td>{product.price}</td>
              <td>{product.createdAt?.toString().slice(4, 16)}</td>
              <td>{product.stock}</td>
              <td>
                <div className="flex">
                  <Link
                    className="mr-4 bg-greenBtn rounded-md py-1 px-3"
                    href={`/dashboard/products/${product.id}`}
                  >
                    <button>View</button>
                  </Link>
                  <DeleteProductBtn product={product}/>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
      <DeleteUserProductMsg count={count} type={'Product'}/>
    </div>
  );
};
export default Products;
