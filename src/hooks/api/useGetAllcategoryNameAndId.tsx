import { api } from "@src/utils/api";

const useGetAllcategoryNameAndId = () => {
  //set refetchOnWindowFocus: false,
  //   refetchOnMount: false,
  //   refetchOnReconnect: false,
  //   staleTime: 1000 * 20  values for the query
  const allCategories = api.category.getAllCategoryNameAndId.useQuery(
    undefined,
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      staleTime: 1000 * 20, // 20 seconds
    }
  );

  return allCategories;
};

export default useGetAllcategoryNameAndId;
