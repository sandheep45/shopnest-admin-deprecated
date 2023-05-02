import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { BsFillBox2HeartFill, BsDatabaseFillAdd } from "react-icons/bs";
import {
  MdCategory,
  MdAssignmentAdd,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
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
  const router = useRouter();

  const [isHoverActive, setIsHoverActive] = React.useState(false);

  const handleIsHoverActive = () => {
    localStorage.setItem("isHoverActive", JSON.stringify(!isHoverActive));
    setIsHoverActive((currentValue) => !currentValue);
  };

  useEffect(() => {
    const isHoverActive = localStorage.getItem("isHoverActive");
    setIsHoverActive(isHoverActive === "true" ? true : false);
  }, []);

  return (
    <div
      className={`group relative hidden h-screen flex-col gap-4 border-r py-10 transition-all duration-300 dark:bg-[#1E1E2D] md:flex ${
        isHoverActive ? "w-16 hover:w-64" : "w-64"
      }`}
    >
      <div>
        <button
          onClick={handleIsHoverActive}
          className="absolute -right-5 top-3 z-[11] w-fit rounded-md border bg-white p-2 dark:border-gray-400 dark:bg-[#0e1138]"
        >
          <MdKeyboardDoubleArrowRight
            className={`transform text-2xl text-gray-700 transition-all duration-300 group-hover:rotate-[-180deg] dark:text-gray-400 dark:hover:text-gray-300 ${
              isHoverActive
                ? "rotate-[360deg] text-blue-500 "
                : "rotate-[-180deg]"
            }`}
          />
        </button>
      </div>

      {sidebarItems.map((item) => (
        <Link
          href={item.link}
          key={item.name}
          className={`mx-2 flex items-center gap-5 rounded-md p-3 hover:text-black hover:dark:text-gray-400 ${
            router.asPath === item.link
              ? "bg-[#f4f6fa] text-blue-400 transition-all duration-300 dark:bg-[#2A2A3C]"
              : "text-[#5E6278]"
          } }`}
        >
          <span className="text-2xl">{item.icon}</span>
          <span
            className={`truncate ${
              isHoverActive ? "hidden group-hover:block" : ""
            } `}
          >
            {item.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
