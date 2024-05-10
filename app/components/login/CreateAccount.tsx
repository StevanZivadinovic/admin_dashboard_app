"use client";

import { addNewusers, handleCredentials } from "@/src/api/users/users";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";
import { SubmitBtn } from "../global/SubmitBtn";
import { ImSpinner } from "react-icons/im";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { handleSubmitCreateAccount } from "@/src/helperFunc/globalFunc";

const CreateAccount = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<any>();
  const displayBtn = useRef(false);
  const [displaySpinner, setDisplaySpinner] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState(99999999);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  

  if (displaySpinner) {
    return (
      <div className="flex flex-col w-[30%] justify-center self-center bg-bgSoft p-8 text-center">
        <ImSpinner className="animate-spin h-8 w-8 mx-auto text-primary" />
      </div>
    );
  }
  return (
    //@ts-ignore
    <form
      onSubmit={(event)=>{handleSubmitCreateAccount(event, setErrorMessage,setDisplaySpinner,router)}}
      className="flex flex-col w-[30%] justify-center self-center bg-bgSoft p-8"
    >
      <h1 className="text-center text-2xl mb-4 font-bold">Create account</h1>
      <input
        className="bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md"
        type="text"
        placeholder="username"
        name="username"
      />
      <p className="text-redBtn -mt-2">{errorMessage?.username?._errors}</p>
      <input
        className="bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md"
        type="email"
        placeholder="email"
        name="email"
      />
      <p className="text-redBtn -mt-2">{errorMessage?.email?._errors}</p>
      <div className="relative">
        <input
          className="bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md w-full"
          type={showPassword ? "text" : "password"}
          placeholder="password"
          name="password"
        />
        <input
          className="hidden"
          type="number"
          placeholder="phone"
          name="phone"
          value={phone}
          onChange={(e)=>{setPhone(Number(e.target.value))}}
        />
        <span
          className="absolute right-3 top-[40%] transform -translate-y-1/2 cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
        <p className="text-redBtn -mt-2">{errorMessage?.password?._errors}</p>
      <SubmitBtn
        typeOfBtn="Login"
        padding={4}
        display={displayBtn.current}
        setDisplaySpinner={setDisplaySpinner}
      />
      <p className="text-right">
        Already have account?{" "}
        <Link className="font-bold" href={"/login"}>
          Sign in
        </Link>{" "}
      </p>
    </form>
  );
};

export default CreateAccount;
