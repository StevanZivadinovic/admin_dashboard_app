"use client";
import { capitalizeFirstLetter } from "@/src/helperFunc/globalFunc";
import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-bgSoft flex justify-between p-[20px]">
      <div className="text-center flex self-center font-bold">
        {capitalizeFirstLetter(pathname.split("/").pop())}
      </div>
      <div className="flex">
        <div className="relative mr-4">
          <MdSearch className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder={`Search...`}
            className="p-1 pl-8 bg-bgMoreSoft rounded-md"
          />
        </div>
        <div className="flex self-center w-[100px] justify-between">
          <MdOutlineChat size={20} className="hover:cursor-pointer" />
          <MdNotifications size={20} className="hover:cursor-pointer" />
          <MdPublic size={20} className="hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
