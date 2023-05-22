import * as z from "zod"
import * as imports from "../null"
import { Status } from "@prisma/client"
import { CompleteImage, RelatedImageModel, CompleteVariant, RelatedVariantModel, CompleteVariantOption, RelatedVariantOptionModel, CompleteMetaData, RelatedMetaDataModel, CompleteCustomerReview, RelatedCustomerReviewModel, CompleteCategory, RelatedCategoryModel } from "./index"

export const ProductModel = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  tags: z.string(),
  taxPercent: z.number().int(),
  status: z.nativeEnum(Status),
  createdAt: z.date(),
  updatedAt: z.date(),
  categoryId: z.string(),
})

export interface CompleteProduct extends z.infer<typeof ProductModel> {
  image: CompleteImage
  Variant: CompleteVariant[]
  option: CompleteVariantOption[]
  MetaData: CompleteMetaData[]
  CustomerReview: CompleteCustomerReview[]
  Category: CompleteCategory
}

/**
 * RelatedProductModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedProductModel: z.ZodSchema<CompleteProduct> = z.lazy(() => ProductModel.extend({
  image: RelatedImageModel,
  Variant: RelatedVariantModel.array(),
  option: RelatedVariantOptionModel.array(),
  MetaData: RelatedMetaDataModel.array(),
  CustomerReview: RelatedCustomerReviewModel.array(),
  Category: RelatedCategoryModel,
}))
