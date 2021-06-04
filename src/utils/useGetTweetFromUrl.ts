import { useTweetQuery } from "../generated/graphql";
import { useGetIntId } from "./useGetIntId";

export const useGetTweetFromUrl = () => {
  const intId = useGetIntId();
  return useTweetQuery({
    pause: intId === -1,
    variables: {
      id: intId,
    },
  });
};
