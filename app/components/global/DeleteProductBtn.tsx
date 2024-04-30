"use client"
import { deleteProduct } from '@/src/api/products/products';
import React from 'react'


const DeleteProductBtn = (product:any) => {
    const handleDelete = async (id:number) => {
        const confirmed = window.confirm("Are you sure you want to delete this product?");
        if (confirmed) {
          try {
            await deleteProduct(id);

          } catch (error) {
            console.error("Failed to delete product:", error);
          }
        }
      };
  return (
    <button onClick={(id)=>{handleDelete(product.product._id)}} className='mr-4 bg-redBtn rounded-md py-1 px-3'>
      Delete
    </button>

  )
}

export default DeleteProductBtn;