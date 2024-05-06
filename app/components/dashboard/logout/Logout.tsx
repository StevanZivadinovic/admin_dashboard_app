'use client'

import { handleLogout } from "@/src/api/users/users"

export default  function  Logout() {

	return (
		<>
		<button onClick={()=>{handleLogout()}}
			className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
		>
		  Logout
		</button>
		</>
	)
}