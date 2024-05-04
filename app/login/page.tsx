// import { auth, signIn } from "@/auth";
import LoginForm from "../components/login/LoginForm";

const LoginPage =  () => {
  
  // const response =  signIn("credentials", { 
  //   username: 'pamper',
  //   password: 'pamper',
  //   redirect: false, 
  //  });
  //  const session =  auth();

	// console.log(session, 'session');
  //  console.log(response, 'auto response')
  return (
    <div className='flex justify-center flex-col h-[100vh]'>
      <LoginForm/>
    </div>
  );
};

export default LoginPage;
