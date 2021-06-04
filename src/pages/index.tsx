import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import NextLink from "next/link";
import React, { useState } from "react";
import { EditDeleteTweetButtons } from "../components/EditDeleteTweetButtons";
import { Layout } from "../components/Layout";
import { useTweetsQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";

const Index = () => {
  const [variables, setVariables] = useState({
    //setting the paginationt to show an extra 10 tweets each time
    limit: 10,
    cursor: null as null | string,
  });
  const [{ data, error, fetching }] = useTweetsQuery({
    variables,
  });

  if (!fetching && !data) {
    return (
      //logging the error message
      <div>
        <div>you got query failed</div>
        //
        <div>{error?.message}</div>
      </div>
    );
  }
  return (
    <Layout>
      {!data && fetching ? (
        <div>Now Loading.....</div>
      ) : (
        <Stack spacing={8}>
          {data!.tweets.tweets.map((t) =>
            !t ? null : (
              <Flex
                key={t.id}
                p={5}
                shadow="md"
                borderWidth="1px"
                mr={4}
                width="100%"
                borderRadius="5px"
                position="relative"
              >
                <Box>
                  <NextLink href="/tweet/[id]" as={`/tweet/${t.id}`}>
                    <Link>
                      <Heading fontSize="xl">{t.title}</Heading>
                    </Link>
                  </NextLink>
                  <Text>posted by: {t.creator.username}</Text>
                  <Flex align="center">
                    <Text flex={1} mt={4}>
                      {t.textSnippet}
                    </Text>
                    <Box position="absolute" right="20px">
                      <EditDeleteTweetButtons
                        id={t.id}
                        creatorId={t.creator.id}
                      />
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            )
          )}
        </Stack>
      )}
      {data && data.tweets.hasMore ? (
        <Flex>
          <Button
            isLoading={fetching}
            m="auto"
            my={8}
            onClick={() => {
              setVariables({
                limit: variables.limit,
                cursor:
                  data.tweets.tweets[data.tweets.tweets.length - 1].createdAt,
              });
            }}
          >
            load more tweets
          </Button>
        </Flex>
      ) : null}
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
