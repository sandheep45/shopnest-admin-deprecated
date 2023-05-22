import { z } from "zod";
import { CategoryWhereUniqueInputObjectSchema } from "./CategoryWhereUniqueInput.schema";
import { CategoryCreateWithoutProductInputObjectSchema } from "./CategoryCreateWithoutProductInput.schema";
import { CategoryUncheckedCreateWithoutProductInputObjectSchema } from "./CategoryUncheckedCreateWithoutProductInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutProductInput> = z
  .object({
    where: z.lazy(() => CategoryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CategoryCreateWithoutProductInputObjectSchema),
      z.lazy(() => CategoryUncheckedCreateWithoutProductInputObjectSchema),
    ]),
  })
  .strict();

export const CategoryCreateOrConnectWithoutProductInputObjectSchema = Schema;
