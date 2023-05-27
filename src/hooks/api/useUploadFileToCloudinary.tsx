import { env } from "@src/env.mjs";
import CryptoJS from "crypto-js";
import { useState } from "react";

interface IProps {
  public_id: string;
  contentType: string;
  file: string | undefined;
}

export interface CloudinaryUploadImageResponse {
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: Date;
  tags: any[];
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  folder: string;
  access_mode: string;
  existing: boolean;
  original_filename: string;
}

const useUploadFileToCloudinary = () => {
  const [isImageLoading, setIsImageLoading] = useState(false);
  const uploadImage = async ({ contentType, file, public_id }: IProps) => {
    if (!file) return null;

    const API_KEY = env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
    const SECRET = env.NEXT_PUBLIC_CLOUDINARY_SECRET;
    const CLOUD_NAME = env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const timestamp = ((Date.now() / 1000) | 0).toString();
    const apiKey = API_KEY;
    const apiSecret = SECRET;
    const cloud = CLOUD_NAME;
    const hashString = `public_id=${public_id}&timestamp=${timestamp}${apiSecret}`;
    const signature = CryptoJS.SHA1(hashString).toString();
    const uploadUrl = `https://api.cloudinary.com/v1_1/${cloud}/${contentType}/upload`;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("timestamp", timestamp);
    formData.append("public_id", public_id);
    formData.append("api_key", apiKey);
    formData.append("signature", signature);

    setIsImageLoading(true);

    const response = await fetch(uploadUrl, {
      method: "post",
      body: formData,
    });
    const data = (await response.json()) as CloudinaryUploadImageResponse;
    setIsImageLoading(false);
    return data;
  };
  return {
    isImageLoading,
    uploadImage,
  };
};

export default useUploadFileToCloudinary;
