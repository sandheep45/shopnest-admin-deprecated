import Link from "next/link";
import React from "react";
import { BsFillBox2HeartFill, BsDatabaseFillAdd } from "react-icons/bs";
import { MdCategory, MdAssignmentAdd } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";

const sidebarItems = [
  {
    name: "Admin",
    icon: <RiAdminFill />,
    link: "/admin",
  },
  {
    name: "Products",
    icon: <BsFillBox2HeartFill />,
    link: "/products",
  },
  {
    name: "Add Products",
    icon: <BsDatabaseFillAdd />,
    link: "/add-product",
  },
  {
    name: "Category",
    icon: <MdCategory />,
    link: "/categories",
  },
  {
    name: "Add Category",
    icon: <MdAssignmentAdd />,
    link: "/add-category",
  },
];

const Sidebar = () => {
  return (
    <div className="flex h-screen w-10 flex-col gap-4 border-r py-16 md:w-16">
      {sidebarItems.map((item) => (
        <div
          key={item.name}
          className="flex flex-col items-center justify-center"
        >
          <Link href={item.link} className="text-2xl">
            {item.icon}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
