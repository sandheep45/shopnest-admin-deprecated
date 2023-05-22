import { z } from "zod";
import { CustomerReviewUpdateInputObjectSchema } from "./objects/CustomerReviewUpdateInput.schema";
import { CustomerReviewUncheckedUpdateInputObjectSchema } from "./objects/CustomerReviewUncheckedUpdateInput.schema";
import { CustomerReviewWhereUniqueInputObjectSchema } from "./objects/CustomerReviewWhereUniqueInput.schema";

export const CustomerReviewUpdateOneSchema = z.object({
  data: z.union([
    CustomerReviewUpdateInputObjectSchema,
    CustomerReviewUncheckedUpdateInputObjectSchema,
  ]),
  where: CustomerReviewWhereUniqueInputObjectSchema,
});
