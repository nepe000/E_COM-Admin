import Link from "next/link";
import React from "react";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { MdOutlineCategory } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BsBorderStyle } from "react-icons/bs";
import { HiMiniUsers } from "react-icons/hi2";
const SideBar = () => {
  return (
    <div className="h-full w-[250px]">
      <Link href="/">
        <div className=" tracking-wider flex items-center px-2 gap-2 mt-10 cursor-pointer hover:text-blue-500 ">
          <MdOutlineDashboardCustomize />
          <p>Dashboard</p>
        </div>
      </Link>
      <Link href="/category">
        <div className=" tracking-wider flex items-center px-2 gap-2 mt-10 cursor-pointer hover:text-blue-500 ">
          <MdOutlineCategory />
          <p>Category</p>
        </div>
      </Link>
      <Link href="/products">
        <div className=" tracking-wider flex items-center px-2 gap-2 mt-10 cursor-pointer hover:text-blue-500 ">
          <MdProductionQuantityLimits />
          <p>Products</p>
        </div>
      </Link>
      <Link href="/order">
        <div className=" tracking-wider flex items-center px-2 gap-2 mt-10 cursor-pointer hover:text-blue-500 ">
          <BsBorderStyle />
          <p>Orders</p>
        </div>
      </Link>
      <Link href="/users">
        <div className=" tracking-wider flex items-center px-2 gap-2 mt-10 cursor-pointer hover:text-blue-500 ">
          <HiMiniUsers />
          <p>Users</p>
        </div>
      </Link>
    </div>
  );
};

export default SideBar;
