import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { ImageOrderByCompositeAggregateInputObjectSchema } from "./ImageOrderByCompositeAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MediaOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    image: z
      .lazy(() => ImageOrderByCompositeAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const MediaOrderByWithRelationInputObjectSchema = Schema;
