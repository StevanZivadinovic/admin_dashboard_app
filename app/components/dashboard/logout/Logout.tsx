"use client";

import { useRouter } from "next/navigation";
import { MdLogout } from "react-icons/md";
import { MenuLinkLogout } from "../sidebar/menuLink";
import { handleLogoutFront } from "@/src/helperFunc/globalFunc";

export default function Logout() {
  const router = useRouter();
  return (
    <p
      className=" font-bold mt-6 mb-2"
      onClick={() => {
        handleLogoutFront(router);
      }}
    >
      <MenuLinkLogout title={"Logout"} icon={<MdLogout />} />
    </p>
  );
}
