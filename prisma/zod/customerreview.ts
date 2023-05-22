import * as z from "zod";
import {
  type CompleteUser,
  RelatedUserModel,
  type CompleteProduct,
  RelatedProductModel,
} from "./index";

export const CustomerReviewModel = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  rating: z.number().int(),
  comment: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.string(),
  productId: z.string(),
});

export interface CompleteCustomerReview
  extends z.infer<typeof CustomerReviewModel> {
  customer: CompleteUser;
  product: CompleteProduct;
}

/**
 * RelatedCustomerReviewModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCustomerReviewModel: z.ZodSchema<CompleteCustomerReview> =
  z.lazy(() =>
    CustomerReviewModel.extend({
      customer: RelatedUserModel,
      product: RelatedProductModel,
    })
  );
