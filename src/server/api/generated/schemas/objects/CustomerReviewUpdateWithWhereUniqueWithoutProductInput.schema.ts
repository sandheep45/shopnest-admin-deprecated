import { z } from "zod";
import { CustomerReviewWhereUniqueInputObjectSchema } from "./CustomerReviewWhereUniqueInput.schema";
import { CustomerReviewUpdateWithoutProductInputObjectSchema } from "./CustomerReviewUpdateWithoutProductInput.schema";
import { CustomerReviewUncheckedUpdateWithoutProductInputObjectSchema } from "./CustomerReviewUncheckedUpdateWithoutProductInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerReviewUpdateWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => CustomerReviewWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => CustomerReviewUpdateWithoutProductInputObjectSchema),
        z.lazy(
          () => CustomerReviewUncheckedUpdateWithoutProductInputObjectSchema
        ),
      ]),
    })
    .strict();

export const CustomerReviewUpdateWithWhereUniqueWithoutProductInputObjectSchema =
  Schema;
