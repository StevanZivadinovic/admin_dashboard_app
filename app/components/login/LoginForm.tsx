"use client";

import { handleCredentials } from "@/src/api/users/users";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { SubmitBtn } from "../global/SubmitBtn";
import { useFormState } from "react-dom";
import { handleSubmit } from "@/src/helperFunc/globalFunc";
import { ImSpinner } from "react-icons/im";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginForm = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const displayBtn = useRef(false);
  const [displaySpinner, setDisplaySpinner] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [state, formAction] = useFormState(
    (state: any, formData: { get: (arg0: string) => any }) =>
      handleSubmit(
        state,
        formData,
        handleCredentials,
        router,
        setErrorMessage,
        setDisplaySpinner
      ),
    null
  );
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
      action={formAction}
      className="flex flex-col w-[30%] justify-center self-center bg-bgSoft p-8"
    >
      <h1 className="text-center text-2xl mb-4 font-bold">Login</h1>
      <input
        className="bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md"
        type="text"
        placeholder="username"
        name="username"
      />
      <div className="relative">
      <input
        className="bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md w-full"
        type={showPassword ? 'text' : 'password'}
        placeholder="password"
        name="password"
      />
      <span
          className="absolute right-3 top-[40%] transform -translate-y-1/2 cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
      <SubmitBtn
        typeOfBtn="Login"
        padding={4}
        display={displayBtn.current}
        setDisplaySpinner={setDisplaySpinner}
      />
      <p className="text-redBtn mt-4">{errorMessage}</p>
    </form>
  );
};

export default LoginForm;
