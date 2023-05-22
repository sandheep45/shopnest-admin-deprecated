import { z } from "zod";
import { CustomerReviewWhereInputObjectSchema } from "./objects/CustomerReviewWhereInput.schema";
import { CustomerReviewOrderByWithAggregationInputObjectSchema } from "./objects/CustomerReviewOrderByWithAggregationInput.schema";
import { CustomerReviewScalarWhereWithAggregatesInputObjectSchema } from "./objects/CustomerReviewScalarWhereWithAggregatesInput.schema";
import { CustomerReviewScalarFieldEnumSchema } from "./enums/CustomerReviewScalarFieldEnum.schema";

export const CustomerReviewGroupBySchema = z.object({
  where: CustomerReviewWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      CustomerReviewOrderByWithAggregationInputObjectSchema,
      CustomerReviewOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: CustomerReviewScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(CustomerReviewScalarFieldEnumSchema),
});
