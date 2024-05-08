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
      <div
        style={{ height: "max-content" }}
        className="w-[20%] p-4 bg-bgSoft rounded-md"
      >
        <Image
          className="w-full "
          src={user?.img && user.img.startsWith("https") ? user.img : "/images/noavatar.png"}
          alt=""
          width={150}
          height={60}
          objectFit="cover"
        />
        <p className="mt-4">{user?.username}</p>
      </div>
     <UpdateUserForm user={user}/>
    </div>
  );
};

export default SingleUserPage;
