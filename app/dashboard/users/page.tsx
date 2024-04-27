import Image from "next/image";
import Link from "next/link";
import Pagination from './../../components/dashboard/pagination/pagination'
import { getUsers } from "@/src/api/users/users";
import { UserType } from "@/src/consts/userTypes";
import SearchBar from "@/app/components/dashboard/searchBar/searchBar";
// @ts-ignore

interface usersDataType{
  users:UserType[], 
  count:number,
  filteredUsers:UserType[],
  ITEM_PER_PAGE:number
}
// @ts-ignore
const Users =async  ({ searchParams }) => {

  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
const {users, count, filteredUsers, ITEM_PER_PAGE}:usersDataType =  await getUsers(q, page)
const pickedUsers = filteredUsers.length <= ITEM_PER_PAGE ? filteredUsers:users
  return (
    <div className='bg-bgSoft mt-4 p-4'>
      <div className='flex justify-between'>
     <SearchBar/>
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
          { pickedUsers?.map((user) => (
            <tr key={user.id}>
              <td className="pt-4 pb-4">
                <div className='flex'>
                  <Image
                    src={user?.img || "/images/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className='rounded-[50%] mr-4'
                  />
                 <p className="flex self-center">{user?.username}</p> 
                </div>
              </td>
              <td>{user?.email}</td>
              <td>{user?.createdAt?.toString().slice(4, 16)}</td>
              <td>{user?.isAdmin ? "Admin" : "Client"}</td>
              <td>{user?.isActive ? "active" : "passive"}</td>
              <td>
                <div className='flex'>
                  <Link className='mr-4 bg-greenBtn rounded-md py-1 px-3' href={`/dashboard/users/${user.id}`}>
                    <button >
                      View
                    </button>
                  </Link>
                  <form action=''>
                    <input type="hidden" name="id" value={(user?.id)} />
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
      <Pagination count={count} />
      
    </div>
  );
};

export default Users;