import Image from "next/image";
import React from "react";
import CommonAuthPage from "react-aria /components/auth/CommonAuthPage";
import { BsFacebook, BsFillPersonFill, BsKeyFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const Auth = () => {
  return (
    <CommonAuthPage>
      {/* Logo and heading */}
      <div className="flex w-full flex-col items-center gap-3">
        <Image src={"/images/logo.png"} alt="logo" height={60} width={60} />

        <div className="flex w-full flex-col items-center">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <p className="text-gray-500">Get access to your account</p>
        </div>
      </div>

      {/* Auth part */}
      <div className="flex w-full flex-col gap-4">
        {/* oauth buttons */}
        <div className="flex w-full flex-col gap-3">
          <button className="flex items-center justify-center gap-2 rounded-sm border border-gray-300 bg-gray-100 py-1.5 text-sm font-medium transition-all duration-500 hover:bg-gray-200">
            <FcGoogle className="" /> Sign in with Google
          </button>
          <button className="flex items-center justify-center gap-2 rounded-sm border border-gray-300 bg-gray-100 py-1.5 text-sm font-medium transition-all duration-500 hover:bg-gray-200">
            <BsFacebook className="" /> Sign in with Facebook
          </button>
        </div>

        {/* or */}
        <div className="flex w-full items-center gap-3">
          <div className="flex-1 border-b border-gray-300" />
          <span className="font-semibold text-gray-500">or use email</span>
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

            <button className="text-sm text-blue-400">Forgot Passowrd?</button>
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
    </CommonAuthPage>
  );
};

export default Auth;
