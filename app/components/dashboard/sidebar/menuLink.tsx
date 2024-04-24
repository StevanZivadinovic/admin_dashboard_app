"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


interface LinkInterface{
        title:string,
        path:string,
       icon:React.JSX.Element
}
const MenuLink = ({title,path,icon}:LinkInterface) => {
    const pathname=usePathname()
    const bgActiveLink = pathname===path? 'bg-bgMoreSoft':''
  return (
    <div><Link href={path} className={`${bgActiveLink} flex text-center self-center p-4 hover:bg-bgMoreSoft rounded-sm`}>
    <div className="mr-2  flex justify-center flex-col self-center" ><span className='mr-2 inline-block h-[100%]'>{icon}</span></div>
    <span className=''>{title}</span>
    </Link></div>
  )
}

export default MenuLink