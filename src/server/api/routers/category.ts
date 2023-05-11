import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const categoryRouter = createTRPCRouter({
  getAllCategory: protectedProcedure
    .input(
      z
        .object({
          limit: z.number().optional(),
          offset: z.number().optional(),
        })
        .optional()
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.category.findMany({
        take: input?.limit,
        skip: input?.offset,
        include: {
          Product: true,
        },
      });
    }),

  getAllCategoryNameAndId: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });
  }),
});
