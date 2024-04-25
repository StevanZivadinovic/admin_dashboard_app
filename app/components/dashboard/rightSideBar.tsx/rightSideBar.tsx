
import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const RightSideBar = () => {
  return (
    <div className='m-4'>
      <div className='bg-gradient-to-b from-bgSoft to-bgMoreSoft p-4 mb-4  rounded-lg'>
        <div className=''>
          <span className='font-bold'>🔥 Available Now</span>
          <h3 className='my-4 text-lg font-bold'>
            How to use the new version of the admin dashboard?
          </h3>
          <span className='text-sm'>Takes 4 minutes to learn</span>
          <p className='my-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className='flex bg-purpleBtn px-4 py-2 rounded-md cursor-pointer'>
            <MdPlayCircleFilled className="flex self-center"/>
           <p className="ml-2"> Watch</p>
          </button>
        </div>
      </div>
      <div className='bg-gradient-to-b from-bgSoft to-bgMoreSoft p-4 mb-4  rounded-lg'>
        <div className=''>
          <span className='font-bold'>🚀 Coming Soon</span>
          <h3 className='my-4 text-lg font-bold'>
            New server actions are available, partial pre-rendering is coming
            up!
          </h3>
          <span className='text-sm'>Boost your productivity</span>
          <p className='my-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className='flex bg-purpleBtn px-4 py-2 rounded-md cursor-pointer'>
            <MdReadMore className="flex self-center"/>
            <p className="ml-2">Learn</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;