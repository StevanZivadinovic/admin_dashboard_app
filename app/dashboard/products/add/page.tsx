"use client"

import { SubmitBtn } from "@/app/components/global/SubmitBtn";
import {ErrorFormDisplay} from "@/app/components/global/ErrorFormDisplay";
import { addNewProducts } from "@/src/api/products/products";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { redirectAfterSubmit } from "@/src/helperFunc/globalFunc";
import FormSubmitMsg from "@/app/components/global/FormSubmitMsg";


const AddProductPage = () => {
  const router = useRouter();
  const [state, formAction]=useFormState(addNewProducts, null)
  const [displayAddedMsg, setDisplayAddedMsg] = useState(false);

  useEffect(() => {
    redirectAfterSubmit('/dashboard/products', router, state?.succesMsg, setDisplayAddedMsg)
  }, [state?.succesMsg])
  return (
    <div className="bg-bgSoft mt-4 relative">
      <form  action={formAction} className={`p-4 ${
          displayAddedMsg ? "blur" : ""
        }`}>
        <div className="flex justify-between mb-8">
          <div className="flex flex-col w-[45%]">
          <div className="title">
            <input className="bg-bg mb-4 p-8 rounded-md w-full" type="text" placeholder="title" name="title" required />
            <ErrorFormDisplay state={state?.error?.title}/>
          </div>
          <div className="price">
            <input className="bg-bg mb-4 p-8 rounded-md w-full" min={1} type="number" placeholder="price" name="price" required />
          </div>
          <div className="color">
            <input className="bg-bg mb-4 p-8 rounded-md w-full" type="text" placeholder="color" name="color" required/>
          </div>
          </div>
          <div className="flex flex-col w-[45%]">
            <div className="cat">
            <select className="bg-bg mb-4 p-8 rounded-md w-full" name="cat" id="cat">
              <option value="general">Choose a Category</option>
              <option value="kitchen">Kitchen</option>
              <option value="phone">Phone</option>
              <option value="computer">Computer</option>
            </select>
            </div>
            <div className="stock">
            <input className="bg-bg mb-4 p-8 rounded-md w-full" min={0} type="number" placeholder="stock" name="stock" required />
            </div>
            <div className="size">
            <input className="bg-bg mb-4 p-8 rounded-md w-full" type="text" placeholder="size" name="size" required/>
            </div>
          </div>
        </div>
        <div className="desc">
          <textarea
            required
            name="desc"
            id="desc"
            rows={16}
            placeholder="Description"
            className="w-full bg-bg mb-4 p-4 outline-none rounded-md"
          ></textarea>
          <ErrorFormDisplay state={state?.error?.desc}/>
        </div>
        <SubmitBtn typeOfBtn={'Add'} display={displayAddedMsg} padding={8}/>
      </form>
      <FormSubmitMsg type={"Product"} display={displayAddedMsg} typeOfMessage={'added'}/>
    </div>
  );
};

export default AddProductPage;
