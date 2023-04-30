import { useThemeContext } from "react-aria /context/ThemeContextProvider";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { isDarkTheme } = useThemeContext();
  return (
    <div className={` ${isDarkTheme ? "dark" : ""}`}>
      <div className="flex ">
        <Sidebar />
        <div className="flex-1 max-h-screen overflow-y-auto">
          <TopBar />
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
