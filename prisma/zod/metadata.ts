import * as z from "zod"
import * as imports from "../null"
import { CompleteCategory, RelatedCategoryModel, CompleteProduct, RelatedProductModel, CompleteVariant, RelatedVariantModel } from "./index"

export const MetaDataModel = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  keywords: z.string(),
  categoryId: z.string().nullish(),
  productId: z.string().nullish(),
  variantId: z.string().nullish(),
})

export interface CompleteMetaData extends z.infer<typeof MetaDataModel> {
  Category?: CompleteCategory | null
  Product?: CompleteProduct | null
  Variant?: CompleteVariant | null
}

/**
 * RelatedMetaDataModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedMetaDataModel: z.ZodSchema<CompleteMetaData> = z.lazy(() => MetaDataModel.extend({
  Category: RelatedCategoryModel.nullish(),
  Product: RelatedProductModel.nullish(),
  Variant: RelatedVariantModel.nullish(),
}))
