import * as z from "zod"
import * as imports from "../null"
import { CompleteImage, RelatedImageModel, CompleteOptions, RelatedOptionsModel, CompleteQuantity, RelatedQuantityModel, CompleteMetaData, RelatedMetaDataModel, CompleteProduct, RelatedProductModel } from "./index"

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
  createdAt: z.date(),
  updatedAt: z.date(),
  productId: z.string(),
})

export interface CompleteVariant extends z.infer<typeof VariantModel> {
  image: CompleteImage
  options: CompleteOptions[]
  quantity: CompleteQuantity
  MetaData: CompleteMetaData[]
  product: CompleteProduct
}

/**
 * RelatedVariantModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedVariantModel: z.ZodSchema<CompleteVariant> = z.lazy(() => VariantModel.extend({
  image: RelatedImageModel,
  options: RelatedOptionsModel.array(),
  quantity: RelatedQuantityModel,
  MetaData: RelatedMetaDataModel.array(),
  product: RelatedProductModel,
}))
