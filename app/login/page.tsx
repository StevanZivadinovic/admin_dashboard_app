import { auth } from "@/auth";
import LoginForm from "../components/login/LoginForm";
import { redirect } from 'next/navigation'
import { handleRedirectAuthenticated } from "@/src/helperFunc/globalFunc";

const LoginPage = async () => {
  const session = await auth();
  console.log(session, 'SESSION')
  return (
    <>
    {!handleRedirectAuthenticated(session, redirect) && <div className="flex justify-center flex-col h-[100vh]">
      <LoginForm />
    </div>}
    </>
  );
};

export default LoginPage;
