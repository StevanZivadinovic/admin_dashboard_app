import { menuItems } from '@/src/consts/menuItemsSideBar';
import Image from 'next/image';
import React from 'react'
import { MenuLink } from './menuLink';
import Logout from '../logout/Logout';
interface SideBarClientType{
  user:any 
}

const Sidebar_client = ({user}:SideBarClientType) => {
  console.log(user, "SIDE")
  return (
    <div>
       <div className="userAvatar flex align-center">
        <div className="imgAvatar">
          <Image
            className="rounded-[50%] max-h-[50px] max-w-[50px]"
            width={50}
            height={50}
            src={user?.img && user.img.startsWith("https") ? user.img : "/images/noavatar.png"}
            alt="avatar"
          />
        </div>
        <div className="userAvatarData text-textSoft ml-[20px]">
       
          <p className="name font-bold">{
          user?.username
          }</p>
          <p className="role text-[13px]">Administrator</p>
        </div>
      </div>

      <div className="menu">
        <ul className="flex flex-col">
          {menuItems.map((item, i) => {
            return (
              <li key={i}>
                <p className="font-bold mt-6 mb-2">{item.title}</p>
                {item?.list?.map((li, i) => {
                  return (
                    <MenuLink
                      key={i}
                      title={li.title}
                      path={li.path}
                      icon={li.icon}
                    />
                  );
                })}
              </li>
            );
          })}
          <li>
            <Logout />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar_client