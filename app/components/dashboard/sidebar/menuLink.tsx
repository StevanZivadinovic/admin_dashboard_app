"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface LinkInterface {
  title: string;
  path: string;
  icon: React.JSX.Element;
}
interface LinkInterfaceLogout {
  title: string;
  icon: React.JSX.Element;
}
export const MenuLink = ({ title, path, icon }: LinkInterface) => {
  const pathname = usePathname();
  const bgActiveLink = pathname === path ? "bg-bgMoreSoft" : "";
  return (
    <>
      <Link
        href={path}
        className={`${bgActiveLink} flex text-center self-center p-4 hover:bg-bgMoreSoft rounded-sm`}
      >
        <p className="mr-2  flex justify-center flex-col self-center">
          <span className="mr-2 inline-block h-[100%]">{icon}</span>
        </p>
        <span className="">{title}</span>
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
