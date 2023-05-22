import { z } from "zod";
import { CustomerReviewWhereUniqueInputObjectSchema } from "./CustomerReviewWhereUniqueInput.schema";
import { CustomerReviewCreateWithoutProductInputObjectSchema } from "./CustomerReviewCreateWithoutProductInput.schema";
import { CustomerReviewUncheckedCreateWithoutProductInputObjectSchema } from "./CustomerReviewUncheckedCreateWithoutProductInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerReviewCreateOrConnectWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => CustomerReviewWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => CustomerReviewCreateWithoutProductInputObjectSchema),
        z.lazy(
          () => CustomerReviewUncheckedCreateWithoutProductInputObjectSchema
        ),
      ]),
    })
    .strict();

export const CustomerReviewCreateOrConnectWithoutProductInputObjectSchema =
  Schema;
