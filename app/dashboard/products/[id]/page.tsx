"use client";
import { products } from "@/src/consts/products";
import Image from "next/image";
import { useParams } from "next/navigation";

const SingleProductPage = () => {
  const { id } = useParams();
  const product = products?.[Number(id)];
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
      <div className="w-[75%]">
        <form action="" className="flex flex-col bg-bgSoft p-4 rounded-md">
          <input type="hidden" name="id" value={product?.id} />
          <label>Title</label>
          <input
            className="bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md"
            type="text"
            name="username"
            placeholder={product?.title}
          />
          <label>Price</label>
          <input
            className="bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md"
            type="email"
            name="email"
            placeholder={`${product?.price}`}
          />
          <label>Stock</label>
          <input
            className="bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md"
            type="password"
            name="password"
            placeholder={`${product?.stock}`}
          />
          <label>Color</label>
          <input
            className="bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md"
            type="text"
            name="phone"
            placeholder={`${product?.color}`}
          />
          <label>Size</label>
          <input
            className="bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md"
            type="text"
            name="phone"
            placeholder={`${product?.size || "size"}`}
          />

            <label>Cat</label>
          <select className="bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md" name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
          className="bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md"
            name="desc"
            id="desc"
            rows={10}
            placeholder={product?.description}
          ></textarea>          
          <button className="bg-greenBlueBtnDark w-full p-4 rounded-md">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
