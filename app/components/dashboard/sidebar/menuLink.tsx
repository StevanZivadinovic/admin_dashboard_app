"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {Tooltip} from "@nextui-org/tooltip";

interface LinkInterface {
  title: string;
  path: string;
  icon: React.JSX.Element;
  inProgress:boolean
}
interface LinkInterfaceLogout {
  title: string;
  icon: React.JSX.Element;
}
export const MenuLink = ({ title, path, icon, inProgress }: LinkInterface) => {
  const pathname = usePathname();
  const bgActiveLink = pathname === path ? "bg-bgMoreSoft" : "";

  return (
    <>
      <Link
        href={inProgress ?path:''}
        className={`${bgActiveLink} ${!inProgress ? 'cursor-not-allowed':'cursor-pointer'} flex text-center self-center p-4 hover:bg-bgMoreSoft rounded-sm`}
      
      >
        <p className="mr-2  flex justify-center flex-col self-center">
          <span className="mr-2 inline-block h-[100%]">{icon}</span>
        </p>
        <Tooltip  placement={"right"}  offset={150} content={'Work in  progress :)'} className="bg-bgMoreSoft px-4 py-2 rounded-md max-w-[200px] break-words">
        <span className="">{title}</span>
        </Tooltip>
      </Link>
    </>
  );
};

export const MenuLinkLogout = ({ title, icon }: LinkInterfaceLogout) => {
  return (
    <>
      <Link
        href={''}
        className={`hover:cursor-pointer flex text-center self-center p-4 hover:bg-cancelled rounded-sm`}
      >
        <span className="mr-2  flex justify-center flex-col self-center">
          <span className="mr-2 inline-block h-[100%]">{icon}</span>
        </span>
        <span className="">{title}</span>
      </Link>
    </>
  );
};
