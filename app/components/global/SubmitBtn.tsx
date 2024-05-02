"use client"
import React from 'react'
import { useFormStatus } from 'react-dom'

interface submitBtnType{
  display:boolean,
  typeOfBtn:string,
  padding:number
}

export const SubmitBtn = ({display, typeOfBtn, padding}:submitBtnType) => {
    const { pending } = useFormStatus()
  return (
    <>
    {!pending && !display && <button disabled={pending} className={`bg-greenBlueBtnDark w-full p-${padding} ${pending && display ? 'cursor-not-allowed bg-pending' : '' } ` } type="submit">
    {typeOfBtn}
  </button>}
    </>
  )
}
