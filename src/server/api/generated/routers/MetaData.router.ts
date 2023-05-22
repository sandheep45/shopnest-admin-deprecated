import { t, protectedProcedure } from "./helpers/createRouter";
import { MetaDataAggregateSchema } from "../schemas/aggregateMetaData.schema";
import { MetaDataCreateManySchema } from "../schemas/createManyMetaData.schema";
import { MetaDataCreateOneSchema } from "../schemas/createOneMetaData.schema";
import { MetaDataDeleteManySchema } from "../schemas/deleteManyMetaData.schema";
import { MetaDataDeleteOneSchema } from "../schemas/deleteOneMetaData.schema";
import { MetaDataFindFirstSchema } from "../schemas/findFirstMetaData.schema";
import { MetaDataFindManySchema } from "../schemas/findManyMetaData.schema";
import { MetaDataFindUniqueSchema } from "../schemas/findUniqueMetaData.schema";
import { MetaDataGroupBySchema } from "../schemas/groupByMetaData.schema";
import { MetaDataUpdateManySchema } from "../schemas/updateManyMetaData.schema";
import { MetaDataUpdateOneSchema } from "../schemas/updateOneMetaData.schema";
import { MetaDataUpsertSchema } from "../schemas/upsertOneMetaData.schema";

export const metadataRouter = t.router({
  aggregateMetaData: protectedProcedure
    .input(MetaDataAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateMetaData = await ctx.prisma.metaData.aggregate(input);
      return aggregateMetaData;
    }),
  createManyMetaData: protectedProcedure
    .input(MetaDataCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyMetaData = await ctx.prisma.metaData.createMany(input);
      return createManyMetaData;
    }),
  createOneMetaData: protectedProcedure
    .input(MetaDataCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneMetaData = await ctx.prisma.metaData.create(input);
      return createOneMetaData;
    }),
  deleteManyMetaData: protectedProcedure
    .input(MetaDataDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyMetaData = await ctx.prisma.metaData.deleteMany(input);
      return deleteManyMetaData;
    }),
  deleteOneMetaData: protectedProcedure
    .input(MetaDataDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneMetaData = await ctx.prisma.metaData.delete(input);
      return deleteOneMetaData;
    }),
  findFirstMetaData: protectedProcedure
    .input(MetaDataFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstMetaData = await ctx.prisma.metaData.findFirst(input);
      return findFirstMetaData;
    }),
  findFirstMetaDataOrThrow: protectedProcedure
    .input(MetaDataFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstMetaDataOrThrow =
        await ctx.prisma.metaData.findFirstOrThrow(input);
      return findFirstMetaDataOrThrow;
    }),
  findManyMetaData: protectedProcedure
    .input(MetaDataFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyMetaData = await ctx.prisma.metaData.findMany(input);
      return findManyMetaData;
    }),
  findUniqueMetaData: protectedProcedure
    .input(MetaDataFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueMetaData = await ctx.prisma.metaData.findUnique(input);
      return findUniqueMetaData;
    }),
  findUniqueMetaDataOrThrow: protectedProcedure
    .input(MetaDataFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueMetaDataOrThrow =
        await ctx.prisma.metaData.findUniqueOrThrow(input);
      return findUniqueMetaDataOrThrow;
    }),
  groupByMetaData: protectedProcedure
    .input(MetaDataGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByMetaData = await ctx.prisma.metaData.groupBy({
        where: input.where,
        orderBy: input.orderBy,
        by: input.by,
        having: input.having,
        take: input.take,
        skip: input.skip,
      });
      return groupByMetaData;
    }),
  updateManyMetaData: protectedProcedure
    .input(MetaDataUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyMetaData = await ctx.prisma.metaData.updateMany(input);
      return updateManyMetaData;
    }),
  updateOneMetaData: protectedProcedure
    .input(MetaDataUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneMetaData = await ctx.prisma.metaData.update(input);
      return updateOneMetaData;
    }),
  upsertOneMetaData: protectedProcedure
    .input(MetaDataUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneMetaData = await ctx.prisma.metaData.upsert(input);
      return upsertOneMetaData;
    }),
});
