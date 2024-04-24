import { cards } from "@/src/consts/cards";
import DashboadrCard from "../components/dashboard/card/dashboadrCard";
import ChartDashboard from "../components/dashboard/chart/chartDashboard";
import RightSideBar from "../components/dashboard/rightSideBar.tsx/rightSideBar";

const Dashboard = () => {
  return (
    <div className="">
      <div className="">
        <div className="flex justify-between gap-x-4 w-[75%]">
          {cards?.map((item) => (
            <DashboadrCard
              change={item.change}
              number={item.number}
              title={item.title}
              key={item.id}
            />
          ))}
        </div>
        {/* <Transactions /> */}
        <ChartDashboard />
      </div>
      <div className="">
        <RightSideBar />
      </div>
    </div>
  );
};

export default Dashboard;
