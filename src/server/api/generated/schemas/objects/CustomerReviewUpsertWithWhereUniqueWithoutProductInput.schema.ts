import { z } from "zod";
import { CustomerReviewWhereUniqueInputObjectSchema } from "./CustomerReviewWhereUniqueInput.schema";
import { CustomerReviewUpdateWithoutProductInputObjectSchema } from "./CustomerReviewUpdateWithoutProductInput.schema";
import { CustomerReviewUncheckedUpdateWithoutProductInputObjectSchema } from "./CustomerReviewUncheckedUpdateWithoutProductInput.schema";
import { CustomerReviewCreateWithoutProductInputObjectSchema } from "./CustomerReviewCreateWithoutProductInput.schema";
import { CustomerReviewUncheckedCreateWithoutProductInputObjectSchema } from "./CustomerReviewUncheckedCreateWithoutProductInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerReviewUpsertWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => CustomerReviewWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => CustomerReviewUpdateWithoutProductInputObjectSchema),
        z.lazy(
          () => CustomerReviewUncheckedUpdateWithoutProductInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(() => CustomerReviewCreateWithoutProductInputObjectSchema),
        z.lazy(
          () => CustomerReviewUncheckedCreateWithoutProductInputObjectSchema
        ),
      ]),
    })
    .strict();

export const CustomerReviewUpsertWithWhereUniqueWithoutProductInputObjectSchema =
  Schema;
