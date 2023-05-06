import { api } from "@src/utils/api";

interface IUseGetAllProduct {
  limit: number;
  offset: number;
}

const useGetAllProduct = ({ limit, offset }: IUseGetAllProduct) => {
  const allProducts = api.product.getAllProducts.useQuery(
    {
      limit,
      offset,
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    }
  );
  return allProducts;
};

export default useGetAllProduct;
