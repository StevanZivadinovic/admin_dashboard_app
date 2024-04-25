

import Image from "next/image";
import Link from "next/link";
import { MdSearch } from "react-icons/md";
import Pagination from './../../components/dashboard/pagination/pagination'
import { getUsers } from "@/src/api/users/users";
import { UserType } from "@/src/consts/userTypes";
const Users = async () => {
  // const q = searchParams?.q || "";
  // const page = searchParams?.page || 1;
  // const { count, users } = await fetchUsers(q, page);
const users:UserType[] =  await getUsers()
  return (
    <div className='bg-bgSoft mt-4 p-4'>
      <div className='flex justify-between'>
      <div className='relative mr-4'>
          <MdSearch className="absolute top-2 left-2"/>
          <input type="text" placeholder={`Search for user...`} className='p-1 pl-8 bg-bgMoreSoft rounded-md' />
        </div>
        <Link href="/dashboard/users/add">
          <button className='flex bg-purpleBtn px-4 py-2 rounded-md cursor-pointer hover:bg-lightPurpleBtn'>Add New</button>
        </Link>
      </div>
      <table className='w-[90%]'>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <td className="pt-4 pb-4">
                <div className='flex'>
                  <Image
                    src={user.img || "/images/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className='rounded-[50%] mr-4'
                  />
                 <p className="flex self-center">{user.username}</p> 
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "active" : "passive"}</td>
              <td>
                <div className='flex'>
                  <Link className='mr-4 bg-greenBtn rounded-md py-1 px-3' href={`/dashboard/users/${user.id}`}>
                    <button >
                      View
                    </button>
                  </Link>
                  <form action=''>
                    <input type="hidden" name="id" value={(user.id)} />
                    <button className='mr-4 bg-redBtn rounded-md py-1 px-3'>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
      
    </div>
  );
};

export default Users;