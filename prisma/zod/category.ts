import * as z from "zod";
import { Status } from "@prisma/client";
import {
  type CompleteImage,
  RelatedImageModel,
  type CompleteProduct,
  RelatedProductModel,
  type CompleteMetaData,
  RelatedMetaDataModel,
} from "./index";

export const CategoryModel = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  status: z.nativeEnum(Status),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export interface CompleteCategory extends z.infer<typeof CategoryModel> {
  image: CompleteImage;
  Product: CompleteProduct[];
  MetaData: CompleteMetaData[];
}

/**
 * RelatedCategoryModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCategoryModel: z.ZodSchema<CompleteCategory> = z.lazy(() =>
  CategoryModel.extend({
    image: RelatedImageModel,
    Product: RelatedProductModel.array(),
    MetaData: RelatedMetaDataModel.array(),
  })
);
