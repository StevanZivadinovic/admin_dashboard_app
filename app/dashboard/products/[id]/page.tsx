
import UpdateProductForm from "@/app/components/dashboard/updateProductForm/updateProductForm";
import { fetchProduct } from "@/src/api/products/products";
import Image from "next/image";

//@ts-ignore
const SingleProductPage = async ({params}) => {

  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className="flex mt-4 justify-between">
      <div
        style={{ height: "max-content" }}
        className="w-[20%] p-4 bg-bgSoft rounded-md"
      >
        <Image
          className="w-full "
          src={product?.img || "/images/noavatar.png"}
          alt=""
          width={30}
          height={30}
          objectFit="cover"
        />
        <p className="mt-4">{product?.title}</p>
      </div>
      <UpdateProductForm product={product}/>
    </div>
  );
};

export default SingleProductPage;
