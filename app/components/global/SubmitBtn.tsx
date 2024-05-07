"use client"
import React, { Dispatch, MutableRefObject, SetStateAction, useEffect } from 'react'
import { useFormStatus } from 'react-dom'

interface submitBtnType{
  display:boolean | MutableRefObject<boolean>,
  typeOfBtn:string,
  padding:number,
  setDisplaySpinner?:Dispatch<SetStateAction<boolean>>
}

export const SubmitBtn = ({display, typeOfBtn, padding, setDisplaySpinner}:submitBtnType) => {
    const { pending } = useFormStatus()
    console.log(pending)
    useEffect(() => {
      setDisplaySpinner && setDisplaySpinner(pending)
    }, [pending])
    
    
  return (
    <>
    {!pending && !display && <button disabled={pending} className={`rounded-md bg-greenBlueBtnDark w-full p-${padding} ${pending && display ? 'cursor-not-allowed bg-pending' : '' } ` } type="submit">
    {typeOfBtn}
  </button>}
  {pending && <div className="loader">Loading...</div>}
    </>
  )
}
