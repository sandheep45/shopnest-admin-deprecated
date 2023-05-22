import { z } from "zod";
import { CustomerReviewOrderByWithRelationInputObjectSchema } from "./objects/CustomerReviewOrderByWithRelationInput.schema";
import { CustomerReviewWhereInputObjectSchema } from "./objects/CustomerReviewWhereInput.schema";
import { CustomerReviewWhereUniqueInputObjectSchema } from "./objects/CustomerReviewWhereUniqueInput.schema";
import { CustomerReviewCountAggregateInputObjectSchema } from "./objects/CustomerReviewCountAggregateInput.schema";
import { CustomerReviewMinAggregateInputObjectSchema } from "./objects/CustomerReviewMinAggregateInput.schema";
import { CustomerReviewMaxAggregateInputObjectSchema } from "./objects/CustomerReviewMaxAggregateInput.schema";
import { CustomerReviewAvgAggregateInputObjectSchema } from "./objects/CustomerReviewAvgAggregateInput.schema";
import { CustomerReviewSumAggregateInputObjectSchema } from "./objects/CustomerReviewSumAggregateInput.schema";

export const CustomerReviewAggregateSchema = z.object({
  orderBy: z
    .union([
      CustomerReviewOrderByWithRelationInputObjectSchema,
      CustomerReviewOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: CustomerReviewWhereInputObjectSchema.optional(),
  cursor: CustomerReviewWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), CustomerReviewCountAggregateInputObjectSchema])
    .optional(),
  _min: CustomerReviewMinAggregateInputObjectSchema.optional(),
  _max: CustomerReviewMaxAggregateInputObjectSchema.optional(),
  _avg: CustomerReviewAvgAggregateInputObjectSchema.optional(),
  _sum: CustomerReviewSumAggregateInputObjectSchema.optional(),
});
