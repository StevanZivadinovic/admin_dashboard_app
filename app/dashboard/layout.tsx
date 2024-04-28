import { ReactNode } from "react";
import Navbar from "../components/dashboard/navbar/navbar";
import Sidebar from "../components/dashboard/sidebar/sidebar";
import Footer from "../components/global/Footer";

interface LayoutProps {
    children: ReactNode;
}

const Leyout = ({children}:LayoutProps) => {
    return (
      <div className="flex">
        <div className="w-[20%] bg-bgSoft p-[20px]">
            <Sidebar/>
        </div>
        <div className="w-[80%] p-[20px]">
            <Navbar/>
            {children}
        <Footer/>
        </div>
      </div>
    )
  }
  export default Leyout;