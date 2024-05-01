"use client"
import React from 'react'
import { UserType } from "@/src/consts/Types";
import { updateUser } from '@/src/api/users/users';
import { useFormState } from 'react-dom';
import { ErrorFormDisplay } from '../../global/ErrorFormDisplay';
interface UpdateUserFormType{
    user:UserType
}

const UpdateUserForm = ({user}:UpdateUserFormType) => {
       const [state, formAction]=useFormState(updateUser, null);
   console.log(user, state)
  return (
    <div className="w-[75%]">
    <form
      action={formAction}
      className="flex flex-col bg-bgSoft p-4 rounded-md"
    >
      <input type="hidden" name="id" value={user?._id} />
      <div className="username">
      <label>Username</label>
      <input
        className="w-full bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md"
        type="text"
        name="username"
        placeholder={user?.username}
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
        />
        {<ErrorFormDisplay state={state?.error?.phone} />}
      </div>
      <div className="address">
      <label>Address</label>
      <textarea
        className="w-full bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md"
        name="address"
        placeholder={`${user?.address}`}
      />
       {<ErrorFormDisplay state={state?.error?.address} />}
      </div>
      <div className="isAdmin">
      <label>Is Admin?</label>
      <select
        className="w-full bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md"
        defaultValue={"false"}
        name="isAdmin"
        id="isAdmin"
      >
        <option value={`${user?.isAdmin}`}>Yes</option>
        <option value={`${!user?.isAdmin}`}>No</option>
      </select>
      {<ErrorFormDisplay state={state?.error?.isAdmin} />}
      </div>
      <div className="isActive">
      <label>Is Active?</label>
      <select
        className="w-full bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md"
        defaultValue={"true"}
        name="isActive"
        id="isActive"
      >
        <option value={`${user?.isActive}`}>Yes</option>
        <option value={`${!user?.isActive}`}>No</option>
      </select>
      {<ErrorFormDisplay state={state?.error?.isActive} />}
      </div>
      <button className="bg-greenBlueBtnDark w-full p-4 rounded-md">
        Update
      </button>
    </form>
  </div>
  )
}

export default UpdateUserForm