import Card from "@src/components/common/Card";
import { useThemeContext } from "@src/context/ThemeContextProvider";
import Image from "next/image";
import React from "react";
import { CiEdit } from "react-icons/ci";

const ThumbnailCard = () => {
  const { isDarkTheme } = useThemeContext();
  return (
    <Card className="flex-col gap-6 p-7">
      <h3 className="text-2xl font-semibold">Thumbnail</h3>
      <div className="relative mx-auto w-fit">
        <button className="absolute -right-4 -top-4 rounded-full bg-gray-100 p-3 text-gray-900 shadow-md dark:bg-gray-700 dark:text-gray-300">
          <CiEdit className="scale-125 " />
        </button>
        <Image
          className="mx-auto rounded-md shadow-2xl"
          src={`${
            isDarkTheme ? "/svg/blank-image-dark.svg" : "/svg/blank-image.svg"
          }`}
          alt="upload-thumbnail"
          height={150}
          width={150}
        />
      </div>
      <span className="px-2 text-center text-sm dark:text-gray-500">
        Set the product thumbnail image. Only *.png, *.jpg and *.jpeg image
        files are accepted
      </span>
    </Card>
  );
};

export default ThumbnailCard;
