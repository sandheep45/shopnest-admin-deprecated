import * as z from "zod";
import {
  type CompleteCategory,
  RelatedCategoryModel,
  type ReadCompleteProduct,
  ReadRelatedProductModel,
  type ReadCompleteVariant,
  ReadRelatedVariantModel,
} from "./index";

export const MetaDataModel = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  keywords: z.string(),
  categoryId: z.string().nullish(),
  productId: z.string().nullish(),
  variantId: z.string().nullish(),
});

export interface CompleteMetaData extends z.infer<typeof MetaDataModel> {
  Category?: CompleteCategory | null;
  Product?: ReadCompleteProduct | null;
  Variant?: ReadCompleteVariant | null;
}

/**
 * RelatedMetaDataModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedMetaDataModel: z.ZodSchema<CompleteMetaData> = z.lazy(() =>
  MetaDataModel.extend({
    Category: RelatedCategoryModel.nullish(),
    Product: ReadRelatedProductModel.nullish(),
    Variant: ReadRelatedVariantModel.nullish(),
  })
);
