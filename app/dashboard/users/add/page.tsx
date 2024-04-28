"use client"
import { addNewusers } from "@/src/api/users/users";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";

const AddUserPage =  () => {
  const { pending } = useFormStatus()
  const [state, formAction]=useFormState(addNewusers, null)
    console.log(state?.error);
  return (
    <div className="bg-bgSoft mt-4">
      {!pending ?
      <form action={formAction}  className="p-4">
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
             {state?.error?.username && (
                <p className="text-redBtn -mt-[10px] mb-4">
                  <strong>{state?.error?.username?._errors[0]}</strong>
                </p>
              )}
              </div>

              <div className="password">
            <input
              className="bg-bg mb-4 p-8 rounded-md w-full"
              type="password"
              placeholder="password"
              name="password"
              required
            />
            {state?.error?.password && (
                <p className="text-redBtn -mt-[10px] mb-4">
                  <strong>{state?.error?.password?._errors[0]}</strong>
                </p>
              )}
              </div>
              <div className="isAdmin">
            <select name="isAdmin" id="isAdmin" className="bg-bg mb-4 p-8 rounded-md w-full">
              <option value={'false'}>Is Admin?</option>
              <option value={'true'}>Yes</option>
              <option value={'false'}>No</option>
            </select>
            {state?.error?.isAdmin && (
                <p className="text-redBtn -mt-[10px] mb-4">
                  <strong>{state?.error?.isAdmin?._errors[0]}</strong>
                </p>
              )}
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
            {state?.error?.email && (
                <p className="text-redBtn -mt-[10px] mb-4">
                  <strong>{state?.error?.email?._errors[0]}</strong>
                </p>
              )}
          </div>
          <div className="phone">
            <input
              className="bg-bg mb-4 p-8 rounded-md w-full"
              type="number"
              placeholder="phone"
              name="phone"
            />
            {state?.error?.phone && (
                <p className="text-redBtn -mt-[10px] mb-4">
                  <strong>{state?.error?.phone?._errors[0]}</strong>
                </p>
              )}
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
            name="adress"
            id="adress"
            rows={16}
            placeholder="adress"
            className="w-full bg-bg mb-4 p-4 outline-none rounded-md"
          ></textarea>
        </div>
        <button className="bg-greenBlueBtnDark w-full p-8" type="submit">
          Submit
        </button>
      </form>:<>Spinner</>}
    </div>
  );
};

export default AddUserPage;
