import { cards } from "@/src/consts/cards";
import DashboadrCard from "../components/dashboard/card/dashboadrCard";
import ChartDashboard from "../components/dashboard/chart/chartDashboard";
import RightSideBar from "../components/dashboard/rightSideBar.tsx/rightSideBar";
import Transactions from "../components/dashboard/transactions/transactions";
import { auth } from "@/auth";

const Dashboard =async  () => {
  const session = await auth();
 
  return (
    <>
    {session && 
    <div className="flex">
      <div className="w-[75%]">
        <div className="flex justify-between gap-x-4">
          {cards?.map((item) => (
            <DashboadrCard
              change={item.change}
              number={item.number}
              title={item.title}
              key={item.id}
            />
          ))}
        </div>
        <Transactions />
        <ChartDashboard />
      </div>
      <div className="w-[25%]">
        <RightSideBar />
      </div>
    </div>
    }
    </>
  );
};

export default Dashboard;
