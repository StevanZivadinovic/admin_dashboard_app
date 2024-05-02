"use client";
import React, { useEffect, useState } from "react";
import { UserType } from "@/src/consts/Types";
import { updateUser } from "@/src/api/users/users";
import { useFormState, useFormStatus } from "react-dom";
import { ErrorFormDisplay } from "../../global/ErrorFormDisplay";
import { useRouter } from "next/navigation";
import { redirectAfterSubmit } from "@/src/helperFunc/globalFunc";
import FormSubmitMsg from "../../global/FormSubmitMsg";
interface UpdateUserFormType {
  user: UserType;
}

const UpdateUserForm = ({ user }: UpdateUserFormType) => {
  const router = useRouter();
  const [state, formAction] = useFormState(updateUser, null);
  const [username, setUsername] = useState(user?.username);
  const [email, setEmail] = useState(user?.email);
  const [password, setPassword] = useState(user?.password);
  const [phone, setPhone] = useState(user?.phone);
  const [address, setAddress] = useState(user?.address);
  const [isAdmin, setIsAdmin] = useState(user?.isAdmin || false);
  const [isActive, setIsActive] = useState(user?.isActive || false);
  const [displayUpdateMsg, setDisplayUpdateMsg] = useState(false);

  useEffect(() => {
    redirectAfterSubmit(
      "/dashboard/users",
      router,
      state?.succesMsg,
      setDisplayUpdateMsg
    );
  }, [state?.succesMsg]);

  return (
    <div className="w-[75%] relative">
      <form
        action={formAction}
        className={`flex flex-col bg-bgSoft p-4 rounded-md ${
          displayUpdateMsg ? "blur" : ""
        }`}
      >
        <input type="hidden" name="id" value={user?._id} />
        <div className="username">
          <label>Username</label>
          <input
            className="w-full bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md"
            type="text"
            name="username"
            placeholder={user?.username}
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <ErrorFormDisplay state={state?.error?.username} />
        </div>
        <div className="email">
          <label>Email</label>
          <input
            className="w-full bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md"
            type="email"
            name="email"
            placeholder={user?.email}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <ErrorFormDisplay state={state?.error?.email} />
        </div>
        <div className="password">
          <label>Password</label>
          <input
            className="w-full bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md"
            type="password"
            name="password"
            placeholder={user?.password}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <ErrorFormDisplay state={state?.error?.password} />
        </div>
        <div className="phone">
          <label>Phone</label>
          <input
            className="w-full bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md"
            type="text"
            name="phone"
            placeholder={`${user?.phone}`}
            value={phone}
            onChange={(e) => {
              setPhone(parseInt(e.target.value));
            }}
          />
          {<ErrorFormDisplay state={state?.error?.phone} />}
        </div>
        <div className="address">
          <label>Address</label>
          <textarea
            className="w-full bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md"
            name="address"
            placeholder={`${user?.address}`}
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          {<ErrorFormDisplay state={state?.error?.address} />}
        </div>
        <div className="isAdmin">
          <label>Is Admin?</label>
          <select
            className="w-full bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md"
            name="isAdmin"
            id="isAdmin"
            value={String(isAdmin)}
            onChange={(e) => setIsAdmin(e.target.value === "true")}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          {<ErrorFormDisplay state={state?.error?.isAdmin} />}
        </div>
        <div className="isActive">
          <label>Is Active?</label>
          <select
            className="w-full bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md"
            name="isActive"
            id="isActive"
            value={String(isActive)}
            onChange={(e) => setIsActive(e.target.value === "true")}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          {<ErrorFormDisplay state={state?.error?.isActive} />}
        </div>
        <button className="bg-greenBlueBtnDark w-full p-4 rounded-md">
          Update
        </button>
      </form>
      <FormSubmitMsg type={"User"} display={displayUpdateMsg} typeOfMessage={'updated'}/>
    </div>
  );
};

export default UpdateUserForm;
