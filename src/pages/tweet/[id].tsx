import { Box, Heading } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import React from "react";
import { EditDeleteTweetButtons } from "../../components/EditDeleteTweetButtons";
import { Layout } from "../../components/Layout";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { useGetTweetFromUrl } from "../../utils/useGetTweetFromUrl";

const Tweet = ({}) => {
  const [{ data, error, fetching }] = useGetTweetFromUrl();
  // const [, createComment] = useCreateCommentMutation();
  // const [comment, setComment] = useState("");

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
      {/* {data.tweet.commentCount ? (
        <Box mt={8}>
          <Heading size="lg">Comments</Heading>
          {data.tweet.comments.map((com) => (
            <Box key={com.id} my={3}>
              <Flex justifyContent="space-between">
                <Heading size="sm">{com.user.username}</Heading>
              </Flex>
              <Text>{com.comment}</Text>
              {com.childComments?.map((ch) => (
                <Box key={ch.id} ml={8}>
                  <Flex justifyContent="space-between">
                    <Heading size="sm">{ch.user.username}</Heading>
                  </Flex>
                  <Text>{ch.comment}</Text>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      ) : (
        <div>no comments</div>
      )} */}

      <div></div>

      {/* <Formik
        initialValues={{
          comment: "",
          tweetId: data.tweet.id,
        }}
        onSubmit={async (values) => {
          const response = await createComment(values);

          const { error } = await createComment(values);
          if (!error) {
            return <div>commented</div>;
          }
        }}
      >
        <Input></Input>
      </Formik> */}
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Tweet);

/*
Argument of type '{ input: { comment: string; tweetId: number; parentId: number; }; }' 
is not assignable to parameter of type 'Exact<{ tweetId: number; comment: 
  string; parentCommentId?: Maybe<number> | undefined; }>'.
  Object literal may only specify known properties, and 'input' 
  does not exist in type 'Exact<{ tweetId: number; 
    comment: string; parentCommentId?: Maybe<number> | undefined; }>'.
*/
