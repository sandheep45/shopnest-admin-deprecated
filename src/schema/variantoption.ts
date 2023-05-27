import * as z from "zod";
import { type ReadCompleteProduct, ReadRelatedProductModel } from "./index";

export const VariantOptionModel = z.object({
  id: z.string().nullish(),
  name: z.string(),
  values: z.string(),
  productId: z.string().nullish(),
});

export interface CompleteVariantOption
  extends z.infer<typeof VariantOptionModel> {
  Product?: ReadCompleteProduct | null;
}

/**
 * RelatedVariantOptionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedVariantOptionModel: z.ZodSchema<CompleteVariantOption> =
  z.lazy(() =>
    VariantOptionModel.extend({
      Product: ReadRelatedProductModel.nullish(),
    })
  );
