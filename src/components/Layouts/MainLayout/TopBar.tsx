import React from "react";
const topbarItems = [
  {
    name: 'Dashboards',
    link: '/dashboards',
  },
  {
    name: 'Pages',
    link: '/pages',
  },
  {
    name: 'Apps',
    link: '/apps',
  },
  {
    name: 'Layout',
    link: '/Layout',
  },
  {
    name: 'Help',
    link: '/help',
  },
  {
    name: 'Dark Mode',
    link: '/darkmode',
  },
  {
    name: 'User Profile',
    link: '/userProfile',
  },
]
const TopBar = () => {
  const [activeTopBarTab, setActiveTopBarTab] = React.useState('');
  return (
    <div
      className="sticky top-0 shadow-md bg-white w-full flex items-center gap-8 py-5 px-10 font-bold text-[#797C8F]">
      {
        topbarItems.map((item, indx) => (
          <div
            key={indx}
            onClick={() => setActiveTopBarTab(item.link)}
            className={`p-1 cursor-pointer rounded-lg ${activeTopBarTab === item.link ? 'text-[#1FA9F7] bg-[#f9f9f0]' : ''}`}
          >
            <h1 >
              {item.name}
            </h1>
          </div>
        ))
      }
    </div>
  );
};

export default TopBar;
