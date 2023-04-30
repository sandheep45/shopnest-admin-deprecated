import Link from "next/link";
import React, { useEffect } from "react";
import { BsFillBox2HeartFill, BsDatabaseFillAdd } from "react-icons/bs";
import { MdCategory, MdAssignmentAdd, MdKeyboardDoubleArrowRight } from "react-icons/md";
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

  const [isHoverActive, setIsHoverActive] = React.useState(false);
  const sideBarRef = React.useRef(null);

  const [activeSidebarTab, setActiveSidebarTab] = React.useState('');

  const handleIsHoverActive = () => {
    localStorage.setItem("isHoverActive", JSON.stringify(!isHoverActive));
    setIsHoverActive((currentValue) => !currentValue);
  }

  useEffect(() => {
    const isHoverActive = localStorage.getItem("isHoverActive");
    setIsHoverActive(isHoverActive === "true" ? true : false)
  }, []);

  return (
    <div ref={sideBarRef} className={`group flex h-screen relative flex-col gap-4 border-r py-10 bg-[#1E1E2D] transition-all duration-300 ${isHoverActive ? "w-16 hover:w-64" : 'w-64'}`}>
      <div>
        <button
          onClick={handleIsHoverActive}
          className="absolute top-3 -right-5 z-10 w-fit rounded-md border bg-white p-2 border-none">
          <MdKeyboardDoubleArrowRight className={`text-2xl transform ${isHoverActive ? 'text-blue-500 rotate-[360deg] ' : 'rotate-[-180deg]'} transition-all duration-300`} />
        </button>
      </div>

      {sidebarItems.map((item) => (
        <Link
          onClick={() => setActiveSidebarTab(item.link)}
          href={item.link}
          key={item.name}
          className={`flex items-center gap-5 text-[#505061] hover:text-white p-3 ${activeSidebarTab === item.link ? 'bg-[#2A2A3C] rounded-xl m-1 transition-all duration-300 text-gray-300' : ''} }`}
        >
          <span className="text-2xl">
            {item.icon}
          </span>
          <span className={`${isHoverActive ? "hidden group-hover:block" : ''} `}>{item.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
