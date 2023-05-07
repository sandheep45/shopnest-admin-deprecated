import { api } from "@src/utils/api";

const useGetReviewOfSingleProduct = ({ productId }: { productId: string }) => {
  const reviewOfSingleProduct = api.customerReview.getSingleReview.useQuery(
    {
      productId,
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      staleTime: 1000 * 20, // 20 seconds
    }
  );
  return reviewOfSingleProduct;
};

export default useGetReviewOfSingleProduct;
