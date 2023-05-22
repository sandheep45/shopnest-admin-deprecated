import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema";
import { DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema";
import { EnumRoleFilterObjectSchema } from "./EnumRoleFilter.schema";
import { RoleSchema } from "../enums/Role.schema";
import { AccountListRelationFilterObjectSchema } from "./AccountListRelationFilter.schema";
import { SessionListRelationFilterObjectSchema } from "./SessionListRelationFilter.schema";
import { CustomerReviewListRelationFilterObjectSchema } from "./CustomerReviewListRelationFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    email: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    username: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    emailVerified: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    role: z
      .union([
        z.lazy(() => EnumRoleFilterObjectSchema),
        z.lazy(() => RoleSchema),
      ])
      .optional(),
    image: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    accounts: z.lazy(() => AccountListRelationFilterObjectSchema).optional(),
    sessions: z.lazy(() => SessionListRelationFilterObjectSchema).optional(),
    CustomerReview: z
      .lazy(() => CustomerReviewListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const UserWhereInputObjectSchema = Schema;
