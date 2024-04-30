"use client"
import { deleteUser } from '@/src/api/users/users';
import React from 'react'


const DeleteUserBtn = (user:any) => {
    const handleDelete = async (id:number) => {
        const confirmed = window.confirm("Are you sure you want to delete this user?");
        if (confirmed) {
          try {
            await deleteUser(id);

          } catch (error) {
            console.error("Failed to delete user:", error);
          }
        }
      };
  return (
    <button onClick={(id)=>{handleDelete(user.user._id)}} className='mr-4 bg-redBtn rounded-md py-1 px-3'>
      Delete
    </button>

  )
}

export default DeleteUserBtn;