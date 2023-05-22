import { z } from "zod";
import { CategoryCreateWithoutProductInputObjectSchema } from "./CategoryCreateWithoutProductInput.schema";
import { CategoryUncheckedCreateWithoutProductInputObjectSchema } from "./CategoryUncheckedCreateWithoutProductInput.schema";
import { CategoryCreateOrConnectWithoutProductInputObjectSchema } from "./CategoryCreateOrConnectWithoutProductInput.schema";
import { CategoryWhereUniqueInputObjectSchema } from "./CategoryWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CategoryCreateNestedOneWithoutProductInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => CategoryCreateWithoutProductInputObjectSchema),
        z.lazy(() => CategoryUncheckedCreateWithoutProductInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => CategoryCreateOrConnectWithoutProductInputObjectSchema)
      .optional(),
    connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const CategoryCreateNestedOneWithoutProductInputObjectSchema = Schema;
