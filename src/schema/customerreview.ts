import * as z from "zod";
import {
  type CompleteUser,
  RelatedUserModel,
  type ReadCompleteProduct,
  ReadRelatedProductModel,
} from "./index";

export const CustomerReviewModel = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  rating: z.number().int(),
  comment: z.string(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  userId: z.string().nullish(),
  productId: z.string().nullish(),
});

export interface CompleteCustomerReview
  extends z.infer<typeof CustomerReviewModel> {
  customer?: CompleteUser | null;
  product?: ReadCompleteProduct | null;
}

/**
 * RelatedCustomerReviewModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCustomerReviewModel: z.ZodSchema<CompleteCustomerReview> =
  z.lazy(() =>
    CustomerReviewModel.extend({
      customer: RelatedUserModel.nullish(),
      product: ReadRelatedProductModel.nullish(),
    })
  );
