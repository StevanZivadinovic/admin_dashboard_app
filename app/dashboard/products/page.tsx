import Pagination from "@/app/components/dashboard/pagination/pagination";
import { products } from "@/src/consts/products";
import Image from "next/image";
import Link from "next/link";
import { MdSearch } from "react-icons/md";

const Products = () => {
  return (
    <div className='bg-bgSoft mt-4 p-4'>
      <div className='flex justify-between'>
      <div className='relative mr-4'>
          <MdSearch className="absolute top-2 left-2"/>
          <input type="text" placeholder={`Search for user...`} className='p-1 pl-8 bg-bgMoreSoft rounded-md' />
        </div>
        <Link href="/dashboard/products/add">
          <button className='flex bg-purpleBtn px-4 py-2 rounded-md cursor-pointer hover:bg-lightPurpleBtn'>Add New</button>
        </Link>
      </div>
      <table className='w-[90%]'>
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
          {products?.map((products) => (
            <tr key={products.id}>
              <td className="pt-4 pb-4">
                <div className='flex'>
                  <Image
                    src={products.img || "/images/noproduct.jpg"}
                    alt=""
                    width={40}
                    height={40}
                    className='rounded-[50%] mr-4'
                  />
                 <p className="flex self-center">{products.title}</p> 
                </div>
              </td>
              <td>{products.description}</td>
              <td>{products.price}</td>
              <td>{products.createdAt?.toString().slice(4, 16)}</td>
              <td>{products.stock}</td>
              <td>
                <div className='flex'>
                  <Link className='mr-4 bg-greenBtn rounded-md py-1 px-3' href={`/dashboard/products/${products.id}`}>
                    <button >
                      View
                    </button>
                  </Link>
                  <form action=''>
                    <input type="hidden" name="id" value={(products.id)} />
                    <button className='mr-4 bg-redBtn rounded-md py-1 px-3'>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
      
    </div>
  )
}
export default Products;
