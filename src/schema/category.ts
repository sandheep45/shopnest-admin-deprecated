import * as z from "zod";
import { Status } from "@prisma/client";
import {
  type CompleteImage,
  RelatedImageModel,
  type ReadCompleteProduct,
  ReadRelatedProductModel,
  type CompleteMetaData,
  RelatedMetaDataModel,
} from "./index";

export const CategoryModel = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  status: z.nativeEnum(Status).nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
});

export interface CompleteCategory extends z.infer<typeof CategoryModel> {
  image: CompleteImage;
  Product: ReadCompleteProduct[];
  CategoryMetaData: CompleteMetaData[];
}

/**
 * RelatedCategoryModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCategoryModel: z.ZodSchema<CompleteCategory> = z.lazy(() =>
  CategoryModel.extend({
    image: RelatedImageModel,
    Product: ReadRelatedProductModel.array(),
    CategoryMetaData: RelatedMetaDataModel.array(),
  })
);
