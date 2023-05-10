import { api } from "@src/utils/api";

interface IUseGetAllCategories {
  limit: number;
  offset: number;
}

const useGetAllCategories = ({ limit, offset }: IUseGetAllCategories) => {
  const allCategories = api.category.getAllCategory.useQuery(
    {
      limit,
      offset,
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      staleTime: 1000 * 20, // 20 seconds
    }
  );
  return allCategories;
};

export default useGetAllCategories;
