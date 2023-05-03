import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { useThemeContext } from "@src/context/ThemeContextProvider";
import { BsCloudMoon, BsSun } from "react-icons/bs";
const TopBar = () => {
  const { isDarkTheme, setIsDarkTheme } = useThemeContext();
  const { data } = useSession();
  return (
    <div className="sticky top-0 z-10 flex w-full items-center justify-between gap-8 bg-[#f5f8fa] px-10 py-3 font-bold text-[#797C8F] shadow-md transition-all duration-300 dark:border-b dark:border-dashed dark:border-gray-700 dark:bg-[#151521]">
      <h1 className="text-xl transition-all duration-300 dark:text-gray-300">
        Add Product Form
      </h1>

      <div className="flex items-center gap-4">
        <button onClick={() => setIsDarkTheme(!isDarkTheme)}>
          <BsSun
            className={`scale-75 transition-all duration-1000 ${
              isDarkTheme ? "h-10 w-10" : "h-0 w-0"
            } `}
          />
          <BsCloudMoon
            className={`scale-75 transition-all duration-1000 ${
              !isDarkTheme ? "h-10 w-10" : "h-0 w-0"
            } `}
          />
        </button>
        <Image
          className="rounded-full"
          src={data?.user.image as string}
          height={45}
          width={45}
          alt="profile"
        />
      </div>
    </div>
  );
};

export default TopBar;
