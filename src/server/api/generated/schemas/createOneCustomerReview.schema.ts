import { z } from "zod";
import { CustomerReviewCreateInputObjectSchema } from "./objects/CustomerReviewCreateInput.schema";
import { CustomerReviewUncheckedCreateInputObjectSchema } from "./objects/CustomerReviewUncheckedCreateInput.schema";

export const CustomerReviewCreateOneSchema = z.object({
  data: z.union([
    CustomerReviewCreateInputObjectSchema,
    CustomerReviewUncheckedCreateInputObjectSchema,
  ]),
});
