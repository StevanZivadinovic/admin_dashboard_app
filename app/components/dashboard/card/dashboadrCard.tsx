import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";

interface CardDashboardType {
  title: string;
  change: number;
  number: number;
}
const DashboadrCard = ({ title, change, number }: CardDashboardType) => {
  return (
    <div className=" flex w-1/3 bg-cyan p-4 mt-4 rounded-sm   border-bgMoreSoft shadow-2xl shadow-cyan/50">
      <MdSupervisedUserCircle size={24} className="" />
      <div className="flex flex-col ml-8">
        <span className="font-bold">{title}</span>
        <span className="text-[2rem]">{number}</span>
        <span className="">
          <span className={change > 0 ? "text-green-300" : "text-red-600"}>
            {change}%
          </span>{" "}
          {change > 0 ? "more" : "less"} than previous week
        </span>
      </div>
    </div>
  );
};

export default DashboadrCard;
