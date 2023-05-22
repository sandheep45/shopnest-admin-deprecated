import { z } from "zod";
import { CustomerReviewOrderByWithRelationInputObjectSchema } from "./objects/CustomerReviewOrderByWithRelationInput.schema";
import { CustomerReviewWhereInputObjectSchema } from "./objects/CustomerReviewWhereInput.schema";
import { CustomerReviewWhereUniqueInputObjectSchema } from "./objects/CustomerReviewWhereUniqueInput.schema";
import { CustomerReviewScalarFieldEnumSchema } from "./enums/CustomerReviewScalarFieldEnum.schema";

export const CustomerReviewFindFirstSchema = z.object({
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
  distinct: z.array(CustomerReviewScalarFieldEnumSchema).optional(),
});
