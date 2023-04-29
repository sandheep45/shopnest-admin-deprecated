import { useThemeContext } from "react-aria /context/ThemeContextProvider";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { isDarkTheme } = useThemeContext();
  return (
    <div className={`${isDarkTheme ? "dark" : ""}`}>
      <div className="flex min-h-screen">
        <div className="relative">
          <button className="absolute top-3 -right-5 w-fit rounded-md border bg-white p-2">
            <MdKeyboardDoubleArrowRight className="text-2xl" />
          </button>
          <Sidebar />
        </div>
        <div className="flex-1">
          <TopBar />
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
