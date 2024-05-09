"use client";
import React, { useEffect, useState } from "react";
import { UserType } from "@/src/consts/Types";
import { updateUser } from "@/src/api/users/users";
import { useFormState } from "react-dom";
import { ErrorFormDisplay } from "../../global/ErrorFormDisplay";
import { useRouter } from "next/navigation";
import { redirectAfterSubmit } from "@/src/helperFunc/globalFunc";
import FormSubmitMsg from "../../global/FormSubmitMsg";
import { SubmitBtn } from "../../global/SubmitBtn";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Image from "next/image";
import AttachFileIcon from "@mui/icons-material/AttachFile";
interface UpdateUserFormType {
  user: UserType;
}

const UpdateUserForm = ({ user }: UpdateUserFormType) => {
  const router = useRouter();
  const [state, formAction] = useFormState(updateUser, null);
  const [username, setUsername] = useState(user?.username);
  const [email, setEmail] = useState(user?.email);
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState(user?.phone);
  const [address, setAddress] = useState(user?.address);
  const [isAdmin, setIsAdmin] = useState(user?.isAdmin || false);
  const [isActive, setIsActive] = useState(user?.isActive || false);
  const [displayUpdateMsg, setDisplayUpdateMsg] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [imageAdded, setImageAdded] = useState(user?.img? user?.img :"/images/noavatar.png");
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    redirectAfterSubmit(
      "/dashboard/users",
      router,
      state?.succesMsg,
      setDisplayUpdateMsg
    );
  }, [state?.succesMsg]);

  return (
    <div className="w-full relative ">
      <form
        action={formAction}
        className={`flex w-full bg-bgSoft p-4 rounded-md ${
          displayUpdateMsg ? "blur" : ""
        }`}
      >
       <div className="w-[20%] h-[350px] cursor-pointer mb-4 p-8 rounded-md relative overflow-hidden  flex mr-8">
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
        Choose user image
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
          <label>New password</label>
          <div className="relative ">
          <input
            className="w-full bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md"
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder={''}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <span
          className="absolute right-3 top-[40%] transform -translate-y-1/2 cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
          </div>
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
        <SubmitBtn typeOfBtn={'Update'} display={displayUpdateMsg} padding={4}/>
      </div>
        
      </form>
      <FormSubmitMsg type={"User"} display={displayUpdateMsg} typeOfMessage={'updated'}/>
    </div>
  );
};

export default UpdateUserForm;
