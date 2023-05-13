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
      try {
        return ctx.prisma.category.findMany({
          take: input?.limit,
          skip: input?.offset,
          include: {
            Product: true,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),

  getAllCategoryNameAndId: protectedProcedure.query(({ ctx }) => {
    try {
      return ctx.prisma.category.findMany({
        select: {
          id: true,
          name: true,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }),
});
