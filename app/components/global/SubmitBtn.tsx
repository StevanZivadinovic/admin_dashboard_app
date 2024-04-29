"use client"
import React from 'react'
import { useFormStatus } from 'react-dom'

export const SubmitBtn = () => {
    const { pending } = useFormStatus()
  return (
    <button disabled={pending} className={`bg-greenBlueBtnDark w-full p-8 ${pending ? 'cursor-not-allowed bg-pending' : '' } ` } type="submit">
    Submit
  </button>
  )
}
