import { useThemeContext } from "react-aria /context/ThemeContextProvider";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { isDarkTheme } = useThemeContext();
  return (
    <div className={`${isDarkTheme ? "dark" : ""}`}>
      <div
        className={`flex min-h-screen items-center justify-center dark:bg-black dark:text-white`}
      >
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
