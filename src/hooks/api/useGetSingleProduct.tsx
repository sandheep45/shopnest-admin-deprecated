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
    }
  );
  return reviewOfSingleProduct;
};

export default useGetReviewOfSingleProduct;
