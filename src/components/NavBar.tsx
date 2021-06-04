import React from "react";
import { Box, Link, Flex, Heading } from "@chakra-ui/layout";
import NextLink from "next/link";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";
import { Button } from "@chakra-ui/button";
import { isServer } from "../utils/isServer";
import { useRouter } from "next/router";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const router = useRouter();
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
  const [{ data, fetching }] = useMeQuery({
    pause: isServer(),
  });

  let body = null;

  // data is loading
  if (fetching) {
    // user not logged in
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href="/login">
          <Link
            textDecoration="none"
            color="#1DA1F2"
            mr={2}
            border="solid 1px #1DA1F2"
            pl={6}
            pr={6}
            borderRadius="10px"
          >
            login
          </Link>
        </NextLink>
        <NextLink href="/register">
          <Link
            textDecoration="none"
            borderRadius="10px"
            pl={6}
            pr={6}
            color="white"
            bg="#1DA1F2"
          >
            register
          </Link>
        </NextLink>
      </>
    );
    // user is logged in
  } else {
    body = (
      <Flex align="center">
        <NextLink href="/create-tweet">
          <Button as={Link} mr={4} color="#1DA1F2" border="solid 1px #1DA1F2">
            make a new tweet
          </Button>
        </NextLink>
        <Box textDecoration="none" color="#1DA1F2" mr={2} fontWeight="bold">
          {data.me.username}
        </Box>
        <Button
          textDecoration="none"
          color="white"
          bg="#1DA1F2"
          padding={2}
          onClick={async () => {
            await logout();
            router.reload();
          }}
          isLoading={logoutFetching}
          variant="link"
        >
          logout
        </Button>
      </Flex>
    );
  }

  return (
    <Flex zIndex={1} position="sticky" top={0} bg="white" p={4}>
      <Flex flex={1} m="auto" maxW={800} align="center">
        <NextLink href="/">
          <Link>
            <Heading color="#1DA1F2">PseudoReddit</Heading>
          </Link>
        </NextLink>

        <Box ml={"auto"}>{body}</Box>
      </Flex>
    </Flex>
  );
};
