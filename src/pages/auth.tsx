import Image from "next/image";
import React from "react";
import { BsFillPersonFill, BsKeyFill } from "react-icons/bs";

const Auth = () => {
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
              {/* Logo and heading */}
              <div className="flex w-full flex-col items-center gap-3">
                <Image
                  src={"/images/logo.png"}
                  alt="logo"
                  height={60}
                  width={60}
                />

                <div className="flex w-full flex-col items-center">
                  <h1 className="text-3xl font-bold">Sign In</h1>
                  <p className="text-gray-500">Get access to your account</p>
                </div>
              </div>
              {/* Auth part */}
              <div className="flex w-full flex-col gap-4">
                {/* oauth buttons */}
                <div className="flex w-full flex-col gap-3">
                  <button className="rounded-sm border border-gray-300 bg-gray-100 py-1.5 text-sm font-medium transition-all duration-500 hover:bg-gray-200">
                    Sign in with Google
                  </button>
                  <button className="rounded-sm border border-gray-300 bg-gray-100 py-1.5 text-sm font-medium transition-all duration-500 hover:bg-gray-200">
                    Sign in with Facebook
                  </button>
                </div>

                {/* or */}
                <div className="flex w-full items-center gap-3">
                  <div className="flex-1 border-b border-gray-300" />
                  <span className="font-semibold text-gray-500">
                    or use email
                  </span>
                  <div className="flex-1 border-b border-gray-300" />
                </div>

                {/* email and password */}
                <div className="flex w-full flex-col gap-4">
                  <div className="relative flex w-full flex-col gap-1">
                    <label
                      className="px-4 text-xs font-medium text-gray-600"
                      htmlFor="email"
                    >
                      EMAIL ADDRESS
                    </label>
                    <input
                      id="email"
                      placeholder="name@example.com"
                      type="email"
                      className="w-full rounded border border-gray-400 px-8 py-1 shadow-md outline-none placeholder:relative placeholder:bottom-[3px] placeholder:text-sm focus:border-blue-400 focus:shadow-blue-400 focus:ring-1"
                    />
                    <BsFillPersonFill className="absolute bottom-[9px] left-2" />
                  </div>
                  <div className="relative flex w-full flex-col gap-1">
                    <label
                      className="px-4 text-xs font-medium text-gray-600"
                      htmlFor="password"
                    >
                      PASSWORD
                    </label>
                    <input
                      id="password"
                      placeholder="Password"
                      type="password"
                      className="w-full rounded border border-gray-400 px-8 py-1 shadow-md outline-none placeholder:relative placeholder:bottom-[2px] placeholder:text-sm focus:border-blue-400 focus:shadow-blue-400 focus:ring-1"
                    />
                    <BsKeyFill className="absolute bottom-[9px] left-2" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <input
                        className="h-4 w-4"
                        type="checkbox"
                        name=""
                        id="remember-me"
                      />
                      <label className="text-sm" htmlFor="remember-me">
                        Remember Me
                      </label>
                    </span>

                    <button className="text-sm text-blue-400">
                      Forgot Passowrd?
                    </button>
                  </div>
                </div>
              </div>

              {/* button */}
              <div className="flex w-full flex-col gap-1">
                <button className="rounded-md bg-blue-600 py-2 text-sm text-white">
                  Sign In
                </button>
                <button className="bg-white py-2 text-sm font-semibold text-blue-600">
                  Create an Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
