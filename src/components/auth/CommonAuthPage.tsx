import Image from "next/image";
import React from "react";

interface ICommonAuthPageProps {
  children?: React.ReactNode;
}

const CommonAuthPage: React.FC<ICommonAuthPageProps> = ({ children }) => {
  return (
    <div className="h-screen w-full bg-[url('/images/auth-bg-image.png')] bg-cover">
      {/* below div is for theme purpose only */}
      <div className="flex h-full w-full items-center justify-center bg-[rgba(227,230,237,.5)] py-7 dark:bg-[rgba(20,24,36,.9)]">
        {/* Auth Box container */}
        <div className="max-xl grid h-full w-[90%] gap-x-3 rounded-lg border border-gray-300 bg-white p-5 md:w-[85%] lg:w-[65%] lg:grid-cols-5">
          {/* Left Section */}
          <div className="hidden flex-col justify-between rounded-md bg-[#eff2f6] bg-[url('/images/img1.png')] bg-bottom bg-no-repeat px-10 py-12 lg:col-span-2 lg:flex">
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold">ShopNest Authentication</h2>
              <p className="text-gray-500">
                Create or Access your ShopNest admin account to easily manage
                your e-commerce store, products, orders, and customers.
              </p>
              <ul className="list-inside text-gray-600">
                <li className="">✅ Manage your store</li>
                <li className="">✅ Manage your products</li>
                <li className="">✅ Manage your orders</li>
              </ul>
            </div>

            {/* for dark mode */}
            <Image
              height={500}
              width={500}
              className="hidden dark:block"
              src="/images/auth-dark.png"
              alt="hero"
            />
            {/* for light mode */}
            <Image
              height={500}
              width={500}
              className="block dark:hidden"
              src="/images/auth.png"
              alt="hero"
            />
          </div>

          {/* Right Section */}
          <div className="flex items-center justify-center lg:col-span-3">
            <div className="flex w-[90%] flex-col items-center justify-center gap-10 md:w-[55%]">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonAuthPage;
