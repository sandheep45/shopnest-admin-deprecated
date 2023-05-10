import Button from "@src/components/common/Button";
import Card from "@src/components/common/Card";
import { useThemeContext } from "@src/context/ThemeContextProvider";
import Image from "next/image";
import React from "react";
import { CiEdit } from "react-icons/ci";
import { useFormContext } from "react-hook-form";

const ThumbnailCard = () => {
  const { isDarkTheme } = useThemeContext();
  const { register } = useFormContext();

  return (
    <Card className="flex-col gap-6 p-7">
      <h2 className="text-2xl font-semibold">Thumbnail</h2>
      <div className="relative mx-auto w-fit">
        <Button
          aria-label="Edit Thumbnail"
          className="absolute -right-4 -top-4 cursor-default rounded-full bg-gray-100 p-3 text-gray-900 shadow-md dark:bg-gray-700 dark:text-gray-300"
        >
          <label className="cursor-pointer" htmlFor="file">
            <CiEdit className="scale-125 " />
          </label>
        </Button>
        <input
          id="file"
          {...register("image")}
          accept="image/png, image/jpeg"
          type="file"
          className="hidden"
        />
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
