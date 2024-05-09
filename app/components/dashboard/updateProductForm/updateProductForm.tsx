"use client";
import { updateProduct } from "@/src/api/products/products";
import { ProductsType } from "@/src/consts/Types";
import React, { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { ErrorFormDisplay } from "../../global/ErrorFormDisplay";
import { redirectAfterSubmit } from "@/src/helperFunc/globalFunc";
import { useRouter } from "next/navigation";
import FormSubmitMsg from "../../global/FormSubmitMsg";
import { SubmitBtn } from "../../global/SubmitBtn";
import Image from "next/image";
import AttachFileIcon from "@mui/icons-material/AttachFile";

interface UpdateProductFormType {
  product: ProductsType;
}

const UpdateProductForm = ({ product }: UpdateProductFormType) => {
  const router = useRouter();
  const [state, formAction] = useFormState(updateProduct, null);
  const [title, setTitle] = useState(product?.title);
  const [price, setPrice] = useState(product?.price);
  const [stock, setStock] = useState(product?.stock);
  const [color, setColor] = useState(product?.color);
  const [size, setSize] = useState(product?.size);
  const [desc, setDesc] = useState(product?.desc);
  const [displayUpdateMsg, setDisplayUpdateMsg] = useState(false);
  const [imageAdded, setImageAdded] = useState(
    product?.img ? product?.img : "/images/noavatar.png"
  );

  useEffect(() => {
    redirectAfterSubmit(
      "/dashboard/products",
      router,
      state?.succesMsg,
      setDisplayUpdateMsg
    );
  }, [state?.succesMsg]);
  return (
    <div className="w-full relative">
      <form
        action={formAction}
        className={`flex w-full bg-bgSoft p-4 rounded-md ${
          displayUpdateMsg ? "blur" : ""
        }`}
      >
        <div
          style={{ height: "max-content" }}
          className="w-[20%]  h-[350px]  p-4 bg-bgSoft rounded-md relative mr-8"
        >
          <label
            htmlFor="imageInput"
            className="absolute text-center w-full h-full top-0 left-0 cursor-pointer leading-[3.75rem]"
          >
            {imageAdded.length > 0 ? (
              <Image
                className="w-[100%] cursor-pointer rounded-md"
                src={imageAdded}
                alt=""
                width={150}
                height={60}
                objectFit="cover"
              />
            ) : (
              <>
                Choose product image
                <AttachFileIcon sx={{ mr: 1 }} />
              </>
            )}
            <input
              id="imageInput"
              type="file"
              name="image"
              className="hidden"
              accept=".jpg, .jpeg, .png, .gif, .svg"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setImageAdded(URL.createObjectURL(e.target.files[0]));
                }
              }}
            />
          </label>
        </div>
        <div className="w-[75%]">
          <input type="hidden" name="id" value={product?._id} />
          <div className="title">
            <label>Title</label>
            <input
              className="w-full bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md"
              type="text"
              name="title"
              placeholder={product?.title}
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <ErrorFormDisplay state={state?.error?.title} />
          </div>
          <div className="price">
            <label>Price</label>
            <input
              className="w-full bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md"
              type="number"
              name="price"
              placeholder={`${product?.price}`}
              value={price}
              onChange={(e) => {
                setPrice(parseInt(e.target.value));
              }}
            />
            <ErrorFormDisplay state={state?.error?.price} />
          </div>
          <div className="stock">
            <label>Stock</label>
            <input
              className="w-full bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md"
              type="number"
              name="stock"
              placeholder={`${product?.stock}`}
              value={stock}
              onChange={(e) => {
                setStock(parseInt(e.target.value));
              }}
            />
            <ErrorFormDisplay state={state?.error?.stock} />
          </div>
          <div className="color">
            <label>Color</label>
            <input
              className="w-full bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md"
              type="text"
              name="color"
              placeholder={`${product?.color}`}
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
            />
            <ErrorFormDisplay state={state?.error?.color} />
          </div>
          <div className="size">
            <label>Size</label>
            <input
              className="w-full bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md"
              type="text"
              name="size"
              placeholder={`${product?.size || "size"}`}
              value={size}
              onChange={(e) => {
                setSize(e.target.value);
              }}
            />
            <ErrorFormDisplay state={state?.error?.size} />
          </div>
          <div className="cat">
            <label>Cat</label>
            <select
              className="w-full bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md"
              name="cat"
              id="cat"
            >
              <option value="kitchen">Kitchen</option>
              <option value="computers">Computers</option>
              <option value="phone">Phone</option>
            </select>
          </div>
          <div className="desc">
            <label>Description</label>
            <textarea
              className="w-full bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md"
              name="desc"
              id="desc"
              rows={10}
              placeholder={product?.desc}
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            ></textarea>
            <ErrorFormDisplay state={state?.error?.desc} />
          </div>
          <SubmitBtn
            typeOfBtn={"Update"}
            display={displayUpdateMsg}
            padding={4}
          />
        </div>
      </form>
      <FormSubmitMsg
        type={"Product"}
        display={displayUpdateMsg}
        typeOfMessage={"updated"}
      />
    </div>
  );
};

export default UpdateProductForm;
