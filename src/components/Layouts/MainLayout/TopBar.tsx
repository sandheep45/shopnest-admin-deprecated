import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { useThemeContext } from "@src/context/ThemeContextProvider";
import { BsCloudMoon, BsSun } from "react-icons/bs";
import ToggleButton from "@src/components/common/ToggleButton";
const TopBar = () => {
  const { isDarkTheme, setIsDarkTheme } = useThemeContext();
  const { data } = useSession();

  const toggleTheme = () => {
    localStorage.setItem("isDarkTheme", JSON.stringify(!isDarkTheme));
    setIsDarkTheme((currentValue) => !currentValue);
  };

  return (
    <div className="sticky top-0 z-10 flex w-full items-center justify-between gap-8 bg-[#f5f8fa] px-10 py-3 font-bold text-[#797C8F] shadow-md transition-all duration-300 dark:border-b dark:border-dashed dark:border-gray-700 dark:bg-[#1E1E2D]">
      <h1 className="text-xl transition-all duration-300 dark:text-gray-300">
        Add Product Form
      </h1>

      <div className="flex items-center gap-4">
        <ToggleButton
          className="outline-none"
          aria-label="Toggle theme"
          onPress={toggleTheme}
        >
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
        </ToggleButton>
        <Image
          className="rounded-full"
          src={(data?.user.image as string) || "/svg/Profile.svg"}
          height={45}
          width={45}
          alt="profile"
        />
      </div>
    </div>
  );
};

export default TopBar;
