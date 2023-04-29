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
