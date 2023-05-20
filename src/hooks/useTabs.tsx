import React, { useState } from "react";

export interface ITabComponentProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  isCurrentTab?: boolean;
  tab: string;
}

type UseTabsProps = {
  tabs: string[];
  TabComponent: React.FC<ITabComponentProps>;
};

type UseTabs = ({
  TabComponent,
  tabs,
}: UseTabsProps) => [
  React.FC,
  number,
  React.Dispatch<React.SetStateAction<number>>
];

const useTabs: UseTabs = ({ TabComponent, tabs }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const Tabs: React.FC = () => {
    return (
      <div className="flex gap-5">
        {tabs.map((tab, index) => (
          <TabComponent
            tab={tab}
            onClick={() => setCurrentTabIndex(index)}
            isCurrentTab={currentTabIndex === index}
            key={tab}
          />
        ))}
      </div>
    );
  };

  return [Tabs, currentTabIndex, setCurrentTabIndex];
};

export default useTabs;
