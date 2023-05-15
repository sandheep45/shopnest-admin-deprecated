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
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.category.findMany({
          take: input?.limit,
          skip: input?.offset,
          include: {
            Product: true,
          },
        });
      } catch (error) {
        console.log(error, "getAllCategory");
      }
    }),

  getAllCategoryNameAndId: protectedProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.category.findMany({
        select: {
          id: true,
          name: true,
        },
      });
    } catch (error) {
      console.log(error, "getAllCategoryNameAndId");
    }
  }),
});
