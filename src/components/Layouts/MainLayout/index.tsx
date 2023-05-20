import { useThemeContext } from "@src/context/ThemeContextProvider";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

interface MainLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { isDarkTheme } = useThemeContext();
  return (
    <div className={` ${isDarkTheme ? "dark" : ""}`}>
      <div className="flex">
        <Sidebar />
        <div className="max-h-screen flex-1 overflow-y-auto bg-[#f5f8fa] dark:bg-[#151521]">
          <TopBar />
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
