"use client";

const LoginForm = () => {
  return (
    <form action="" className="flex flex-col w-[30%] justify-center self-center bg-bgSoft p-8">
      <h1 className="text-center text-2xl mb-4 font-bold">Login</h1>
      <input
        className="bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md"
        type="text"
        placeholder="username"
        name="username"
      />
      <input
        className="bg-bg mb-4 p-4 outline-none border-bgMoreSoft border-[2px] rounded-md"
        type="password"
        placeholder="password"
        name="password"
      />
      <button className="bg-greenBlueBtnDark p-4 rounded-sm">Login</button>
      {/* {state && state} */}
    </form>
  );
};

export default LoginForm;
