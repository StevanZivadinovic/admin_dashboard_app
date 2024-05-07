import { auth } from "@/auth";
import LoginForm from "../components/login/LoginForm";
import { redirect } from 'next/navigation'


const LoginPage = async () => {
  const session = await auth();

  if(session){
    redirect('/dashboard')
  }
  return (
    <>
    {!session && <div className="flex justify-center flex-col h-[100vh]">
      <LoginForm />
    </div>}
    </>
  );
};

export default LoginPage;
