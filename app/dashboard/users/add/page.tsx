"use client"
import { SubmitBtn } from "@/app/components/global/SubmitBtn";
import {ErrorFormDisplay} from "@/app/components/global/ErrorFormDisplay";
import { addNewusers } from "@/src/api/users/users";
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { redirectAfterSubmit } from "@/src/helperFunc/globalFunc";
import FormSubmitMsg from "@/app/components/global/FormSubmitMsg";

const AddUserPage =  () => {
  const router = useRouter();
  const [state, formAction]=useFormState(addNewusers, null);
  const [displayAddedMsg, setDisplayAddedMsg] = useState(false);
    useEffect(() => {
    redirectAfterSubmit('/dashboard/users', router, state?.succesMsg, setDisplayAddedMsg)
  }, [state?.succesMsg])
  return (
    <div className="bg-bgSoft mt-4 relative">
      <form action={formAction}  className={`p-4 ${
          displayAddedMsg ? "blur" : ""
        }`}>
        <div className="flex justify-between mb-8">
          <div className="flex flex-col w-[45%]">
            <div className="username">
            <input
              className="bg-bg mb-4 p-8 rounded-md w-full"
              type="text"
              placeholder="username"
              name="username"
              required
            />
             <ErrorFormDisplay state={state?.error?.username}/>
              </div>

              <div className="password">
            <input
              className="bg-bg mb-4 p-8 rounded-md w-full"
              type="password"
              placeholder="password"
              name="password"
              required
            />
            <ErrorFormDisplay state={state?.error?.password}/>
              </div>
              <div className="isAdmin">
            <select name="isAdmin" id="isAdmin" className="bg-bg mb-4 p-8 rounded-md w-full">
              <option value={'false'}>Is Admin?</option>
              <option value={'true'}>Yes</option>
              <option value={'false'}>No</option>
            </select>
             <ErrorFormDisplay state={state?.error?.isAdmin}/>
              </div>
          </div>
          <div className="flex flex-col w-[45%]">
          <div className="email">
            <input
              className="bg-bg mb-4 p-8 rounded-md w-full"
              type="email"
              placeholder="email"
              name="email"
              required
            />
             <ErrorFormDisplay state={state?.error?.email}/>
          </div>
          <div className="phone">
            <input
              className="bg-bg mb-4 p-8 rounded-md w-full"
              type="number"
              placeholder="phone"
              name="phone"
            />
             <ErrorFormDisplay state={state?.error?.phone}/>
          </div>
           <select name="isActive" id="isActive" className="bg-bg mb-4 p-8 rounded-md">
          <option value={'true'}>
            Is Active?
          </option>
          <option value={'true'}>Yes</option>
          <option value={'false'}>No</option>
        </select>
          </div>
        </div>
        <div className="">
          <textarea
            required
            name="address"
            id="address"
            rows={16}
            placeholder="address"
            className="w-full bg-bg mb-4 p-4 outline-none rounded-md"
          ></textarea>
        </div>
        <SubmitBtn typeOfBtn={'Add'} display={displayAddedMsg} padding={8}/>
      </form>
        <FormSubmitMsg type={"User"} display={displayAddedMsg} typeOfMessage={'added'}/>
    </div>
  );
};

export default AddUserPage;
