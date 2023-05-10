import type { Prisma } from "@prisma/client";

export const initialImageState: Prisma.ImageCreateInput = {
  alt: "",
  url: "",
  height: 0,
  width: 0,
};

export const initialProductState: Prisma.ProductCreateInput = {
  name: "",
  description: "",
  image: initialImageState,
  price: 0,
  tags: [],
};

export const initialMediaState: Prisma.MediaCreateInput = {
  image: initialImageState,
};

export const initialMetaDAtaState: Prisma.MetaDataCreateInput = {
  title: "",
  description: "",
  keywords: [],
};

export const intialQuantityState: Prisma.QuantityCreateInput = {
  inWareHouse: 0,
  onSelf: 0,
};

export const initialVariantState: Prisma.VariantCreateInput = {
  name: "",
  price: 0,
  barcode: "",
  description: "",
  image: initialImageState,
  quantity: intialQuantityState,
  sku: "",
};

export const initialCategoryState: Prisma.CategoryCreateInput = {
  name: "",
  description: "",
  image: initialImageState,
};

export const initialCustomerReviewState: Prisma.CustomerReviewCreateInput = {
  name: "",
  comment: "",
  email: "",
  rating: 0,
};
