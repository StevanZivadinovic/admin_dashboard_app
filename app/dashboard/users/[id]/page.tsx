"use server";

import UpdateUserForm from "@/app/components/dashboard/updateUserForm/updateUserForm";
import { fetchUser } from "@/src/api/users/users";
import Image from "next/image";

//@ts-ignore
const SingleUserPage = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);
  return (
    <div className="flex mt-4 justify-between">
     <UpdateUserForm user={user}/>
    </div>
  );
};

export default SingleUserPage;
