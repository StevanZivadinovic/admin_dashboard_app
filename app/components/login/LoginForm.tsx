"use client";

import { handleCredentials } from "@/src/api/users/users";
import { redirect } from "next/navigation";
import { useState } from "react";
import { useFormState } from "react-dom";
import { string } from "zod";

const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: { preventDefault: () => void; target: HTMLFormElement | undefined; }) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await handleCredentials(formData);
      console.log(response, "CLIENT")
      //@ts-ignore
      if (response.error) {
        //@ts-ignore
        setErrorMessage(response.error);
      } else {
        // Handle successful login
        redirect('/')
      }
    } catch (err) {
      console.error("Error during login:", err);
      setErrorMessage("Failed to login. Please try again.");
    }
  };
  return (
    //@ts-ignore
    <form onSubmit={handleSubmit} className="flex flex-col w-[30%] justify-center self-center bg-bgSoft p-8">
      <h1 className="text-center text-2xl mb-4 font-bold">Login</h1>
      <input
        className="bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md"
        type="text"
        placeholder="username"
        name="username"
      />
      <input
        className="bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md"
        type="password"
        placeholder="password"
        name="password"
      />
      <button className="bg-greenBlueBtnDark p-4 rounded-sm">Login</button>
      {errorMessage}
    </form>
  );
};

export default LoginForm;


