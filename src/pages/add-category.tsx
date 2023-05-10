import Head from "next/head";
import React from "react";

import { MdOutlineFilterAlt } from 'react-icons/md'
import { FaImages } from 'react-icons/fa'
import { BsPencilFill } from 'react-icons/bs'

import { useForm } from "react-hook-form";

const AddCategory = () => {
<<<<<<< HEAD


  return (
    <div className="flex flex-col h-full bg-[#F4F6F9]">
      <div className="flex justify-between py-4 px-6">
        <span className="flex flex-col">
          <span className="font-bold text-lg">
            Add Category
          </span>
          <span
            className="text-[#ACA9B7] text-sm"
          >Home - eCommerece - catalog</span>
        </span>
        <span className="flex items-center gap-4">
          <button
            className="flex  items-center justify-between bg-white rounded-md px-6 py-1.5 "
          >
            <MdOutlineFilterAlt />
            filter</button>
          <button
            className="bg-[#009EF7] rounded-md px-3 py-1.5 text-white font-bold"
          >create</button>
        </span>
      </div>
      <div className="px-10 py-2">
        <div
          className="bg-white h-[20rem] w-72 rounded-lg flex flex-col items-center justify-center"
        >
          <span className="w-full p-3 font-bold text-xl">
            Thumbnail
          </span>
          <span className="relative h-36 w-36 bg-white shadow-lg rounded-md flex flex-col items-center justify-center">
            <span className="rounded-full flex items-center justify-center bg-white shadow-md h-6 w-6 absolute top-[-0.7rem] right-[-0.7rem]">
              <BsPencilFill color="#A1A5B7" />
            </span>
            <span className="h-20 w-20 rounded-md flex items-center justify-center">
              <FaImages size={100} color="#DCE5F1" />
            </span>
          </span>
          <span
            className="text-sm p-4 text-center text-[#BEB5BD]"
          >set the category thumbnail image. Only *.png, *.jpg and *.jpej image files are accepted</span>
        </div>
        <div>
          <span>
            general
          </span>
        </div>
        <div>status</div>
        <div>store template</div>
        <div>meta option</div>
        <div>automation</div>
      </div>
    </div>
=======
  return (
    <>
      <Head>
        <title>Add Categories page</title>
        <meta name="description" content="Add Products to ShopNest database" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>AddCategory</div>;
    </>
>>>>>>> sandheep
  );
};

export default AddCategory;
