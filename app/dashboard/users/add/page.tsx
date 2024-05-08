"use client";
import { SubmitBtn } from "@/app/components/global/SubmitBtn";
import { ErrorFormDisplay } from "@/app/components/global/ErrorFormDisplay";
import { addNewusers } from "@/src/api/users/users";
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { redirectAfterSubmit } from "@/src/helperFunc/globalFunc";
import FormSubmitMsg from "@/app/components/global/FormSubmitMsg";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AddUserPage = () => {
  const router = useRouter();
  const [state, formAction] = useFormState(addNewusers, null);
  const [displayAddedMsg, setDisplayAddedMsg] = useState(false);
  const [imageAdded, setImageAdded] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    redirectAfterSubmit(
      "/dashboard/users",
      router,
      state?.succesMsg,
      setDisplayAddedMsg
    );
  }, [state?.succesMsg]);

  return (
    <div className="bg-bgSoft mt-4 relative">
      <form
        action={formAction}
        className={`p-4 ${displayAddedMsg ? "blur" : ""}`}
      >
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
              <ErrorFormDisplay state={state?.error?.username} />
            </div>
            <div className="relative">
              <div className="password">
                <input
                  className="bg-bg mb-4 p-8 rounded-md w-full"
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  required
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
            <div className="isAdmin">
              <select
                name="isAdmin"
                id="isAdmin"
                className="bg-bg mb-4 p-8 rounded-md w-full"
              >
                <option value={"false"}>Is Admin?</option>
                <option value={"true"}>Yes</option>
                <option value={"false"}>No</option>
              </select>
              <ErrorFormDisplay state={state?.error?.isAdmin} />
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
              <ErrorFormDisplay state={state?.error?.email} />
            </div>
            <div className="phone">
              <input
                className="bg-bg mb-4 p-8 rounded-md w-full"
                type="number"
                placeholder="phone"
                name="phone"
              />
              <ErrorFormDisplay state={state?.error?.phone} />
            </div>
            <select
              name="isActive"
              id="isActive"
              className="bg-bg mb-4 p-8 rounded-md"
            >
              <option value={"true"}>Is Active?</option>
              <option value={"true"}>Yes</option>
              <option value={"false"}>No</option>
            </select>
          </div>
        </div>
        <div className="cursor-pointer bg-bg mb-4 p-8 rounded-md w-auto  relative overflow-hidden hover:bg-bgMoreSoft flex">
          <label
            htmlFor="imageInput"
            className="aboslute text-center w-full h-full absolute top-0 left-0 cursor-pointer leading-[3.75rem]"
          >
            {imageAdded.length > 0 ? imageAdded : "Choose user image"}
            {imageAdded.length <= 0 && <AttachFileIcon sx={{ mr: 1 }} />}
            <input
              id="imageInput"
              type="file"
              name="image"
              className="hidden"
              accept=".jpg, .jpeg, .png, .gif, .svg"
              onChange={(e) => {
                if (e.target.value.length > 0 && e.target.files) {
                  setImageAdded(e.target.value);
                  console.log(URL.createObjectURL(e.target.files[0]));
                }
              }}
            />
          </label>
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
        <SubmitBtn typeOfBtn={"Add"} display={displayAddedMsg} padding={8} />
      </form>
      <FormSubmitMsg
        type={"User"}
        display={displayAddedMsg}
        typeOfMessage={"added"}
      />
    </div>
  );
};

export default AddUserPage;
