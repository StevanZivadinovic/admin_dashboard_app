import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
  } from "react-icons/md";
export const menuItems = [

    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
          active:true
        },
        {
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
          active:true
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
          active:true
        },
        {
          title: "Transactions",
          path: "/dashboard/transactions",
          icon: <MdAttachMoney />,
          active:false
        },
      ],
    },
    {
      title: "Analytics",
      list: [
        {
          title: "Revenue",
          path: "/dashboard/revenue",
          icon: <MdWork />,
          active:false

        },
        {
          title: "Reports",
          path: "/dashboard/reports",
          icon: <MdAnalytics />,
          active:false

        },
        {
          title: "Teams",
          path: "/dashboard/teams",
          icon: <MdPeople />,
          active:false

        },
      ],
    },
    {
      title: "User",
      list: [
        {
          title: "Settings",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />,
          active:false
        },
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
          active:false

        },
      ],
    },
  ];