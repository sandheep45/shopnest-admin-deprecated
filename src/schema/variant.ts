import * as z from "zod";
import {
  type CompleteImage,
  RelatedImageModel,
  type CompleteOptions,
  RelatedOptionsModel,
  type CompleteQuantity,
  RelatedQuantityModel,
  type CompleteMetaData,
  RelatedMetaDataModel,
  type ReadCompleteProduct,
  ReadRelatedProductModel,
} from "./index";

export const VariantModel = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number().int(),
  sku: z.string(),
  taxPercent: z.number().int(),
  barcode: z.string(),
  height: z.number().int(),
  width: z.number().int(),
  length: z.number().int(),
  weight: z.number().int(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  productId: z.string().nullish(),
});

export interface ReadCompleteVariant extends z.infer<typeof VariantModel> {
  image: CompleteImage;
  options: CompleteOptions[];
  quantity: CompleteQuantity;
  VariantMetaData: CompleteMetaData[];
  product?: ReadCompleteProduct | null;
}

export const CreateVariantModel = VariantModel.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export interface CreateCompleteVariant
  extends z.infer<typeof CreateVariantModel> {
  image: CompleteImage;
  options: CompleteOptions[];
  quantity: CompleteQuantity;
  VariantMetaData: CompleteMetaData;
  product?: ReadCompleteProduct | null;
}

/**
 * RelatedVariantModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const ReadRelatedVariantModel: z.ZodSchema<ReadCompleteVariant> = z.lazy(
  () =>
    VariantModel.extend({
      image: RelatedImageModel,
      options: RelatedOptionsModel.array(),
      quantity: RelatedQuantityModel,
      VariantMetaData: RelatedMetaDataModel.array(),
      product: ReadRelatedProductModel.nullish(),
    })
);

export const CreateRelatedVariantModel: z.ZodSchema<CreateCompleteVariant> =
  z.lazy(() =>
    CreateVariantModel.extend({
      image: RelatedImageModel,
      options: RelatedOptionsModel.array(),
      quantity: RelatedQuantityModel,
      VariantMetaData: RelatedMetaDataModel,
      product: ReadRelatedProductModel.nullish(),
    })
  );

export interface ReadVariantInput
  extends z.infer<typeof ReadRelatedVariantModel> {}

export interface CreateVariantInput
  extends z.infer<typeof CreateRelatedVariantModel> {}
