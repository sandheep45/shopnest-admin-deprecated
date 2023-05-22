import { z } from "zod";
import { CustomerReviewCreateManyInputObjectSchema } from "./objects/CustomerReviewCreateManyInput.schema";

export const CustomerReviewCreateManySchema = z.object({
  data: z.union([
    CustomerReviewCreateManyInputObjectSchema,
    z.array(CustomerReviewCreateManyInputObjectSchema),
  ]),
});
