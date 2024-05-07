"use server";

import React from "react";
import Sidebar_client from "./sidebar_client";
import { auth } from "@/auth";

const Sidebar = async  () => {
  const session = await auth()
  return (
    <div className="">
     <Sidebar_client user={session?.user}/>
    </div>
  );
};
export default Sidebar;
