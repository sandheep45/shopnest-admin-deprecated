import * as z from "zod";
import { Status } from "@prisma/client";
import {
  type CompleteImage,
  RelatedImageModel,
  type ReadCompleteVariant,
  ReadRelatedVariantModel,
  type CompleteVariantOption,
  RelatedVariantOptionModel,
  type CompleteMetaData,
  RelatedMetaDataModel,
  type CompleteCustomerReview,
  RelatedCustomerReviewModel,
  type CompleteCategory,
  RelatedCategoryModel,
} from "./index";

export const ProductModel = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  tags: z.string(),
  status: z.nativeEnum(Status).nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  categoryId: z.string().nullish(),
});

export interface ReadCompleteProduct extends z.infer<typeof ProductModel> {
  image: CompleteImage;
  Variant: ReadCompleteVariant[];
  VariantOption: CompleteVariantOption[];
  ProductMetaData: CompleteMetaData[];
  CustomerReview: CompleteCustomerReview[];
  Category?: CompleteCategory | null;
}

export const CreateProductModel = ProductModel.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export interface CreateCompleteProduct
  extends z.infer<typeof CreateProductModel> {
  image: CompleteImage;
  Variant: ReadCompleteVariant;
  VariantOption: CompleteVariantOption[];
  ProductMetaData: CompleteMetaData;
  Category?: CompleteCategory | null;
}

/**
 * RelatedProductModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const ReadRelatedProductModel: z.ZodSchema<ReadCompleteProduct> = z.lazy(
  () =>
    ProductModel.extend({
      image: RelatedImageModel,
      Variant: ReadRelatedVariantModel.array(),
      VariantOption: RelatedVariantOptionModel.array(),
      ProductMetaData: RelatedMetaDataModel.array(),
      CustomerReview: RelatedCustomerReviewModel.array(),
      Category: RelatedCategoryModel.nullish(),
    })
);

export const CreateRelatedProductModel: z.ZodSchema<CreateCompleteProduct> =
  z.lazy(() =>
    CreateProductModel.extend({
      image: RelatedImageModel,
      Variant: ReadRelatedVariantModel,
      VariantOption: RelatedVariantOptionModel.array(),
      ProductMetaData: RelatedMetaDataModel,
      CustomerReview: RelatedCustomerReviewModel.array(),
      Category: RelatedCategoryModel.nullish(),
    })
  );

export interface ReadProductInput
  extends z.infer<typeof ReadRelatedProductModel> {}

export interface CreateProductInput
  extends z.infer<typeof CreateRelatedProductModel> {}
