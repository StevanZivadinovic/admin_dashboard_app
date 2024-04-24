import Image from "next/image";

const Transactions = () => {
  return (
    <div className='w-[75%] mt-[2rem] bg-bgSoft p-4'>
      <h2 className='text-2xl mb-4'>Latest Transactions</h2>
      <table className='w-full'>
        <thead className="">
          <tr className="">
            <td className="font-bold">Name</td>
            <td className="font-bold">Status</td>
            <td className="font-bold">Date</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>
        <tbody className="">
            {
                [1,2,3,4].map((row,i)=>{
                    return(
                        <tr key={i}>
                        <td className="pt-4 pb-4" >
                          <div className='flex'>
                            <Image
                              src="/images/noavatar.png"
                              alt=""
                              width={40}
                              height={40}
                              className='rounded-[50%]'
                            />
                            <p className="flex self-center ml-4">John Doe</p>
                            
                          </div>
                        </td>
                        <td className="">
                          <span className='py-2 px-3 rounded-md bg-pending'>
                            Pending
                          </span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$3.200</td>
                      </tr>
                    )
                })
            }
        
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;