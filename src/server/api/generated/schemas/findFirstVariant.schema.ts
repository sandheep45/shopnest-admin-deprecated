import { z } from "zod";
import { VariantOrderByWithRelationInputObjectSchema } from "./objects/VariantOrderByWithRelationInput.schema";
import { VariantWhereInputObjectSchema } from "./objects/VariantWhereInput.schema";
import { VariantWhereUniqueInputObjectSchema } from "./objects/VariantWhereUniqueInput.schema";
import { VariantScalarFieldEnumSchema } from "./enums/VariantScalarFieldEnum.schema";

export const VariantFindFirstSchema = z.object({
  orderBy: z
    .union([
      VariantOrderByWithRelationInputObjectSchema,
      VariantOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: VariantWhereInputObjectSchema.optional(),
  cursor: VariantWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(VariantScalarFieldEnumSchema).optional(),
});
