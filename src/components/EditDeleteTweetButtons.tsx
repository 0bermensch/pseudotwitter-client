import React from "react";
import NextLink from "next/link";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { Box, IconButton, Link } from "@chakra-ui/react";
import { useDeleteTweetMutation, useMeQuery } from "../generated/graphql";

// button component where users can edit their tweets or delete it

interface EditDeleteTweetButtonsProps {
  id: number;
  creatorId: number;
}

export const EditDeleteTweetButtons: React.FC<EditDeleteTweetButtonsProps> = ({
  id,
  creatorId,
}) => {
  const [{ data: meData }] = useMeQuery();

  const [, deletePost] = useDeleteTweetMutation();

  if (meData?.me?.id !== creatorId) {
    return null;
  }

  return (
    <Box>
      <NextLink href="/post/edit/[id]" as={`/post/edit/${id}`}>
        <IconButton
          as={Link}
          mr={4}
          aria-label="Edit Post"
          icon={<EditIcon />}
          onClick={() => {}}
        />
      </NextLink>

      <IconButton
        ml="auto"
        aria-label="Delete Post"
        icon={<DeleteIcon />}
        onClick={() => {
          deletePost({ id });
        }}
      />
    </Box>
  );
};
