
import UpdateProductForm from "@/app/components/dashboard/updateProductForm/updateProductForm";
import { fetchProduct } from "@/src/api/products/products";
import Image from "next/image";

//@ts-ignore
const SingleProductPage = async ({params}) => {

  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className="flex mt-4 justify-between">
     
      <UpdateProductForm product={product}/>
    </div>
  );
};

export default SingleProductPage;
