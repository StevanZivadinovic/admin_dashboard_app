import { auth } from "@/auth";
import LoginForm from "../components/login/LoginForm";
import { redirect } from 'next/navigation'
import { handleRedirectAuthenticated } from "@/src/helperFunc/globalFunc";

const LoginPage = async () => {
  const session = await auth();

  // await handleRedirectAuthenticated(session, redirect) 
  return (
    <>
    {<div className="flex justify-center flex-col h-[100vh]">
      <LoginForm />
    </div>}
    </>
  );
};

export default LoginPage;
