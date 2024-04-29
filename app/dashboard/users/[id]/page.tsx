"use server"

import { getUsers } from "@/src/api/users/users";
import { UserType } from "@/src/consts/Types";
import Image from "next/image";
import { useParams } from "next/navigation";
interface usersDataType{
  users:UserType[], 
  count:number,
  filteredUsers:UserType[],
  ITEM_PER_PAGE:number
}
const SingleUserPage =  async ( { searchParams }) => {
  console.log(searchParams)
  // const { id } = useParams();
  const {users, count, filteredUsers, ITEM_PER_PAGE}:usersDataType =  await getUsers('', 1)
  const user = users?.[Number(5)];
  return (
    <div className='flex mt-4 justify-between'>
      <div style={{height:'max-content'}} className='w-[20%] p-4 bg-bgSoft rounded-md'> 
      <Image className="w-full " src={user?.img || "/images/noavatar.png"} alt="" width={30} height={30} objectFit="cover" />
        <p className="mt-4">
        {user?.username}
        </p>
      </div>
      <div className='w-[75%]'>
        <form action='' className='flex flex-col bg-bgSoft p-4 rounded-md' >
          <input  type="hidden" name="id" value={user?.id}/>
          <label>Username</label>
          <input className="bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md" type="text" name="username" placeholder={user?.username} />
          <label>Email</label>
          <input className="bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md"  type="email" name="email" placeholder={user?.email} />
          <label>Password</label>
          <input className="bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md" type="password" name="password" />
          <label>Phone</label>
          <input className="bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md" type="text" name="phone" placeholder={`${user?.phone}`} />
          <label>Address</label>
          <textarea className="bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md" name="address" placeholder={user?.address} />
          <label>Is Admin?</label>
          <select className="bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md" defaultValue={'false'} name="isAdmin" id="isAdmin">
            <option value={`${user?.isAdmin}`}>Yes</option>
            <option value={`${!user?.isAdmin}`}>No</option>
          </select>
          <label>Is Active?</label>
          <select className="bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md" defaultValue={'true'} name="isActive" id="isActive">
            <option value={`${user?.isActive}`} >Yes</option>
            <option value={`${!user?.isActive}`}>No</option>
          </select>
          <button className="bg-greenBlueBtnDark w-full p-4 rounded-md">Update</button>
        </form>
        
      </div>
      
    </div>
    
  );
};

export default SingleUserPage;