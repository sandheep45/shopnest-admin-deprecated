import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ImageOrderByInput> = z
  .object({
    url: z.lazy(() => SortOrderSchema).optional(),
    alt: z.lazy(() => SortOrderSchema).optional(),
    height: z.lazy(() => SortOrderSchema).optional(),
    width: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ImageOrderByInputObjectSchema = Schema;
