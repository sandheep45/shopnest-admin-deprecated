import { t, protectedProcedure } from "./helpers/createRouter";
import { CategoryAggregateSchema } from "../schemas/aggregateCategory.schema";
import { CategoryCreateManySchema } from "../schemas/createManyCategory.schema";
import { CategoryCreateOneSchema } from "../schemas/createOneCategory.schema";
import { CategoryDeleteManySchema } from "../schemas/deleteManyCategory.schema";
import { CategoryDeleteOneSchema } from "../schemas/deleteOneCategory.schema";
import { CategoryFindFirstSchema } from "../schemas/findFirstCategory.schema";
import { CategoryFindManySchema } from "../schemas/findManyCategory.schema";
import { CategoryFindUniqueSchema } from "../schemas/findUniqueCategory.schema";
import { CategoryGroupBySchema } from "../schemas/groupByCategory.schema";
import { CategoryUpdateManySchema } from "../schemas/updateManyCategory.schema";
import { CategoryUpdateOneSchema } from "../schemas/updateOneCategory.schema";
import { CategoryUpsertSchema } from "../schemas/upsertOneCategory.schema";

export const categoriesRouter = t.router({
  aggregateCategory: protectedProcedure
    .input(CategoryAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateCategory = await ctx.prisma.category.aggregate(input);
      return aggregateCategory;
    }),
  createManyCategory: protectedProcedure
    .input(CategoryCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyCategory = await ctx.prisma.category.createMany(input);
      return createManyCategory;
    }),
  createOneCategory: protectedProcedure
    .input(CategoryCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneCategory = await ctx.prisma.category.create(input);
      return createOneCategory;
    }),
  deleteManyCategory: protectedProcedure
    .input(CategoryDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyCategory = await ctx.prisma.category.deleteMany(input);
      return deleteManyCategory;
    }),
  deleteOneCategory: protectedProcedure
    .input(CategoryDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneCategory = await ctx.prisma.category.delete(input);
      return deleteOneCategory;
    }),
  findFirstCategory: protectedProcedure
    .input(CategoryFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstCategory = await ctx.prisma.category.findFirst(input);
      return findFirstCategory;
    }),
  findFirstCategoryOrThrow: protectedProcedure
    .input(CategoryFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstCategoryOrThrow =
        await ctx.prisma.category.findFirstOrThrow(input);
      return findFirstCategoryOrThrow;
    }),
  findManyCategory: protectedProcedure
    .input(CategoryFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyCategory = await ctx.prisma.category.findMany(input);
      return findManyCategory;
    }),
  findUniqueCategory: protectedProcedure
    .input(CategoryFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueCategory = await ctx.prisma.category.findUnique(input);
      return findUniqueCategory;
    }),
  findUniqueCategoryOrThrow: protectedProcedure
    .input(CategoryFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueCategoryOrThrow =
        await ctx.prisma.category.findUniqueOrThrow(input);
      return findUniqueCategoryOrThrow;
    }),
  groupByCategory: protectedProcedure
    .input(CategoryGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByCategory = await ctx.prisma.category.groupBy({
        where: input.where,
        orderBy: input.orderBy,
        by: input.by,
        having: input.having,
        take: input.take,
        skip: input.skip,
      });
      return groupByCategory;
    }),
  updateManyCategory: protectedProcedure
    .input(CategoryUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyCategory = await ctx.prisma.category.updateMany(input);
      return updateManyCategory;
    }),
  updateOneCategory: protectedProcedure
    .input(CategoryUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneCategory = await ctx.prisma.category.update(input);
      return updateOneCategory;
    }),
  upsertOneCategory: protectedProcedure
    .input(CategoryUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneCategory = await ctx.prisma.category.upsert(input);
      return upsertOneCategory;
    }),
});
