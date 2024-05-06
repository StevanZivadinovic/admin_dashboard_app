"use client"
import { menuItems } from '@/src/consts/menuItemsSideBar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import MenuLink from './menuLink';
import { MdLogout } from 'react-icons/md';
import { signOut } from '@/auth';
import Logout from '../logout/Logout';

 const Sidebar = () => {
  return (
    <div className=''>
      <div className="userAvatar flex align-center">
        <div className="imgAvatar">
          <Image className='rounded-[50%] hover:cursor-pointer' width={50} height={50} src='/images/noavatar.png' alt='avatar'/>
        </div>
        <div className="userAvatarData text-textSoft ml-[20px]">
          <p className="name font-bold">User1</p>
          <p className="role text-[13px]">Administrator</p>
        </div>
      </div>

    <div className="menu">
      <ul className='flex flex-col'>
        {menuItems.map((item,i)=>{
          return (
            <li key={i}>
              <p className='font-bold mt-6 mb-2'>{item.title}</p>
              {item?.list?.map((li,i)=>{
            return(
              <MenuLink key={i} title={li.title} path={li.path} icon={li.icon}/>
            )
          })}
            </li>
          )
        })}
        <Logout/>
      </ul>
    </div>

    </div>
  )
}
export default Sidebar;
