import { Box, Heading } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import React from "react";
import { EditDeleteTweetButtons } from "../../components/EditDeleteTweetButtons";
import { Layout } from "../../components/Layout";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { useGetTweetFromUrl } from "../../utils/useGetTweetFromUrl";

const Tweet = ({}) => {
  const [{ data, error, fetching }] = useGetTweetFromUrl();

  if (fetching) {
    return (
      <Layout>
        <div>loading...</div>
      </Layout>
    );
  }
  if (error) {
  }

  if (!data?.tweet) {
    return (
      <Layout>
        <Box>could not find tweet</Box>
      </Layout>
    );
  }

  return (
    <Layout>
      <Heading mb={4}>{data.tweet.title}</Heading>
      <Box mb={4}> {data.tweet.text}</Box>
      <EditDeleteTweetButtons
        id={data.tweet.id}
        creatorId={data.tweet.creator.id}
      />
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Tweet);
