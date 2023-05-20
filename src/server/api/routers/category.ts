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

  createCategory: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        status: z
          .enum(["DRAFT", "PUBLISHED", "SCHEDULED", "INACTIVE"])
          .optional(),
        image: z.object({
          url: z.string(),
          alt: z.string(),
          height: z.number(),
          width: z.number(),
        }),
        categoryMetaData: z
          .object({
            keywords: z.array(z.string()).optional(),
            description: z.string().optional(),
            title: z.string().optional(),
          })
          .optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.category.create({
          data: {
            name: input.name,
            description: input.description,
            image: {
              url: input.image.url,
              alt: input.image.alt,
              height: input.image.height,
              width: input.image.width,
            },
            status: input.status,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),

  updateCategory: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().optional(),
        description: z.string().optional(),
        categoryId: z.string().optional(),
        image: z.object({
          url: z.string(),
          alt: z.string(),
          height: z.number(),
          width: z.number(),
        }),
        metaData: z.array(z.string()).optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.category.update({
          where: {
            id: input.id,
          },
          data: {
            name: input.name,
            description: input.description,
            image: {
              url: input.image.url,
              alt: input.image.alt,
              height: input.image.height,
              width: input.image.width,
            },
            MetaData: {
              connect: input.metaData?.map((metaDataId) => ({
                id: metaDataId,
              })),
            },
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),

  deleteCategory: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        return await ctx.prisma.category.delete({
          where: {
            id: input.id,
          },
        });
      } catch (err) {
        console.log(err);
      }
    }),
});
