import * as z from "zod"
import * as imports from "../null"
import { CompleteProduct, RelatedProductModel } from "./index"

export const VariantOptionModel = z.object({
  id: z.string(),
  name: z.string(),
  values: z.string(),
  productId: z.string().nullish(),
})

export interface CompleteVariantOption extends z.infer<typeof VariantOptionModel> {
  Product?: CompleteProduct | null
}

/**
 * RelatedVariantOptionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedVariantOptionModel: z.ZodSchema<CompleteVariantOption> = z.lazy(() => VariantOptionModel.extend({
  Product: RelatedProductModel.nullish(),
}))
