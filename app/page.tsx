
import { auth } from "@/auth";
import CreateAccount from "./components/login/CreateAccount";
import { redirect } from 'next/navigation'
export default async function  Home() {
  const session = await auth();

  if(session){
    redirect('/dashboard')
  }
  return (
    <main className="flex justify-center flex-col h-[100vh]">
      
    {!session && <div className="flex justify-center flex-col h-[100vh]">
      <CreateAccount />
    </div>}
    
    </main>
  );
}
